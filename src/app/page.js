import Image from "next/image";
import Top_Header from "../components/Top_header";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import Slider from "../Layouts/Slider/page";
import About_Us from "../Layouts/About/page";
import Services from "../Layouts/Services/page";
import Why_Choose_Us from "../Layouts/Why/page";
import Testimonials from "../Layouts/Testimonials/page";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="hidden md:block">
        <Top_Header />
      </div>

      {/* Navigation Bar */} 
      <NavBar />

      {/* Main Content placeholder */}
      <main className="flex-grow">
        {/* Slider */}
        <Slider />

        {/* About Us */}
        <About_Us />

        <Services />

        {/* Testinomials */}
        <Testimonials />

        <Why_Choose_Us />

      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
