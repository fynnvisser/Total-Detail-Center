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

// Map section IDs (in DOM order) to their visual theme — used to auto-invert the header.
const sectionThemes = [
  { id: "top", theme: "dark" },
  { id: "over-ons", theme: "dark" },
  { id: "diensten", theme: "light" },
  { id: "werkwijze", theme: "dark" },
  { id: "prijzen", theme: "light" },
  { id: "blinderen", theme: "dark" },
  { id: "projecten", theme: "light" },
  { id: "reviews", theme: "dark" },
  { id: "locatie", theme: "dark" },
  { id: "contact", theme: "light" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("dark");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Detect theme of section directly under the header
      const checkY = 70;
      let newTheme = "dark";
      let newActive = "";
      for (const { id, theme: t } of sectionThemes) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= checkY && r.bottom > checkY) {
          newTheme = t;
          newActive = id;
          break;
        }
      }
      setTheme(newTheme);

      // Detect active section based on nav links anchor
      const activeLink = links.find((l) => l.href.slice(1) === newActive);
      if (activeLink) setActive(activeLink.href.slice(1));
      else if (newActive === "top") setActive("");
      else setActive(newActive);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isDark = theme === "dark";

  // Themed style tokens
  const t = isDark
    ? {
        bg: scrolled ? "bg-ink/65" : "bg-ink/30",
        border: "border-white/12",
        text: "text-white",
        textSoft: "text-white/65",
        textMuted: "text-white/40",
        chipBg: "bg-white/10",
        chipBorder: "border-white/15",
        chipHover: "hover:bg-white hover:text-ink",
        ctaBg: "bg-white",
        ctaText: "text-ink",
        ctaIconBg: "bg-ink",
        ctaIconText: "text-white",
        activeBg: "bg-white/12",
        accentDot: "bg-primary",
      }
    : {
        bg: scrolled ? "bg-background/85" : "bg-background/55",
        border: "border-foreground/12",
        text: "text-foreground",
        textSoft: "text-foreground/65",
        textMuted: "text-foreground/40",
        chipBg: "bg-foreground/[0.04]",
        chipBorder: "border-foreground/10",
        chipHover: "hover:bg-foreground hover:text-background",
        ctaBg: "bg-foreground",
        ctaText: "text-background",
        ctaIconBg: "bg-background",
        ctaIconText: "text-foreground",
        activeBg: "bg-foreground/[0.07]",
        accentDot: "bg-primary",
      };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-primary"
      />

      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="container-tdc pt-3 md:pt-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto relative mx-auto flex items-center justify-between gap-2 rounded-full border transition-[background-color,border-color,padding] duration-500 ${
              t.bg
            } ${t.border} ${
              scrolled
                ? "shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)] py-2 pl-2 pr-2 md:pl-3 md:pr-2.5"
                : "py-2.5 pl-3 pr-2.5 md:pl-4 md:pr-3"
            }`}
            style={{
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
            }}
          >
            {/* Subtle inner highlight */}
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full" style={{
              background: isDark
                ? "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0) 38%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0) 38%)",
            }} />

            {/* Logo */}
            <a href="#top" className="relative flex items-center gap-2.5 pl-1 pr-2 md:pr-3 py-1 group shrink-0">
              <motion.span
                whileHover={{ rotate: 90, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 240, damping: 14 }}
                className="grid h-8 w-8 place-items-center rounded-md bg-primary text-[9px] font-black text-white tracking-tight rotate-45 shadow-[0_4px_18px_-4px_hsl(0,100%,42%)]"
              >
                <span className="-rotate-45">TDC</span>
              </motion.span>
              <div className="hidden sm:flex flex-col leading-none">
                <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className={`italic text-[14px] font-black tracking-tight uppercase ${t.text} transition-colors duration-500`}>
                  Total<span className={`${t.textMuted} transition-colors duration-500`}>.</span>Detail
                </span>
                <span className={`mt-0.5 text-[8px] font-bold uppercase tracking-[0.22em] ${t.textMuted} transition-colors duration-500`}>Fryslân · sinds 2011</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="relative hidden lg:flex items-center gap-0.5">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive ? t.text : `${t.textSoft} hover:${t.text.replace('text-', 'text-')}`
                    }`}
                    style={{ color: isActive ? undefined : undefined }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={`absolute inset-0 rounded-full ${t.activeBg}`}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative flex items-center gap-1.5">
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="h-1 w-1 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {l.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                aria-label="WhatsApp"
                className={`hidden md:grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 ${t.chipBg} ${t.chipBorder} ${t.text} ${t.chipHover}`}
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="#contact"
                className={`group hidden md:inline-flex items-center gap-1.5 rounded-full pl-5 pr-2 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${t.ctaBg} ${t.ctaText} hover:bg-primary hover:text-white`}
              >
                Plan afspraak
                <span className={`grid h-7 w-7 place-items-center rounded-full ${t.ctaIconBg} ${t.ctaIconText} transition-colors duration-300 group-hover:bg-white group-hover:text-primary`}>
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
              </a>

              {/* Mobile toggle */}
              <button
                aria-label="Menu"
                className={`md:hidden grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 ${t.chipBg} ${t.chipBorder} ${t.text}`}
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
              background: "radial-gradient(circle at 80% 0%, hsla(0,100%,42%,0.2), transparent 50%), hsl(230 12% 6%)",
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
