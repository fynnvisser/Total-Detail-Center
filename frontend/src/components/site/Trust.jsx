import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "../../data/mock";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    // parse numeric portion
    const match = value.match(/([\d.]+)/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const suffix = value.replace(match[1], "");
    let start = 0;
    const duration = 1400;
    const step = (t) => {
      const progress = Math.min(1, t / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (start + (target - start) * eased);
      const formatted = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame((nt) => step(nt - startTime));
    };
    const startTime = performance.now();
    const frame = (t) => step(t - startTime);
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
      {display}
    </span>
  );
}

export default function Trust() {
  return (
    <section className="border-y border-foreground/10 bg-background py-8 md:py-10">
      <div className="container-tdc grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex items-baseline gap-3"
          >
            <Counter value={s.k} />
            <span className="text-xs md:text-sm text-foreground/60">{s.v}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
