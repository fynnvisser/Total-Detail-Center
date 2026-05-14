import React from "react";
import { motion } from "framer-motion";
import { Palette, Award, Wrench, Truck, Sparkles, Box } from "lucide-react";

const features = [
  { icon: Palette, title: "Eigen verfmengerij", text: "Lakken op maat gemixt — perfecte kleurmatch voor elke reparatie of touch-up." },
  { icon: Award, title: "Sinds 2011", text: "14+ jaar ervaring met poetsen, polijsten, wrappen en blinderen — van klassieker tot supercar." },
  { icon: Wrench, title: "Meguiar's Pro", text: "Werken uitsluitend met professionele DA polishers en premium Meguiar's compounds." },
  { icon: Sparkles, title: "Handwerk", text: "Geen wasstraat-shortcuts. Elke auto wordt met de hand behandeld door Robert of Xander." },
  { icon: Box, title: "Eigen shop", text: "Op locatie volledige shop met accu's, olie, filters, lakken en alle onderdelen op voorraad." },
  { icon: Truck, title: "Auto · motor · klassiek", text: "Werken aan auto's, motoren, brommers, boten en tractoren — élk voertuig krijgt aandacht." },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 border-y border-foreground/5">
      <div className="container-tdc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-xl">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Waarom TDC
            </span>
            <h2 className="display-md mt-6">
              Meer dan detailing &mdash; <span className="text-accent-red italic">een complete studio</span>.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-background p-7 md:p-8 transition-colors hover:bg-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-foreground/5 text-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <f.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-6 text-xl font-bold tracking-tight text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
