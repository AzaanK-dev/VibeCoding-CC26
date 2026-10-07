"use client";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "@/components/Countdown"; import { Card, PageHero, Reveal } from "@/components/ui";
import { DATES, LINKS, problems, rules } from "@/lib/data"; import { usePhase } from "@/lib/phase";
export default function Competition() {
  const { phase } = usePhase();
  const label = phase === "before" ? "Competition starts in" : phase === "live" ? "Time remaining" : "Time is up";
  return <main>
    <PageHero title="Competition" sub="17–18 October · Online phase. Pick 1 of 3 domains, build your MVP and submit before the timer hits zero." />
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal><div className="mb-3 flex items-center gap-3"><span className={`h-3 w-3 rounded-full ${phase === "live" ? "animate-ping bg-brand" : "bg-stone"}`} /><span className="font-mono text-sm text-mist">{label}</span></div>
        {phase === "ended" ? <div className="card !transform-none p-10 font-display text-6xl text-brand sm:text-8xl">00:00:00 · Submissions open</div> : phase && <Countdown target={phase === "before" ? DATES.start : DATES.end} />}</Reveal>

      <h2 className="h-display mb-8 mt-24 text-5xl md:text-7xl">Problem statements</h2>
      <div className="grid gap-5 md:grid-cols-3">{problems.map((p, i) => { const locked = phase === "before" || phase === null; return <Card key={p.id} className="relative min-h-64 p-8">
        <div className="font-display text-8xl text-stroke">{p.id}</div>
        <AnimatePresence mode="wait">{locked ? <motion.div key="l" exit={{ opacity: 0 }} className="mt-4"><div className="font-display text-3xl uppercase text-stone">Locked</div><p className="mt-2 text-sm text-stone">Revealed when the competition starts.</p></motion.div>
          : <motion.div key="u" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .15 }} className="mt-4"><h3 className="font-display text-3xl uppercase text-brand">{p.domain}</h3><p className="mt-2 text-mist">{p.brief}</p></motion.div>}</AnimatePresence>
        {locked && <div className="absolute inset-0 z-20 flex items-start justify-end p-6 backdrop-blur-[3px]"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E0201A" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></svg></div>}
      </Card>; })}</div>

      <div className="mt-24 grid gap-8 lg:grid-cols-2">
        <Reveal><Card className="h-full p-8"><h2 className="h-display mb-6 text-5xl">Submission requirements</h2><ul className="space-y-4">{rules.slice(2, 6).map(r => <li key={r} className="flex gap-3 text-mist"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{r}</li>)}</ul></Card></Reveal>
        <Reveal delay={.1}><div className="card flex h-full flex-col items-start justify-between gap-6 !transform-none bg-tint p-8"><div><h2 className="h-display text-5xl">Submit your MVP</h2><p className="mt-3 text-mist">{phase === "ended" ? "The timer is at zero. Submit your live link and GitHub repo now." : "Submissions open when the timer reaches zero."}</p></div>
          {phase === "ended" ? <a href={LINKS.submit} target="_blank" className="btn btn-red">Submit MVP</a> : <button disabled className="btn btn-ghost cursor-not-allowed opacity-50">Submissions locked</button>}</div></Reveal>
      </div></section></main>;
}
