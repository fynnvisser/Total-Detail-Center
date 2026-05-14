import React from "react";
import { Droplets, Sparkles, Shield, Layers, SquareStack, Sofa, Wand2, Lightbulb, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../../data/mock";

const iconMap = { Droplets, Sparkles, Shield, Layers, SquareStack, Sofa, Wand2, Lightbulb };

export default function Services() {
  return (
    <section id="diensten" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <span className="ghost-word text-foreground/[0.05] text-[18vw]">SERVICES</span>
      </div>

      <div className="container-tdc relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-xl">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Diensten
            </span>
            <h2 className="display-lg mt-6">
              Alles voor jouw auto, <span className="text-accent-red italic">één studio</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm text-foreground/65">
              Van een snelle opfrisbeurt tot volledige bescherming met keramische coating — alles uitgevoerd met aandacht voor detail.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl h-full">
                  <div aria-hidden className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />
                  <div className="relative flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground/5 text-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-8deg]">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight size={18} className="text-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:rotate-45" />
                  </div>
                  <h3 className="relative mt-8 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-foreground/60">{s.text}</p>
                  <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">{s.from}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
