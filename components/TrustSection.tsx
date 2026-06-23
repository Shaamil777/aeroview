"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const trustPoints = [
  {
    title: "Worldwide Aircraft Data",
    description: "Explore cabin layouts from airlines worldwide.",
  },
  {
    title: "Verified Cabin Details",
    description: "Reliable seating and aircraft information.",
  },
  {
    title: "1,000+ Configurations",
    description: "Compare layouts across aircraft variants.",
  },
  {
    title: "Regularly Updated",
    description: "Continuously reviewed and refreshed.",
  },
];

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="trust" 
      ref={sectionRef}
      className="relative bg-bg-soft py-10 px-4 sm:px-6 lg:px-8 border-b border-border-subtle overflow-hidden shadow-inner"
    >
     

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className={`flex flex-col border-l-2 border-aviation pl-4 py-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ 
                animationDelay: isVisible ? `${1.5 + (index * 0.2)}s` : '0s',
                animationFillMode: 'forwards'
              }}
            >
              <h3 className="font-semibold text-heading text-sm uppercase tracking-wide">{point.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-1.5">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
