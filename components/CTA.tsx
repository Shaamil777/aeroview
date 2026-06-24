"use client";

import Image from "next/image";
import { ArrowRight, Plane } from "lucide-react";

export default function CTA() {
  return (
    <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
      <div className="max-w-[85rem] w-full relative bg-[#F4F7FF] rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center justify-between border border-blue-50/50 shadow-sm">
        
        {/* Left Side: Map Graphic (SVG) */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F4F7FF] z-10" />
          {/* Abstract dotted map SVG */}
          <svg className="w-full h-full text-blue-200" viewBox="0 0 400 300" fill="currentColor">
            {/* Dots simulating a world map */}
            <circle cx="50" cy="150" r="1.5" />
            <circle cx="60" cy="145" r="1.5" />
            <circle cx="70" cy="140" r="1.5" />
            <circle cx="80" cy="155" r="1.5" />
            <circle cx="90" cy="160" r="1.5" />
            <circle cx="100" cy="170" r="1.5" />
            <circle cx="110" cy="175" r="1.5" />
            <circle cx="120" cy="165" r="1.5" />
            <circle cx="130" cy="150" r="1.5" />
            <circle cx="140" cy="145" r="1.5" />
            <circle cx="150" cy="140" r="1.5" />
            
            <circle cx="40" cy="130" r="1.5" />
            <circle cx="50" cy="135" r="1.5" />
            <circle cx="60" cy="125" r="1.5" />
            <circle cx="70" cy="130" r="1.5" />
            <circle cx="80" cy="120" r="1.5" />
            
            <circle cx="90" cy="100" r="1.5" />
            <circle cx="100" cy="95" r="1.5" />
            <circle cx="110" cy="105" r="1.5" />
            
            {/* Flight Path */}
            <path d="M 60 170 Q 100 190, 150 140 T 250 80" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* Location Pin */}
            <g transform="translate(60, 170)">
              <circle cx="0" cy="0" r="6" fill="white" stroke="#2563EB" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2" fill="#2563EB" />
            </g>
            
            {/* Plane Icon */}
            <g transform="translate(250, 80) rotate(45)">
              <path d="M12 2L12 10L4 14L4 16L12 14L12 20L9 22L9 24L12 23L15 24L15 22L12 20L12 14L20 16L20 14L12 10L12 2C12 1.44772 11.5523 1 11 1C10.4477 1 10 1.44772 10 2Z" fill="#2563EB" />
            </g>
          </svg>
        </div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center py-16 px-8 md:px-0 mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-4">
            Ready to take off?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
            Explore aircraft, compare layouts and find the best seats for your next journey.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Wing Image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 md:w-[35%] hidden md:block">
          {/* Gradient overlay to fade the image into the background */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F4F7FF] z-10" />
          <Image
            src="/images/cta_wing.png"
            alt="Airplane Wing"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

      </div>
    </section>
  );
}
