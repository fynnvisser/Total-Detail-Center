import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Award, MapPin } from "lucide-react";
import { userCars, company } from "../../data/mock";

export default function About() {
  return (
    <section id="over-ons" className="relative overflow-hidden bg-ink py-24 md:py-32 text-ink-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <span className="ghost-word text-white/[0.04] text-[22vw]">SINCE 2011</span>
      </div>

      <div className="container-tdc relative grid gap-12 md:grid-cols-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="md:col-span-6 relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/5] shadow-2xl">
            <img
              src={userCars.steamPeugeot}
              alt="Robert Visser — stoomreiniging interieur"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover img-cinematic"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">Aan het werk in De Westereen</span>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -top-4 -right-4 md:top-6 md:-right-6 rounded-2xl bg-primary px-5 py-4 shadow-2xl border-4 border-ink"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">Sinds</div>
            <div style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-4xl font-black leading-none text-white">2011</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="md:col-span-6"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Over ons
          </span>
          <h2 className="display-lg mt-6 text-white">
            Robert Visser <span className="text-accent-red italic">&amp;</span> 14 jaar passie voor lak.
          </h2>
          <p className="mt-5 text-base text-white/75 leading-relaxed">
            Wat in 2011 begon met de overname van Landman Automaterialen, groeide uit tot {company.parent} &mdash;
            een complete detail-studio aan de Tolwei in De Westereen. Met een
            <span className="text-white"> eigen verfmengerij</span> voor lakken op maat,
            professioneel Meguiar&rsquo;s gereedschap en oog voor elk detail behandelen we elke auto, motor of klassieker
            met dezelfde precisie. Geen wasstraat-routine &mdash; alleen vakwerk.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Wrench size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/55">Tools</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-1 text-lg font-bold text-white leading-tight">Meguiar&rsquo;s Pro</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Award size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/55">Sinds</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-1 text-lg font-bold text-white leading-tight">2011</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <MapPin size={18} className="text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/55">Locatie</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-1 text-lg font-bold text-white leading-tight">De Westereen</p>
            </div>
          </div>

          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-primary hover:text-white">
            Maak kennis met Robert <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
