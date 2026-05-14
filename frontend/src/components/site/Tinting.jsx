import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Sun, ArrowRight } from "lucide-react";
import { userCars, tintPrices } from "../../data/mock";

const benefits = [
  { icon: Eye, title: 'Privacy', text: 'Kostbaarheden uit zicht van anderen.' },
  { icon: Sun, title: 'UV-werend', text: 'Bescherming tegen schadelijke UV-straling.' },
  { icon: Shield, title: 'Veiligheid', text: 'Beschermt tegen rondvliegend glas bij aanrijding of inbraak.' },
];

export default function Tinting() {
  return (
    <section id="blinderen" className="relative bg-ink py-20 md:py-28 text-ink-foreground">
      <div className="container-tdc">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <span className="pill-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ruiten blinderen
            </span>
            <h2 className="display-md mt-5 text-white">
              Met de beste folies, <span className="text-accent-red italic">RDW&#8209;conform</span>.
            </h2>
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Wij werken uitsluitend met <span className="text-white font-semibold">Sun-Gard</span> tint-folies en monteren volgens alle eisen van de wet en het RDW. Met eigen tint-meter garanderen wij de juiste lichtdoorlaatbaarheid &mdash; minimaal 55% voor voorportieren en voorruit.
            </p>

            <ul className="mt-7 space-y-3">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.06] border border-white/10 text-primary">
                    <b.icon size={14} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <p className="text-xs text-white/55 mt-0.5">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary hover:text-white">
              Offerte aanvragen <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Visual + chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7 space-y-4"
          >
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={userCars.tintApplication} alt="Ruiten tinten" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-2xl relative bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/8">
                <img
                  src={userCars.tintChart}
                  alt="Tint percentages 5%, 20%, 35%, 50%, 70%"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "invert(0.92) hue-rotate(180deg) contrast(1.15) brightness(0.9)" }}
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">Folie opacities</p>
                  <p className="mt-0.5 text-[10px] text-white/55">5% · 20% · 35% · 50% · 70%</p>
                </div>
              </div>
            </div>

            {/* Tint price list */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 mb-4">Prijsindicatie per ruit</p>
              <ul className="divide-y divide-white/8">
                {tintPrices.map((t) => (
                  <li key={t.item} className="flex items-center justify-between py-3 gap-4">
                    <span className="text-sm text-white/85 leading-snug">{t.item}</span>
                    <span className="flex items-baseline gap-2 shrink-0">
                      {t.per && <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] hidden sm:inline">{t.per}</span>}
                      <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-base md:text-lg font-bold text-white">{t.price}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] text-white/40 leading-relaxed">
                Genoemde prijzen zijn incl. arbeid, materialen en 21% BTW. Montagetijd vanaf B&#8209;stijl ca. 1,5 uur. Definitieve prijs afhankelijk van folie-type en auto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
