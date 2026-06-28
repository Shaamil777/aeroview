"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeSinceLoad = window.performance.now();
          const loadingScreenDuration = 2800;
          
          let waitTime = delay;
          if (timeSinceLoad < loadingScreenDuration) {
             waitTime += (loadingScreenDuration - timeSinceLoad);
          }

          setTimeout(() => {
            setIsVisible(true);
          }, waitTime);

          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0";
    switch (direction) {
      case "up": return "translate-y-8";
      case "down": return "-translate-y-8";
      case "left": return "translate-x-8";
      case "right": return "-translate-x-8";
      case "none": return "";
      default: return "translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${
        isVisible ? "opacity-100 " + getTransform() : "opacity-0 " + getTransform()
      } ${className}`}
    >
      {children}
    </div>
  );
}
