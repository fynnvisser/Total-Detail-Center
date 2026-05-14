import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Star } from "lucide-react";
import { stock, company } from "../../data/mock";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink pt-24 md:pt-28 pb-0">
      <div className="container-tdc">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-primary aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]"
        >
          {/* Background image */}
          <motion.img
            initial={{ scale: 1.18 }}
            animate={{ scale: 1.04 }}
            transition={{ duration: 1.8, ease }}
            src={stock.hero1}
            alt="Premium auto detailing—close-up koplamp"
            className="absolute inset-0 h-full w-full object-cover animate-slowzoom"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, hsla(0,100%,42%,0.78) 0%, hsla(0,100%,42%,0.28) 50%, transparent 75%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-primary/15" />

          {/* Top-left badge: Sinds 2011 */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="absolute left-5 top-5 md:left-12 md:top-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Sinds {company.since} · De Westereen</span>
          </motion.div>

          {/* Top-right tagline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="absolute right-5 top-5 md:right-10 md:top-10 max-w-[180px] md:max-w-[260px] text-right hidden sm:block"
          >
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 leading-relaxed">
              Vertrouwd door auto-eigenaren <br className="hidden md:block" />
              die precisie verwachten, geen shortcuts
            </p>
          </motion.div>

          {/* Headline */}
          <div className="absolute inset-x-5 top-[18%] sm:top-[42%] sm:-translate-y-1/2 md:inset-x-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            >
              <span className="block hero-italic-sm">Professionele</span>
              <span className="block hero-italic mt-1 md:mt-2">Detailing</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-5 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 md:px-10 py-3 md:py-4 text-[11px] md:text-sm font-bold uppercase tracking-[0.18em] text-ink shadow-xl transition-all hover:scale-[1.04] hover:bg-primary hover:text-white"
              >
                Plan een afspraak
              </a>
              <a
                href="#projecten"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 md:px-8 py-3 md:py-4 text-[11px] md:text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all hover:bg-white hover:text-ink"
              >
                Bekijk projecten
              </a>
            </motion.div>
          </div>

          {/* Bottom-left location + rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="absolute left-5 bottom-5 md:left-12 md:bottom-12 hidden lg:flex flex-col gap-3 md:gap-5"
          >
            <div className="flex items-center gap-2 text-white/95 text-xs md:text-sm font-medium">
              <MapPin size={14} className="text-white" />
              {company.city}, {company.province}
            </div>
            <div className="rounded-2xl bg-primary/40 backdrop-blur-md border border-white/25 px-5 py-3 md:px-6 md:py-4 max-w-[160px]">
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl md:text-3xl font-black text-white leading-none">
                  4.9
                </span>
              </div>
              <p className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                Klant<br />reviews
              </p>
            </div>
          </motion.div>

          {/* Bottom-right premium glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            whileHover={{ y: -4 }}
            className="absolute right-5 bottom-5 md:right-12 md:bottom-12 hidden lg:block"
          >
            <div className="rounded-2xl border border-white/30 bg-white/15 backdrop-blur-xl p-5 md:p-6 max-w-[300px] shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-10 place-items-center rounded-md bg-gradient-to-b from-amber-900 to-amber-950 border border-white/10 text-[10px] font-black text-white">
                  9H
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    Premium
                  </p>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-0.5 text-base md:text-lg font-bold uppercase text-white leading-tight tracking-tight">
                    Ceramic<br />Coating
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile/tablet bottom strip */}
          <div className="absolute inset-x-5 bottom-5 md:inset-x-12 md:bottom-10 lg:hidden flex items-center justify-between text-white/95 text-[11px] md:text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} /> {company.city}
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={13} className="fill-yellow-400 text-yellow-400" />
              <span className="font-bold">4.9</span>
              <span className="hidden sm:inline">· 50+ projecten</span>
            </div>
          </div>

          {/* Bottom notch */}
          <div className="absolute inset-x-0 -bottom-px flex justify-center">
            <div className="h-7 w-40 rounded-t-full bg-ink" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex justify-center py-6 md:py-8"
        >
          <a
            href="#diensten"
            className="group inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors"
          >
            Ontdek meer
            <ArrowDown size={12} className="transition-transform group-hover:translate-y-0.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
