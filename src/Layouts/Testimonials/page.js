"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      designation: "CEO, ABC Corp",
      feedback:
        "4EVA KLEEN have backgrounds in end of lease cleaning, window cleaning, carpet and tiles steam cleaning with quality rating of 5 stars.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Gupta",
      designation: "Marketing Manager, XYZ Ltd",
      feedback:
        "I had an incident and needed urgent cleaning of my rug. Wes came out the same day and cleaned my rug as good as new.",
      rating: 3,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Ravi Khadka",
      designation: "Product Designer, DesignHub",
      feedback:
        "I love the variety offered. Truly makes life easier with their household essentials.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 4,
      name: "Sneha Patel",
      designation: "HR Manager, TalentWorks",
      feedback:
        "Excellent durability and design. Would recommend to family and friends!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },

    {
      id: 5,
      name: "Sneha Patel",
      designation: "HR Manager, TalentWorks",
      feedback:
        "Excellent durability and design. Would recommend to family and friends!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  // Motion variants for fade-in + slide-up
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="w-full py-16 bg-white"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A] leading-snug">
            What Our <span className="text-[#6A9FCB]">Customers Say</span>
          </h2>
          <p className="text-gray-600 mt-4 mx-auto max-w-xl text-base sm:text-lg">
            Hear from our satisfied clients about the quality and reliability of our services.
          </p>
        </div>

        {/* Swiper Testimonials */}
        <Swiper
          loop={true}
          centeredSlides={true}
          spaceBetween={24}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          //   renderBullet: (index, className) => {
          //     return `<span class="${className} bg-[#6A9FCB] w-4 h-4 rounded-full mx-1 inline-block"></span>`;
          //   },
          // }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-gray-200 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-100"
              >
                {/* Profile Image & Name */}
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#6A9FCB]"
                  />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#3A6EA5]">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">{t.designation}</p>
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="mb-4 text-lg">{renderStars(t.rating)}</div>

                {/* Feedback Text */}
                <p className="text-sm sm:text-base text-[#5C6F7A] flex-grow">{t.feedback}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
