import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { userCars, stock } from "../../data/mock";

const items = [
  { src: userCars.audiA6Blue, alt: "Audi A6 Avant S-line — polijsten", cat: "exterieur", label: "Audi A6 Avant", tag: "Polijsten", filter: true, big: true },
  { src: userCars.gClass, alt: "Mercedes G-klasse — klassieker detail", cat: "exterieur", label: "Mercedes G-klasse", tag: "Klassieker detail", filter: true },
  { src: userCars.bmwGrey, alt: "BMW iX2 M Sport — premium detail", cat: "exterieur", label: "BMW iX2 M Sport", tag: "Premium detail", filter: true },
  { src: userCars.mercedesInterior, alt: "Mercedes GLC interieur — reiniging", cat: "interieur", label: "Mercedes GLC", tag: "Interieur premium", filter: true },
  { src: userCars.steamPeugeot, alt: "Peugeot 207 — stoomreiniging", cat: "interieur", label: "Peugeot 207", tag: "Stoomreiniging", filter: true },
  { src: userCars.skodaBlack, alt: "Skoda Superb — keramische coating", cat: "coating", label: "Skoda Superb", tag: "Coating", filter: true },
  { src: userCars.audiGrey, alt: "Audi A3 S-line — polijsten", cat: "exterieur", label: "Audi A3 S-line", tag: "Polijsten", filter: true },
  { src: userCars.bmw4Black, alt: "BMW 4-Serie Gran Coupé — wax bescherming", cat: "coating", label: "BMW 4-Serie GC", tag: "Wax bescherming", filter: true },
  { src: userCars.meguiars, alt: "Meguiar’s professionele tools", cat: "studio", label: "Meguiar’s setup", tag: "Onze tools", filter: true },
  { src: stock.coating, alt: "Ceramic coating applicatie", cat: "coating", label: "Keramische coating", tag: "9H Coating" },
  { src: stock.foam, alt: "Snowfoam wash", cat: "exterieur", label: "Snowfoam wash", tag: "Onderhoud" },
];

const filters = [
  { id: "all", label: "Alles" },
  { id: "exterieur", label: "Exterieur" },
  { id: "interieur", label: "Interieur" },
  { id: "coating", label: "Coating" },
  { id: "studio", label: "Studio" },
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
    <section id="projecten" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <span className="ghost-word text-foreground/[0.05] text-[18vw]">PROJECTS</span>
      </div>

      <div className="container-tdc relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Recent werk
            </span>
            <h2 className="display-lg mt-6">
              Geleverd in <span className="text-accent-red italic">Friesland</span>.
            </h2>
            <p className="mt-4 text-sm text-foreground/60 max-w-sm">Een greep uit recente projecten — van klassiekers tot SUV’s en daily drivers.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setCat(f.id)}
                className={`rounded-full border px-5 py-2 text-xs font-semibold transition-all ${
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

        <motion.div layout className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-[260px] md:auto-rows-[320px]">
          <AnimatePresence mode="popLayout">
            {visible.map((i, idx) => (
              <motion.button
                layout
                key={i.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => setLightbox(idx)}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl bg-secondary text-left shadow-sm hover:shadow-2xl transition-shadow duration-500 ${
                  i.big ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={i.src}
                  alt={i.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i.filter ? 'img-cinematic' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">{i.tag}</p>
                    <p style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-1 text-lg md:text-xl font-bold text-white leading-tight">{i.label}</p>
                  </div>
                  <span className="grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </span>
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
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              className={`max-h-[90vh] max-w-[95vw] rounded-2xl object-contain ${visible[lightbox].filter ? 'img-cinematic' : ''}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
