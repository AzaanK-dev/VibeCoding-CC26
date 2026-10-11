"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, Heading, Reveal } from "@/components/ui";

const heads = [
  { name: "Azaan Mehtab Khan", init: "AM", role: "Organizing Head" },
  { name: "Sharjeel Ahmed", init: "SA", role: "Management Head" },
];
const supervisors = [
  { name: "Sir Khalid Jamal", init: "KJ", role: "Event Supervisor" },
  //   { name: "Miss Humera Azam", init: "HA", role: "Event Coordinator" },
];
const flow = ["Imagined", "Developed", "Refined", "Delivered"];
const B = ({ children }: { children: React.ReactNode }) => <b className="text-cream">{children}</b>;

export default function About() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-28">
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
      <Heading title="Build what matters" sub="Some of the best software begins with a simple idea, a sharp mind, and the ability to turn vision into execution..." />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">

        {/* LEFT: About paragraphs */}
        <div className="min-w-0 space-y-6">
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              The Vibe Coding Hackathon is built around exactly that. Hosted by the{" "}
              <B>Department of Computer Science, UBIT, University of Karachi</B>, as a
              flagship segment of Career Connect, it brings together students,
              creativity, AI-assisted development, and real-world problem-solving in
              a competitive environment designed around how modern software is built today.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Developers and technology enthusiasts from universities across the
              region transform ideas into{" "}
              <B>functional digital products within a defined timeframe</B>.
              Participants think beyond conventional coding, using AI-assisted tools,
              creative thinking, technical judgment, and rapid development to build
              solutions that are practical, purposeful, and impactful.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              As part of Career Connect, the initiative extends beyond the hackathon
              by connecting students with{" "}
              <B>professionals, organizations, and industry leaders</B>. It creates
              opportunities for career exploration, mentorship, networking, and
              exposure to the evolving demands of the technology industry, helping
              students understand not only how to build, but where their skills can
              take them.
            </p>
          </Reveal>
        </div>

        {/* RIGHT: Supervisors + Heads */}
        <div className="min-w-0 space-y-5 lg:sticky lg:top-28 lg:self-start">

          {/* Supervisors */}
          <Reveal>
            <div className="flex items-center gap-3">
              <h3 className="h-display whitespace-nowrap text-2xl text-stroke-white sm:text-3xl">
                Supervised by
              </h3>
              <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-brand to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {supervisors.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand via-[#a3130f] to-crimson px-5 py-4 shadow-[0_15px_40px_-25px_rgba(224,32,26,.8)]"
                >
                  <div className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl leading-none text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-white/20">
                    {s.init}
                  </div>

                  <div className="relative">
                    <p className="font-mono text-[10px] text-cream/80 sm:text-xs">
                      {s.role} · Vibe Coding Hackathon
                    </p>
                    <h4 className="h-display mt-3 break-words text-2xl sm:text-3xl">
                      {s.name}
                    </h4>
                    <div className="mt-3 h-1 w-10 rounded bg-cream transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Heads / Organizers */}
          <Reveal>
            <div className="flex items-center gap-3">
              <h3 className="h-display whitespace-nowrap text-2xl text-stroke-white sm:text-3xl">
                Led by
              </h3>
              <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-brand to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {heads.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand via-[#a3130f] to-crimson px-5 py-4 shadow-[0_15px_40px_-25px_rgba(224,32,26,.8)]"
                >
                  <div className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl leading-none text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-white/20">
                    {h.init}
                  </div>

                  <div className="relative">
                    <p className="font-mono text-[10px] text-cream/80 sm:text-xs">
                      {h.role} · Vibe Coding Hackathon
                    </p>
                    <h4 className="h-display mt-3 break-words text-2xl sm:text-3xl">
                      {h.name}
                    </h4>
                    <div className="mt-3 h-1 w-10 rounded bg-cream transition-all duration-500 group-hover:w-20" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>


    </section>
  );
}
