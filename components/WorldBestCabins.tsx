/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Move, ChevronRight, ChevronLeft } from "lucide-react";

const cabins = [
  {
    id: '1',

    image: '/images/boeing_787_aircraft.png',
    airline: 'Emirates',
    aircraft: 'Airbus A380-800',
    classes: 'Business • Economy',
    logo: 'https://logo.clearbit.com/emirates.com'
  },
  {
    id: '2',
    image: '/images/hero.jpg',
    airline: 'Singapore Airlines',
    aircraft: 'Airbus A350-900',
    classes: 'Business • Premium Economy • Economy',
    logo: 'https://logo.clearbit.com/singaporeair.com'
  },
  {
    id: '3',
    image: '/images/boeing_787_aircraft.png',
    airline: 'Lufthansa',
    aircraft: 'Boeing 747-8',
    classes: 'Business • Economy',
    logo: 'https://logo.clearbit.com/lufthansa.com'
  },
  {
    id: '4',
    image: '/images/hero.jpg',
    airline: 'Turkish Airlines',
    aircraft: 'Boeing 777-300ER',
    classes: 'Business • Economy',
    logo: 'https://logo.clearbit.com/turkishairlines.com'
  },
  {
    id: '5',
    image: '/images/boeing_787_aircraft.png',
    airline: 'Qatar Airways',
    aircraft: 'Airbus A350-1000',
    classes: 'First • Business • Economy',
    logo: 'https://logo.clearbit.com/qatarairways.com'
  }
];

export default function WorldBestCabins() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-bg-soft overflow-hidden">
      <div className="max-w-[90rem] mx-auto relative">
        <div className="flex justify-between items-end mb-6 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2540]">
              Step inside world&apos;s best cabins
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-[#0A2540]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-[#0A2540]"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cabins.map((cabin) => (
              <div
                key={cabin.id}
                className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[340px] flex-shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-border-subtle overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                
                <div className="relative h-32 sm:h-40 md:h-48 w-full overflow-hidden">
                  <Image
                    src={cabin.image}
                    alt={`${cabin.airline} ${cabin.aircraft} Cabin`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-white border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-[9px] font-bold leading-none mb-0.5 mt-1">360°</span>
                    <Move className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-3 sm:p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    
                    <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden bg-white flex-shrink-0 shadow-sm relative">
                      
                      <img
                        src={cabin.logo}
                        alt={`${cabin.airline} logo`}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {

                          e.currentTarget.src = "https://ui-avatars.com/api/?name=" + cabin.airline + "&background=random";
                        }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[13px] font-bold text-[#0A2540]">{cabin.airline}</p>
                      <p className="text-[13px] font-semibold text-[#0A2540] mt-0.5">{cabin.aircraft}</p>
                      <p className="text-[10px] text-text-secondary mt-1 font-medium">{cabin.classes}</p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-[#0A2540]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
