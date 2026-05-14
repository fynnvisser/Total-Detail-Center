import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";

function validate(data) {
  const errs = {};
  if (!data.name || data.name.trim().length < 2) errs.name = "Naam te kort";
  if (!data.car || data.car.trim().length < 2) errs.car = "Voer uw auto in";
  if (!data.message || data.message.trim().length < 5) errs.message = "Bericht te kort";
  return errs;
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
    const text = `Hallo TDC, ik ben ${data.name} (${data.car}). ${data.message}`;
    window.open(`https://wa.me/31600000000?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container-tdc grid gap-14 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </span>
          <h2 className="display-lg mt-6">
            Plan een <span className="text-accent-red italic">afspraak</span>.
          </h2>
          <p className="mt-4 max-w-md text-base text-foreground/65">
            Stuur een bericht via WhatsApp of vul het formulier in — we
            denken graag mee over de beste behandeling voor jouw auto.
          </p>

          <div className="mt-10 space-y-1 rounded-2xl border border-foreground/10 bg-card p-2">
            <a href="https://wa.me/31600000000" className="flex items-center gap-4 rounded-xl p-4 hover:bg-foreground/5 transition-colors">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><MessageCircle size={18} /></span>
              <div>
                <p className="text-xs text-foreground/55">WhatsApp</p>
                <p className="text-sm font-semibold text-foreground">+31 6 0000 0000</p>
              </div>
            </a>
            <a href="tel:+31600000000" className="flex items-center gap-4 rounded-xl p-4 hover:bg-foreground/5 transition-colors">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><Phone size={18} /></span>
              <div>
                <p className="text-xs text-foreground/55">Bel direct</p>
                <p className="text-sm font-semibold text-foreground">+31 6 0000 0000</p>
              </div>
            </a>
            <a href="mailto:info@tdcfryslan.nl" className="flex items-center gap-4 rounded-xl p-4 hover:bg-foreground/5 transition-colors">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><Mail size={18} /></span>
              <div>
                <p className="text-xs text-foreground/55">E-mail</p>
                <p className="text-sm font-semibold text-foreground">info@tdcfryslan.nl</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl p-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><MapPin size={18} /></span>
              <div>
                <p className="text-xs text-foreground/55">Locatie</p>
                <p className="text-sm font-semibold text-foreground">De Westereen, Fryslân</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          onSubmit={onSubmit}
          className="space-y-4 rounded-3xl border border-foreground/10 bg-card p-7 md:p-9 shadow-sm"
        >
          <Field label="Naam" name="name" error={errors.name} />
          <Field label="Auto (merk + model)" name="car" error={errors.car} />
          <Field label="Uw vraag" name="message" textarea error={errors.message} />
          <button type="submit" className="btn-red w-full">
            Verstuur via WhatsApp
          </button>
          {sent && (
            <p className="text-xs text-foreground/55">WhatsApp wordt geopend…</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, textarea, error }) {
  const cls =
    "w-full rounded-xl border border-foreground/15 bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/55">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} maxLength={1000} />
      ) : (
        <input name={name} className={cls} maxLength={80} />
      )}
      {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
    </label>
  );
}
