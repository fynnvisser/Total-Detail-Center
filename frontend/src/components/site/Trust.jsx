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
    const match = value.match(/([\d.]+)/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const suffix = value.replace(match[1], "");
    const duration = 1200;
    const startTime = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = target * eased;
      const formatted = Number.isInteger(target) ? Math.round(cur) : cur.toFixed(1);
      setDisplay(`${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground tabular-nums">
      {display}
    </span>
  );
}

export default function Trust() {
  return (
    <section className="border-y border-foreground/8 bg-background py-7">
      <div className="container-tdc grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-baseline gap-3"
          >
            <Counter value={s.k} />
            <span className="text-xs text-foreground/55">{s.v}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
