import React from "react";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { reviews } from "../../data/mock";

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink py-24 md:py-32 text-ink-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <span className="ghost-word text-white/[0.05] text-[20vw]">REVIEWS</span>
      </div>

      <div className="container-tdc relative">
        <Reveal className="mb-14 max-w-2xl">
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Klanten in Friesland
          </span>
          <h2 className="display-lg mt-6 text-white">
            Vertrouwd door <span className="text-accent-red italic">honderden</span> autobezitters.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.07] hover:-translate-y-1">
                <Quote size={28} className="text-primary transition-transform duration-500 group-hover:scale-110" />
                <p className="mt-5 text-[15px] leading-relaxed text-white/90">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-white/55">{r.place} · {r.car}</p>
                  </div>
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
