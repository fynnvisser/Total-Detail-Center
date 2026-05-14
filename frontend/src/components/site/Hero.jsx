import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Star, ArrowUpRight } from "lucide-react";
import { userCars, company } from "../../data/mock";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink pt-24 md:pt-28 pb-6 md:pb-10">
      <div className="container-tdc">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] bg-ink"
        >
          {/* Real photo: Audi polished by Robert */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 2.4, ease }}
            src={userCars.audiPolished}
            alt="Audi A4 — gepolijst in De Westereen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Vignette + tint */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

          {/* Top pill */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="absolute left-5 top-5 md:left-10 md:top-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Sinds {company.since} · {company.city}</span>
          </motion.div>

          {/* Headline content */}
          <div className="absolute inset-x-5 bottom-5 md:inset-x-10 md:bottom-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-3xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
                className="text-white font-extrabold tracking-[-0.04em] leading-[0.95]"
              >
                <span className="block text-[clamp(2.5rem,6vw,5.5rem)]">Total Detail Center</span>
                <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-white/55 italic">Fryslân</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-5 max-w-md text-sm md:text-base text-white/75 leading-relaxed"
              >
                Premium auto detailing, polijsten en ramen blinderen — vakwerk uit De Westereen, sinds 2011.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-white pl-6 pr-2 py-2 text-sm font-semibold text-ink transition-colors hover:bg-primary hover:text-white"
                >
                  Plan een afspraak
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-white group-hover:text-primary">
                    <ArrowUpRight size={15} strokeWidth={2.25} />
                  </span>
                </a>
                <a
                  href="#projecten"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink"
                >
                  Bekijk projecten
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Top-right rating */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-5 top-5 md:right-10 md:top-10 hidden md:flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-white">4.9 · klantbeoordeling</span>
          </motion.div>

          {/* Bottom-right location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute right-5 bottom-5 md:right-10 md:bottom-10 hidden lg:flex items-center gap-2 text-white/75"
          >
            <MapPin size={13} />
            <span className="text-xs font-medium">{company.street}, {company.city}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex justify-center pt-6"
        >
          <a
            href="#diensten"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 hover:text-white transition-colors"
          >
            Ontdek meer
            <ArrowDown size={11} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
