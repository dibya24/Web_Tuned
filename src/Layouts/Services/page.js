"use client";
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Carpet Steam Cleaning",
      subtitle: "Deep clean carpets efficiently",
      description:
        "We provide professional carpet steam cleaning to remove dirt, allergens, and stains efficiently.",
      icon: "https://picsum.photos/400/300?random=1",
      hoverIcon: "https://picsum.photos/400/300?random=11",
    },
    {
      id: 2,
      title: "Upholstery Cleaning",
      subtitle: "Freshen your furniture",
      description:
        "Expert cleaning for sofas, chairs, and other upholstered furniture to restore freshness.",
      icon: "https://picsum.photos/400/300?random=2",
      hoverIcon: "https://picsum.photos/400/300?random=12",
    },
    {
      id: 3,
      title: "Tile & Grout Cleaning",
      subtitle: "Polished and spotless tiles",
      description:
        "Deep cleaning for tiles and grout to remove dirt, mold, and grime for a polished look.",
      icon: "https://picsum.photos/400/300?random=3",
      hoverIcon: "https://picsum.photos/400/300?random=13",
    },
    {
      id: 4,
      title: "Window Cleaning",
      subtitle: "Crystal clear windows",
      description:
        "Streak-free window cleaning services for homes and offices, including frames and sills.",
      icon: "https://picsum.photos/400/300?random=4",
      hoverIcon: "https://picsum.photos/400/300?random=14",
    },
    {
      id: 5,
      title: "End of Lease Cleaning",
      subtitle: "Full bond recovery",
      description:
        "Comprehensive cleaning service for tenants to ensure full bond recovery at the end of lease.",
      icon: "https://picsum.photos/400/300?random=5",
      hoverIcon: "https://picsum.photos/400/300?random=15",
    },
  ];

  return (
    <section
      className="w-full py-16 bg-[#E3F2FD]"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A]"
            style={{ lineHeight: "2.5rem" }}
          >
            Our <span className="text-[#6A9FCB]">Services</span>
          </h2>
          <p
            className="text-gray-600 mt-3 mx-auto"
            style={{ fontSize: "1rem", lineHeight: "1.5rem", maxWidth: "600px" }}
          >
            Explore our range of professional cleaning services designed to keep your home and office spotless.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer transform transition hover:scale-105"
            >
              {/* Default Image */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={service.hoverIcon}
                alt={service.title}
                className="w-full h-64 object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40 group-hover:bg-black/60 transition">
                {/* Always visible title + subtitle */}
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ lineHeight: "1.5rem" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm text-white"
                    style={{ lineHeight: "1.25rem", fontWeight: 400 }}
                  >
                    {service.subtitle}
                  </p>
                </div>

                {/* Hover content */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 mt-4">
                  <p
                    className="text-sm text-white mb-2"
                    style={{ lineHeight: "1.5rem" }}
                  >
                    {service.description}
                  </p>
                  <button className="bg-[#E94290] hover:bg-[#C6397F] text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
