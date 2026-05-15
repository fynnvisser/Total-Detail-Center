import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Sun, ArrowUpRight, Check } from "lucide-react";
import { userCars, tintPrices } from "../../data/mock";
import SectionBackdrop from "./SectionBackdrop";

const benefits = [
  { icon: Eye, title: "Privacy", text: "Kostbaarheden uit zicht — discreet & onopvallend." },
  { icon: Sun, title: "UV-werend", text: "Tot 99% bescherming tegen schadelijke UV-straling." },
  { icon: Shield, title: "Veiligheid", text: "Beschermt tegen rondvliegend glas bij inbraak of crash." },
];

const tintLevels = [
  { value: "70%", label: "Licht" },
  { value: "30%", label: "Medium" },
  { value: "20%", label: "Donker" },
  { value: "15%", label: "Privacy" },
  { value: "5%", label: "Limo" },
];

export default function Tinting() {
  return (
    <section
      id="blinderen"
      data-testid="tinting-section"
      className="relative overflow-hidden bg-ink py-24 md:py-32 text-ink-foreground"
    >
      {/* Subtle red glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(0,100%,42%) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(0,100%,42%) 0%, transparent 60%)" }}
      />

      <div className="container-tdc relative">
        {/* Subtle ghost word */}
        <SectionBackdrop word="Blinderen" theme="dark" />
        {/* Eyebrow + Heading */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <span className="pill-dark" data-testid="tinting-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ruiten blinderen
            </span>
            <h2 className="display-md mt-6 text-white">
              Van <span className="italic text-accent-red">70%</span> tot{" "}
              <span className="italic text-accent-red">5%</span>.
              <br className="hidden sm:block" />
              Allemaal{" "}
              <span className="relative inline-block">
                RDW&#8209;conform
                <svg
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 4 Q 50 1, 100 3 T 198 4"
                    stroke="hsl(0,100%,42%)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <p className="text-[15px] text-white/65 leading-relaxed">
              Wij werken uitsluitend met{" "}
              <span className="font-semibold text-white">Sun-Tech &amp; Madico</span> tint-folies en
              monteren volgens alle wettelijke eisen. Met eigen tint-meter garanderen we exact de
              juiste lichtdoorlaatbaarheid — minimaal 55% voor voorportieren en voorruit.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
                <Check size={11} className="text-primary" /> Sun-Tech
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
                <Check size={11} className="text-primary" /> Madico
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
                <Check size={11} className="text-primary" /> Eigen tint-meter
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
                <Check size={11} className="text-primary" /> Dot-Matrix afwerking
              </span>
            </div>
          </motion.div>
        </div>

        {/* Cinematic hero image */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 md:mt-20"
          data-testid="tinting-hero-figure"
        >
          {/* Frame */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={userCars.tintHero}
              alt="Tint folie percentages 70%, 50%, 35%, 20% en 5% op een rode BMW — Total Detail Center"
              loading="lazy"
              className="block w-full h-auto"
              data-testid="tinting-hero-image"
            />
            {/* Top vignette for label legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/30 to-transparent"
            />
            {/* Bottom vignette + caption */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 md:p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
                  Lichtdoorlaatbaarheid
                </p>
                <p
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  className="mt-1 text-lg md:text-xl font-extrabold tracking-tight text-white"
                >
                  Kies jouw donkerheid.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
                  Live referentie · Total Detail Center
                </span>
              </div>
            </figcaption>
          </div>

          {/* Percentage scale - below image */}
          <div className="mt-6 grid grid-cols-5 gap-2 md:gap-3" data-testid="tinting-percentage-scale">
            {tintLevels.map((lvl, i) => (
              <motion.div
                key={lvl.value}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3.5 md:px-4 md:py-4 transition-colors hover:bg-white/[0.06] hover:border-white/20"
              >
                {/* Visual swatch — opacity ladder */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50 transition-opacity group-hover:opacity-70"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,${1 - parseInt(lvl.value) / 100}) 0%, transparent 100%)`,
                  }}
                />
                <div className="relative">
                  <p
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    className="text-xl md:text-2xl font-black tracking-tight text-white"
                  >
                    {lvl.value}
                  </p>
                  <p className="mt-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                    {lvl.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.figure>

        {/* Benefits + Price list */}
        <div className="mt-16 md:mt-20 grid gap-8 md:grid-cols-12 md:gap-10">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
            data-testid="tinting-benefits"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 mb-6">
              Waarom blinderen
            </p>
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition-colors hover:bg-white/[0.05] hover:border-white/15"
                >
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 border border-primary/25 text-primary transition-transform group-hover:scale-110">
                    <b.icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      className="text-base font-bold text-white"
                    >
                      {b.title}
                    </p>
                    <p className="mt-1 text-[13px] text-white/60 leading-relaxed">{b.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              data-testid="tinting-cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-primary hover:text-white"
            >
              Offerte aanvragen
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-white group-hover:text-primary">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </span>
            </a>
          </motion.div>

          {/* Price list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
            data-testid="tinting-pricing"
          >
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-6 md:p-8 backdrop-blur-sm">
              {/* Corner accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-px right-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              />

              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Prijsindicatie
                  </p>
                  <p
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    className="mt-1.5 text-xl md:text-2xl font-extrabold tracking-tight text-white"
                  >
                    Per ruit, inclusief montage
                  </p>
                </div>
                <span className="hidden sm:inline-flex shrink-0 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                  Incl. 21% BTW
                </span>
              </div>

              <ul className="divide-y divide-white/8">
                {tintPrices.map((t, i) => (
                  <motion.li
                    key={t.item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="text-[13px] md:text-sm text-white/85 leading-snug transition-colors group-hover:text-white">
                      {t.item}
                    </span>
                    <span className="flex items-baseline gap-2 shrink-0">
                      {t.per && (
                        <span className="hidden sm:inline text-[9px] text-white/40 uppercase tracking-[0.15em]">
                          {t.per}
                        </span>
                      )}
                      <span
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        className="text-base md:text-lg font-extrabold text-white tabular-nums"
                      >
                        {t.price}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-6 text-[11px] text-white/40 leading-relaxed">
                Genoemde prijzen zijn inclusief arbeid, materialen en 21% BTW. Montagetijd vanaf
                B&#8209;stijl ca. 1,5 uur. Definitieve prijs afhankelijk van folie-type en
                voertuig.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
