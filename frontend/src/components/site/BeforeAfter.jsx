import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { userCars } from "../../data/mock";

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
    <section className="relative bg-ink py-20 md:py-28 text-ink-foreground">
      <div className="container-tdc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Het resultaat
          </span>
          <h2 className="display-md mt-5 text-white">
            Het verschil zie je <span className="text-accent-red italic">direct</span>.
          </h2>
          <p className="mt-4 text-base text-white/65 max-w-md">
            Sleep om te vergelijken &mdash; voor en na een polijstbehandeling. Geen filters, geen bewerking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-2"
        >
          <div
            ref={ref}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-xl cursor-ew-resize"
            onMouseMove={(e) => dragging.current && update(e.clientX)}
            onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchMove={(e) => update(e.touches[0].clientX)}
            onTouchStart={(e) => update(e.touches[0].clientX)}
          >
            {/* After (full) */}
            <img src={userCars.audiPolished} alt="Auto na polijsten" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            {/* Before (clip) - desaturated version of same */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={userCars.audiPolished}
                alt="Auto vóór polijsten (desaturated)"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  width: `${(100 / Math.max(pos, 0.0001)) * 100}%`,
                  maxWidth: "none",
                  filter: "saturate(0.35) contrast(0.9) brightness(0.85)",
                }}
              />
            </div>
            <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">Voor</div>
            <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">Na</div>
            <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 -ml-px w-px bg-white/95 shadow" />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6" /></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
