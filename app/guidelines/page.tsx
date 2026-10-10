"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero, Reveal } from "@/components/ui";
import { keyFacts, rulesIntro, rulesSections as sections, type Item } from "@/lib/rules";

const Dot = () => <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />;

function Bullets({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => typeof it === "string" ? (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base"><Dot />{it}</li>
      ) : (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base"><Dot />
          <div><span className="text-cream">{it.t}</span>
            <ul className="mt-2 space-y-2 border-l border-white/10 pl-4">
              {it.sub.map(s => <li key={s} className="flex gap-2.5 text-sm text-mist"><span className="mt-2 h-px w-2.5 shrink-0 bg-brand" />{s}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Rules() {
  const [open, setOpen] = useState<Set<string>>(new Set([sections[0].id]));
  const allOpen = open.size === sections.length;
  const toggle = (id: string) => setOpen(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const goTo = (id: string) => {
    setOpen(p => new Set(p).add(id));
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return (
    <main>
      {/* hero */}
      <section >
        <div className="pointer-events-none  rounded-full bg-brand/25 blur-[120px] animate-glow" />
        <div className="relative mx-auto max-w-7xl">
          <PageHero headline="Know the rules" title="Rules &amp; guidelines" sub={rulesIntro}/>

          <div className="mx-4 mb-8 grid max-w-5xl grid-cols-2 gap-2.5 sm:gap-4 sm:mx-auto md:grid-cols-4">
            {keyFacts.map((f, i) => (
              <motion.div key={f.k} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + i * .08 }}
                className={`rounded-2xl border p-3.5 sm:p-5 ${i === 3 ? "border-brand/40 bg-tint" : "border-white/10 bg-char"}`}>
                <div className="font-mono text-[10px] text-stone sm:text-sm">{f.k}</div>
                <div className={`mt-1 font-display text-md uppercase leading-tight sm:text-2xl ${i === 3 ? "text-brand" : ""}`}>{f.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 lg:grid-cols-[210px_1fr]">
        {/* desktop index */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-1 border-l border-white/10">
            {sections.map((s, i) => (
              <button key={s.id} onClick={() => goTo(s.id)} className="group flex w-full items-center gap-3 py-1.5 pl-4 text-left text-sm text-stone transition hover:text-cream">
                <span className="font-mono text-xs text-brand/70 transition group-hover:text-brand">{String(i + 1).padStart(2, "0")}</span>{s.title}
              </button>
            ))}
          </nav>
        </aside>

        <div>
          <div className="mb-4 flex justify-end">
            <button onClick={() => setOpen(allOpen ? new Set() : new Set(sections.map(s => s.id)))} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 font-mono text-xs transition hover:border-brand hover:text-brand">
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <div className="space-y-3">
            {sections.map((s, i) => {
              const isOpen = open.has(s.id);
              const count = (s.items?.length ?? 0) + (s.steps?.length ?? 0);
              return (
                <Reveal key={s.id}>
                  <div id={s.id} className={`card !transform-none scroll-mt-28 ${s.danger ? "!border-brand/40 !bg-tint" : ""} ${isOpen ? "!border-brand/40" : ""}`}>
                    <button onClick={() => toggle(s.id)} aria-expanded={isOpen} className="relative z-10 flex w-full items-center gap-3 p-4 text-left sm:gap-5 sm:p-6">
                      <span className={`font-display text-3xl leading-none sm:text-5xl ${isOpen ? "text-brand" : "text-stroke"}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg uppercase leading-tight sm:text-3xl">{s.title}</span>
                        <span className="mt-0.5 block text-xs text-stone sm:text-sm">{s.summary}</span>
                      </span>
                      <span className="hidden rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-stone sm:block">{count} points</span>
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="font-display text-3xl text-brand">+</motion.span>
                    </button>
                    <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} transition={{ duration: .35, ease: [.22, 1, .36, 1] }} className="relative z-10 overflow-hidden">
                      <div className="px-4 pb-5 sm:px-6 sm:pb-7 sm:pl-[5.5rem]">
                        {s.lead && <p className="mb-4 text-sm font-semibold sm:text-base">{s.lead}</p>}
                        {s.items && <Bullets items={s.items} />}
                        {s.steps && (
                          <ol className="grid gap-2.5 sm:grid-cols-2">
                            {s.steps.map((st, k) => (
                              <li key={st.t} className="flex gap-3 rounded-xl border border-white/10 bg-ink/60 p-3.5">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand font-mono text-xs font-bold">{k + 1}</span>
                                <div><div className="text-sm font-semibold">{st.t}</div><p className="mt-0.5 text-xs leading-relaxed text-mist sm:text-sm">{st.d}</p></div>
                              </li>
                            ))}
                          </ol>
                        )}
                        {s.note && <p className="mt-4 rounded-xl border-l-2 border-brand bg-white/[.03] px-4 py-3 text-sm italic text-mist">{s.note}</p>}
                      </div>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-white/10 bg-char p-5 sm:p-6">
              <div className="font-display text-2xl uppercase sm:text-3xl">Need a clarification?</div>
              <p className="mt-1 text-sm text-mist">Ask the official organizing team before the competition starts.</p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 font-mono text-xs sm:text-sm">
                <span>Azaan Mehtab Khan: <b className="text-brand">+92 321 4158518</b></span>
                <span>Sharjeel Ahmed: <b className="text-brand">+92 312 1198483</b></span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}