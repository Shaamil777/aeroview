"use client";

import React from 'react';
import { X, Check, Star, Award, CheckCircle2, Eye, LayoutPanelLeft } from 'lucide-react';
import { Aircraft } from '@/types/aircraft';

type CompareModalProps = {
  selectedAircraft: Aircraft[];
  onClose: () => void;
};

export default function CompareModal({ selectedAircraft, onClose }: CompareModalProps) {
  const hasMultiple = selectedAircraft.length > 1;
  const bestComfortScore = Math.max(...selectedAircraft.map(a => a.comfortScore));
  const bestVariants = Math.max(...selectedAircraft.map(a => a.layoutVariants));
  const bestWidth = Math.max(...selectedAircraft.map(a => parseFloat(a.seatWidth)));
  const bestPitch = Math.max(...selectedAircraft.map(a => parseFloat(a.seatPitch)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[1400px] max-h-[95vh] flex flex-col relative z-10 overflow-hidden">
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-subtle bg-[#F8FAFC]">
          <div>
            <h3 className="text-3xl font-bold text-navy font-heading">Aircraft Comparison</h3>
            <p className="text-text-secondary text-sm mt-1">Detailed specifications and comfort metrics</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2.5 text-text-secondary hover:text-navy hover:bg-white rounded-full transition-colors border border-transparent hover:border-border-subtle shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar bg-white">
          <div className="grid grid-cols-[minmax(180px,220px)_repeat(auto-fit,minmax(280px,1fr))] gap-6">

            <div className="hidden md:flex flex-col gap-0 pt-[140px]">
              
              <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2">General Information</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Manufacturer</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Aircraft Family</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Aircraft Type</div>

              <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2 mt-4">Cabin Information</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Total Seats</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Business Class Seats</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Premium Economy Seats</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Economy Seats</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Cabin Classes</div>

              <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2 mt-4">Comfort Information</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Seat Width</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Seat Pitch</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Comfort Score</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Window Alignment</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Extra Legroom</div>

              <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2 mt-4">Layout Information</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Layout Variants</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Airlines Operating</div>
              <div className="h-12 flex items-center text-sm font-medium text-text-secondary">Seat Map</div>
            </div>

            <div className={`grid gap-6 flex-1`} style={{ gridTemplateColumns: `repeat(${selectedAircraft.length}, minmax(0, 1fr))` }}>
              {selectedAircraft.map(aircraft => {
                const isBestComfort = hasMultiple && aircraft.comfortScore === bestComfortScore;
                const isBestVariants = hasMultiple && aircraft.layoutVariants === bestVariants;
                const isBestWidth = hasMultiple && parseFloat(aircraft.seatWidth) === bestWidth;
                const isBestPitch = hasMultiple && parseFloat(aircraft.seatPitch) === bestPitch;
                const isBestWindow = hasMultiple && aircraft.windowAlignment === 'Excellent';

                return (
                <div key={`modal-${aircraft.id}`} className="flex flex-col">
                  
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 mb-0 border border-border-subtle text-center h-[140px] flex flex-col items-center justify-center relative overflow-hidden group">
                    <img 
                      src={aircraft.image} 
                      alt={aircraft.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F8FAFC]/40"></div>
                    <div className="relative z-10 w-full">
                      <div className="inline-flex items-center justify-center bg-white border border-border-subtle rounded-full px-3 py-1 mb-2 shadow-sm">
                        <span className="text-[10px] font-bold text-navy uppercase tracking-wider">{aircraft.airline}</span>
                      </div>
                      <h4 className="font-bold text-navy text-xl leading-tight font-heading">{aircraft.name}</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-0 text-sm">
                    
                    <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2">
                      <span className="md:hidden">General Information</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Manufacturer</span>
                      <span className="font-bold text-navy">{aircraft.manufacturer}</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Family</span>
                      <span className="font-semibold text-navy">{aircraft.aircraftFamily}</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Type</span>
                      <span className="font-semibold text-navy">{aircraft.aircraftType}</span>
                    </div>

                    <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2 mt-4 md:mt-4 md:border-b">
                      <span className="md:hidden">Cabin Information</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Total Seats</span>
                      <span className="font-bold text-navy">{aircraft.totalSeats}</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Business Class</span>
                      <span className="font-semibold text-navy">{aircraft.businessSeats} seats</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Prem. Economy</span>
                      <span className="font-semibold text-navy">{aircraft.premiumEconomySeats > 0 ? `${aircraft.premiumEconomySeats} seats` : '-'}</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Economy Class</span>
                      <span className="font-semibold text-navy">{aircraft.economySeats} seats</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Cabin Classes</span>
                      <span className="font-semibold text-navy">{aircraft.cabinClasses}</span>
                    </div>

                    <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2 mt-4 md:mt-4 md:border-b">
                      <span className="md:hidden">Comfort Information</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0 relative">
                      <span className="md:hidden text-text-secondary">Seat Width</span>
                      <div className={`flex items-center gap-2 ${isBestWidth ? 'text-green-600 font-bold' : 'font-semibold text-navy'}`}>
                        {aircraft.seatWidth}
                        {isBestWidth && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Seat Pitch</span>
                      <div className={`flex items-center gap-2 ${isBestPitch ? 'text-green-600 font-bold' : 'font-semibold text-navy'}`}>
                        {aircraft.seatPitch}
                        {isBestPitch && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Comfort Score</span>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg ${isBestComfort ? 'bg-green-50 text-green-700 font-bold border border-green-200' : 'bg-[#F8FAFC] text-navy font-bold border border-border-subtle'}`}>
                        {isBestComfort ? <Award className="w-4 h-4" /> : <Star className="w-4 h-4 fill-current" />}
                        {aircraft.comfortScore}/10
                      </div>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Windows</span>
                      <div className={`flex items-center gap-2 ${isBestWindow ? 'text-green-600 font-bold' : 'font-semibold text-navy'}`}>
                        {aircraft.windowAlignment}
                        {isBestWindow && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Extra Legroom</span>
                      {aircraft.extraLegroom ? (
                        <div className="flex items-center gap-1 text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-md">
                          <Check className="w-3.5 h-3.5" /> Available
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-text-secondary font-medium text-xs">
                          <X className="w-3.5 h-3.5" /> Not Guaranteed
                        </div>
                      )}
                    </div>

                    <div className="h-10 flex items-end pb-2 font-bold text-navy text-xs uppercase tracking-wider border-b border-border-subtle mb-2 mt-4 md:mt-4 md:border-b">
                      <span className="md:hidden">Layout Information</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Layout Variants</span>
                      <div className={`flex items-center gap-2 ${isBestVariants ? 'text-aviation font-bold' : 'font-semibold text-navy'}`}>
                        {aircraft.layoutVariants} layouts
                        {isBestVariants && <Star className="w-3 h-3 fill-aviation text-aviation" />}
                      </div>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start border-b border-border-subtle md:border-0">
                      <span className="md:hidden text-text-secondary">Airlines Operating</span>
                      <span className="font-semibold text-navy">{aircraft.operatingAirlines} operators</span>
                    </div>
                    <div className="h-12 flex items-center justify-between md:justify-start">
                      <span className="md:hidden text-text-secondary">Seat Map</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-aviation bg-aviation/10 px-2.5 py-1 rounded-md">
                        <Eye className="w-3.5 h-3.5" /> Preview
                      </span>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-navy to-[#004bb8] rounded-3xl p-8 relative overflow-hidden shadow-xl">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-aviation/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/30 shadow-sm flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Coming Soon
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-inner flex-shrink-0">
                <LayoutPanelLeft className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-2xl font-bold text-white mb-3 font-heading">Interactive Seat Map Comparison</h5>
                <p className="text-white/80 text-base leading-relaxed max-w-2xl mb-6">
                  An unprecedented look inside your aircraft before you book. We are building advanced tools to help you compare physical layouts visually and definitively choose the best seat.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Seat Map Overlay Comparison
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Cabin Layout Visualization
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Window Alignment Preview
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Best Seat Recommendations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
