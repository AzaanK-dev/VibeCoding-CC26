"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card, Heading, Reveal } from "@/components/ui";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const Icon = ({ children }: { children: ReactNode }) => (
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-surf to-ink text-brand transition duration-500 group-hover:border-brand/60 group-hover:shadow-[0_0_30px_-4px_rgba(224,32,26,.7)]">
    <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>{children}</svg>
  </div>
);
const Pill = ({ children }: { children: ReactNode }) => <span className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-xs text-mist">{children}</span>;

const draw = (d: string, delay: number) => (
  <motion.path d={d} initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeInOut" }} />
);

function Trophy() {
  return (
    <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64">
      <div className="absolute inset-6 rounded-full bg-brand/30 blur-[60px]" />
      <motion.svg animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} viewBox="0 0 120 120" className="relative h-full w-full text-brand" {...stroke} strokeWidth={1.8}>
        {draw("M32 18h56v24c0 18-12 30-28 30S32 60 32 42z", 0)}
        {draw("M32 26H18c0 14 6 22 17 25", .3)}
        {draw("M88 26h14c0 14-6 22-17 25", .3)}
        {draw("M60 72v16M46 88h28v14H46zM38 104h44", .6)}
        <motion.path d="M60 30l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="currentColor" stroke="none" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4, type: "spring" }} style={{ transformOrigin: "60px 42px" }} />
      </motion.svg>
    </div>
  );
}

export default function Prizes() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28">
      <Heading title="Prizes & recognition" sub="Every team leaves with something. One team leaves with everything." />
      <div className="grid gap-5 md:grid-cols-3">
        {/* Grand prize: rotating light border */}
        <Reveal className="md:col-span-2 md:row-span-2">
          <div className="relative h-full overflow-hidden rounded-3xl p-px">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} className="absolute -inset-[100%]" style={{ background: "conic-gradient(from 0deg, transparent 0 62%, #6B1316 76%, #E0201A 88%, #F5F5F2 92%, transparent 100%)" }} />
            <div className="relative grid h-full gap-8 rounded-[23px] bg-gradient-to-br from-[#ae0808] via-ink to-ink p-8 sm:grid-cols-[1fr_auto] sm:items-center sm:p-12">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cream/40 to-transparent" />
              <div>
                <Pill>Winning team</Pill>
                <h3 className="mt-5 font-display text-5xl uppercase tracking-wide sm:text-6xl">Grand Prize</h3>
                <p className="mt-4 max-w-sm font-light leading-relaxed text-mist">The team that pitches best on the final stage takes home the top honour of CODE//CONNECT'26.</p>
                <ul className="mt-7 space-y-3 text-sm">
                  {["Cash prize", "Recognition live on stage", "Networking with industry leaders"].map(t => (
                    <li key={t} className="flex items-center gap-3 text-cream/90"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20"><svg width="11" height="11" viewBox="0 0 24 24" {...stroke} strokeWidth={3} className="text-brand"><path d="M5 12l5 5 9-10" /></svg></span>{t}</li>
                  ))}
                </ul>
              </div>
              <Trophy />
            </div>
          </div>
        </Reveal>

        {[
          { t: "Networking", d: "Career opportunities with software companies and startups at Career Connect'26.", p: "Partner companies", i: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></> },
          { t: "Certificates", d: "Official recognition for your work, whether or not you reach the Top 10.", p: "Every team", i: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14.5L7 21l5-3 5 3-1.5-6.5" /></> },
        ].map((c, i) => (
          <Reveal key={c.t} delay={(i + 1) * .1}>
            <Card className="group h-full p-7">
              <div className="flex items-start justify-between"><Icon>{c.i}</Icon><Pill>{c.p}</Pill></div>
              <h3 className="mt-6 text-stroke-white font-display text-3xl uppercase tracking-wide">{c.t}</h3>
              <div className="my-3 h-px w-10 bg-brand transition-all duration-500 group-hover:w-24" />
              <p className="text-sm font-light leading-relaxed text-mist">{c.d}</p>
            </Card>
          </Reveal>
        ))}

        {/* Ticket stub */}
        <Reveal delay={.3} className="md:col-span-3">
          <div className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-white/10 bg-char px-8 py-7 transition hover:border-brand/50 sm:flex-row sm:items-center">
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-white/10 bg-ink" />
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-white/10 bg-ink" />
            <Icon><path d="M3 9a2 2 0 002-2h14a2 2 0 002 2v1.5a1.5 1.5 0 000 3V15a2 2 0 00-2 2H5a2 2 0 00-2-2z" transform="translate(0 -1)" /><path d="M14 7v10" strokeDasharray="2 2" /></Icon>
            <div className="flex-1 sm:border-l sm:border-dashed sm:border-white/15 sm:pl-6">
              <h3 className="font-display text-3xl uppercase tracking-wid text-stroke-white">Free entry to Career Connect'26</h3>
              <p className="mt-1 text-sm font-light text-mist">Every registered team gets onsite access at UBIT to explore, network and meet the industry.</p>
            </div>
            <Pill>Every registered team</Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}