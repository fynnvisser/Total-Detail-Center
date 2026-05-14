import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Info } from "lucide-react";
import { poetsCodes, company } from "../../data/mock";

export default function Pricing() {
  return (
    <section id="prijzen" className="relative bg-background py-20 md:py-28">
      <div className="container-tdc">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Prijslijst particulier
            </span>
            <h2 className="display-md mt-5">
              Eerlijke <span className="text-accent-red italic">vanaf&#8209;prijzen</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 text-sm text-foreground/65 leading-relaxed"
          >
            Prijzen gelden voor kleine middenklasse auto&rsquo;s, inclusief 21% BTW. Voor grotere auto&rsquo;s en busjes maken we een offerte op maat &mdash; bel ons gerust en we vertellen je vrijblijvend de exacte prijs voor jouw auto.
          </motion.p>
        </div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-foreground/10 bg-card"
        >
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 border-b border-foreground/10 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45">
            <div className="md:col-span-1">Code</div>
            <div className="md:col-span-3">Behandeling</div>
            <div className="md:col-span-6">Wat wordt er gedaan</div>
            <div className="md:col-span-2 text-right">Vanaf</div>
          </div>
          {poetsCodes.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-4 px-6 py-5 border-b border-foreground/8 last:border-b-0 hover:bg-foreground/[0.02] transition-colors items-center"
            >
              <div className="md:col-span-1">
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background text-sm font-extrabold group-hover:bg-primary transition-colors">
                  {p.code}
                </span>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-semibold text-foreground">{p.name}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm text-foreground/65 leading-relaxed">{p.detail}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl font-extrabold tracking-tight text-foreground">
                  {p.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <div className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-card px-5 py-4">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <Info size={14} />
            </span>
            <p className="text-sm text-foreground/70 leading-relaxed">
              <span className="font-semibold text-foreground">Zakelijk wassen?</span> Bel voor een afspraak — de eerste auto poetsen we tegen een speciaal <em>probeer&#8209;tarief</em>.
            </p>
          </div>
          <a
            href={`tel:${company.phoneRaw}`}
            className="flex items-center justify-between gap-4 rounded-2xl bg-foreground px-6 py-4 text-background transition-colors hover:bg-primary group"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-background/60">Vrijblijvende offerte</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-lg font-bold leading-tight">Bel {company.phone}</p>
            </div>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
