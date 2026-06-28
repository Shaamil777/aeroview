"use client";

import { useState } from 'react';
import { Aircraft } from '@/types/aircraft';
import { AIRCRAFT_DATA } from '@/data/aircraft';
import AircraftCard from '@/components/compare/AircraftCard';
import CompareTray from '@/components/compare/CompareTray';
import CompareModal from '@/components/compare/CompareModal';

export default function Compare() {
  const [activeTab, setActiveTab] = useState<'Airlines' | 'Aircraft' | 'Routes'>('Airlines');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedAircraft, setSelectedAircraft] = useState<Aircraft[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const tabs = ['Airlines', 'Aircraft', 'Routes'] as const;

  const filters = {
    Airlines: ['All', 'Emirates', 'Qatar Airways', 'Lufthansa', 'Singapore Airlines'],
    Aircraft: ['All', 'Airbus A350-900', 'Airbus A380-800', 'Boeing 787-9', 'Boeing 777-300ER'],
    Routes: ['All', 'Dubai to London', 'Doha to New York', 'Singapore to Sydney', 'Frankfurt to New York']
  };

  const handleTabChange = (tab: 'Airlines' | 'Aircraft' | 'Routes') => {
    setActiveTab(tab);
    setActiveFilter('All');
  };

  const toggleSelection = (aircraft: Aircraft) => {
    setSelectedAircraft(prev => {
      const isSelected = prev.find(a => a.id === aircraft.id);
      if (isSelected) {
        return prev.filter(a => a.id !== aircraft.id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, aircraft];
    });
  };

  const filteredData = AIRCRAFT_DATA.filter(aircraft => {
    if (activeFilter === 'All') return true;
    if (activeTab === 'Airlines') return aircraft.airline === activeFilter;
    if (activeTab === 'Aircraft') return aircraft.name === activeFilter;
    if (activeTab === 'Routes') return aircraft.route === activeFilter;
    return true;
  });

  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC] relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-navy font-heading mb-3 sm:mb-4">Compare Aircraft & Cabin Configurations</h2>
          <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto px-2">
            Compare cabin configurations across airlines, aircraft families, and popular routes to identify the most comfortable option before booking.
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex bg-white border border-border-subtle p-1.5 rounded-full shadow-sm">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-navy text-white shadow-md' 
                    : 'text-text-secondary hover:text-navy hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {filters[activeTab].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors border ${
                activeFilter === filter
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-text-secondary border-border-subtle hover:border-navy/30 hover:text-navy hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredData.map(aircraft => (
            <AircraftCard
              key={aircraft.id}
              aircraft={aircraft}
              activeTab={activeTab}
              isSelected={selectedAircraft.some(a => a.id === aircraft.id)}
              onToggle={toggleSelection}
            />
          ))}
        </div>
      </div>

      <CompareTray
        selectedAircraft={selectedAircraft}
        onClear={() => setSelectedAircraft([])}
        onRemove={toggleSelection}
        onCompare={() => setShowCompareModal(true)}
      />

      {showCompareModal && (
        <CompareModal
          selectedAircraft={selectedAircraft}
          onClose={() => setShowCompareModal(false)}
        />
      )}
    </section>
  );
}
