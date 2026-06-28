/* eslint-disable @next/next/no-img-element */
"use client";

import { Plane, Star, CheckCircle2, Map } from 'lucide-react';
import { Aircraft } from '@/types/aircraft';

type AircraftCardProps = {
  aircraft: Aircraft;
  isSelected: boolean;
  activeTab: 'Airlines' | 'Aircraft' | 'Routes';
  onToggle: (aircraft: Aircraft) => void;
};

export default function AircraftCard({ aircraft, isSelected, activeTab, onToggle }: AircraftCardProps) {
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 relative group cursor-pointer ${
        isSelected 
          ? 'border-aviation shadow-md ring-1 ring-aviation' 
          : 'border-border-subtle shadow-sm hover:shadow-md hover:border-aviation/40 hover:-translate-y-1'
      }`}
      onClick={() => onToggle(aircraft)}
    >
      
      <div className="absolute top-4 right-4 z-10">
        {isSelected ? (
          <div className="bg-aviation text-white rounded-full p-1 shadow-md transform scale-110 transition-transform">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        ) : (
          <div className="bg-white/40 backdrop-blur-md text-white border border-white/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-5 h-5 rounded-full border-2 border-white" />
          </div>
        )}
      </div>

      <div className="h-32 sm:h-48 relative overflow-hidden bg-slate-100">
        <img 
          src={aircraft.image} 
          alt={aircraft.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}
        />
        
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-navy shadow-sm flex items-center gap-1.5">
          {activeTab === 'Routes' ? (
            <>
              <Map className="w-3.5 h-3.5 text-aviation" />
              {aircraft.route}
            </>
          ) : activeTab === 'Aircraft' ? (
            <>
              <Plane className="w-3.5 h-3.5 text-aviation" />
              {aircraft.aircraftFamily}
            </>
          ) : (
            <>
              <div className="w-4 h-4 rounded-full bg-navy flex items-center justify-center">
                <img src={`https://icon.horse/icon/${aircraft.airline.toLowerCase().replace(' ', '')}.com`} alt="" className="w-2.5 h-2.5 invert brightness-0" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              {aircraft.airline}
            </>
          )}
        </div>
      </div>
      <div className="p-3 sm:p-5">
        <h3 className="text-sm sm:text-xl font-bold text-navy mb-1">{aircraft.name}</h3>
        <p className="text-[10px] sm:text-sm text-text-secondary mb-3 sm:mb-4 flex items-center gap-1 leading-tight">
          {activeTab !== 'Airlines' && <span>{aircraft.airline} • </span>}
          {aircraft.aircraftType}
        </p>
        
        <div className="grid grid-cols-2 gap-y-2 sm:gap-y-4 mb-3 sm:mb-5 text-sm">
          <div>
            <p className="text-text-secondary text-[8px] sm:text-[10px] uppercase tracking-wider font-bold mb-0.5">Total Seats</p>
            <p className="font-semibold text-navy text-xs sm:text-sm">{aircraft.totalSeats}</p>
          </div>
          <div>
            <p className="text-text-secondary text-[8px] sm:text-[10px] uppercase tracking-wider font-bold mb-0.5">Cabin Classes</p>
            <p className="font-semibold text-navy text-xs sm:text-sm">{aircraft.cabinClasses}</p>
          </div>
          <div>
            <p className="text-text-secondary text-[8px] sm:text-[10px] uppercase tracking-wider font-bold mb-0.5">Layout Variants</p>
            <p className="font-semibold text-navy text-xs sm:text-sm">{aircraft.layoutVariants}</p>
          </div>
          <div>
            <p className="text-text-secondary text-[8px] sm:text-[10px] uppercase tracking-wider font-bold mb-0.5">Comfort Score</p>
            <p className="font-bold text-aviation flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-aviation" />
              {aircraft.comfortScore}/10
            </p>
          </div>
        </div>

        <div className={`w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl flex items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-bold transition-all ${
          isSelected 
            ? 'bg-aviation/5 text-aviation border border-aviation/20' 
            : 'bg-[#F8FAFC] text-text-secondary border border-border-subtle group-hover:bg-white group-hover:border-aviation/30 group-hover:text-aviation'
        }`}>
          {isSelected ? 'Added to Compare' : 'Select for Comparison'}
        </div>
      </div>
    </div>
  );
}
