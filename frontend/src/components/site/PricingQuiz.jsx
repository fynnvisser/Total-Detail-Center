import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Truck, Bus, Sparkles, Shield, Droplets, Lightbulb, ArrowRight, ArrowLeft, MessageCircle, Check, RotateCcw } from "lucide-react";
import { company } from "../../data/mock";

// --- Pricing data ---
const sizes = [
  { id: "small", label: "Klein", sub: "Bijv. VW Polo, Fiat 500", icon: Car },
  { id: "medium", label: "Middenklasse", sub: "Bijv. Audi A4, BMW 3-Serie", icon: Car },
  { id: "large", label: "SUV / Groot", sub: "Bijv. BMW X5, Mercedes GLE", icon: Truck },
  { id: "van", label: "Bus / Bedrijfsauto", sub: "Bijv. VW Transporter", icon: Bus },
];

const packages = [
  {
    id: "onderhoud",
    label: "Onderhoudsbeurt",
    sub: "Grondig wassen, wax, afdrogen & velgen",
    icon: Droplets,
    prices: { small: 99, medium: 125, large: 175, van: 200 },
  },
  {
    id: "detail",
    label: "Detail Pakket",
    sub: "Onderhoudsbeurt + lak polijsten & schoonmaken binnen",
    icon: Sparkles,
    popular: true,
    prices: { small: 199, medium: 249, large: 299, van: 350 },
  },
  {
    id: "compleet",
    label: "Compleet",
    sub: "Detail pakket + wax, interieur intensief & onder motorkap",
    icon: Shield,
    prices: { small: 249, medium: 300, large: 375, van: 450 },
  },
];

const addons = [
  { id: "headlight", label: "Koplampen opfrissen", sub: "Vergeling weg, helder weer", add: 90, icon: Lightbulb },
  { id: "ceramic", label: "Ceramische wax", sub: "Extra hydrofobe bescherming", add: 25, icon: Shield },
];

function calcPrice({ size, pkg, extras }) {
  if (!size || !pkg) return null;
  const pkgData = packages.find((p) => p.id === pkg);
  if (!pkgData) return null;
  const base = pkgData.prices[size] ?? 0;
  const addExtras = extras.reduce((acc, id) => acc + (addons.find((a) => a.id === id)?.add ?? 0), 0);
  const total = base + addExtras;
  const low = Math.round(total * 0.95);
  const high = Math.round(total * 1.20);
  return { low, high, base, addExtras, total };
}

