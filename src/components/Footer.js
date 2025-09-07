"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaBuilding, FaClock } from "react-icons/fa";
import Logo from "/public/static_images/Logo.png";

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 flex flex-col md:flex-row md:justify-between md:gap-12">
                
                {/* Left Section - About */}
                <div className="flex-2 mb-10 md:mb-0">
                    <div className="mb-4">
                        <Image
                            src={Logo}
                            alt="Majestic Group Logo"
                            width={200}
                            height={40}
                        />
                    </div>
                    <p className="text-[#5C6F7A] mb-6 text-sm text-justify">
                        4EVA KLEEN has been excelling at cleaning services providing Carpet steam cleaning, Upholstery steam cleaning, Tile & Grout cleaning, Windows cleaning and End of lease cleaning. Because 4EVA KLEEN is a family run business, We take your needs very seriously. We feel our Company’s reputation is at stake on each and every job! If something is not to your 100%
                    </p>
                    <div className="space-y-3 text-[#5C6F7A] text-sm">
                        <p className="flex items-center gap-2"><FaPhone style={{ transform: "scaleX(-1)" }} /> 0423646427</p>
                        <p className="flex items-center gap-2"><FaEnvelope /> 4evakleen@gmail.com</p>
                        <p className="flex items-center gap-2"><FaBuilding /> Perth W.A</p>
                        <p className="flex items-center gap-2"><FaClock /> Monday to Sunday (9AM - 6PM)</p>
                    </div>
                </div>

                {/* Pages */}
                <div className="flex-1 mb-10 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4 text-[#3A3A3A]">PAGES</h3>
                    <ul className="space-y-2 text-[#5C7A7A] text-sm">
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">About</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Contact</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Categories</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Products</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="flex-1 mb-10 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4 text-[#3A3A3A]">USEFUL LINKS</h3>
                    <ul className="space-y-2 text-[#5C7A7A] text-sm">
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Company Policy</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Associate Policy</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Privacy Policy</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Shipping Policy</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Terms & Conditions</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Exchange & Refund Policy</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Code of Ethics & Conduct</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4 text-[#3A3A3A]">SOCIAL LINKS</h3>
                    <div className="flex gap-4 text-2xl text-[#5C6F7A]">
                        <FaFacebookF className="cursor-pointer hover:text-[#C4A15C] transition" />
                        <FaInstagram className="cursor-pointer hover:text-[#C4A15C] transition" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#6A9FCB] text-center py-4 text-white text-sm">
                ©2025 4Eva Kleen. Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
