import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Wat is het verschil tussen poetsen en polijsten?",
    a: "Bij poetsen wordt de glans teruggebracht. Door de auto te wassen, te kleien (om aanslag, teerresten en boomsappen te verwijderen) en daarna te poetsen komt de kleur en glans terug. Lichte krasjes kunnen verdwijnen. Voor diepere krassen — bijvoorbeeld van de wasstraat, nagels of sleutels — wordt de blanke lak aangepakt met polijsten.",
  },
  {
    q: "Welke bescherming na het poetsen?",
    a: "Na het poetsen raden we wax aan voor langere bescherming tegen weersinvloeden. Sealing blijft ongeveer een jaar zitten en is sterker. Voor maximale bescherming kies je een glascoating — afhankelijk van het type meerdere jaren bescherming.",
  },
  {
    q: "Voldoen jullie aan de RDW-eisen voor ruiten blinderen?",
    a: "Ja. We blinderen met Sun-Gard folies en hebben een eigen tint-meter om de lichtdoorlaatbaarheid te controleren. Voorportierruiten en voorruit moeten minimaal 55% licht doorlaten; alles achter de B-stijl mag donkerder, mits de auto een rechter buitenspiegel heeft.",
  },
  {
    q: "Hoe lang duurt het ramen blinderen?",
    a: "Gemiddeld een halve dag, afhankelijk van type auto en het aantal te tinten ramen. Vanaf de B-stijl rekenen we circa 1,5 uur voor stations, sedans, coupés en hatchbacks.",
  },
  {
    q: "Werken jullie ook zakelijk?",
    a: "Zeker. Bel voor een afspraak — we komen graag bij je langs om alles door te nemen. De eerste auto poetsen we tegen een speciaal probeer-tarief, lager dan ons normale zakelijke tarief.",
  },
  {
    q: "Geldt de prijslijst voor elke auto?",
    a: "De prijslijst zijn vanaf-prijzen voor kleine middenklasse auto's, inclusief BTW. Voor grotere auto's en busjes maken we een offerte op maat. Kom gerust langs aan de Tolwei 24 — we vertellen je vrijblijvend de exacte prijs voor jouw auto.",
  },
  {
    q: "Werken jullie ook aan klassiekers en motoren?",
    a: "Ja — sinds 2011 behandelen we niet alleen auto's maar ook motoren, brommers, boten en tractoren. Met onze eigen verfmengerij kunnen we lakken op maat mixen.",
  },
  {
    q: "Hoe maak ik een afspraak?",
    a: "Het snelst via WhatsApp op 06-5397 3843. Bellen kan via 0511-443869, of vul het contactformulier in op deze site — we reageren meestal binnen één uur.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="container-tdc grid gap-10 md:grid-cols-12 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Veelgestelde vragen
          </span>
          <h2 className="display-md mt-5">
            Goed om te <span className="text-accent-red italic">weten</span>.
          </h2>
          <p className="mt-5 text-sm text-foreground/65 leading-relaxed">
            Staat jouw vraag er niet bij? Stuur ons een berichtje via WhatsApp — we helpen je graag verder.
          </p>
        </motion.div>

        <div className="md:col-span-8">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className={`text-base md:text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/85 hover:text-foreground'}`}>
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen ? 'bg-primary text-white border-primary' : 'border-foreground/15 text-foreground/55'
                      }`}
                    >
                      <Plus size={14} strokeWidth={2.25} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm md:text-base leading-relaxed text-foreground/65">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
