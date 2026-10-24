"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineMaskRef = useRef<HTMLSpanElement>(null);
  const revealLineRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLSpanElement>(null);
  const toplineRef = useRef<HTMLDivElement>(null);
  const sideNoteRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const firstName = personal.shortName || "Himanshu";
  const lastName = personal.surname || "Jha";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== "undefined") {
      (window as unknown as { ScrollTrigger: typeof ScrollTrigger }).ScrollTrigger = ScrollTrigger;
    }

    const isMotionOff = () => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      return media.matches || document.documentElement.getAttribute("data-motion") === "off";
    };

    const charElements = headingRef.current?.querySelectorAll<HTMLElement>(".hero-char");
    console.log("HERO MOUNTED -> charElements:", charElements?.length, "isMotionOff:", isMotionOff());

    const ctx = gsap.context(() => {
      // 1. Initial Arrival Animation
      if (!isMotionOff()) {
        const arrivalTl = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        // Line reveal
        arrivalTl.fromTo(
          revealLineRef.current,
          { yPercent: 105, filter: "blur(5px)", opacity: 0 },
          {
            yPercent: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 1.25,
            clearProps: "filter",
            onComplete: () => {
              if (lineMaskRef.current) {
                lineMaskRef.current.style.overflow = "visible";
              }
              ScrollTrigger.refresh();
            },
          }
        );

        // Subtitle paragraph reveals smoothly
        arrivalTl.fromTo(
          descRef.current?.querySelector("p") || [],
          { filter: "blur(3px)", y: 10, opacity: 0 },
          {
            filter: "blur(0px)",
            y: 0,
            opacity: 1,
            duration: 0.85,
            clearProps: "filter,transform",
          },
          "-=0.9"
        );

        // Kicker, topline, actions emerge
        arrivalTl.fromTo(
          [toplineRef.current, kickerRef.current, sideNoteRef.current, bottomRef.current].filter(Boolean),
          { opacity: 0, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            clearProps: "transform",
          },
          "-=0.7"
        );
      } else {
        if (lineMaskRef.current) {
          lineMaskRef.current.style.overflow = "visible";
        }
      }

      // 2. Scroll-Driven Heading Fragmentation & Disappearance
      const charElements = headingRef.current?.querySelectorAll<HTMLElement>(".hero-char");

      if (charElements && charElements.length > 0) {
        if (!isMotionOff()) {
          // Precise scatter coordinates for "Himanshu Jha"
          const scatterMap: Array<{ x: number; y: number; r: number; blur: number }> = [
            // "Himanshu" (8 chars) - dispersing outwards to the top-left
            { x: -110, y: -45, r: -22, blur: 8 }, // H
            { x: -85, y: -20, r: -12, blur: 6 },  // i
            { x: -65, y: -60, r: -16, blur: 7 },  // m
            { x: -45, y: 15, r: 10, blur: 5 },    // a
            { x: -30, y: -40, r: -8, blur: 6 },   // n
            { x: -15, y: -18, r: 14, blur: 5 },   // s
            { x: 5, y: -35, r: -6, blur: 6 },     // h
            { x: 30, y: -50, r: 12, blur: 7 },    // u
            // "Jha" (3 chars) - dispersing downwards and outwards to the bottom-right
            { x: 55, y: 35, r: 15, blur: 6 },     // J
            { x: 95, y: 60, r: -12, blur: 8 },    // h
            { x: 140, y: 85, r: 24, blur: 10 },   // a
          ];

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          });

          // Break each character apart along its unique trajectory
          charElements.forEach((el, index) => {
            const vector = scatterMap[index] || {
              x: (index - 5) * 18,
              y: (index % 2 === 0 ? -1 : 1) * 35,
              r: (index - 5) * 4,
              blur: 8,
            };

            scrollTl.to(
              el,
              {
                x: vector.x,
                y: vector.y,
                rotation: vector.r,
                filter: `blur(${vector.blur}px)`,
                opacity: 0,
                ease: "power2.inOut",
              },
              0
            );
          });

          // Disperse supporting text and kicker
          if (descRef.current) {
            scrollTl.to(
              descRef.current,
              {
                y: -50,
                opacity: 0,
                ease: "power2.inOut",
              },
              0
            );
          }

          if (kickerRef.current || toplineRef.current || sideNoteRef.current) {
            scrollTl.to(
              [kickerRef.current, toplineRef.current, sideNoteRef.current, bottomRef.current].filter(Boolean),
              {
                opacity: 0,
                y: -25,
                ease: "power2.inOut",
              },
              0
            );
          }
        } else {
          // Reduced motion fallback: clean opacity fade
          gsap.to(headingRef.current, {
            opacity: 0,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "60% top",
              scrub: true,
            },
          });
        }
      }
    }, heroRef);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      ctx.revert();
    };
  }, [firstName, lastName]);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-grid" aria-hidden="true"></div>

      <div className="hero-topline" ref={toplineRef}>
        <span>
          <i className="live-dot"></i> {personal.headline}
        </span>
        <span>{personal.toplineLocation}</span>
      </div>

      <div className="hero-content">
        <span className="hero-kicker" ref={kickerRef}>
          <span className="signal-text">
            <span className="sr-only">{personal.tagline}</span>
            <span aria-hidden="true" className="signal-text-size">
              {personal.tagline}
            </span>
            <span aria-hidden="true" className="signal-text-live">
              {personal.tagline}
            </span>
          </span>
        </span>

        <h1 className="hero-heading" ref={headingRef}>
          {/* Unbroken name for assistive technology / screen readers */}
          <span className="sr-only">
            {firstName} {lastName}
          </span>

          {/* Visual fragmented heading */}
          <span className="line-mask" ref={lineMaskRef} aria-hidden="true">
            <span className="reveal-line" ref={revealLineRef}>
              <span className="hero-word hero-word-first">
                {firstName.split("").map((ch, i) => (
                  <span key={`first-${i}`} className="hero-char" data-char={ch}>
                    {ch}
                  </span>
                ))}
              </span>
              <span className="hero-char-space">&nbsp;</span>
              <em className="hero-word hero-word-last">
                {lastName.split("").map((ch, i) => (
                  <span
                    key={`last-${i}`}
                    className="hero-char hero-char-italic"
                    data-char={ch}
                  >
                    {ch}
                  </span>
                ))}
              </em>
            </span>
          </span>
        </h1>

        <div className="hero-description" ref={descRef}>
          <p>
            I build practical web applications and backend systems
            <br className="desktop-break" /> using modern JavaScript technologies, with a
            focus on clean architecture, reliable APIs, and useful user experiences.
          </p>

          <div className="hero-actions">
            <a className="pill-link" href="#work">
              <span className="signal-text">
                <span className="sr-only">Explore my work</span>
                <span aria-hidden="true" className="signal-text-size">
                  Explore my work
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  Explore my work
                </span>
              </span>
              <ArrowDown size={16} />
            </a>

            <a className="text-link" href="#contact">
              <span className="signal-text">
                <span className="sr-only">Start a conversation</span>
                <span aria-hidden="true" className="signal-text-size">
                  Start a conversation
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  Start a conversation
                </span>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              className="text-link"
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="signal-text">
                <span className="sr-only">Download Resume</span>
                <span aria-hidden="true" className="signal-text-size">
                  Download Resume
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  Download Resume
                </span>
              </span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-side-note" ref={sideNoteRef}>
        <span>01 / FOCUS</span>
        <span>
          ENGINEERING
          <br />
          BACKEND APIS
          <br />
          SYSTEM DESIGN
        </span>
      </div>

      <div className="hero-bottom" ref={bottomRef}>
        <a href="#about">
          <span className="scroll-line"></span> SCROLL TO DISCOVER <ArrowDown size={13} />
        </a>
        <span>BUILDING PRACTICAL SYSTEMS</span>
        <span className="hero-edition">EXPLORE PROJECTS ↗</span>
      </div>
    </section>
  );
}
