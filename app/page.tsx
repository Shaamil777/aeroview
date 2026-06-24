import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PopularAirlines from "@/components/PopularAirlines";
import SeatMapPreview from "@/components/SeatMapPreview";
import PopularAircraft from "@/components/Compare";
import WorldBestCabins from "@/components/WorldBestCabins";
import BeyondSeatMap from "@/components/BeyondSeatMap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustSection />
      <PopularAirlines />
      <SeatMapPreview />
      <PopularAircraft />
      <WorldBestCabins />
      <BeyondSeatMap />
      <About />
      <FAQ />
      <CTA />
    </div>
  );
}
