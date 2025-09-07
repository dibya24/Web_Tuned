// components/TopBar.js
import { Facebook, Instagram, Music2, Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#7b5e5e] text-white text-sm py-1">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-16 py-2">
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-gray-300">
            {/* Using Music2 as TikTok alternative since Lucide doesn’t have TikTok */}
            <Music2 size={18} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>9876543210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>majestic@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Mon-Fri (10:00A.M - 5:00P.M)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
