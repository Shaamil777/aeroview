"use client";

import React from 'react';

const airlines = [
  { name: 'Emirates', domain: 'emirates.com' },
  { name: 'Qatar Airways', domain: 'qatarairways.com' },
  { name: 'Delta Air Lines', domain: 'delta.com' },
  { name: 'Singapore Airlines', domain: 'singaporeair.com' },
  { name: 'Lufthansa', domain: 'lufthansa.com' },
  { name: 'British Airways', domain: 'britishairways.com' },
  { name: 'ANA', domain: 'ana.co.jp' }
];

export default function PopularAirlines() {
  return (
    <section id="popular-airlines" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-heading mb-10 text-center">Popular Airlines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {airlines.map((airline, index) => (
            <div 
              key={index} 
              className="bg-card border border-border-subtle rounded-xl p-6 h-32 flex flex-col items-center justify-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="h-12 w-full flex items-center justify-center mb-3">
                <img 
                  src={`https://icon.horse/icon/${airline.domain}`} 
                  alt={`${airline.name} logo`}
                  className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-bold text-lg text-heading uppercase tracking-wide">
                  {airline.name}
                </span>
              </div>
              <span className="text-text-secondary text-sm font-medium group-hover:text-aviation transition-colors">{airline.name}</span>
            </div>
          ))}
          
          {/* Explore More Card */}
          <div className="bg-bg-soft border border-dashed border-border-subtle rounded-xl p-6 h-32 flex flex-col items-center justify-center hover:bg-border-subtle/50 hover:shadow-md transition-all cursor-pointer group">
            <div className="h-10 w-10 rounded-full bg-aviation/10 flex items-center justify-center mb-3 group-hover:bg-aviation/20 transition-colors">
              <svg className="w-5 h-5 text-aviation" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <span className="text-heading font-medium">Explore More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
