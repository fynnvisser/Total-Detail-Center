import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsappStrip() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container-tdc">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-14 text-primary-foreground"
        >
          <div aria-hidden className="pointer-events-none absolute -right-12 -bottom-16 select-none">
            <span className="ghost-word text-white/15 text-[14rem] leading-none">TDC</span>
          </div>

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Direct contact
              </p>
              <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
                Klaar om jouw auto te laten stralen?
              </h3>
              <p className="mt-4 text-sm md:text-base text-white/85">
                Stuur een bericht — meestal binnen één uur antwoord.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/31600000000"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </motion.a>
              <a href="#contact" className="btn-ghost-dark">
                Contactformulier <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
