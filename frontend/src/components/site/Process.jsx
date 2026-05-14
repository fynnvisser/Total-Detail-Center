import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Wand2, Shield } from "lucide-react";
import { processSteps } from "../../data/mock";

const iconMap = { Droplets, Sparkles, Wand2, Shield };

export default function Process() {
  return (
    <section id="werkwijze" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <span className="ghost-word text-foreground/[0.05] text-[18vw]">PROCESS</span>
      </div>

      <div className="container-tdc relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Werkwijze
          </span>
          <h2 className="display-lg mt-6">
            Van vuil tot <span className="text-accent-red italic">spiegelglans</span>.
          </h2>
          <p className="mt-4 text-base text-foreground/65 max-w-md">
            Elke auto doorloopt hetzelfde zorgvuldige proces — geen shortcuts, alleen vakmanschap met Meguiar’s producten en een professionele DA polisher.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "0 50%" }}
            className="absolute left-0 right-0 top-[58px] hidden md:block h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
          />

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="relative z-10 mb-6 flex h-[116px] items-start">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-background border-2 border-foreground text-foreground shadow-[0_8px_30px_-12px_rgba(0,0,0,0.3)]">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="absolute right-0 top-0 text-6xl font-black tracking-tight text-foreground/8" >
                      {step.n}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
