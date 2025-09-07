"use client";
import React from "react";
import Image from "next/image";
import One from "/public/static_images/Why_One.png";
import Two from "/public/static_images/Why_Two.png";
import Three from "/public/static_images/Why_Three.png";

const Services = () => {
  const whyChooseUs = [
    {
      id: 1,
      title: "Happiness Guaranteed",
      subtitle: "100% Customer Satisfaction",
      description:
        "Your happiness is our top priority – we will make sure you get 100% satisfaction for all the services you need.",
      icon: One,
    },
    {
      id: 2,
      title: "Fully Screened and Insured",
      subtitle: "Trusted & Verified Professionals",
      description:
        "We’re trusted members of your local community, police-checked, ABN registered including GST, and fully insured before stepping foot in a client’s home.",
      icon: Two,
    },
    {
      id: 3,
      title: "Experienced, Dependable People",
      subtitle: "Expert Service Every Time",
      description:
        "4EVA KLEEN has experience in end-of-lease cleaning, window cleaning, carpet and tiles steam cleaning, all with 5-star quality ratings.",
      icon: Three,
    },
  ];

  return (
    <section
      className="w-full py-16 bg-[#6A9FCB]"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A]"
            style={{ lineHeight: "2.5rem" }}>
            Why <span classname="text-[#fff]"> Choose Us</span>
          </h2>
          <p
            className="text-gray-600 mt-3 mx-auto"
            style={{ fontSize: "1rem", lineHeight: "1.5rem", maxWidth: "600px" }}
          >
            Our commitment to quality, professionalism, and customer satisfaction sets us apart.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 max-w-sm w-full text-center border-2 border-transparent hover:border-yellow-400"
            >
              {/* Icon in colored circle */}
              <div className="w-[120px] h-[120px] mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500">
                <Image src={item.icon} alt={item.title} width={60} height={60} className="object-contain" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="mb-1 text-gray-800" style={{ fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                {item.title}
              </h3>
              <h4 className="mb-3 text-gray-500" style={{ fontSize: "0.875rem", lineHeight: "1.25rem", fontWeight: 400 }}>
                {item.subtitle}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm" style={{ fontSize: "0.875rem", lineHeight: "1.5rem" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
