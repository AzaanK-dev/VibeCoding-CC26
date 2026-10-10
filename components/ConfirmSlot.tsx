"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { DATES } from "@/lib/data";
import { useNow } from "@/lib/phase";
import { Reveal } from "@/components/ui";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const steps: { t: string; d: string; tag: string; icon: ReactNode }[] = [
  { t: "Pay the fee", d: "Use the payment instructions sent to you by email or WhatsApp.", tag: "PKR 2000 / team", icon: <><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20M6 15h4" /></> },
  { t: "Send the screenshot", d: "Share your payment screenshot on WhatsApp along with your team name.", tag: "WhatsApp", icon: <path d="M21 12a8.5 8.5 0 01-12.6 7.4L3 21l1.7-5.2A8.5 8.5 0 1121 12z" /> },
  { t: "Slot confirmed", d: "We will verify the payment and lock your place in the competition.", tag: "Payment verification", icon: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></> },
];

export default function ConfirmSlot({ wa }: { wa: string }) {
  const now = useNow();
  const dl = +new Date(DATES.paymentDeadline);
  const left = now === null ? null : dl - now;
  const label = left === null ? "" : left <= 0 ? "Deadline passed" : `${Math.floor(left / 864e5)}d ${Math.floor(left / 36e5) % 24}h ${Math.floor(left / 6e4) % 60}m left`;
  const date = new Date(DATES.paymentDeadline).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Karachi", hour12: false });

  return (
    <Reveal>
      <div className="relative my-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-char to-ink p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-[100px]" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

        {/* header */}
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-brand">Action required · shortlisted teams</p>
            <h2 className="h-display mt-2 text-4xl sm:text-5xl">Confirm your slot</h2>
          </div>
          {/* <div className="flex items-center gap-3 rounded-2xl border border-brand/30 bg-tint px-4 py-3">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand" /><span className="relative h-2.5 w-2.5 rounded-full bg-brand" /></span>
            <div className="leading-tight"><div className="font-mono text-[11px] text-stone">Payment deadline · {date} PKT</div><div className="font-mono text-sm font-semibold">{label || "\u00A0"}</div></div>
          </div> */}
        </div>

        {/* stepper */}
        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-white/10 md:block">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }} style={{ originX: 0 }} className="h-full bg-gradient-to-r from-crimson via-brand to-crimson" />
          </div>
          {steps.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 + i * .25, duration: .6 }} className="group relative text-left md:text-center">
              <div className="relative z-10 flex items-center gap-4 md:flex-col md:gap-0">
                <motion.div whileHover={{ scale: 1.1, rotate: -4 }} className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand/50 bg-ink text-brand shadow-[0_0_30px_-6px_rgba(224,32,26,.7)]">
                  <svg width="26" height="26" viewBox="0 0 24 24" {...S}>{s.icon}</svg>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand font-mono text-xs font-bold text-white">{i + 1}</span>
                </motion.div>
                <h3 className="font-display text-xl uppercase tracking-wide md:mt-5">{s.t}</h3>
              </div>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist md:mx-auto md:max-w-[16rem]">{s.d}</p>
              <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/[.04] px-3 py-1 font-mono text-[11px] text-stone transition group-hover:border-brand/50 group-hover:text-cream">{s.tag}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="relative mt-12 flex flex-col items-stretch gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <p className="px-2 text-sm text-mist">Note: Must include your <b className="text-cream">team name</b> in the message.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-red shrink-0 !text-base">
            <svg width="20" height="20" viewBox="0 0 24 24" {...S}><path d="M21 12a8.5 8.5 0 01-12.6 7.4L3 21l1.7-5.2A8.5 8.5 0 1121 12z" /></svg>
            Send payment screenshot
          </a>
        </div>
      </div>
    </Reveal>
  );
}