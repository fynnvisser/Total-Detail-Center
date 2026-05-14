import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { userCars } from "../../data/mock";

const items = [
  { src: userCars.audiPolished, alt: "Audi A4 — polijsten resultaat", cat: "polijsten", label: "Audi A4", tag: "Polijsten", big: true },
  { src: userCars.audiA6Blue, alt: "Audi A6 Avant S-line", cat: "polijsten", label: "Audi A6 Avant", tag: "Polijsten" },
  { src: userCars.gClass, alt: "Mercedes G-klasse", cat: "exterieur", label: "Mercedes G-klasse", tag: "Detail" },
  { src: userCars.bmwGrey, alt: "BMW iX2 M Sport", cat: "exterieur", label: "BMW iX2 M Sport", tag: "Detail" },
  { src: userCars.mercedesInterior, alt: "Mercedes GLC interieur", cat: "interieur", label: "Mercedes GLC", tag: "Interieur" },
  { src: userCars.steamPeugeot, alt: "Peugeot 207 stoomreiniging", cat: "interieur", label: "Peugeot 207", tag: "Stoomreiniging" },
  { src: userCars.skodaBlack, alt: "Skoda Superb", cat: "exterieur", label: "Skoda Superb", tag: "Wax" },
  { src: userCars.audiGrey, alt: "Audi A3 S-line", cat: "polijsten", label: "Audi A3 S-line", tag: "Polijsten" },
  { src: userCars.bmw4Black, alt: "BMW 4-Serie Gran Coupé", cat: "exterieur", label: "BMW 4-Serie GC", tag: "Wax" },
];

const filters = [
  { id: "all", label: "Alles" },
  { id: "polijsten", label: "Polijsten" },
  { id: "exterieur", label: "Exterieur" },
  { id: "interieur", label: "Interieur" },
];

export default function Gallery() {
  const [cat, setCat] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const visible = items.filter((i) => cat === "all" || i.cat === cat);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projecten" className="relative bg-background py-20 md:py-28">
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
              Recent werk
            </span>
            <h2 className="display-md mt-5">
              Geleverd in <span className="text-accent-red italic">Friesland</span>.
            </h2>
            <p className="mt-4 text-sm text-foreground/60 max-w-sm">Een greep uit recente projecten — van klassiekers tot SUV’s en daily drivers.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setCat(f.id)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  cat === f.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/15 text-foreground/60 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {visible.map((i, idx) => (
              <motion.button
                layout
                key={i.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => setLightbox(idx)}
                className={`group relative overflow-hidden rounded-2xl bg-secondary text-left transition-shadow duration-500 hover:shadow-xl ${
                  i.big ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={i.src}
                  alt={i.alt}
                  loading="lazy"
                  className="h-full w-full object-cover img-cinematic transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">{i.tag}</p>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-1 text-base md:text-lg font-bold text-white leading-tight">{i.label}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && visible[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors">
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain img-cinematic"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
