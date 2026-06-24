"use client";

import React, { useState } from 'react';
import { airlines, aircraftList } from '@/data/popular';
import FeaturedAirlineCard from '@/components/popular/FeaturedAirlineCard';
import AirlineCard from '@/components/popular/AirlineCard';
import FeaturedAircraftCard from '@/components/popular/FeaturedAircraftCard';
import PopularAircraftCard from '@/components/popular/PopularAircraftCard';
import ExploreMoreCard from '@/components/popular/ExploreMoreCard';

export default function PopularAirlines() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="popular-airlines" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-[85rem] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10">
          <div className="flex flex-wrap items-center gap-4 border-b border-border-subtle pb-4 w-full md:w-auto">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`text-xl sm:text-2xl md:text-4xl font-bold font-heading transition-colors ${currentSlide === 0 ? 'text-navy' : 'text-text-secondary hover:text-navy/70'}`}
            >
              Popular Airlines
            </button>
            <span className="text-text-secondary text-3xl hidden sm:block">/</span>
            <button
              onClick={() => setCurrentSlide(1)}
              className={`text-xl sm:text-2xl md:text-4xl font-bold font-heading transition-colors ${currentSlide === 1 ? 'text-navy' : 'text-text-secondary hover:text-navy/70'}`}
            >
              Popular Aircraft
            </button>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${currentSlide === 0 ? 'bg-navy text-white shadow-md' : 'border-2 border-border-subtle text-text-secondary hover:border-navy hover:text-navy'}`}
              aria-label="Previous Section"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCurrentSlide(1)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${currentSlide === 1 ? 'bg-navy text-white shadow-md' : 'border-2 border-border-subtle text-text-secondary hover:border-navy hover:text-navy'}`}
              aria-label="Next Section"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >

            <div className="min-w-full w-full pr-0 md:pr-8">
              <FeaturedAirlineCard />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {airlines.map((airline, idx) => (
                  <AirlineCard key={idx} airline={airline} />
                ))}
                <ExploreMoreCard title="Explore More" subtitle="700+ airlines worldwide" />
              </div>
            </div>

            <div className="min-w-full w-full pl-0 md:pl-8">
              <FeaturedAircraftCard />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {aircraftList.map((aircraftItem, idx) => (
                  <PopularAircraftCard key={idx} aircraftItem={aircraftItem} />
                ))}
                <ExploreMoreCard title="Explore More" subtitle="View all aircraft" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
