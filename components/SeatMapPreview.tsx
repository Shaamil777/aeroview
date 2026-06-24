import Image from "next/image";
import AircraftSpecCard from "@/components/seatmap/AircraftSpecCard";

export default function SeatMapPreview() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-[85rem] mx-auto bg-[#F4F7FB] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12">

          <div className="lg:w-[18%] w-full">
            <h4 className="text-blue-600 font-bold text-xs tracking-wider uppercase mb-2">Explore Cabin Layouts</h4>
            <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">Interactive Seat Map Preview</h2>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Explore real layouts and find your perfect seat.
            </p>
          </div>

          <div className="lg:w-[62%] w-full flex flex-col items-center relative">
            <div className="flex justify-center w-full">
              <Image 
                src="/images/seatmaps.png" 
                alt="Airplane Seat Map" 
                width={1200} 
                height={500} 
                className="w-full object-contain mix-blend-multiply scale-100 lg:scale-110 origin-center"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] font-medium text-text-secondary mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-green-500 rounded-sm"></div>
                <span>Best Seats</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-yellow-400 rounded-sm"></div>
                <span>Extra Legroom</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-red-500 rounded-sm"></div>
                <span>Limited Recline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-white border border-gray-200 rounded-sm shadow-sm"></div>
                <span>Standard Seat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-blue-500 rounded-sm"></div>
                <span>Lavatory</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-gray-500 rounded-sm"></div>
                <span>Galley</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Exit</span>
              </div>
            </div>
          </div>

          <div className="lg:w-[20%] w-full">
            <AircraftSpecCard />
          </div>

        </div>
      </div>
    </section>
  );
}
