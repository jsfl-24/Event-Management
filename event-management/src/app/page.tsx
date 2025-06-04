"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navigation />
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}
