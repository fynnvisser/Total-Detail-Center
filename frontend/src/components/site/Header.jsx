import React, { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../../data/mock";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#projecten", label: "Projecten" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-tdc flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <motion.span
            whileHover={{ rotate: 90, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 240, damping: 14 }}
            className="grid h-9 w-9 place-items-center rounded-md bg-primary text-[10px] font-black text-white tracking-tight rotate-45"
          >
            <span className="-rotate-45">TDC</span>
          </motion.span>
          <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="hidden sm:block italic text-base font-black tracking-tight text-white uppercase">
            Total<span className="text-white/50">.</span>Detail
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-5 lg:px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition-all hover:bg-primary hover:text-white"
        >
          Plan afspraak
        </a>

        <button
          aria-label="Menu"
          className="md:hidden rounded-full border border-white/25 p-2.5 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-ink"
          >
            <div className="container-tdc flex flex-col gap-4 py-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-white">
                  {l.label}
                </a>
              ))}
              <a href={`https://wa.me/${company.whatsapp}`} className="btn-red mt-2">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
