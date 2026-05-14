import React from "react";
import { Droplets, Sparkles, Shield, Layers, SquareStack, Sofa, Wand2, Palette, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../../data/mock";

const iconMap = { Droplets, Sparkles, Shield, Layers, SquareStack, Sofa, Wand2, Palette };

export default function Services() {
  return (
    <section id="diensten" className="relative bg-background py-20 md:py-28">
      <div className="container-tdc">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Diensten
            </span>
            <h2 className="display-md mt-5">
              Vakwerk in <span className="text-accent-red italic">elke laag</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-sm text-sm text-foreground/65"
          >
            Van een grondige onderhoudsbeurt tot volledige bescherming met keramische coating &mdash; alles uitgevoerd met aandacht voor detail.
          </motion.p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Sparkles;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative bg-card p-6 transition-colors hover:bg-foreground hover:text-background"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 text-foreground transition-colors group-hover:bg-white/10 group-hover:text-white">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight size={16} className="text-foreground/25 transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
                </div>
                <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-7 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60 group-hover:text-white/65">{s.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
