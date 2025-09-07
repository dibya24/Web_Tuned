import Image from "next/image";
import Head from "next/head"; // ✅ Import Head for SEO
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
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>4EVA KLEEN | Professional Cleaning Services</title>
        <meta
          name="description"
          content="4EVA KLEEN offers professional cleaning services including carpet steam cleaning, window cleaning, end-of-lease cleaning, and more with guaranteed satisfaction."
        />
        <meta
          name="keywords"
          content="cleaning services, carpet cleaning, window cleaning, end-of-lease cleaning, 4EVA KLEEN"
        />
        <meta name="author" content="4EVA KLEEN" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="4EVA KLEEN | Professional Cleaning Services" />
        <meta
          property="og:description"
          content="Trusted cleaning specialists in carpet steam cleaning, end-of-lease cleaning, and more."
        />
        <meta property="og:image" content="/static_images/Hero_One.jpg" />
        <meta property="og:url" content="https://www.4evakleen.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="4EVA KLEEN | Professional Cleaning Services" />
        <meta
          name="twitter:description"
          content="Professional cleaning services with 100% customer satisfaction."
        />
        <meta name="twitter:image" content="/static_images/Hero_One.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.4evakleen.com" />
      </Head>

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
    </>
  );
}
