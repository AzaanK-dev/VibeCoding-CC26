"use client";
import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import { PageHero, Reveal } from "@/components/ui";

type Member = { name: string; role: string; linkedin?: string; photo?: string };
type Group = { id: string; title: string; tag: string; linkedin: boolean; members: Member[] };

// ===== EDIT ME: add `photo: "/team/name.jpg"` (put images in /public/team) =====
// `linkedin: true` on a group shows the LinkedIn tag on its cards.
const L = "https://www.linkedin.com/in/";
const groups: Group[] = [
  {
    id: "judges", title: "Jury", tag: "Evaluating the builds", linkedin: false, members: [
      { name: "TBA", role: "Position / Title" },
      { name: "TBA", role: "Position / Title" },
      { name: "TBA", role: "Position / Title" },
    ]
  },
  {
    id: "supervisors", title: "Advisors", tag: "Guiding the vision", linkedin: false, members: [
      { name: "Sir Khalid Jamal", role: "Event Supervisor"}, //photo:"https://res.cloudinary.com/dttmiez4n/image/upload/v1791716599/Screenshot_2026-10-11_160229_gynroy.png"},
      { name: "Miss Humera Azam", role: "Event Coordinator"}, //photo:"https://res.cloudinary.com/dttmiez4n/image/upload/v1791717226/WhatsApp_Image_2026-10-11_at_4.12.32_PM_1_ipnwsp.jpg" },
    ]
  },
  {
    id: "leads", title: "Heads", tag: "Leading the execution", linkedin: true, members: [
      { name: "Azaan Mehtab Khan", role: "Organizing Head", linkedin: L + "azaan-mehtab-khan", photo: "https://res.cloudinary.com/dttmiez4n/image/upload/v1791718677/WhatsApp_Image_2026-10-11_at_4.37.19_PM_awlklg.jpg"},
      { name: "Sharjeel Ahmed", role: "Management Head", linkedin: L + "sharjeel-ahmed-7b2300380", photo:"https://res.cloudinary.com/dttmiez4n/image/upload/v1791715740/WhatsApp_Image_2026-10-11_at_2.46.27_PM_rkdxkt.jpg"},
    ]
  },
  // {
  //   id: "core", title: "Core Team", tag: "Making it happen", linkedin: true, members: [
  //     { name: "Volunteer One", role: "Position / Title", linkedin: L },
  //     { name: "Volunteer Two", role: "Position / Title", linkedin: L },
  //     { name: "Volunteer Three", role: "Position / Title", linkedin: L },
  //     { name: "Volunteer Four", role: "Position / Title", linkedin: L },
  //   ]
  // },
];

function Person({ m, showLinkedIn }: { m: Member; showLinkedIn: boolean }) {
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const initials = m.name.replace(/^(sir|miss|mr|mrs|ms|dr)\.?\s+/i, "").split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div onMouseMove={move} className="card group !rounded-2xl">
      <div className="relative z-10 flex items-center gap-4 p-3 sm:gap-5 sm:p-4">
        <div className="relative h-36 w-32 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-tint via-surf to-ink">
          {m.photo
            ? <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
            : <div className="flex h-full items-center justify-center font-display text-4xl text-stroke transition duration-500 group-hover:text-brand/80 sm:text-5xl">{initials}</div>}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand to-crimson" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">{m.name}</h3>
          <p className="mt-1 font-mono text-[11px] text-brand sm:text-xs">{m.role}</p>
          {showLinkedIn && m.linkedin && (
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-semibold transition hover:border-brand hover:bg-brand hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.6V9h3.5v11.5z" /></svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [active, setActive] = useState(groups[0].id);
  const pick = (id: string) => {
    setActive(id);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  };

  return (
    <main className="pt-4 pb-12">
      {/* compact hero */}
      <PageHero
        headline="People behind VibeCoding Hackathon"
        title="Organizing team"
        sub="Meet the people driving the Vibe Coding Hackathon - CC'26 forward: the organizers, supervisors, and judges working behind the scenes to bring the competition to life."
      />

      {/* sticky group switcher */}
      <div className="sticky top-16 z-40 border-y border-white/5 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {groups.map(g => (
            <button key={g.id} onClick={() => pick(g.id)} className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === g.id ? "text-white" : "text-stone hover:text-cream"}`}>
              {active === g.id && <motion.span layoutId="team-chip" className="absolute inset-0 -z-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative z-10">{g.title}<span className={`ml-2 font-mono text-xs ${active === g.id ? "text-white/80" : "text-stone"}`}>{g.members.length}</span></span>
            </button>
          ))}
        </div>
      </div>

      {/* groups: one at a time on mobile, all stacked from md up */}
      <div className="mx-auto max-w-5xl px-5 py-8 sm:py-14">
        {groups.map((g, gi) => (
          <section key={g.id} id={g.id} className={`${active === g.id ? "block" : "hidden"} scroll-mt-32 md:mb-16 md:block md:last:mb-0`}>
            <Reveal className="mb-5 sm:mb-8">
              <div className="flex items-end gap-3 sm:gap-5">
                <span className="font-display text-5xl leading-[.8] mb-4 text-stroke sm:text-7xl">{String(gi + 1).padStart(2, "0")}</span>
                <div className="pb-0.5">
                  <h2 className="h-display font-mono text-stroke-white text-4xl sm:text-3xl">{g.title}</h2>
                  <p className="mt-1 font-mono text-xs text-brand sm:text-sm">{g.tag}</p>
                </div>
              </div>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} style={{ originX: 0 }} className="mt-4 h-px bg-gradient-to-r from-brand via-crimson to-transparent" />
            </Reveal>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {g.members.map((m, i) => (
                <Reveal key={m.name} delay={(i % 2) * .08}><Person m={m} showLinkedIn={g.linkedin} /></Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}