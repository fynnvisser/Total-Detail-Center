import React from "react";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground py-14">
      <div className="container-tdc">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[10px] font-black text-white">TDC</span>
              <span className="text-base font-semibold tracking-tight text-white">
                Total Detail Center <span className="text-white/50 font-normal">Fryslân</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Premium auto detailing, polijsten, wrappen en blinderen — De Westereen, Fryslân.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Studio</p>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>De Westereen, Fryslân</li>
                <li>Op afspraak</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Contact</p>
              <ul className="mt-4 space-y-2 text-white/80">
                <li><a href="https://wa.me/31600000000" className="hover:text-primary transition-colors">WhatsApp</a></li>
                <li><a href="mailto:info@tdcfryslan.nl" className="hover:text-primary transition-colors">E-mail</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Total Detail Center Fryslân</p>
          <p>Detailing · Polijsten · Wrappen · Blinderen</p>
        </div>
      </div>
    </footer>
  );
}
