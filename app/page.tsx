import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PopularAirlines from "@/components/PopularAirlines";
import SeatMapPreview from "@/components/SeatMapPreview";
import PopularAircraft from "@/components/Compare";

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

      {/* 5. Why Choose Us / Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-heading mb-16 text-center">Why Choose AeroView</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-teal/20 text-teal rounded-full flex items-center justify-center mb-6">
                  <span className="text-sm">Icon</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-heading">Feature {i}</h3>
                <p className="text-text-secondary">Highlighting the specific benefits and premium experience of choosing our platform.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section id="how-it-works" className="bg-navy text-cream py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 mx-auto bg-aviation text-navy font-bold rounded-full flex items-center justify-center mb-6 text-xl">
                  {i}
                </div>
                <h3 className="font-bold text-xl mb-3">Step {i}</h3>
                <p className="text-bg-soft text-sm">Clear description of this step in the user journey.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
