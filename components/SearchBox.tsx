import Image from "next/image";

export default function SearchBox() {
  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] shadow-[0_16px_48px_0_rgba(0,0,0,0.5)] p-6 md:p-8 border border-white/20">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold !text-white flex items-center gap-3">
          <Image src="/icons/takeoff.png" alt="Takeoff" width={28} height={28} className="object-contain brightness-0 invert" />
          Search Flights, Airlines & Aircraft
        </h2>
        <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.642 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.358-.166-2.001A11.954 11.954 0 0110 1.944zM8.707 10.707a1 1 0 00-1.414-1.414l-2 2a1 1 0 101.414 1.414l1.293-1.293 3.293 3.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" />
          </svg>
          Explore cabin configurations globally
        </div>
      </div>
      <form className="flex flex-col md:flex-row gap-4 items-stretch justify-center w-full">
        <div className="flex-1 w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-inner border border-white/10 focus-within:border-white/30 focus-within:bg-white/10 transition-all hover:-translate-y-0.5 duration-200 flex flex-col md:flex-row">
          <div className="relative flex-1 px-5 pt-6 pb-2 group">
            <input type="text" id="flight-number" placeholder="e.g. EK203" className="peer w-full bg-transparent p-0 border-none outline-none text-white focus:ring-0 font-medium text-sm md:text-base placeholder:text-white/40 transition-colors" />
            <label htmlFor="flight-number" className="absolute left-5 top-3 text-[10px] font-bold text-white/60 uppercase tracking-wider transition-all duration-200 pointer-events-none peer-focus:text-white">
              FLIGHT NUMBER
            </label>
          </div>

          <div className="hidden md:block w-[1px] bg-white/10 my-3"></div>
          <div className="block md:hidden h-[1px] bg-white/10 mx-5"></div>

          <div className="relative flex-1 px-5 pt-6 pb-2 group">
            <input type="text" id="airline" placeholder="e.g. Emirates" className="peer w-full bg-transparent p-0 border-none outline-none text-white focus:ring-0 font-medium text-sm md:text-base placeholder:text-white/40 transition-colors" />
            <label htmlFor="airline" className="absolute left-5 top-3 text-[10px] font-bold text-white/60 uppercase tracking-wider transition-all duration-200 pointer-events-none peer-focus:text-white">
              AIRLINE (OPTIONAL)
            </label>
          </div>

          <div className="hidden md:block w-[1px] bg-white/10 my-3"></div>
          <div className="block md:hidden h-[1px] bg-white/10 mx-5"></div>

          <div className="relative flex-1 px-5 pt-6 pb-2 group">
            <input type="text" id="aircraft" placeholder="e.g. A350" className="peer w-full bg-transparent p-0 border-none outline-none text-white focus:ring-0 font-medium text-sm md:text-base placeholder:text-white/40 transition-colors" />
            <label htmlFor="aircraft" className="absolute left-5 top-3 text-[10px] font-bold text-white/60 uppercase tracking-wider transition-all duration-200 pointer-events-none peer-focus:text-white">
              AIRCRAFT (OPTIONAL)
            </label>
          </div>
        </div>
        <div className="w-full md:w-auto h-14 md:h-auto">
          <button type="submit" className="w-full md:w-auto h-full bg-gradient-to-r from-aviation to-teal text-white font-bold rounded-2xl px-10 py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-aviation/40 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-aviation/50 duration-200 group">
            <span className="text-base tracking-wide">Search</span>
            <Image src="/icons/plane.png" alt="Search Plane" width={20} height={20} className="object-contain ml-1 brightness-0 invert group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </form>

      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-3 text-sm">
        <span className="text-white/60 font-medium">Popular searches:</span>
        <div className="flex flex-wrap gap-2">
          {['✈ EK203', '✈ Emirates A380', '✈ Qatar A350', '✈ Boeing 787-9', '✈ Air India A320neo'].map((search) => (
            <button key={search} className="px-3 py-1.5 rounded-full border border-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
