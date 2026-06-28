/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function FeaturedAircraftCard() {
  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 h-[260px] sm:h-[340px] flex items-center shadow-lg group cursor-pointer bg-navy">
      
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/boeing_787_aircraft.png"
          alt="Boeing 787"
          fill
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0039A6] via-[#0039A6]/80 lg:via-[#0039A6]/50 to-transparent"></div>

      <div className="relative z-10 p-5 sm:p-6 md:p-10 text-white max-w-2xl h-full flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md border border-white/20">
            <img src="https://icon.horse/icon/boeing.com" alt="Boeing logo" className="w-8 h-8 object-contain invert brightness-0" />
          </div>
          <div>
            <h3 className="text-xl sm:text-3xl font-bold font-heading">Boeing 787</h3>
            <div className="flex items-center gap-1.5 text-white/90 text-sm mt-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Dreamliner
            </div>
          </div>
        </div>

        <p className="text-white/95 text-sm sm:text-base mb-4 sm:mb-6 max-w-md leading-relaxed">
          Experience unparalleled comfort with larger windows, better cabin pressure, and smooth-ride technology.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Image src="/icons/seat.png" width={16} height={16} alt="capacity" className="invert" />
            </div>
            <div>
              <div className="font-bold text-xl font-heading">240+</div>
              <div className="text-white/80 text-xs">Passengers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Image src="/icons/worldwide.png" width={16} height={16} alt="range" className="invert" />
            </div>
            <div>
              <div className="font-bold text-xl font-heading">13k+ km</div>
              <div className="text-white/80 text-xs">Range</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Image src="/icons/plane.png" width={16} height={16} alt="speed" className="invert" />
            </div>
            <div>
              <div className="font-bold text-xl font-heading">M 0.85</div>
              <div className="text-white/80 text-xs">Speed</div>
            </div>
          </div>
        </div>

        <button className="bg-white text-navy font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-full hover:bg-gray-100 transition-colors w-fit flex items-center gap-2 text-xs sm:text-sm shadow-md">
          Explore Boeing 787
          <svg className="w-4 h-4 text-aviation" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-5 right-5 bg-black/40 backdrop-blur-md text-white py-1.5 px-4 rounded-full flex items-center gap-2 text-sm font-medium z-10 border border-white/20">
        <Image src="/icons/plane.png" width={14} height={14} alt="plane" className="invert" />
        Wide-body
      </div>
    </div>
  );
}
