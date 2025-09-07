import Image from "next/image";
import Top_Header from "../components/Top_header";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Top_Header />
      <NavBar />

      {/* Main Content placeholder */}
      <main className="flex-grow">
        
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
