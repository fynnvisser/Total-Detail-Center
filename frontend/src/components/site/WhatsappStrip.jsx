import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "../../data/mock";

export default function WhatsappStrip() {
  return (
    <section className="bg-background py-10 md:py-14">
      <div className="container-tdc">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground"
        >
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                Direct contact — {company.mobile}
              </p>
              <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">
                Klaar om jouw auto te laten stralen?
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Stuur ons een bericht — meestal binnen één uur antwoord.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${company.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp
              </motion.a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink">
                Contactformulier <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
