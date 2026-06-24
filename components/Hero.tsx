import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-navy text-cream pt-20 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center bg-cover bg-center flex-1 w-full"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="relative z-10 flex flex-col items-start text-left w-full max-w-5xl px-2 sm:px-6 lg:px-8 mb-8 md:mb-12 mt-8 md:mt-12">
        <h1 className="text-[2.2rem] sm:text-[2.7rem] md:text-[4.05rem] lg:text-[5.85rem] font-black font-heading tracking-tighter !text-white uppercase leading-[0.95] w-full mb-4 md:mb-6">
          <span className="block mb-1 sm:mb-2 md:mb-4">Fly Smarter.</span>
          <span className="block">Sit Better.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-cream opacity-90 font-medium leading-relaxed normal-case tracking-normal font-sans">
          Accurate aircraft layouts, cabin insights,
          <br className="hidden sm:block" />
          {" "}and seat intelligence for modern travelers.
        </p>
      </div>

      <div className="relative w-full max-w-5xl px-2 sm:px-6 lg:px-8 z-20">
        <SearchBox />
      </div>
    </section>
  );
}
