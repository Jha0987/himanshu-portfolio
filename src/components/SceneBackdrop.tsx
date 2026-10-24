"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const vertexShader = `
attribute vec3 aColor;
attribute float aSeed;
uniform float uTime;
uniform float uProgress;
uniform float uScale;
uniform float uDpr;
varying vec3 vColor;
varying float vAlpha;

void main() {
  float p = uProgress;
  // Sinusoidal wave ribbon targets matching reference
  vec3 target = vec3(
    (aSeed - 0.5) * 2.6,
    sin(aSeed * 25.1327) * 0.065 + (floor(position.x * 4.0 + 2.0) - 2.0) * 0.2,
    sin(aSeed * 18.0) * 0.12
  );
  vec3 pos = mix(position, target, p);
  float edge = smoothstep(0.15, 0.5, abs(position.x));
  pos.x += sin(uTime * 0.35 + aSeed * 40.0) * 0.008 * (edge + p);
  pos.z += sin(aSeed * 64.0 + uTime * 0.25) * 0.015;
  
  vec4 mv = modelViewMatrix * vec4(pos * uScale, 1.0);
  gl_Position = projectionMatrix * mv;
  
  // Point size: solid core for facial contours, scales crisply with DPR
  float brightness = dot(aColor, vec3(0.299, 0.587, 0.114));
  gl_PointSize = (1.55 + brightness * 1.25) * uDpr;
  
  // Color: soft studio pearl illumination, transitions to amber gold on scroll
  vColor = mix(aColor * 1.18, vec3(1.0, 0.55, 0.22), p * 0.65);
  vAlpha = (1.0 - p * 0.35) * smoothstep(0.54, 0.28, abs(position.y));
}
`;

const fragmentShader = `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  // Soft studio circular falloff with gentle feathered edge
  float alpha = (1.0 - smoothstep(0.1, 0.5, d)) * vAlpha * 0.95;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vColor, alpha);
}
`;

export default function SceneBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglActive, setWebglActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const fallback = fallbackRef.current;
    if (!canvas || !container || !fallback) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMotionOff = () =>
      mediaQuery.matches ||
      document.documentElement.getAttribute("data-motion") === "off";

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let points: THREE.Points | null = null;
    let material: THREE.ShaderMaterial | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    let pointerX = 0;
    let heroProgress = 0;
    let isDisposed = false;

    // Track hero scroll progress
    const heroTrigger = ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        heroProgress = self.progress;
      },
    });

    let handlePointerMove: ((e: MouseEvent) => void) | null = null;
    let handleResize: (() => void) | null = null;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
      camera.position.set(0, 0, 5.8);

      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uScale: { value: 1 },
          uDpr: { value: renderer.getPixelRatio() },
        },
      });

      handlePointerMove = (e: MouseEvent) => {
        pointerX = e.clientX / window.innerWidth - 0.5;
      };
      window.addEventListener("pointermove", handlePointerMove, { passive: true });

      const loadPoints = () => {
        if (isDisposed || !scene || !material) return;

        try {
          console.log("Sampling points from himanshu-hero.webp...");
          // True 1:1 natural aspect ratio matching source photo
          const sampleW = window.innerWidth < 700 ? 240 : 320;
          const sampleH = sampleW;

          const sampleCanvas = document.createElement("canvas");
          sampleCanvas.width = sampleW;
          sampleCanvas.height = sampleH;
          const ctx = sampleCanvas.getContext("2d");
          if (!ctx) return;

          // Draw image cropped slightly to focus primarily on face, eyes, hair & collar
          ctx.drawImage(img, 0, 0, sampleW, sampleH);
          const imgData = ctx.getImageData(0, 0, sampleW, sampleH).data;

          const positions: number[] = [];
          const colors: number[] = [];
          const seeds: number[] = [];

          for (let y = 0; y < sampleH; y++) {
            const yNorm = y / sampleH;
            // Smooth natural feathering towards the bottom
            const bottomFade = yNorm > 0.65 ? Math.max(0, 1 - Math.pow((yNorm - 0.65) / 0.35, 1.4)) : 1;

            for (let x = 0; x < sampleW; x++) {
              const idx = (y * sampleW + x) * 4;
              const r = imgData[idx];
              const g = imgData[idx + 1];
              const b = imgData[idx + 2];
              const rawA = imgData[idx + 3] / 255;

              if (rawA < 0.12) continue;

              // Compute luminance
              const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              if (lum < 0.04) continue;

              // Studio lighting: sculpt natural facial depth without harsh clipping
              const studioLum = Math.pow(lum, 0.95) * bottomFade;

              // True-to-source studio lighting with subtle warm amber rim fidelity
              const rCol = r / 255;
              const gCol = g / 255;
              const bCol = b / 255;

              positions.push(
                (x / sampleW - 0.5),
                (0.5 - y / sampleH),
                0.035 * (studioLum - 0.4)
              );
              colors.push(rCol, gCol, bCol);
              seeds.push(((127 * x + 311 * y) % 997) / 997);
            }
          }

          if (positions.length > 0) {
            geometry = new THREE.BufferGeometry();
            geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute("aColor", new THREE.Float32BufferAttribute(colors, 3));
            geometry.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));

            points = new THREE.Points(geometry, material);
            scene.add(points);
            console.log("Points added to scene:", positions.length / 3);
            setWebglActive(true);
          }
        } catch (err) {
          console.error("Error creating points:", err);
        }
      };

      // Sample points from portrait photo
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        if (img.naturalWidth > 0) {
          loadPoints();
        }
      };
      img.src = "/images/himanshu-hero.webp";
      if (img.complete && img.naturalWidth > 0) {
        loadPoints();
      }

      const updateSize = () => {
        if (!renderer || !camera || !container) return;
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);

        if (material) {
          material.uniforms.uDpr.value = renderer.getPixelRatio();
        }
      };

      handleResize = updateSize;
      window.addEventListener("resize", handleResize);
      updateSize();

      // Render loop
      const render = () => {
        if (isDisposed || !renderer || !scene || !camera) return;

        const delta = Math.min(clock.getDelta(), 0.1);
        const elapsedTime = clock.getElapsedTime();

        if (fallback && material && points) {
          const fallbackRect = fallback.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const targetTop = fallbackRect.top - containerRect.top;

          const vFov = (camera.fov * Math.PI) / 180;
          const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;

          const scaleFactor = (fallbackRect.height / container.clientHeight) * visibleHeight;
          material.uniforms.uScale.value = scaleFactor;

          const targetY =
            visibleHeight / 2 -
            ((targetTop + fallbackRect.height / 2) / container.clientHeight) * visibleHeight;

          points.position.y = THREE.MathUtils.damp(points.position.y, targetY, 6, delta);
          points.rotation.y = THREE.MathUtils.damp(
            points.rotation.y,
            isMotionOff() ? 0 : 0.015 * pointerX,
            3,
            delta
          );

          material.uniforms.uTime.value = isMotionOff() ? 0 : elapsedTime;
          material.uniforms.uProgress.value = THREE.MathUtils.damp(
            material.uniforms.uProgress.value,
            heroProgress,
            3,
            delta
          );
        }

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(render);
      };

      clock.start();
      animationFrameId = requestAnimationFrame(render);
    } catch (err) {
      console.error("SceneBackdrop error:", err);
    }

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      if (handlePointerMove) window.removeEventListener("pointermove", handlePointerMove);
      if (handleResize) window.removeEventListener("resize", handleResize);
      heroTrigger.kill();

      if (points && scene) {
        scene.remove(points);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className="scene-backdrop" ref={containerRef} aria-hidden="true">
      <div
        ref={fallbackRef}
        className={`artifact-fallback ${webglActive ? "webgl-active" : ""}`}
      >
        <Image
          src="/images/himanshu-hero.webp"
          alt="Himanshu Kumar Jha"
          width={560}
          height={700}
          priority
          sizes="(max-width: 700px) 90vw, 560px"
          className="artifact-image"
        />
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
}
