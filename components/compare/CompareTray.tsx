"use client";

import React from 'react';
import { X, ArrowRightLeft } from 'lucide-react';
import { Aircraft } from '@/types/aircraft';

type CompareTrayProps = {
  selectedAircraft: Aircraft[];
  onClear: () => void;
  onRemove: (aircraft: Aircraft) => void;
  onCompare: () => void;
};

export default function CompareTray({ selectedAircraft, onClear, onRemove, onCompare }: CompareTrayProps) {
  if (selectedAircraft.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white border border-border-subtle rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-40 transform transition-all duration-300 w-[95%] max-w-4xl px-4 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar w-full sm:w-auto">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Compare</span>
            <span className="text-lg font-bold text-navy leading-none">{selectedAircraft.length} <span className="text-sm text-text-secondary font-medium">/ 3 Selected</span></span>
          </div>
          <div className="h-8 w-px bg-border-subtle mx-2 hidden sm:block"></div>
          <div className="flex gap-2">
            {selectedAircraft.map(aircraft => (
              <div key={`tray-${aircraft.id}`} className="flex items-center gap-2 bg-[#F8FAFC] border border-border-subtle rounded-full pl-1 pr-3 py-1 shadow-sm">
                <img src={aircraft.image} alt={aircraft.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-xs font-bold text-navy whitespace-nowrap">{aircraft.name}</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); onRemove(aircraft); }}
                  className="text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-full p-0.5 transition-colors ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            {Array.from({ length: 3 - selectedAircraft.length }).map((_, i) => (
              <div key={`empty-${i}`} className="flex items-center justify-center w-10 h-10 border-2 border-dashed border-border-subtle rounded-full bg-slate-50/50">
                <span className="text-xs text-text-secondary/50 font-bold">{i + selectedAircraft.length + 1}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 w-full sm:w-auto shrink-0">
          <button 
            onClick={onClear}
            className="px-4 py-2 text-sm font-bold text-text-secondary hover:text-navy transition-colors whitespace-nowrap"
          >
            Clear
          </button>
          <button
            onClick={onCompare}
            disabled={selectedAircraft.length < 2}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              selectedAircraft.length >= 2
                ? 'bg-aviation text-white hover:bg-aviation/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            Compare Now
          </button>
        </div>
      </div>
    </div>
  );
}
