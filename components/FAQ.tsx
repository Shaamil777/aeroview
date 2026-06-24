"use client";

import { useState } from "react";
import { Plane, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What is AeroView?",
    answer: "AeroView helps travelers explore aircraft layouts, compare cabin configurations, and discover detailed seating information before flying."
  },
  {
    question: "How accurate are the seat maps?",
    answer: "Our layouts are regularly reviewed and updated using trusted aviation data sources whenever available."
  },
  {
    question: "Can aircraft layouts change?",
    answer: "Yes. Airlines may configure the same aircraft differently and layouts can change over time due to cabin updates or fleet modifications."
  },
  {
    question: "Can I compare different aircraft?",
    answer: "Yes. AeroView allows you to compare aircraft layouts and cabin configurations side by side."
  },
  {
    question: "Do all airlines have the same cabin layout?",
    answer: "No. The same aircraft model can have completely different seat layouts depending on the airline."
  }
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="faq" className="bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm sm:text-lg">
            Everything you need to know about AeroView.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-2xl sm:rounded-3xl border border-border-subtle shadow-xl shadow-blue-900/5 overflow-hidden">

          <div className="lg:w-2/5 flex flex-col border-b lg:border-b-0 lg:border-r border-border-subtle bg-gray-50/50">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-left px-4 sm:px-6 py-4 sm:py-6 border-b border-border-subtle last:border-b-0 flex items-center justify-between transition-all duration-300 focus:outline-none ${
                  activeTab === i 
                    ? "bg-white border-l-4 border-l-aviation text-[#0A2540] shadow-sm relative z-10" 
                    : "hover:bg-gray-100/50 text-text-secondary font-medium border-l-4 border-l-transparent"
                }`}
              >
                <span className={`pr-3 sm:pr-4 text-sm sm:text-lg ${activeTab === i ? 'font-bold' : ''}`}>
                  {faq.question}
                </span>
                <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${activeTab === i ? "text-aviation translate-x-1" : "text-gray-300"}`} />
              </button>
            ))}
          </div>

          <div className="lg:w-3/5 p-6 sm:p-8 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#F4F7FF] to-white relative overflow-hidden min-h-[280px] sm:min-h-[400px]">
            
            <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none transition-transform duration-1000 ease-out" key={`bg-icon-${activeTab}`}>
              <Plane className="w-96 h-96 -rotate-45" />
            </div>
            
            <div 
              className="relative z-10 max-w-xl animate-in fade-in slide-in-from-right-4 duration-500"
              key={`content-${activeTab}`} // This key forces re-render for animation on tab change
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-blue-900/5">
                <Plane className="w-8 h-8 text-aviation rotate-45" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-[#0A2540] mb-4 sm:mb-6 leading-tight">
                {faqs[activeTab].question}
              </h3>
              <div className="w-10 sm:w-12 h-1 bg-aviation rounded-full mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-xl text-text-secondary leading-relaxed font-light">
                {faqs[activeTab].answer}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
