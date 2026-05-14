import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Star } from "lucide-react";
import { heroImage, company } from "../../data/mock";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);

  const { scrollY } = useScroll();
  // Parallax: image moves slower than scroll
  const yImg = useTransform(scrollY, [0, 800], [0, 160]);
  const yImgS = useSpring(yImg, { stiffness: 120, damping: 30 });
  // Content gently lifts as you scroll
  const yContent = useTransform(scrollY, [0, 800], [0, -40]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  // Mouse parallax
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 12}px`);
      el.style.setProperty("--my", `${y * 12}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-white">
      {/* Background image with parallax */}
      <motion.div
        style={{ y: yImgS }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.4, ease }}
          src={heroImage}
          alt="Premium auto detailing — close-up koplamp"
          className="absolute inset-0 h-[115%] w-full object-cover"
          style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
        />
      </motion.div>

      {/* Layered gradients */}
      <div aria-hidden className="absolute inset-0" style={{
        background: "linear-gradient(90deg, hsla(0,100%,42%,0.55) 0%, hsla(0,100%,42%,0.18) 35%, transparent 60%)",
      }} />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/85" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
      {/* Subtle film grain */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>\")",
      }} />

      {/* Top meta line */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease }}
        className="absolute left-0 right-0 top-24 md:top-28 z-10"
      >
        <div className="container-tdc flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
          <span className="hidden md:inline">No.01 — Detailing studio</span>
          <span className="flex items-center gap-2">
            <span className="h-px w-8 bg-white/35" />
            Fryslân · NL
          </span>
        </div>
      </motion.div>

      {/* Center-bottom headline */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 h-full w-full flex flex-col justify-end pb-20 md:pb-24"
      >
        <div className="container-tdc">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/8 backdrop-blur-xl px-4 py-2 mb-7 md:mb-8"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white">Sinds {company.since} · {company.city}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease }}
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
            className="font-extrabold tracking-[-0.045em] leading-[1] max-w-5xl"
          >
            <span className="block text-white text-[clamp(2.75rem,7.5vw,7.5rem)]">Total Detail</span>
            <span className="block text-[clamp(2.75rem,7.5vw,7.5rem)] italic font-black mt-1 md:mt-2" style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingRight: "0.1em",
            }}>
              Center Fryslân
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-7 md:mt-9 max-w-md text-[15px] md:text-base text-white/75 leading-relaxed"
          >
            Premium auto detailing, polijsten en ramen blinderen &mdash; vakwerk uit De Westereen, sinds 2011.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white pl-6 pr-2 py-2 text-sm font-semibold text-ink transition-all hover:bg-primary hover:text-white hover:shadow-[0_10px_40px_-12px_hsl(0,100%,42%)]"
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
        </div>
      </motion.div>

      {/* Bottom-right rating card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease }}
        className="absolute right-5 md:right-10 bottom-24 md:bottom-28 z-10 hidden md:block"
      >
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-4 max-w-[230px] shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < 4 ? "fill-yellow-400 text-yellow-400" : (i === 4 ? "fill-yellow-400/50 text-yellow-400" : "")}
                />
              ))}
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-3xl font-black tracking-tight text-white leading-none">4.5</span>
            <span className="text-xs text-white/60">/ 5</span>
          </div>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">Klantbeoordeling</p>
        </div>
      </motion.div>

      {/* Bottom marquee strip */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-tdc">
          <div className="flex items-center justify-between gap-6 border-t border-white/10 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
            <span className="flex items-center gap-2">
              <MapPin size={12} />
              {company.street}, {company.city}
            </span>
            <a href="#diensten" className="group hidden md:inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors">
              Scroll om te ontdekken
              <ArrowDown size={12} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <span className="hidden md:inline">14+ jaar · 400+ auto&rsquo;s</span>
          </div>
        </div>
      </div>
    </section>
  );
}
