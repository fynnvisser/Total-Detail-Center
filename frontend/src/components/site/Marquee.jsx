import React from "react";
import { Star } from "lucide-react";

const items = [
  "Polijsten",
  "Glascoating",
  "Exterieur Detailing",
  "Wrappen",
  "Interieur",
  "Ramen Blinderen",
  "Premium Studio",
  "Fryslân",
];

export default function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <section className="bg-ink overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee py-5 md:py-7 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl md:text-4xl font-extrabold italic uppercase tracking-tight text-white/85">
              {t}
            </span>
            <Star size={18} className="text-primary fill-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}
