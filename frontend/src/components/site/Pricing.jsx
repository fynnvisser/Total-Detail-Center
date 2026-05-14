import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "../../data/mock";

export default function Pricing() {
  return (
    <section id="prijzen" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <span className="ghost-word text-foreground/[0.05] text-[18vw]">PRICING</span>
      </div>

      <div className="container-tdc relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Pakketten
            </span>
            <h2 className="display-lg mt-6">
              Eerlijke <span className="text-accent-red italic">vanaf-prijzen</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm text-foreground/65"
          >
            Prijzen gelden voor kleine middenklasse auto&rsquo;s. Grotere auto&rsquo;s en busjes: vraag een offerte op maat — we vertellen het je vrijblijvend.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${
                tier.highlighted
                  ? "bg-ink text-ink-foreground border border-ink shadow-2xl md:scale-[1.03] md:-translate-y-2"
                  : "bg-card border border-foreground/10 hover:border-foreground/30 hover:shadow-xl"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Populair
                </div>
              )}
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tier.highlighted ? 'text-white/55' : 'text-foreground/45'}`}>
                {tier.tagline}
              </p>
              <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-2 text-3xl font-extrabold tracking-tight">
                {tier.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className={`text-xs font-semibold uppercase tracking-wide ${tier.highlighted ? 'text-white/50' : 'text-foreground/40'}`}>{tier.period}</span>
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-5xl font-black tracking-tight">
                  {tier.price}
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                      tier.highlighted ? 'bg-primary text-white' : 'bg-foreground text-background'
                    }`}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={tier.highlighted ? 'text-white/85' : 'text-foreground/75'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-primary text-white hover:brightness-110'
                    : 'bg-foreground text-background hover:bg-primary hover:text-white'
                }`}
              >
                {tier.cta} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
