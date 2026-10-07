"use client";
import Link from "next/link"; import { usePathname } from "next/navigation"; import { motion } from "framer-motion"; import { useState } from "react";
import { LINKS } from "@/lib/data";
const nav = [["Home", "/"], ["Teams", "/teams"], ["Competition", "/competition"], ["Top 12", "/top-12"], ["Organizers", "/organizers"]];
export default function Navbar() {
  const p = usePathname(); const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <Link href="/" className="font-display text-2xl">CODE<span className="text-brand">//</span>CONNECT<span className="text-brand">'26</span></Link>
      <nav className="hidden items-center gap-1 md:flex">{nav.map(([n, h]) => <Link key={h} href={h} className={`relative px-4 py-2 text-sm font-medium transition-colors ${p === h ? "text-cream" : "text-stone hover:text-cream"}`}>{n}{p === h && <motion.span layoutId="nav" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-brand" />}</Link>)}
        <a href={LINKS.reg} target="_blank" className="btn btn-red ml-3 !px-5 !py-2 !text-base">Register</a></nav>
      <button aria-label="Menu" onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"><span className={`h-0.5 w-6 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`} /><span className={`h-0.5 w-6 bg-cream transition ${open ? "opacity-0" : ""}`} /><span className={`h-0.5 w-6 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`} /></button>
    </div>
    {open && <div className="flex flex-col gap-1 border-t border-white/5 bg-ink px-5 py-4 md:hidden">{nav.map(([n, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className={`py-3 font-display text-3xl ${p === h ? "text-brand" : ""}`}>{n}</Link>)}</div>}
  </header>;
}
