import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, MapPin, Palette } from "lucide-react";
import { userCars, company } from "../../data/mock";

export default function About() {
  return (
    <section id="over-ons" className="relative bg-ink py-20 md:py-28 text-ink-foreground">
      <div className="container-tdc grid gap-12 md:grid-cols-12 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] shadow-2xl">
            <img
              src={userCars.steamPeugeot}
              alt="Robert Visser — stoomreiniging in De Westereen"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">Aan het werk · Tolwei 24</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -top-4 -right-4 md:top-6 md:-right-6 rounded-2xl bg-primary px-5 py-3.5 shadow-2xl border-4 border-ink"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">Sinds</div>
            <div style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-3xl font-black leading-none text-white">2011</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-6"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Over Total Detail Center
          </span>
          <h2 className="display-md mt-5 text-white">
            14 jaar passie voor <span className="text-accent-red italic">lak</span>.
          </h2>
          <p className="mt-5 text-base text-white/75 leading-relaxed">
            In 2011 nam Robert Visser <span className="text-white">Landman Automaterialen</span> over. De zaak verhuisde
            naar Tolwei 24 in De Westereen en groeide uit tot {company.parent} &mdash; een complete detail-studio
            met eigen verfmengerij. Wij poetsen, polijsten, wrappen en blinderen elk voertuig met dezelfde aandacht voor detail.
          </p>
          <p className="mt-4 text-sm text-white/55 leading-relaxed">
            Geen wasstraat-routine: elke auto wordt grondig gewassen, gekleid en met de hand gepoetst &mdash; precies zoals het hoort.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Stat icon={Award} label="Sinds" value="2011" />
            <Stat icon={Palette} label="Verfmengerij" value="Op maat" />
            <Stat icon={MapPin} label="Studio" value="De Westereen" />
          </div>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary hover:text-white">
            Plan een afspraak <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <Icon size={15} className="text-primary" />
      <p className="mt-2.5 text-[10px] uppercase tracking-[0.15em] text-white/45">{label}</p>
      <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-0.5 text-base font-bold text-white leading-tight">{value}</p>
    </div>
  );
}
