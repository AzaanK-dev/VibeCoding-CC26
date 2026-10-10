"use client";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/data";
import type { Phase } from "@/lib/phase";
import { Reveal } from "@/components/ui";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const ready = ["Team name and chosen domain","Deployed live link", "Public GitHub repository"];

export default function SubmitCard({ phase }: { phase: Phase | null }) {
  const open = phase === "ended";
  return (
    <Reveal delay={.1} className="h-full">
      <div className={`relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-3xl p-8 sm:p-10 transition-colors duration-700 ${open ? "bg-gradient-to-br from-brand via-[#b8150f] to-crimson shadow-[0_30px_80px_-30px_rgba(224,32,26,.85)]" : "border border-dashed border-white/15 bg-char"}`}>
        {open && <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-[70px]" />}

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${open ? "border-white/30 bg-white/15 text-white" : "border-white/10 bg-ink text-stone"}`}>
              <svg width="26" height="26" viewBox="0 0 24 24" {...S}>
                {open ? <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" /></> : <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>}
              </svg>
            </div>
            <span className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold ${open ? "bg-white text-brand" : "bg-white/[.06] text-mist"}`}>
              {open && <span className="h-1.5 w-1.5 animate-ping rounded-full bg-brand" />}{open ? "Submissions open" : "Opens: 18 Oct, 10:00 pm"}
            </span>
          </div>

          <h2 className="h-display mt-8 text-4xl sm:text-5xl">Submit your MVP</h2>
          <p className={`mt-3 max-w-md ${open ? "text-white/85" : "text-mist"}`}>
            {open ? "The timer is at zero. Submit your live link and GitHub repo now." : "Submissions unlock the moment the timer reaches zero."}
          </p>

          <ul className="mt-7 space-y-3">
            {ready.map(r => (
              <li key={r} className={`flex items-center gap-3 text-sm ${open ? "text-white" : "text-mist"}`}>
                <span className={`flex h-5 w-5 items-center justify-center rounded-full ${open ? "bg-white/20" : "border border-white/15"}`}>
                  <svg width="11" height="11" viewBox="0 0 24 24" {...S} strokeWidth={3}><path d="M5 12l5 5 9-10" /></svg>
                </span>{r}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {open ? (
            <div className="relative">
              <motion.span className="absolute inset-0 rounded-xl border-2 border-white" animate={{ scale: [1, 1.06], opacity: [.6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
              <a href={LINKS.submit} target="_blank" rel="noopener noreferrer" className="group relative flex w-full items-center justify-between rounded-xl bg-cream px-7 py-4 font-display text-xl uppercase tracking-wide text-brand transition hover:bg-white">
                Submit MVP<span className="transition group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          ) : (
            <button disabled className="flex w-full cursor-not-allowed items-center justify-between rounded-xl border border-white/10 bg-white/[.03] px-7 py-4 font-display text-xl uppercase tracking-wide text-stone">
              Submissions locked<svg width="20" height="20" viewBox="0 0 24 24" {...S}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></svg>
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}