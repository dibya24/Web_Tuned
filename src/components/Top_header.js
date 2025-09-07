// components/TopBar.js
import { Facebook, Instagram, Phone, Mail, Clock, Linkedin, Youtube } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#6A9FCB] text-white text-sm py-1">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-16 py-2 space-y-2 sm:space-y-0">

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <div className="w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex justify-center items-center transition-colors duration-200">
              <Facebook size={18} className="text-[#6A9FCB]" />
            </div>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <div className="w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex justify-center items-center transition-colors duration-200">
              <Instagram size={18} className="text-[#6A9FCB]" />
            </div>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <div className="w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex justify-center items-center transition-colors duration-200">
              <Linkedin size={18} className="text-[#6A9FCB]" />
            </div>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <div className="w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex justify-center items-center transition-colors duration-200">
              <Youtube size={18} className="text-[#6A9FCB]" />
            </div>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0 items-center text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>0423646427</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>4evakleen@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Perth W.A</span>
          </div>
        </div>
      </div>
    </div>
  );
}