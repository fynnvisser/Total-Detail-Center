import React, { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { company } from "../../data/mock";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#projecten", label: "Projecten" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // active section detection
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) {
          setActive(id);
          return;
        }
      }
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-primary"
      />

      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="container-tdc pt-4 md:pt-5 pointer-events-none">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto relative mx-auto flex items-center justify-between gap-3 rounded-full border transition-all duration-500 ${
              scrolled
                ? "border-white/15 bg-ink/55 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] py-2 pl-2 pr-2 md:pl-3 md:pr-2.5"
                : "border-white/10 bg-ink/30 py-2.5 pl-3 pr-2.5 md:pl-4 md:pr-3"
            }`}
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            {/* Subtle inner highlight */}
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full" style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 35%)",
              maskImage: "radial-gradient(circle at 50% -20%, black, transparent 70%)",
            }} />

            {/* Logo */}
            <a href="#top" className="relative flex items-center gap-2.5 pl-1 pr-3 py-1.5 group">
              <motion.span
                whileHover={{ rotate: 90, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 240, damping: 14 }}
                className="grid h-8 w-8 place-items-center rounded-md bg-primary text-[9px] font-black text-white tracking-tight rotate-45 shadow-[0_4px_20px_-4px_hsl(0,100%,42%)]"
              >
                <span className="-rotate-45">TDC</span>
              </motion.span>
              <div className="hidden sm:flex flex-col leading-none">
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="italic text-[15px] font-black tracking-tight text-white uppercase">
                  Total<span className="text-white/45">.</span>Detail
                </span>
                <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-white/45">Fryslân · sinds 2011</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="relative hidden lg:flex items-center gap-1">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                aria-label="WhatsApp"
                className="hidden md:grid h-10 w-10 place-items-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-ink transition-colors"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="#contact"
                className="group hidden md:inline-flex items-center gap-1.5 rounded-full bg-white pl-5 pr-2 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition-all hover:bg-primary hover:text-white"
              >
                Plan afspraak
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-white group-hover:text-primary">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
              </a>

              {/* Mobile toggle */}
              <button
                aria-label="Menu"
                className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-white/10 border border-white/15 text-white"
                onClick={() => setOpen((v) => !v)}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                      <X size={16} />
                    </motion.span>
                  ) : (
                    <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                      <Menu size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "radial-gradient(circle at 80% 0%, hsla(0,100%,42%,0.18), transparent 50%), hsl(230 12% 6%)",
            }}
          >
            <div className="flex flex-col h-full pt-24 pb-10 px-8">
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                    className="group flex items-center justify-between border-b border-white/10 py-5"
                  >
                    <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-3xl font-extrabold tracking-tight text-white group-hover:text-primary transition-colors">
                      {l.label}
                    </span>
                    <ArrowUpRight size={20} className="text-white/40 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-auto space-y-3"
              >
                <a href={`https://wa.me/${company.whatsapp}`} className="flex items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-semibold text-white">
                  <MessageCircle size={16} /> WhatsApp · {company.mobile}
                </a>
                <a href={`tel:${company.phoneRaw}`} className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-4 text-sm font-semibold text-white">
                  Bel {company.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