// --- Component ---
export default function PricingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ size: null, pkg: null, extras: [] });

  const totalSteps = 3; // 0:size 1:pkg 2:extras 3:result
  const price = useMemo(() => calcPrice(answers), [answers]);

  const set = (k, v) => setAnswers((a) => ({ ...a, [k]: v }));
  const toggleExtra = (id) =>
    setAnswers((a) => ({
      ...a,
      extras: a.extras.includes(id) ? a.extras.filter((x) => x !== id) : [...a.extras, id],
    }));
  const reset = () => { setAnswers({ size: null, pkg: null, extras: [] }); setStep(0); };

  const next = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const progress = (step / totalSteps) * 100;

  const canNext =
    (step === 0 && answers.size) ||
    (step === 1 && answers.pkg) ||
    step === 2 ||
    step === 3;

  const sendWhatsApp = () => {
    const sizeLabel = sizes.find((s) => s.id === answers.size)?.label || "";
    const pkgLabel = packages.find((p) => p.id === answers.pkg)?.label || "";
    const extrasLabels = answers.extras.map((id) => addons.find((a) => a.id === id)?.label).filter(Boolean).join(", ") || "—";
    const range = price ? `€ ${price.low} – € ${price.high}` : "—";
    const text = [
      `*Prijsindicatie via website*`,
      ``,
      `*Voertuig:* ${sizeLabel}`,
      `*Pakket:* ${pkgLabel}`,
      `*Extra's:* ${extrasLabels}`,
      `*Indicatie:* ${range}`,
      ``,
      `Ik wil graag een definitieve offerte.`,
    ].join("\n");
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="prijzen" className="relative bg-background py-20 md:py-28">
      <div className="container-tdc">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Prijsindicatie
            </span>
            <h2 className="display-md mt-5">
              Bereken <span className="text-accent-red italic">jouw prijs</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-5 text-sm text-foreground/65 leading-relaxed"
          >
            3 vragen, direct een indicatie. Stuur de uitkomst eenvoudig door via WhatsApp voor een definitieve offerte op maat.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]"
        >
          {/* Progress bar */}
          <div className="flex items-center justify-between gap-4 px-6 md:px-10 pt-6 md:pt-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45">
              Stap {Math.min(step + 1, totalSteps + 1)} / {totalSteps + 1}
            </span>
            <button onClick={reset} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45 hover:text-foreground transition-colors">
              <RotateCcw size={12} /> Opnieuw
            </button>
          </div>
          <div className="mt-4 h-[3px] w-full bg-foreground/8">
            <motion.div
              className="h-full bg-primary"
              initial={false}
              animate={{ width: `${step === totalSteps ? 100 : progress}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="min-h-[420px] md:min-h-[460px] px-6 md:px-10 py-8 md:py-10">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <Step key="size" title="Welk type voertuig?" sub="Hoe groter de auto, hoe meer tijd het kost.">
                  <Grid cols={2}>
                    {sizes.map((s) => (
                      <Card
                        key={s.id}
                        active={answers.size === s.id}
                        onClick={() => { set("size", s.id); setTimeout(next, 200); }}
                      >
                        <s.icon size={20} className="text-primary" />
                        <p className="mt-4 text-base font-bold text-foreground">{s.label}</p>
                        <p className="mt-1 text-xs text-foreground/55">{s.sub}</p>
                      </Card>
                    ))}
                  </Grid>
                </Step>
              )}
              {step === 1 && (
                <Step key="pkg" title="Welk pakket past het beste?" sub="De prijs is afgestemd op jouw voertuig.">
                  <Grid cols={3}>
                    {packages.map((p) => (
                      <Card
                        key={p.id}
                        active={answers.pkg === p.id}
                        onClick={() => { set("pkg", p.id); setTimeout(next, 200); }}
                      >
                        <div className="flex items-center justify-between">
                          <p.icon size={20} className="text-primary" />
                          {p.popular && <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white">Populair</span>}
                        </div>
                        <p className="mt-4 text-base font-bold text-foreground">{p.label}</p>
                        <p className="mt-1 text-xs text-foreground/55 leading-relaxed">{p.sub}</p>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                          € {p.prices[answers.size]}
                        </p>
                      </Card>
                    ))}
                  </Grid>
                </Step>
              )}
              {step === 2 && (
                <Step key="extras" title="Extra's? (optioneel)" sub="Voeg toe of sla over om verder te gaan.">
                  <Grid cols={2}>
                    {addons.map((a) => {
                      const on = answers.extras.includes(a.id);
                      return (
                        <Card
                          key={a.id}
                          active={on}
                          onClick={() => toggleExtra(a.id)}
                        >
                          <div className="flex items-center justify-between">
                            <a.icon size={20} className="text-primary" />
                            <span className={`grid h-6 w-6 place-items-center rounded-full border transition-colors ${on ? 'bg-primary text-white border-primary' : 'border-foreground/15 text-transparent'}`}>
                              <Check size={12} strokeWidth={3} />
                            </span>
                          </div>
                          <p className="mt-4 text-base font-bold text-foreground">{a.label}</p>
                          <p className="mt-1 text-xs text-foreground/55">{a.sub}</p>
                          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/40">+ € {a.add}</p>
                        </Card>
                      );
                    })}
                  </Grid>
                </Step>
              )}
              {step === 3 && price && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row md:items-stretch gap-8"
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Jouw indicatie</p>
                    <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="mt-3 font-extrabold tracking-[-0.04em] text-foreground leading-[0.95]">
                      <span className="block text-[clamp(2.25rem,6.5vw,4.5rem)] tabular-nums">€ {price.low} – € {price.high}</span>
                    </h3>
                    <p className="mt-4 text-sm text-foreground/60 max-w-md leading-relaxed">
                      Indicatie op basis van je antwoorden. De exacte prijs hangt af van de werkelijke staat van je auto — stuur 'm door en je krijgt een definitieve offerte op maat.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <button onClick={sendWhatsApp} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:brightness-110 transition">
                        <MessageCircle size={15} />
                        Stuur via WhatsApp
                      </button>
                      <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition">
                        <RotateCcw size={14} /> Opnieuw
                      </button>
                    </div>
                  </div>
                  <div className="md:w-80 shrink-0 rounded-2xl border border-foreground/10 bg-background p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45">Samenvatting</p>
                    <SummaryRow label="Voertuig" value={sizes.find(s => s.id === answers.size)?.label} />
                    <SummaryRow label="Pakket" value={packages.find(p => p.id === answers.pkg)?.label} />
                    <SummaryRow label="Basisprijs" value={`€ ${price.base}`} />
                    {price.addExtras > 0 && (
                      <SummaryRow label="Extra's" value={`+ € ${price.addExtras}`} />
                    )}
                    <SummaryRow label="Totaal" value={`€ ${price.total}`} bold />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {step < totalSteps && (
            <div className="flex items-center justify-between gap-3 border-t border-foreground/10 px-6 md:px-10 py-5">
              <button
                onClick={prev}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-xs font-semibold text-foreground transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-foreground hover:text-background"
              >
                <ArrowLeft size={13} /> Terug
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary"
              >
                {step === 2 ? "Bekijk indicatie" : "Volgende"} <ArrowRight size={13} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Step({ title, sub, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 style={{ fontFamily: "'Inter Tight', sans-serif" }} className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{sub}</p>
      <div className="mt-7">{children}</div>
    </motion.div>
  );
}

function Grid({ cols, children }) {
  return (
    <div className={`grid gap-3 sm:gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {children}
    </div>
  );
}

function Card({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left rounded-2xl border p-5 transition-all duration-200 ${
        active
          ? "border-primary bg-primary/5 shadow-[0_8px_30px_-15px_hsl(0,100%,42%)]"
          : "border-foreground/10 bg-background hover:border-foreground/30 hover:-translate-y-0.5"
      }`}
    >
      {children}
    </button>
  );
}

function SummaryRow({ label, value, bold }) {
  return (
    <div className="mt-3 flex items-baseline justify-between gap-3 border-b border-foreground/8 pb-2 last:border-b-0">
      <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/45 shrink-0">{label}</span>
      <span className={`text-right ${bold ? 'text-base font-bold text-foreground' : 'text-xs font-semibold text-foreground'}`}>{value || "—"}</span>
    </div>
  );
}
