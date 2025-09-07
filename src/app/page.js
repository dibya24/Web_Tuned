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
      <div>
        <Top_Header />
      </div>

      {/* Navigation Bar - Sticky */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div id="top">
          <Slider />
        </div>

        <div id="about">
          <About_Us />
        </div>

        <div id="services">
          <Services />
        </div>

        <Testimonials />
        <Why_Choose_Us />
      </main>

      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

