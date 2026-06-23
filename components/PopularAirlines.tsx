"use client";

import React from 'react';
import Image from 'next/image';

const airlines = [
  { name: 'Qatar Airways', location: 'Doha, Qatar', aircraft: '230+', layouts: '45+', domain: 'qatarairways.com' },
  { name: 'Lufthansa', location: 'Frankfurt, Germany', aircraft: '270+', layouts: '40+', domain: 'lufthansa.com' },
  { name: 'Singapore Airlines', location: 'Singapore', aircraft: '150+', layouts: '34+', domain: 'singaporeair.com' },
  { name: 'ANA All Nippon', location: 'Tokyo, Japan', aircraft: '120+', layouts: '27+', domain: 'ana.co.jp' },
  { name: 'British Airways', location: 'London, UK', aircraft: '130+', layouts: '32+', domain: 'britishairways.com' },
  { name: 'Delta Air Lines', location: 'Atlanta, USA', aircraft: '1000+', layouts: '52+', domain: 'delta.com' },
  { name: 'Air France', location: 'Paris, France', aircraft: '250+', layouts: '35+', domain: 'airfrance.com' }
];

export default function PopularAirlines() {
  return (
    <section id="popular-airlines" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-[85rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Popular Airlines</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Explore aircraft layouts and cabin insights from the world's leading airlines.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2.5 border border-border-subtle rounded-full text-aviation font-semibold hover:bg-aviation hover:text-white transition-colors flex items-center gap-2 bg-white text-sm">
            View all airlines
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Emirates Featured Card */}
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

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {airlines.map((airline, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-[170px]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 border border-border-subtle shadow-sm">
                    <img src={`https://icon.horse/icon/${airline.domain}`} alt={airline.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">{airline.name}</h4>
                    <div className="flex items-center gap-1 text-text-secondary text-xs mt-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {airline.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-5">
                  <div className="flex items-center gap-2 text-text-secondary">
                     <Image src="/icons/plane.png" width={16} height={16} alt="aircraft" className="opacity-60" />
                     <div className="flex flex-col">
                        <span className="text-navy font-bold text-sm leading-none">{airline.aircraft}</span>
                        <span className="text-[10px] leading-none mt-1">Aircraft</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                     <Image src="/icons/seat.png" width={16} height={16} alt="layouts" className="opacity-60" />
                     <div className="flex flex-col">
                        <span className="text-navy font-bold text-sm leading-none">{airline.layouts}</span>
                        <span className="text-[10px] leading-none mt-1">Layouts</span>
                     </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-navy group-hover:bg-navy group-hover:text-white transition-colors text-text-secondary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          
          {/* Explore More Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-dashed border-border-subtle hover:bg-aviation/5 hover:border-aviation/30 transition-all duration-300 cursor-pointer group flex flex-col justify-center h-[170px]">
            <div className="w-14 h-14 bg-[#E2E8F0] rounded-full flex items-center justify-center mb-4 group-hover:bg-aviation/20 transition-colors">
              <svg className="w-7 h-7 text-navy group-hover:text-aviation transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-navy text-lg">Explore More</h4>
                    <p className="text-text-secondary text-sm">700+ airlines worldwide</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-navy group-hover:bg-navy group-hover:text-white transition-colors text-text-secondary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
