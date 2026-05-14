import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Hoe lang duurt een detailbehandeling?",
    a: "Dat verschilt per pakket. Een onderhoudswas duurt ongeveer 2 tot 3 uur, een Detail Pakket gemiddeld een halve dag, en een volledige Premium Coating tot 2 dagen — inclusief uitharden.",
  },
  {
    q: "Waar is de studio gevestigd?",
    a: "Aan de Tolwei 24 in De Westereen (Fryslân). De studio is onderdeel van Auto & Motor Totaal en op afspraak geopend. Loop gerust binnen voor een vrijblijvende inschatting.",
  },
  {
    q: "Werken jullie ook aan klassiekers en motoren?",
    a: "Zeker. Sinds 2011 behandelen we niet alleen daily drivers maar ook klassiekers, motoren, brommers, boten en tractoren — alles met dezelfde aandacht voor detail.",
  },
  {
    q: "Wat is het verschil tussen poetsen en polijsten?",
    a: "Poetsen brengt de glans terug en verwijdert lichte krasjes. Polijsten gaat dieper: met DA polisher en compounds halen we swirls, oxidatie en diepere krassen uit de blanke lak. Polijsten geeft echt het showroom-effect.",
  },
  {
    q: "Hoe lang houdt een keramische coating?",
    a: "Afhankelijk van het pakket en onderhoud tot wel 5 jaar bescherming tegen vuil, water, UV en strooizout. Een coating maakt de lak hydrofoob — vuil hecht minder en wassen wordt makkelijker.",
  },
  {
    q: "Hebben jullie een eigen verfmengerij?",
    a: "Ja — we hebben sinds enkele jaren een eigen verfmengerij. Daardoor kunnen we lakken op maat mixen voor de perfecte kleurmatch bij touch-ups of (deel)spuitwerk.",
  },
  {
    q: "Hoe maak ik een afspraak?",
    a: "Het snelst via WhatsApp op 06-5397 3843. Bellen kan via 0511-443869, of stuur een berichtje via het contactformulier — we reageren meestal binnen één uur.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <span className="ghost-word text-foreground/[0.05] text-[18vw]">QUESTIONS</span>
      </div>
      <div className="container-tdc relative grid gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4"
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Veelgestelde vragen
          </span>
          <h2 className="display-lg mt-6">
            Antwoord op je <span className="text-accent-red italic">vragen</span>.
          </h2>
          <p className="mt-5 text-sm text-foreground/65">
            Staat jouw vraag er niet bij? Stuur Robert een berichtje — we helpen je graag verder.
          </p>
        </motion.div>

        <div className="md:col-span-8 md:pl-8">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/85 hover:text-foreground'}`}>
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen ? 'bg-primary text-white border-primary' : 'border-foreground/15 text-foreground/60'
                      }`}
                    >
                      <Plus size={16} strokeWidth={2.25} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-16 text-base leading-relaxed text-foreground/65">{f.a}</p>
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
