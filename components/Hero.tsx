import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-navy text-cream pt-24 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center bg-cover bg-center min-h-[65vh]"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="relative z-10 flex flex-col items-start text-left w-full max-w-5xl px-4 sm:px-6 lg:px-8 mb-12 mt-8">
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black font-heading tracking-tighter !text-white uppercase leading-[0.95] w-full mb-6">
          <span className="block mb-2 md:mb-4">Fly Smarter.</span>
          <span className="block">Sit Better.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-cream opacity-90 font-medium leading-relaxed normal-case tracking-normal font-sans">
          Accurate aircraft layouts, cabin insights, and seat intelligence for modern travelers.
        </p>
      </div>

      {/* Search Box */}
      <div className="relative w-full max-w-5xl px-4 sm:px-6 lg:px-8 z-20">
        <SearchBox />
      </div>
    </section>
  );
}
