import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { stock } from "../../data/mock";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const update = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32 text-ink-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <span className="ghost-word text-white/[0.045] text-[16vw] whitespace-nowrap">BEFORE &amp; AFTER</span>
      </div>

      <div className="container-tdc relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Echt resultaat
          </span>
          <h2 className="display-lg mt-6 text-white">
            Het verschil zie je <span className="text-accent-red italic">direct</span>.
          </h2>
          <p className="mt-4 text-base text-white/65 max-w-md">
            Foto's van een polijstbehandeling — geen filters, geen bewerking. Sleep om te vergelijken.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-primary/15 p-2 md:p-3"
        >
          <div
            ref={ref}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl cursor-ew-resize"
            onMouseMove={(e) => dragging.current && update(e.clientX)}
            onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchMove={(e) => update(e.touches[0].clientX)}
            onTouchStart={(e) => update(e.touches[0].clientX)}
          >
            <img src={stock.after} alt="Auto na polijsten en coating" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={stock.before}
                alt="Auto vóór polijsten"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ width: `${(100 / Math.max(pos, 0.0001)) * 100}%`, maxWidth: "none" }}
              />
            </div>
            <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">Voor</div>
            <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">Na</div>
            <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 -ml-px w-px bg-white/95 shadow" />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6" /></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
