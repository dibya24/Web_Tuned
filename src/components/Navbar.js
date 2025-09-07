"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LOGO from "/public/static_images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={` w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO}
              alt="Logo"
              width={180}
              height={40}
              className="object-contain"
              draggable={false}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-base sm:text-lg transition-colors ${
                  pathname === item.path
                    ? "text-[#E53A7F] font-semibold"
                    : "text-gray-700 hover:text-[#E53A7F]"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#E53A7F]" />
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <button className="ml-4 px-6 py-2 rounded-xl bg-[#E94290] hover:bg-[#C6397F] text-white font-semibold shadow-lg transition duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <Image
              src={LOGO}
              alt="Logo"
              width={36}
              height={36}
              className="object-contain"
              draggable={false}
            />
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`px-3 py-2 rounded text-base sm:text-lg transition-colors ${
                pathname === item.path
                  ? "text-[#E53A7F] font-semibold bg-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <button className="mt-4 px-6 py-2 rounded-xl bg-[#E94290] hover:bg-[#C6397F] text-white font-semibold shadow-lg transition duration-300">
            Book Now
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
