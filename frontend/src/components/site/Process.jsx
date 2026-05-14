import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Wand2, Shield } from "lucide-react";
import { processSteps, userCars } from "../../data/mock";

const iconMap = { Droplets, Sparkles, Wand2, Shield };

export default function Process() {
  return (
    <section id="werkwijze" className="relative bg-ink py-20 md:py-28 text-ink-foreground">
      <div className="container-tdc">
        <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <span className="pill-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Werkwijze
            </span>
            <h2 className="display-md mt-5 text-white">
              Van vuil tot <span className="text-accent-red italic">spiegelglans</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 text-sm text-white/65 leading-relaxed"
          >
            Elke auto doorloopt hetzelfde zorgvuldige proces. Wassen, kleien, polijsten en beschermen &mdash; geen shortcuts.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] md:aspect-auto md:h-[540px]"
          >
            <img src={userCars.polisher} alt="DA polisher op witte lak" loading="lazy" className="absolute inset-0 h-full w-full object-cover img-cinematic" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            <div className="absolute left-5 bottom-5 right-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">DA polisher · Meguiar&rsquo;s</span>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon];
                return (
                  <motion.li
                    key={step.n}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group flex items-start gap-5 py-6 md:py-7"
                  >
                    <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl md:text-3xl font-extrabold tabular-nums text-white/20 shrink-0 w-14">
                      {step.n}
                    </span>
                    <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-white transition-colors group-hover:bg-primary">
                      <Icon size={17} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-lg md:text-xl font-bold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/65 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
