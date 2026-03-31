import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import MissionVision from "./components/MissionVision";
import GlobeSection from "./components/GlobeSection";
import Get from "./components/get";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <MissionVision/>
      <Services />
      <Get />
      <Testimonials/>



    </main>
  );
}