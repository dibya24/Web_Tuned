"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

  // Motion variants for fade-in + slide-up
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
<section
  className="w-full py-16 bg-[#6A9FCB] relative"
  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
>
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
        Why <span className="text-yellow-400">Choose Us</span>
      </h2>
      <p className="text-gray-100 text-lg max-w-xl mx-auto">
        Our commitment to quality, professionalism, and customer satisfaction sets us apart.
      </p>
    </div>

    {/* Infographic Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative items-start">
      {whyChooseUs.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg text-center relative hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
        >
          {/* Icon */}
          <div className="w-28 h-28 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500 border-4 border-white shadow-lg">
            <Image
              src={item.icon}
              alt={item.title}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-gray-800 font-bold text-xl mb-1">{item.title}</h3>
          <h4 className="text-gray-500 text-sm mb-3">{item.subtitle}</h4>

          {/* Description */}
          <p className="text-gray-600 text-sm">{item.description}</p>

          {/* Optional Connector Line */}
          {index < whyChooseUs.length - 1 && (
            <div className="hidden md:block absolute top-16 right-[-50%] w-[50%] h-1 bg-yellow-300 rounded-full z-0"></div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
