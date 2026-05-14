import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { stock } from "../../data/mock";

const points = [
  "14+ jaar ervaring \u2014 sinds 2011 actief in De Westereen.",
  "50+ auto's behandeld in heel Friesland en daarbuiten.",
  "Eigen verfmengerij voor perfecte kleurmatch op elke lak.",
  "Werken alleen met premium Meguiar's producten en pro tools.",
  "Persoonlijke aanpak \u2014 elke auto krijgt de tijd die het verdient.",
];

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32 text-ink-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <span className="ghost-word text-white/[0.05] text-[20vw]">EXPERIENCE</span>
      </div>

      <div className="container-tdc relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Onze aanpak
          </span>
          <h2 className="display-lg mt-6 text-white">
            Gebouwd op <span className="text-accent-red italic">ervaring</span>.
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7 grid grid-cols-3 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="row-span-2 aspect-[3/5] overflow-hidden rounded-2xl"
            >
              <img src={stock.exp1} alt="Detailer polijst de motorkap" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <img src={stock.exp2} alt="Hand met microvezel doek" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <img src={stock.exp3} alt="Koplamp restoration" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="col-span-2 aspect-[2/1] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex flex-col justify-between"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Onze focus</p>
              <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl font-bold leading-tight text-white">
                Geen wasstraat-aanpak. Handwerk, elke keer.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <ul className="space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-3 text-base text-white/85"
                >
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
            <a href="#diensten" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary hover:text-primary-foreground">
              Onze diensten <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
