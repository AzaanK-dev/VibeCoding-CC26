"use client";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "@/components/Countdown"; import { Card, PageHero, Reveal } from "@/components/ui";
import { DATES, LINKS, problems, rules } from "@/lib/data"; import { usePhase } from "@/lib/phase";
import SubmitCard from "@/components/SubmitCard";
export default function Competition() {
  const { phase } = usePhase();
  const label = phase === "before" ? "Competition starts in" : phase === "live" ? "Time remaining" : "Time is up";
  return <main>
    <div>
      <PageHero
        headline="Explore the challenge"
        title="Competition"
        sub="Join us online on 17–18 October, choose one of three problem domains, and turn your ideas into a working MVP. Submit your solution before the deadline to make your mark."
      />
    </div>  <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal><div className="mb-3 flex items-center gap-3"><span className={`h-3 w-3 rounded-full ${phase === "live" ? "animate-ping bg-brand" : "bg-stone"}`} /><span className="font-mono text-sm text-mist">{label}</span></div>
        {phase === "ended" ? <div className="bg-red-700 rounded-3xl !transform-none p-10 font-display text-2xl text-white  sm:text-5xl">00:00:00 <br /> Scroll Down to Submissions</div> : phase && <Countdown target={phase === "before" ? DATES.start : DATES.end} />}</Reveal>

      <div className="mt-24 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <h2 className="h-display text-3xl md:text-5xl">
          Problem statements
        </h2>

        {phase !== "before" && phase !== null && (<a
          href="/problem-statements.pdf"
          download
          className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-6 py-3.5 font-bold text-white shadow-lg shadow-brand/25 ring-1 ring-brand transition-all duration-300 hover:shadow-xl hover:shadow-brand/40 active:translate-y-0 sm:w-auto"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
          View in Detail
        </a>)}  
      </div>

      <p className={`my-3 max-w-md text-white/85`}>
        Choose 1 of the 3 from below. Statements will be revealed at <b>17 Oct, 10:00 am</b>.
      </p>
      <div className="grid gap-5 md:grid-cols-3">{problems.map((p, i) => {
        const locked = phase === "before" || phase === null; return <Card key={p.id} className="relative min-h-64 p-8">
          <div className="font-display text-8xl text-stroke">{p.id}</div>
          <AnimatePresence mode="wait">{locked ? <motion.div key="l" exit={{ opacity: 0 }} className="mt-4"><div className="font-display text-3xl uppercase text-stone">Locked</div><p className="mt-2 text-sm text-stone">Revealed when the competition starts.</p></motion.div>
            : <motion.div key="u" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .15 }} className="mt-4"><h3 className="font-display text-3xl uppercase text-brand">{p.domain}</h3><p className="mt-2 text-mist">{p.brief}</p></motion.div>}</AnimatePresence>
          {locked && <div className="absolute inset-0 z-20 flex items-start justify-end p-6 backdrop-blur-[3px]"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E0201A" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></svg></div>}
        </Card>;
      })}</div>

      <div className="mt-24 grid gap-8 lg:grid-cols-2">
        <Reveal><Card className="h-full p-8"><h2 className="h-display mb-6 text-stroke-white text-3xl md:text-4xl">Submission requirements</h2><ul className="space-y-4">{rules.slice(2, 6).map(r => <li key={r} className="flex gap-3 text-mist"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{r}</li>)}</ul></Card></Reveal>
        <SubmitCard phase={phase} />

      </div></section></main>;
}
