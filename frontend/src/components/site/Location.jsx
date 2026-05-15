import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { company } from "../../data/mock";
import SectionBackdrop from "./SectionBackdrop";

export default function Location() {
  // Tolwei 24, 9271 HM De Westereen — exacte coordinaten
  const lat = 53.2435650;
  const lng = 6.0369206;
  const delta = 0.004;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - delta}%2C${lat - delta * 0.55}%2C${lng + delta}%2C${lat + delta * 0.55}&layer=mapnik&marker=${lat}%2C${lng}`;
  return (
    <section id="locatie" className="relative overflow-hidden bg-ink py-24 md:py-32 text-ink-foreground">
      <SectionBackdrop word="Locatie" theme="dark" />

      <div className="container-tdc relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Bezoek de studio
          </span>
          <h2 className="display-lg mt-6 text-white">
            Tolwei 24, <span className="text-accent-red italic">De Westereen</span>.
          </h2>
          <p className="mt-4 max-w-md text-base text-white/65">
            Loop gerust binnen voor een vrijblijvende inschatting — of plan via WhatsApp een afspraak op maat.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10] md:aspect-auto md:h-[520px] shadow-2xl bg-white"
          >
            <iframe
              title="Locatie Total Detail Center Fryslân"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tolwei+24+9271+HM+De+Westereen"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink/90 backdrop-blur-md border border-white/15 px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary transition-colors"
            >
              <MapPin size={13} />
              Bekijk op Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-4 flex flex-col gap-3"
          >
            <InfoCard icon={MapPin} label="Adres">
              {company.street}<br />
              {company.postal} {company.city}
            </InfoCard>
            <InfoCard icon={Clock} label="Openingstijden">
              Ma–Vr op afspraak<br />
              Za in overleg
            </InfoCard>
            <InfoCard icon={Phone} label="Bel" href={`tel:${company.phoneRaw}`}>
              {company.phone}
            </InfoCard>
            <InfoCard icon={Mail} label="E-mail" href={`mailto:${company.email}`}>
              {company.email}
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, children, href }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:bg-white/[0.07] hover:border-primary/40 hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
          <Icon size={16} />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">{label}</p>
          <p className="mt-1 text-sm font-medium text-white leading-relaxed">{children}</p>
        </div>
      </div>
    </Tag>
  );
}
