import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette } from "lucide-react";
import { userCars } from "../../data/mock";

const team = [
  {
    name: "Robert Visser",
    role: "Eigenaar · Master Detailer",
    bio: "Sinds 2011 dagelijks bezig met lak. Nam Landman Automaterialen over en bouwde Auto & Motor Totaal uit tot dé detail-specialist van Noordoost-Friesland.",
    img: userCars.steamPeugeot,
    location: "De Westereen",
    icon: Sparkles,
  },
  {
    name: "Xander Lourens",
    role: "Detailer · Sinds 2022",
    bio: "Komt uit Twijzel en versterkt het team sinds 2022. Specialist in interieurreiniging, polijsten en het opbouwen van keramische coatings.",
    img: userCars.meguiars,
    location: "Twijzel",
    icon: Palette,
  },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <span className="ghost-word text-foreground/[0.05] text-[18vw]">THE CREW</span>
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
              Het team
            </span>
            <h2 className="display-lg mt-6">
              De handen achter de <span className="text-accent-red italic">glans</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm text-foreground/65"
          >
            Een klein, vakkundig team. Elke auto wordt persoonlijk behandeld — geen anonieme wasstraat-aanpak.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-shadow duration-500 hover:shadow-2xl"
            >
              <div className="grid md:grid-cols-5 md:min-h-[360px]">
                <div className="relative md:col-span-2 aspect-[4/5] md:aspect-auto overflow-hidden bg-foreground/5">
                  <img src={t.img} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover img-cinematic transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">{t.location}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-7 md:p-8 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{t.role}</p>
                      <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-2 text-3xl font-extrabold tracking-tight text-foreground">
                        {t.name}
                      </h3>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-foreground/5 text-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-[-8deg]">
                      <t.icon size={18} strokeWidth={1.75} />
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/65">{t.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
