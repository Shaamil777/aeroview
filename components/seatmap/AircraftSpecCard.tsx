import React from 'react';

export default function AircraftSpecCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
           <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M75.6454 44.4079L46.8837 57.0603C42.2384 59.1039 36.6346 59.8821 31.3932 58.7497L23.4925 57.0427C21.6883 56.6527 20.3168 55.4526 19.8214 53.7661C19.3261 52.0797 20.1036 50.1415 21.6703 49.3789L33.0039 43.8601L46.9934 29.5886C48.5135 28.0375 50.5962 27.2005 52.756 27.2005H53.0763C53.7699 27.2005 54.3415 27.7554 54.3826 28.4485L55.8364 53.3031L71.7451 46.3051C74.6293 45.0357 77.9407 46.2995 79.1678 49.1415C80.395 51.9835 79.1171 55.3341 76.2329 56.6035L61.0544 63.2844L66.7028 85.0434C67.054 86.3965 66.5298 87.8286 65.3857 88.6366C64.2416 89.4447 62.666 89.4975 61.4705 88.7696L41.3094 76.4952L44.8219 67.5707L75.6454 44.4079Z" fill="#5C0632"/>
           </svg>
        </div>
        <div>
          <div className="text-[9px] text-text-secondary leading-tight">Qatar Airways</div>
          <div className="font-bold text-navy text-sm leading-tight">Boeing 787-9</div>
          <div className="text-[9px] text-text-secondary uppercase tracking-wider">Dreamliner</div>
        </div>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span className="text-text-secondary">Total Seats</span>
          <span className="font-bold text-navy text-sm">254</span>
        </div>
        <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span className="text-text-secondary">Business</span>
          <span className="font-bold text-navy text-sm">22</span>
        </div>
        <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span className="text-text-secondary">Premium Economy</span>
          <span className="font-bold text-navy text-sm">28</span>
        </div>
        <div className="flex justify-between items-center py-1.5">
          <span className="text-text-secondary">Economy</span>
          <span className="font-bold text-navy text-sm">204</span>
        </div>
      </div>

      <button className="w-full mt-3 bg-navy text-white font-medium rounded-lg py-2 flex justify-between items-center px-3 hover:bg-navy/90 transition-colors">
        <span className="text-[11px] font-semibold">Explore Full Layout</span>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
}
