import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PopularAirlines from "@/components/PopularAirlines";
import SeatMapPreview from "@/components/SeatMapPreview";
import PopularAircraft from "@/components/Compare";
import WorldBestCabins from "@/components/WorldBestCabins";
import BeyondSeatMap from "@/components/BeyondSeatMap";
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <div className="aspect-video bg-border-subtle rounded-xl flex items-center justify-center text-text-secondary">
              About Us Image
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-heading mb-6">About AeroView</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We are dedicated to revolutionizing how you experience flight. Our platform connects you with the best airlines and aircraft to ensure your journey is as seamless as your destination.
            </p>
            <button className="px-6 py-3 bg-aviation text-navy font-medium rounded-lg hover:bg-aviation/90 transition-colors">
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="bg-bg-soft py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-heading mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card border border-border-subtle rounded-lg p-6">
                <h3 className="font-bold text-heading mb-2">Question {i}?</h3>
                <p className="text-text-secondary text-sm">Detailed answer to the frequently asked question goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section id="cta" className="bg-aviation py-20 px-4 sm:px-6 lg:px-8 text-center text-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to take off?</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of travelers who trust AeroView for their journey.</p>
          <button className="px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy/90 transition-colors shadow-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
