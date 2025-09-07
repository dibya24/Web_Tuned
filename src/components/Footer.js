import React from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";
import Logo from "/public/static_images/Logo.png";

const Footer = () => {
    return (
        <footer className="w-full" style={{ background: "white" }}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Left Section - About */}
                <div>
                    <img
                        src={Logo}
                        alt="Majestic Group Logo"
                        className="w-10 h-10"
                    />
                    <p className="text-[#3A3A3A] mb-6 text-sm sm:text-base">
                        Majestic aims to empower homeowners with top-tier products, fostering comfort
                        and creativity. Exported to 150+ countries, readily available in Nepal, offering
                        attainable solutions for premium kitchen needs.
                    </p>
                    <div className="space-y-3 text-[#5C6F7A] text-sm">
                        <p className="flex items-center gap-2"><FaPhone /> 987654322</p>
                        <p className="flex items-center gap-2"><FaEnvelope /> majestic@gmail.com</p>
                        <p className="flex items-center gap-2"><FaBuilding /> Kathmandu</p>
                    </div>
                </div>

                {/* Pages */}
                <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: "#3A3A3A" }}>PAGES</h3>
                    <ul className="space-y-2 text-[#5C7A7A] text-sm">
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">About</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Contact</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Categories</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">Products</a></li>
                        <li><a className="hover:text-[#C4A15C] cursor-pointer transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: "#3A3A3A" }}>USEFUL LINKS</h3>
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

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: "#3A3A3A" }}>SOCIAL LINKS</h3>
                    {/* <div className="flex mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-[#B0A49A] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#C4A15C]"
            />
            <button
              className="px-5 bg-[#7A5C5C] text-white rounded-r-lg hover:bg-[#C4A15C] transition"
            >
              →
            </button>
          </div> */}
                    <div className="flex gap-4 text-2xl text-[#5C6F7A]">
                        <FaFacebookF className="cursor-pointer hover:text-[#C4A15C] transition" />
                        <FaInstagram className="cursor-pointer hover:text-[#C4A15C] transition" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#7A5C5C] text-center py-4 text-white text-sm">
                ©2025 4Eva Kleen. Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
