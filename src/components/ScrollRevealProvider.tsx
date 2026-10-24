"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    // 1. Ensure root HTML element has data-motion="on" unless user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.documentElement.hasAttribute("data-motion")) {
      document.documentElement.setAttribute("data-motion", prefersReduced ? "off" : "on");
    }

    // 2. Set up IntersectionObserver for all reveal targets
    const revealElements = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-editorial-reveal]"
    );

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => {
        el.classList.add("is-revealed");
        el.setAttribute("data-reveal", "active");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-revealed");
            if (target.hasAttribute("data-reveal")) {
              target.setAttribute("data-reveal", "active");
            }
            if (target.hasAttribute("data-editorial-reveal")) {
              target.setAttribute("data-editorial-reveal", "active");
            }
            // Once revealed, unobserve to keep performance high
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    revealElements.forEach((el) => {
      // If already within initial viewport, trigger immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
        if (el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "active");
        if (el.hasAttribute("data-editorial-reveal")) el.setAttribute("data-editorial-reveal", "active");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
