import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PopularAirlines from "@/components/PopularAirlines";
import SeatMapPreview from "@/components/SeatMapPreview";
import PopularAircraft from "@/components/Compare";
import WorldBestCabins from "@/components/WorldBestCabins";
import BeyondSeatMap from "@/components/BeyondSeatMap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* 2. Trust Section */}
      <TrustSection />

      {/* 3. Popular Airlines */}
      <PopularAirlines />

      {/* Seat Map Preview */}
      <SeatMapPreview />

      {/* 4. Popular Aircraft */}
      <PopularAircraft />

      {/* 4.5 World's Best Cabins */}
      <WorldBestCabins />

      {/* 5. Why Choose Us / Features */}
      <BeyondSeatMap />



      {/* 7. About */}
      <section id="about" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">About AeroView</h2>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
            AeroView was created to bring clarity and ease to the flying experience. By meticulously cataloging the world's most popular aircraft and cabin layouts, we provide the ultimate resource for travelers seeking their perfect flight. Whether you are searching for the most spacious business class seat or the best economy configuration for a long-haul journey, our comprehensive platform puts the knowledge you need right at your fingertips.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. CTA */}
      <CTA />
    </div>
  );
}
