"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export type Member = { name: string; role: string; linkedin: string; photo?: string };

export default function MemberCard({ m }: { m: Member }) {
  const px = useMotionValue(0), py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-.5, .5], [9, -9]), { stiffness: 160, damping: 16 });
  const ry = useSpring(useTransform(px, [-.5, .5], [-9, 9]), { stiffness: 160, damping: 16 });
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - .5); py.set((e.clientY - r.top) / r.height - .5);
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const initials = m.name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }} onMouseMove={move} onMouseLeave={() => { px.set(0); py.set(0); }} className="group">
      <div className="card !rounded-3xl p-3">
        <div className="relative z-10">
          {/* portrait */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-tint via-surf to-ink">
            {m.photo
              ? <img src={m.photo} alt={m.name} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              : <div className="flex h-full items-center justify-center font-display text-[9rem] text-stroke transition duration-500 group-hover:scale-110 group-hover:text-brand/70">{initials}</div>}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 -translate-y-full bg-gradient-to-b from-transparent via-brand/25 to-transparent transition-transform duration-[1400ms] group-hover:translate-y-[300%]" />
            {/* corner brackets */}
            {["left-3 top-3 border-l-2 border-t-2", "right-3 top-3 border-r-2 border-t-2", "left-3 bottom-3 border-l-2 border-b-2", "right-3 bottom-3 border-r-2 border-b-2"].map(c =>
              <span key={c} className={`absolute h-5 w-5 border-brand opacity-40 transition-all duration-300 group-hover:h-8 group-hover:w-8 group-hover:opacity-100 ${c}`} />)}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-3xl uppercase leading-none sm:text-4xl">{m.name}</h3>
              <p className="mt-2 font-mono text-xs text-brand">{m.role}</p>
            </div>
          </div>
          {/* linkedin */}
          <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}
            className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/[.03] px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white">
            <span>Connect on LinkedIn</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transition group-hover:rotate-[360deg] duration-700"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.6V9h3.5v11.5z" /></svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
