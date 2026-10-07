"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useNow } from "@/lib/phase";
function Unit({ v, l }: { v: number; l: string }) {
  const s = String(v).padStart(2, "0");
  return <div className="card px-2 py-5 text-center sm:px-8 sm:py-7"><div className="relative h-16 overflow-hidden sm:h-24"><AnimatePresence mode="popLayout"><motion.span key={s} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: .35 }} className="block font-display text-6xl leading-none sm:text-8xl">{s}</motion.span></AnimatePresence></div><div className="mt-2 font-mono text-xs text-brand">{l}</div></div>;
}
export default function Countdown({ target }: { target: string }) {
  const now = useNow(); const diff = Math.max(0, +new Date(target) - (now ?? +new Date(target)));
  const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
  return <div className="grid grid-cols-4 gap-2 sm:gap-4"><Unit v={d} l="Days" /><Unit v={h} l="Hours" /><Unit v={m} l="Min" /><Unit v={s} l="Sec" /></div>;
}
