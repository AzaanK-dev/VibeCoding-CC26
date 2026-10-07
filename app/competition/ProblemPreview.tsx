"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { DATES, problems } from "@/lib/data";
import { usePhase } from "@/lib/phase";

const fmt = (iso: string) => new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Karachi", hour12: false });
const pad = (n: number) => String(n).padStart(2, "0");

function Seg({ v, l }: { v: number; l: string }) {
  const s = pad(v);
  return (
    <div className="flex-1 rounded-xl border border-white/10 bg-ink/80 py-3 text-center">
      <div className="relative h-8 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span key={s} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: .25 }} className="block font-mono text-2xl font-semibold leading-8 tabular-nums">{s}</motion.span>
        </AnimatePresence>
      </div>
      <div className="mt-1 font-mono text-[10px] text-stone">{l}</div>
    </div>
  );
}

function Redacted({ w }: { w: string }) {
  return (
    <div className={`relative h-3 overflow-hidden rounded-full bg-white/[.07] ${w}`}>
      <motion.div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand/40 to-transparent" animate={{ x: ["-100%", "300%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
    </div>
  );
}

export default function ProblemPreview() {
  const { phase, now } = usePhase();
  const [tab, setTab] = useState(0);
  const p = phase ?? "before";
  const start = +new Date(DATES.start), end = +new Date(DATES.end);
  const target = p === "before" ? start : end;
  const diff = p === "ended" ? 0 : Math.max(0, target - (now ?? target));
  const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
  const progress = p === "before" ? 0 : p === "ended" ? 1 : Math.min(1, Math.max(0, ((now ?? start) - start) / (end - start)));
  const locked = p === "before";
  const status = { before: ["Locked", "bg-white/10 text-mist"], live: ["Live", "bg-brand text-white"], ended: ["Closed", "bg-white/10 text-mist"] }[p];
  const cur = problems[tab];

  return (
    <motion.div initial={{ opacity: 0, y: 40, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .4, duration: .9, ease: [.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand/25 blur-[80px]" />
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-char/90 shadow-[0_40px_100px_-30px_rgba(224,32,26,.55)] backdrop-blur-xl">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

        {/* chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-brand" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /></div>
            <span className="font-mono text-xs text-stone">problem-statements</span>
          </div>
          <span className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold ${status[1]}`}>
            {p === "live" && <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white" />}{status[0]}
          </span>
        </div>

        <div className="space-y-5 p-5">
          {/* timer */}
          <div>
            <div className="mb-2 flex justify-between font-mono text-[11px] text-stone">
              <span>{p === "before" ? "Starts in" : p === "live" ? "Time remaining" : "Submissions open"}</span>
              <span>{p === "before" ? fmt(DATES.start) : fmt(DATES.end)} PKT</span>
            </div>
            <div className="flex gap-2"><Seg v={d} l="DAYS" /><Seg v={h} l="HRS" /><Seg v={m} l="MIN" /><Seg v={s} l="SEC" /></div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-crimson to-brand" animate={{ width: `${progress * 100}%` }} transition={{ duration: 1 }} /></div>
          </div>

          {/* tabs */}
          <div className="relative flex rounded-xl border border-white/10 bg-ink/70 p-1">
            {problems.map((pr, i) => (
              <button key={pr.id} onClick={() => setTab(i)} className={`relative z-10 flex-1 rounded-lg py-2 font-mono text-xs transition-colors ${tab === i ? "text-white" : "text-stone hover:text-cream"}`}>
                {tab === i && <motion.span layoutId="pp-tab" className="absolute inset-0 -z-10 rounded-lg bg-brand" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                {locked && <span className="mr-1.5">🔒</span>}Problem {pr.id}
              </button>
            ))}
          </div>

          {/* panel */}
          <div className="relative min-h-[150px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surf to-ink p-5">
            <AnimatePresence mode="wait">
              {locked ? (
                <motion.div key={`l${tab}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                  <Redacted w="w-1/3" /><div className="h-2" /><Redacted w="w-full" /><Redacted w="w-11/12" /><Redacted w="w-4/5" />
                  <motion.div className="pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-brand/15 to-transparent" animate={{ top: ["-20%", "110%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                  <p className="pt-2 font-mono text-[11px] text-brand">Encrypted · unlocks {fmt(DATES.start)} PKT</p>
                </motion.div>
              ) : (
                <motion.div key={`u${tab}`} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: .3 }}>
                  <div className="font-mono text-[11px] text-brand">Problem {cur.id}</div>
                  <h3 className="mt-1 font-display text-3xl uppercase">{cur.domain}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{cur.brief}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/competition" className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[.03] px-5 py-3.5 text-sm font-semibold transition hover:border-brand hover:bg-brand">
            <span>Pick 1 of 3 · Open competition</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}