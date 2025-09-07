"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HeroOne from "/public/static_images/Hero_One.jpg"; 

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      image: HeroOne, 
      title: "CLEANING SPECIALIST",
      subtitle: "End of lease cleans, Window, frames and track cleaning",
      buttonText: "Shop Now",
      buttonLink: "/services",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1024/1200/500", 
      title: "Affordable & Reliable",
      subtitle: "Making everyday living easier",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative h-[50vh] sm:h-[400px] md:h-[500px] lg:h-[650px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white opacity-50 rounded-full mx-1 inline-block hover:opacity-100 transition"></span>`;
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="relative w-full h-full">
              {/* Background Image */}
              {typeof slide.image === "string" ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              )}

              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
                  {slide.subtitle}
                </p>
                {slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className="px-6 py-3 mt-4 rounded-xl text-white bg-[#E94290] hover:bg-[#C6397F] font-semibold shadow-lg transition duration-300 ease-in-out"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation arrows */}
        <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl hover:text-pink-500">
          &#8249;
        </div>
        <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl hover:text-pink-500">
          &#8250;
        </div>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
