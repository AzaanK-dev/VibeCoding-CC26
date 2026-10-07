"use client";
import { useEffect, useState } from "react";
import { DATES } from "./data";
export type Phase = "before" | "live" | "ended";
export function useNow() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const i = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(i); }, []);
  return now;
}
export function usePhase(): { phase: Phase | null; now: number | null } {
  const now = useNow();
  const o = process.env.NEXT_PUBLIC_PHASE_OVERRIDE as Phase | undefined;
  if (o) return { phase: o, now: now ?? 0 };
  if (now === null) return { phase: null, now };
  const s = +new Date(DATES.start), e = +new Date(DATES.end);
  return { phase: now < s ? "before" : now < e ? "live" : "ended", now };
}
