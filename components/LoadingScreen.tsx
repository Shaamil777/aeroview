"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Animation takes 2.5 seconds. We hide it after 2.8s
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    // Unmount completely after fade out
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 3300);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } overflow-hidden`}
    >
      <div className="flex items-center justify-center space-x-4">
        {/* Minimal text */}
        <span className="text-[11px] tracking-[0.4em] text-gray-400 uppercase font-medium">
          Loading
        </span>

        {/* Floating Flight Icon */}
        <div className="relative animate-float">
          <Image
            src="/icons/flight.png"
            alt="Loading Airplane"
            width={48}
            height={48}
            className="opacity-70 -rotate-15 object-contain w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
}
