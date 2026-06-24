"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const trustPoints = [
  {
    title: "Worldwide Aircraft Data",
    description: "Explore cabin layouts from airlines worldwide.",
    icon: "/icons/worldwide.png"
  },
  {
    title: "Verified Cabin Details",
    description: "Reliable seating and aircraft information.",
    icon: "/icons/verify.png"
  },
  {
    title: "1,000+ Configurations",
    description: "Compare layouts across aircraft variants.",
    icon: "/icons/seat.png"
  },
  {
    title: "Regularly Updated",
    description: "Continuously reviewed and refreshed.",
    icon: "/icons/refresh.png"
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

      <div className="max-w-[85rem] mx-auto relative z-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 ${
                index !== 0 ? 'lg:border-l lg:border-border-subtle lg:pl-6' : ''
              } ${
                index !== trustPoints.length - 1 ? 'lg:pr-6' : ''
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ 
                animationDelay: isVisible ? `${1.5 + (index * 0.2)}s` : '0s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex-shrink-0 w-[52px] h-[52px] bg-[#E5F1FF] rounded-full flex items-center justify-center">
                <Image 
                  src={point.icon} 
                  alt={point.title} 
                  width={28} 
                  height={28} 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-heading text-sm">{point.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mt-0.5">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
