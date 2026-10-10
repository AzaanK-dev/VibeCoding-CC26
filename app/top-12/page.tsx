"use client";
import { Card, PageHero, Reveal } from "@/components/ui"; import { top10 } from "@/lib/data";
export default function Top10() {
  return <main>
    <PageHero headline="Meet the finalists" title="Top 12 teams" sub="Announcing what you’ve all been waiting for... These are the Top 12 teams taking the stage at UBIT to pitch what they’ve built and compete for the final win." />
    <section className="mx-auto max-w-6xl px-5 pt-0 pb-16">
      
  <div className="max-h-[450px] overflow-y-auto overscroll-y-auto pr-2 md:max-h-none md:overflow-visible">
    <div className="grid gap-5 md:grid-cols-3">
      {top10.map((t, i) => (
        <Reveal key={t.id} delay={(i % 2) * .08}>
          <Card className="flex gap-6 p-7">
            <div className="font-display text-7xl leading-none text-stroke">
              {t.id}
            </div>
            <div>
              <h3 className="font-display text-3xl uppercase">{t.name}</h3>
              <p className="text-sm text-stone">{t.uni}</p>
              <p className="mt-3 font-semibold text-cream">{t.project}</p>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  </div>  
      <Reveal><div className="relative mt-20 overflow-hidden rounded-3xl border border-brand/40 bg-tint p-12 text-center"><div className="absolute left-1/2 top-0 h-48 w-[500px] -translate-x-1/2 rounded-full bg-brand/40 blur-[110px]" /><p className="relative font-mono text-sm text-brand">Final day</p><h2 className="h-display relative text-7xl sm:text-9xl">22 Oct</h2><p className="relative mt-2 text-mist">Final pitch · UBIT, University of Karachi</p></div></Reveal></section></main>;
}
