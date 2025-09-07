import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-16 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C4A15C] bg-[#B0A49A]/20 rounded-full">
            About 4EVA Kleen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A] leading-snug">
            Modern Aesthetics{" "}
            <span className="text-[#6A9FCB]">Meets Exceptional Performance</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C6F7A] leading-relaxed text-justify">
            4EVA KLEEN has been excelling at cleaning services providing Carpet steam cleaning, Upholstery steam cleaning, Tile & Grout cleaning, Windows cleaning and End of lease cleaning.

            Because 4EVA KLEEN is a family run business, We take your needs very seriously. We feel our Company’s reputation is at stake on each and every job! If something is not to your 100% satisfaction, we will return to the property and make good.

            That is our guarantee.
          </p>
          <p className="text-base sm:text-lg text-[#5C7A7A] leading-relaxed">
            We value and respect our clients ensuring quality, maintaining your trust and providing consistent reliability.

            4 EVA KLEEN is thorough!
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button className="px-6 py-3 rounded-xl text-white bg-[#E94290] hover:bg-[#C6397F] font-semibold shadow-lg transition duration-300 ease-in-out cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
          <div className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer">
            <img
              src="https://picsum.photos/id/100/500/400"
              alt="Kitchen Aesthetics"
              className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer">
            <img
              src="https://picsum.photos/id/101/500/400"
              alt="Modern Interiors"
              className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer">
            <img
              src="https://picsum.photos/id/102/500/400"
              alt="Premium Build"
              className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition cursor-pointer">
            <img
              src="https://picsum.photos/id/103/500/400"
              alt="Global Standards"
              className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover"
            />
          </div>

          {/* Decorative Gradient Circle */}
          <div className="absolute -z-10 top-1/2 right-1/3 w-56 h-56 bg-[#C4A15C] rounded-full blur-3xl opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
