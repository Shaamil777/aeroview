import React from 'react';
import Image from 'next/image';
import { PopularAircraft } from '@/types/popular';

export default function PopularAircraftCard({ aircraftItem }: { aircraftItem: PopularAircraft }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-[170px]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 border border-border-subtle shadow-sm">
            <img src={`https://icon.horse/icon/${aircraftItem.domain}`} alt={aircraftItem.name} className="max-w-full max-h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-navy text-sm">{aircraftItem.name}</h4>
            <div className="flex items-center gap-1 text-text-secondary text-xs mt-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {aircraftItem.location}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-5">
          <div className="flex items-center gap-2 text-text-secondary">
            <Image src="/icons/seat.png" width={16} height={16} alt="capacity" className="opacity-60" />
            <div className="flex flex-col">
              <span className="text-navy font-bold text-sm leading-none">{aircraftItem.aircraft}</span>
              <span className="text-[10px] leading-none mt-1">Capacity</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <Image src="/icons/plane.png" width={16} height={16} alt="layouts" className="opacity-60" />
            <div className="flex flex-col">
              <span className="text-navy font-bold text-sm leading-none">{aircraftItem.layouts}</span>
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
  );
}
