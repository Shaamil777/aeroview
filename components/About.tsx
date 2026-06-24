import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-14 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading mb-4 sm:mb-6">About AeroView</h2>
        <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed">
          AeroView was created to bring clarity and ease to the flying experience. By meticulously cataloging the world&apos;s most popular aircraft and cabin layouts, we provide the ultimate resource for travelers seeking their perfect flight. Whether you are searching for the most spacious business class seat or the best economy configuration for a long-haul journey, our comprehensive platform puts the knowledge you need right at your fingertips.
        </p>
      </div>
    </section>
  );
}
