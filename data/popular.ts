import { Airline, PopularAircraft } from '@/types/popular';

export const airlines: Airline[] = [
  { name: 'Qatar Airways', location: 'Doha, Qatar', aircraft: '230+', layouts: '45+', domain: 'qatarairways.com' },
  { name: 'Lufthansa', location: 'Frankfurt, Germany', aircraft: '270+', layouts: '40+', domain: 'lufthansa.com' },
  { name: 'Singapore Airlines', location: 'Singapore', aircraft: '150+', layouts: '34+', domain: 'singaporeair.com' },
  { name: 'ANA All Nippon', location: 'Tokyo, Japan', aircraft: '120+', layouts: '27+', domain: 'ana.co.jp' },
  { name: 'British Airways', location: 'London, UK', aircraft: '130+', layouts: '32+', domain: 'britishairways.com' },
  { name: 'Delta Air Lines', location: 'Atlanta, USA', aircraft: '1000+', layouts: '52+', domain: 'delta.com' },
  { name: 'Air France', location: 'Paris, France', aircraft: '250+', layouts: '35+', domain: 'airfrance.com' }
];

export const aircraftList: PopularAircraft[] = [
  { name: 'Boeing 787', location: 'Wide-body', aircraft: '240+', layouts: '3 Classes', domain: 'boeing.com' },
  { name: 'Airbus A350', location: 'Wide-body', aircraft: '300+', layouts: '3 Classes', domain: 'airbus.com' },
  { name: 'Boeing 777X', location: 'Wide-body', aircraft: '400+', layouts: '4 Classes', domain: 'boeing.com' },
  { name: 'Airbus A321neo', location: 'Narrow-body', aircraft: '200+', layouts: '2 Classes', domain: 'airbus.com' },
  { name: 'Boeing 737 MAX', location: 'Narrow-body', aircraft: '170+', layouts: '2 Classes', domain: 'boeing.com' },
  { name: 'Embraer E195-E2', location: 'Regional', aircraft: '120+', layouts: '1 Class', domain: 'embraer.com' },
  { name: 'Airbus A220', location: 'Narrow-body', aircraft: '130+', layouts: '2 Classes', domain: 'airbus.com' }
];
