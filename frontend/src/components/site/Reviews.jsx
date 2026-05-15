import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "../../data/mock";
import SectionBackdrop from "./SectionBackdrop";

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink py-20 md:py-28 text-ink-foreground">
      <SectionBackdrop word="Reviews" theme="dark" />
      <div className="container-tdc relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Klantbeoordelingen
          </span>
          <h2 className="display-md mt-5 text-white">
            Wat klanten <span className="text-accent-red italic">zeggen</span>.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Quote size={22} className="text-primary/80" />
              <p className="mt-5 text-[15px] leading-relaxed text-white/85">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-7 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/45 mt-0.5">Geverifieerde klant</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className={j < r.rating ? "fill-primary text-primary" : "text-white/15"}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
