import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Star } from "lucide-react";
import { heroImage, company } from "../../data/mock";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityScroll = useTransform(scrollY, [0, 400], [1, 0.7]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 14}px`);
      el.style.setProperty("--my", `${y * 14}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative bg-ink pt-24 md:pt-28 pb-0">
      <div className="container-tdc">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease }}
          style={{ opacity: opacityScroll }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[44px] bg-primary aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]"
        >
          <motion.div style={{ y: yImg }} className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.18 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 2.2, ease }}
              src={heroImage}
              alt="Premium auto detailing — close-up koplamp"
              className="absolute inset-0 h-[110%] w-full object-cover"
              style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
            />
          </motion.div>

          {/* Red wash + vignette */}
          <div aria-hidden className="absolute inset-0" style={{
            background: "linear-gradient(90deg, hsla(0,100%,42%,0.75) 0%, hsla(0,100%,42%,0.25) 50%, transparent 78%)",
          }} />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-primary/15" />
          {/* Subtle grain */}
          <div aria-hidden className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={{
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }} />

          {/* Top-right tagline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="absolute right-5 top-5 md:right-10 md:top-10 max-w-[200px] md:max-w-[280px] text-right hidden sm:block"
          >
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-white/95 leading-snug">
              Vertrouwd door auto-eigenaren <br className="hidden md:block" />
              die precisie verwachten, geen shortcuts
            </p>
          </motion.div>

          {/* Headline + CTA */}
          <div className="absolute inset-x-5 top-[14%] sm:top-[44%] sm:-translate-y-1/2 md:inset-x-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            >
              <span className="block hero-italic-sm">Professionele</span>
              <span className="block hero-italic mt-1 md:mt-2">Detailing</span>
            </motion.h1>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6, ease }}
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 md:mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 md:px-12 py-3.5 md:py-4 text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-ink shadow-2xl transition-colors hover:bg-ink hover:text-white"
            >
              Plan een afspraak
            </motion.a>
          </div>

          {/* Bottom-left location + rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="absolute left-5 bottom-5 md:left-12 md:bottom-12 hidden lg:flex flex-col gap-3 md:gap-5"
          >
            <div className="flex items-center gap-2 text-white text-xs md:text-sm font-bold uppercase tracking-[0.18em]">
              <MapPin size={13} className="text-white" />
              {company.city}, {company.province}
            </div>
            <div className="rounded-2xl bg-primary/40 backdrop-blur-md border border-white/25 px-5 py-3 md:px-6 md:py-4 max-w-[170px]">
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl md:text-[2rem] font-black text-white leading-none">
                  4.5
                </span>
              </div>
              <p className="mt-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                Klant<br />reviews
              </p>
            </div>
          </motion.div>

          {/* Bottom-right premium glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            whileHover={{ y: -4 }}
            className="absolute right-5 bottom-5 md:right-12 md:bottom-12 hidden lg:block"
          >
            <div className="rounded-2xl border border-white/30 bg-white/15 backdrop-blur-xl p-5 md:p-6 max-w-[300px] shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-10 place-items-center rounded-md bg-gradient-to-b from-amber-900 to-amber-950 border border-white/10 text-[10px] font-black text-white shadow-inner">
                  9H
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/85">
                    Premium
                  </p>
                  <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-0.5 text-base md:text-lg font-bold uppercase text-white leading-tight tracking-tight">
                    Ceramic<br />Coating
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile bottom strip */}
          <div className="absolute inset-x-5 bottom-5 md:inset-x-12 md:bottom-10 lg:hidden flex items-center justify-between text-white text-[11px] md:text-sm font-bold uppercase tracking-[0.18em]">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} /> {company.city}
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={13} className="fill-yellow-400 text-yellow-400" />
              <span>4.5</span>
            </div>
          </div>

          {/* Bottom notch */}
          <div className="absolute inset-x-0 -bottom-px flex justify-center">
            <div className="h-8 w-44 rounded-t-full bg-ink" />
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
            className="group inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.24em] text-white/55 hover:text-white transition-colors"
          >
            Ontdek meer
            <ArrowDown size={12} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
