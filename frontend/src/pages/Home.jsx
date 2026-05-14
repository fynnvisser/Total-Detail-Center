import React from "react";
import Header from "../components/site/Header";
import Hero from "../components/site/Hero";
import Trust from "../components/site/Trust";
import Marquee from "../components/site/Marquee";
import About from "../components/site/About";
import Features from "../components/site/Features";
import ExperienceSection from "../components/site/ExperienceSection";
import Services from "../components/site/Services";
import Process from "../components/site/Process";
import BeforeAfter from "../components/site/BeforeAfter";
import Pricing from "../components/site/Pricing";
import Gallery from "../components/site/Gallery";
import Team from "../components/site/Team";
import Reviews from "../components/site/Reviews";
import FAQ from "../components/site/FAQ";
import Location from "../components/site/Location";
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
      <About />
      <Features />
      <ExperienceSection />
      <Services />
      <Process />
      <BeforeAfter />
      <Pricing />
      <Gallery />
      <Team />
      <Reviews />
      <FAQ />
      <Location />
      <WhatsappStrip />
      <Contact />
      <Footer />
    </main>
  );
}
