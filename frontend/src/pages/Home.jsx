import React from "react";
import Header from "../components/site/Header";
import Hero from "../components/site/Hero";
import Trust from "../components/site/Trust";
import Marquee from "../components/site/Marquee";
import ExperienceSection from "../components/site/ExperienceSection";
import Services from "../components/site/Services";
import BeforeAfter from "../components/site/BeforeAfter";
import Gallery from "../components/site/Gallery";
import Reviews from "../components/site/Reviews";
import WhatsappStrip from "../components/site/WhatsappStrip";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Trust />
      <Marquee />
      <ExperienceSection />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Reviews />
      <WhatsappStrip />
      <Contact />
      <Footer />
    </main>
  );
}
