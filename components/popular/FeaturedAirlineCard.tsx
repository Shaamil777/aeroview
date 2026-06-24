import React from 'react';
import Image from 'next/image';

export default function FeaturedAirlineCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-8 h-[340px] flex items-center shadow-lg group cursor-pointer bg-navy">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/emirates.jpg"
          alt="Emirates A380"
          fill
          className="object-cover object-[center_right] md:object-[75%_center] transform group-hover:scale-105 transition-transform duration-700 opacity-90"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D32027] via-[#D32027]/80 lg:via-[#D32027]/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-10 text-white max-w-2xl h-full flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-[#D32027] rounded-xl flex items-center justify-center shadow-md">
            <img src="https://icon.horse/icon/emirates.com" alt="Emirates logo" className="w-8 h-8 object-contain invert brightness-0" />
          </div>
          <div>
            <h3 className="text-3xl font-bold font-heading">Emirates</h3>
            <div className="flex items-center gap-1.5 text-white/90 text-sm mt-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Dubai, UAE
            </div>
          </div>
        </div>

        <p className="text-white/95 text-base mb-6 max-w-md leading-relaxed">
          Explore our extensive fleet from Airbus A380 to Boeing 777 and A350.
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Image src="/icons/plane.png" width={16} height={16} alt="aircraft" className="invert" />
            </div>
            <div>
              <div className="font-bold text-xl font-heading">120+</div>
              <div className="text-white/80 text-xs">Aircraft</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Image src="/icons/seat.png" width={16} height={16} alt="layouts" className="invert" />
            </div>
            <div>
              <div className="font-bold text-xl font-heading">38+</div>
              <div className="text-white/80 text-xs">Cabin Layouts</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Image src="/icons/worldwide.png" width={16} height={16} alt="destinations" className="invert" />
            </div>
            <div>
              <div className="font-bold text-xl font-heading">Worldwide</div>
              <div className="text-white/80 text-xs">Destinations</div>
            </div>
          </div>
        </div>

        <button className="bg-white text-navy font-bold py-2.5 px-6 rounded-full hover:bg-gray-100 transition-colors w-fit flex items-center gap-2 text-sm shadow-md">
          Explore Emirates Fleet
          <svg className="w-4 h-4 text-aviation" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Bottom Right Tag */}
      <div className="absolute bottom-5 right-5 bg-black/40 backdrop-blur-md text-white py-1.5 px-4 rounded-full flex items-center gap-2 text-sm font-medium z-10 border border-white/20">
        <Image src="/icons/plane.png" width={14} height={14} alt="plane" className="invert" />
        Airbus A380
      </div>
    </div>
  );
}
