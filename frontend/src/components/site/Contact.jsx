import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { company } from "../../data/mock";
import SectionBackdrop from "./SectionBackdrop";

function validate(data) {
  const errs = {};
  if (!data.name || data.name.trim().length < 2) errs.name = "Naam te kort";
  if (!data.car || data.car.trim().length < 2) errs.car = "Voer uw auto in";
  if (!data.message || data.message.trim().length < 5) errs.message = "Bericht te kort";
  return errs;
}

function buildWhatsappMessage({ name, car, message }) {
  return [
    `*Aanvraag via website*`,
    ``,
    `*Naam:* ${name}`,
    `*Auto:* ${car}`,
    `*Bericht:* ${message}`,
  ].join("\n");
}

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = buildWhatsappMessage(data);
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 md:py-28">
      <SectionBackdrop word="Contact" theme="light" />
      <div className="container-tdc relative grid gap-12 md:grid-cols-2 md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </span>
          <h2 className="display-md mt-5">
            Plan een <span className="text-accent-red italic">afspraak</span>.
          </h2>
          <p className="mt-4 max-w-md text-base text-foreground/65">
            Stuur een bericht via WhatsApp of vul het formulier in &mdash; we denken graag mee over de beste behandeling voor jouw auto.
          </p>

          <div className="mt-8 space-y-1 rounded-2xl border border-foreground/10 bg-card p-2">
            <a href={`https://wa.me/${company.whatsapp}`} className="flex items-center gap-4 rounded-xl p-4 hover:bg-foreground/[0.04] transition-colors">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><MessageCircle size={17} /></span>
              <div>
                <p className="text-xs text-foreground/55">WhatsApp</p>
                <p className="text-sm font-semibold text-foreground">{company.mobile}</p>
              </div>
            </a>
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-4 rounded-xl p-4 hover:bg-foreground/[0.04] transition-colors">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><Phone size={17} /></span>
              <div>
                <p className="text-xs text-foreground/55">Bel direct</p>
                <p className="text-sm font-semibold text-foreground">{company.phone}</p>
              </div>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-xl p-4 hover:bg-foreground/[0.04] transition-colors">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><Mail size={17} /></span>
              <div>
                <p className="text-xs text-foreground/55">E-mail</p>
                <p className="text-sm font-semibold text-foreground break-all">{company.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl p-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><MapPin size={17} /></span>
              <div>
                <p className="text-xs text-foreground/55">Locatie</p>
                <p className="text-sm font-semibold text-foreground">{company.street}, {company.postal} {company.city}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-foreground/10 bg-card p-6 md:p-8 shadow-sm self-start"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/55">Snel reactie via WhatsApp</span>
          </div>
          <Field label="Naam" name="name" error={errors.name} placeholder="Voornaam Achternaam" />
          <Field label="Auto" name="car" error={errors.car} placeholder="Bijv. Audi A4 Avant 2018" />
          <Field label="Bericht" name="message" textarea error={errors.message} placeholder="Korte beschrijving van wat je wilt laten doen…" />
          <button type="submit" className="btn-red w-full !py-4">
            <MessageCircle size={15} />
            Verstuur via WhatsApp
          </button>
          {sent && (
            <p className="text-xs text-foreground/55 text-center">WhatsApp wordt geopend…</p>
          )}
          <p className="text-[11px] text-foreground/40 text-center leading-relaxed">
            Je bericht wordt netjes opgemaakt met Naam, Auto en Bericht.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, textarea, error, placeholder }) {
  const cls =
    "w-full rounded-xl border border-foreground/15 bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-foreground focus:ring-2 focus:ring-primary/15";
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/55">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} maxLength={1000} placeholder={placeholder} />
      ) : (
        <input name={name} className={cls} maxLength={80} placeholder={placeholder} />
      )}
      {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
    </label>
  );
}
