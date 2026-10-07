"use client";
import { motion } from "framer-motion"; import { useState } from "react";
import { Card, Heading, HeadingStroked, Reveal } from "@/components/ui";
import { LINKS, why, steps, timeline, rules, judging, prizes, faqs, DATES } from "@/lib/data";
import About from "@/components/About";
import Prizes from "@/components/Prizes";
import { usePhase } from "@/lib/phase";
import ProblemPreview from "./competition/ProblemPreview";

const words = ["BUILD", "VIBE", "SHIP", "CONNECT", "PITCH", "WIN"];
export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const { phase } = usePhase();
  const label = phase === "before" ? "Competition starts in" : phase === "live" ? "Time remaining" : "Time is up";


  return <main>
    {/* HERO */}
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-[560px] w-[560px] rounded-full bg-brand/30 blur-[150px] animate-glow" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-crimson/60 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-tint px-4 py-1.5 font-mono text-xs text-brand"><span className="h-2 w-2 animate-ping rounded-full bg-brand" />A sub-event of Career Connect'26</motion.p>
          <h1 className="h-display text-[17vw] sm:text-[9rem] lg:text-[8.5rem]">
            {["VIBE", "CODING", "HACKATHON"].map((w, i) => <motion.span key={w} initial={{ opacity: 0, y: 70, rotateX: -50 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: .15 * i, duration: .8, ease: [.22, 1, .36, 1] }} className={`block ${i === 1 ? "text-brand" : i === 2 ? "text-stroke" : ""}`}>{w}</motion.span>)}
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6 flex flex-wrap gap-1 text-sm sm:gap-3">
            <span className="card !rounded-full px-5 py-2"><b className="text-brand">17–18 Oct: </b> Online Phase</span>
            <span className="card !rounded-full px-5 py-2"><b className="text-brand">22 Oct: </b> Onsite Phase</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-9 flex flex-wrap gap-4">
            <a href={LINKS.reg} target="_blank" className="btn btn-red">Register</a>
            <a href="#how" className="btn btn-ghost">How it works</a>
          </motion.div>
        </div>
        
    <ProblemPreview />
      </div>
    </section>

    {/* MARQUEE */}
    <div className="overflow-hidden border-y border-white/5 bg-tint py-4 mb-12"><div className="flex w-max animate-marquee gap-10 font-display text-4xl">{[...words, ...words, ...words, ...words].map((w, i) => <span key={i} className={i % 2 ? "text-stroke" : "text-brand"}>{w} <span className="text-cream/30">//</span></span>)}</div></div>


    {/* ABOUT */}
    <About />

    {/* WHY */}
    <section className="mx-auto max-w-6xl px-5 pb-28"><Heading title="Why participate?" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{why.map((w, i) => <Reveal key={w.t} delay={i * .08}><Card className="h-full p-7"><div className="font-display text-6xl text-stroke transition group-hover:text-brand">{w.t}</div><p className="mt-4 text-mist">{w.d}</p></Card></Reveal>)}</div></section>

    {/* HOW */}
    <section id="how" className="border-y border-white/5 bg-char px-5 py-28"><div className="mx-auto max-w-6xl"><Heading title="How it works" />
      <div className="grid gap-5 md:grid-cols-4">{steps.map((s, i) => <Reveal key={s.t} delay={i * .1}><Card className="h-full p-7"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand font-display text-2xl">{i + 1}</div><h3 className="font-display text-3xl uppercase">{s.t}</h3><p className="mt-2 text-sm text-mist">{s.d}</p></Card></Reveal>)}</div></div></section>

    {/* RULES + JUDGING */}
    <section className="mx-auto grid max-w-6xl gap-8 px-5 mt-12 lg:grid-cols-2">
      <Reveal><Card className="h-full p-8">{HeadingStroked({ title: "Rules & eligibility" })}<ul className="space-y-4">{rules.map(r => <li key={r} className="flex gap-3 text-mist"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{r}</li>)}</ul></Card></Reveal>
      <Reveal delay={.1}><Card className="h-full p-8">{HeadingStroked({ title: "Judging criteria" })}<div className="space-y-5">{judging.map(j => <div key={j.t}><div className="mb-1.5 flex justify-between text-sm"><span>{j.t}</span><span className="font-mono text-brand">{j.v}%</span></div><div className="h-2 overflow-hidden rounded-full bg-surf"><motion.div initial={{ width: 0 }} whileInView={{ width: `${j.v * 3}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-crimson to-brand" /></div></div>)}</div></Card></Reveal>
    </section>

    {/* TIMELINE */}
    <section className="mx-auto max-w-4xl px-5 py-36"><Heading title="Timeline" />
      <div className="relative border-l-2 border-crimson pl-8">{timeline.map((t, i) => <Reveal key={t.t} delay={i * .05} className="relative mb-10 last:mb-0"><span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-brand shadow-[0_0_0_6px_rgba(224,32,26,.2)]" /><div className="font-mono text-sm text-brand">{t.d}</div><h3 className="font-display text-stroke-white text-4xl uppercase">{t.t}</h3><p className="text-mist">{t.s}</p></Reveal>)}</div></section>


    {/* PRIZES */}
    <Prizes />

    {/* FAQ */}
    <section className="mx-auto max-w-3xl px-5 pb-28"><Heading title="FAQ" />
      <div className="space-y-3">{faqs.map((f, i) => <div key={f.q} className="card !transform-none"><button onClick={() => setOpen(open === i ? null : i)} className="relative z-10 flex w-full items-center justify-between p-6 text-left text-lg font-semibold">{f.q}<motion.span animate={{ rotate: open === i ? 45 : 0 }} className="font-display text-3xl text-brand">+</motion.span></button>
        <motion.div initial={false} animate={{ height: open === i ? "auto" : 0 }} className="relative z-10 overflow-hidden"><p className="px-6 pb-6 text-mist">{f.a}</p></motion.div></div>)}</div></section>

    {/* CTA */}
    <section className="px-5 pb-28"><Reveal><div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand/40 bg-tint p-10 text-center sm:p-20"><div className="absolute left-1/2 top-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-brand/40 blur-[120px]" /><h2 className="h-display relative text-5xl sm:text-8xl">Code. Connect.<br /><span className="text-brand">Create your future.</span></h2><a href={LINKS.reg} target="_blank" className="btn btn-red relative mt-9">Register now</a></div></Reveal></section>
  </main>;
}
