"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Sparkles, Pause } from "lucide-react";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function MotionToggle() {
  const prefersReduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [userOverride, setUserOverride] = useState<boolean | null>(null);

  const motionOn = userOverride !== null ? userOverride : !prefersReduced;

  useEffect(() => {
    document.documentElement.setAttribute("data-motion", motionOn ? "on" : "off");
  }, [motionOn]);

  const toggleMotion = () => {
    const next = !motionOn;
    setUserOverride(next);
    document.documentElement.setAttribute("data-motion", next ? "on" : "off");
  };

  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggleMotion}
      aria-label={motionOn ? "Turn motion off" : "Turn motion on"}
      title="Toggle animation effects"
    >
      {motionOn ? <Sparkles size={11} color="var(--blue)" /> : <Pause size={11} />}
      <span>{motionOn ? "MOTION ON" : "MOTION OFF"}</span>
    </button>
  );
}
