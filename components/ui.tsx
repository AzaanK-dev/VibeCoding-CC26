"use client";
import { motion } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  const move = (e: MouseEvent<HTMLDivElement>) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`); };
  return <div onMouseMove={move} className={`card ${className}`}><div className="relative z-10 h-full">{children}</div></div>;
}
export function Heading({ title, sub }: { title: string; sub?: string }) {
  return <Reveal className="mb-12 max-w-2xl"><div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded bg-brand" /><h2 className="h-display text-5xl md:text-7xl">{title}</h2></div>{sub && <p className="text-lg text-mist">{sub}</p>}</Reveal>;
}
export function HeadingStroked({ title }: { title: string;}) {
  return <Reveal className="mb-12 max-w-2xl"><div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded bg-brand" /><h2 className="h-display text-3xl text-stroke-white md:text-5xl">{title}</h2></div></Reveal>;
}
export function PageHero({ title, sub, children }: { title: string; sub: string; children?: ReactNode }) {
  return <section className="relative overflow-hidden border-b border-white/5 px-5 pb-16 pt-36">
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px] animate-glow" />
    <div className="relative mx-auto max-w-6xl">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }} className="h-display text-6xl md:text-9xl">{title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} className="mt-12 max-w-xl text-xl text-mist">{sub}</motion.p>{children}
    </div></section>;
}
