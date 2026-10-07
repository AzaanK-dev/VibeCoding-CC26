"use client";
import { motion } from "framer-motion";
import MemberCard, { Member } from "@/components/MemberCard";
import { PageHero, Reveal } from "@/components/ui";

// ===== EDIT ME: add `photo: "/team/name.jpg"` (put images in /public/team) =====
const L = "https://www.linkedin.com/in/";
const groups: { title: string; tag: string; members: Member[] }[] = [
  { title: "Supervisors", tag: "Guiding the vision", members: [
    { name: "Sir Khalid Jamal", role: "Position / Title", linkedin: L },
    { name: "Miss Humera Azam", role: "Position / Title", linkedin: L },
  ] },
  { title: "Leads", tag: "Leading the execution", members: [
    { name: "Azaan Mehtab Khan", role: "Position / Title", linkedin: L },
    { name: "Sharjeel Ahmed", role: "Position / Title", linkedin: L },
  ] },
  { title: "Core Team", tag: "Making it happen", members: [
    { name: "Volunteer One", role: "Position / Title", linkedin: L },
    { name: "Volunteer Two", role: "Position / Title", linkedin: L },
    { name: "Volunteer Three", role: "Position / Title", linkedin: L },
    { name: "Volunteer Four", role: "Position / Title", linkedin: L },
  ] },
];

export default function Team() {
  return (
    <main>
      <PageHero title="Organizing team" sub="Meet the people driving the Vibe Coding Hackathon - CC'26 forward, the organizers, supervisors, and volunteers working behind the scenes to bring the competition to life." />
      <div className="mx-auto max-w-4xl px-5 py-20">
        {groups.map((g, gi) => (
          <section key={g.title} className="mb-28 last:mb-0">
            <Reveal className="mb-12">
              <div className="flex items-end gap-5">
                <span className="font-display text-8xl leading-[.8] text-stroke sm:text-9xl">{String(gi + 1).padStart(2, "0")}</span>
                <div className="pb-1"><h2 className="h-display text-5xl sm:text-7xl">{g.title}</h2><p className="mt-2 font-mono text-sm text-brand">{g.tag}</p></div>
              </div>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} style={{ originX: 0 }} className="mt-6 h-px bg-gradient-to-r from-brand via-crimson to-transparent" />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {g.members.map((m, i) => (
                <Reveal key={m.name} delay={(i % 2) * .12}><MemberCard m={m} /></Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
