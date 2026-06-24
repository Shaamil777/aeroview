"use client";

import {
  Zap,
  BarChart2,
  Globe,
  RefreshCw,
  Search,
  CheckCircle2,
  Play,
  ArrowRightLeft,
  Move,
  Star
} from "lucide-react";
import Image from "next/image";

export default function BeyondSeatMap() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-heading">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-12">

          <div className="w-full lg:w-[35%] flex flex-col gap-6 sm:gap-8">
            
            <div className="flex flex-col">
              <span className="text-aviation font-bold text-sm tracking-widest uppercase mb-4">
                Beyond The Seat Map
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-4 sm:mb-6 leading-tight">
                Everything Behind <br /> Your Flight
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Powerful tools and detailed insights to help you explore aircraft cabins, compare configurations, and find the best seats for your journey.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary">
                    Trusted by <span className="font-bold text-aviation">50,000+</span> travelers worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer shadow-lg mt-auto hidden sm:block">
              <Image
                src="/images/hero.jpg"
                alt="Aircraft Wing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-[#0A2540] ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 text-white inline-block border border-white/10">
                  <p className="font-medium">Experience cabins</p>
                  <p className="font-medium">like never before</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

            <div className="bg-white border border-border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <Move className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">360° Cabin Views</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                Explore immersive 360° cabin views and understand the real feel of every aircraft.
              </p>
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mt-auto bg-gray-100">
                <Image
                  src="/images/boeing_787_aircraft.png"
                  alt="Cabin View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Move className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-green-500 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Fast Flight Lookup</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                Find aircraft and seat maps in seconds using flight numbers, airlines, routes, or airports.
              </p>
              <div className="w-full flex flex-col gap-3 mt-auto">
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-center shadow-sm">
                  <span className="text-xs text-gray-400 flex-grow px-2">e.g. EK205, London to Dubai</span>
                  <div className="bg-blue-600 rounded flex items-center justify-center w-8 h-8">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                     
                     <div className="w-full h-full bg-red-600 flex items-center justify-center text-white text-[10px] font-bold">EK</div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0A2540]">Emirates EK205</p>
                    <p className="text-[10px] text-gray-500">DXB → LHR</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Boeing 777-300ER</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                <BarChart2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Seat Comfort Scores</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                Our proprietary comfort score helps you compare seats based on real passenger experience.
              </p>
              <div className="w-full h-36 flex flex-col items-center justify-end mt-auto relative pb-4">
                 
                 <div className="relative w-40 h-20 overflow-hidden">
                    <div className="w-40 h-40 rounded-full border-[12px] border-gray-100 absolute top-0 left-0"></div>
                    
                    <div className="w-40 h-40 rounded-full border-[12px] border-transparent border-t-red-500 border-r-yellow-400 border-b-green-500 border-l-transparent absolute top-0 left-0 transform -rotate-45"></div>
                 </div>
                 <div className="absolute bottom-4 flex flex-col items-center">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#0A2540]">8.7</span>
                      <span className="text-sm font-bold text-gray-400">/10</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Comfort Score ⓘ</span>
                 </div>
              </div>
            </div>

            <div className="bg-white border border-border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                <ArrowRightLeft className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Compare Aircraft Layouts</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                Compare aircraft and cabin configurations side-by-side to choose the best option.
              </p>
              <div className="w-full flex justify-between items-center mt-auto px-2 relative">
                
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-3 w-[45%] flex flex-col items-center">
                   <p className="text-[11px] font-bold text-[#0A2540] mb-3">A350-900</p>
                   <div className="flex gap-1.5 opacity-60">
                     <div className="flex flex-col gap-1.5"><div className="w-2.5 h-3 bg-blue-300 rounded-sm"></div><div className="w-2.5 h-3 bg-blue-300 rounded-sm"></div><div className="w-2.5 h-3 bg-blue-300 rounded-sm"></div></div>
                     <div className="flex flex-col gap-1.5"><div className="w-2.5 h-3 bg-teal-300 rounded-sm"></div><div className="w-2.5 h-3 bg-teal-300 rounded-sm"></div><div className="w-2.5 h-3 bg-teal-300 rounded-sm"></div></div>
                   </div>
                </div>
                
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md z-10">
                  VS
                </div>
                
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-3 w-[45%] flex flex-col items-center">
                   <p className="text-[11px] font-bold text-[#0A2540] mb-3">B787-9</p>
                   <div className="flex gap-1.5 opacity-60">
                     <div className="flex flex-col gap-1.5"><div className="w-2.5 h-3 bg-blue-400 rounded-sm"></div><div className="w-2.5 h-3 bg-blue-400 rounded-sm"></div><div className="w-2.5 h-3 bg-blue-400 rounded-sm"></div></div>
                     <div className="flex flex-col gap-1.5"><div className="w-2.5 h-3 bg-teal-400 rounded-sm"></div><div className="w-2.5 h-3 bg-teal-400 rounded-sm"></div><div className="w-2.5 h-3 bg-teal-400 rounded-sm"></div></div>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 relative z-10">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2 relative z-10">Global Airline Coverage</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow relative z-10">
                Access data from 500+ airlines and thousands of aircraft across the world.
              </p>
              <div className="w-full h-32 mt-auto relative flex items-center justify-center opacity-70">
                 
                 <svg viewBox="0 0 400 200" className="w-full h-full fill-gray-200">
                    <path d="M 50 50 Q 80 40 100 60 T 150 70 T 180 40 T 250 80 T 300 50 T 350 90 T 380 120 Q 350 150 300 160 T 200 180 T 100 160 T 50 120 Z" />
                 </svg>
                 
                 <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                 <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                 <div className="absolute top-[25%] left-[55%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                 <div className="absolute top-[50%] left-[75%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                 <div className="absolute top-[60%] left-[35%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              </div>
            </div>

            <div className="bg-white border border-border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <RefreshCw className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Continuously Updated Data</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                We update our data regularly to ensure you always get the most accurate information.
              </p>
              <div className="w-full mt-auto">
                <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Last updated</p>
                    <p className="text-sm font-bold text-[#0A2540]">May 24, 2025</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
