"use client";
import { motion } from "framer-motion";
import { Card, PageHero, Reveal } from "@/components/ui";
import { DATES, FORCE_FINALIZED, LINKS, teams } from "@/lib/data"; import { useNow } from "@/lib/phase";
import ConfirmSlot from "@/components/ConfirmSlot";
export default function Teams() {
  const now = useNow(); const final = FORCE_FINALIZED || (now !== null && now > +new Date(DATES.paymentDeadline));
  const wa = `https://wa.me/${LINKS.waNumber}?text=${encodeURIComponent("Hello, I'm sending the payment screenshot for Vibe Coding Hackathon - CODE//CONNECT'26. Team name: ")}`;
  return <main>
    <PageHero headline="Meet the teams competing" title="Teams in Competition" sub={final ? "From 100+ teams who stepped up to the challenge, these are the teams competing in Vibe Coding Hackathon. Congratulations to every team making it to the competition... Now it’s time to build, compete, and prove what you can create." : "Shortlisted teams, you’ve made it this far. Now it’s time to secure your place. Verify your payment and confirm your slot below to officially join the Vibe Coding Hackathon."} />
    <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">

      {!final ? (
        <div className="border-y border-white/10 py-16 text-center">
          <p className="font-display text-xl uppercase tracking-wide text-cream sm:text-3xl">
            No teams are finalized yet.
          </p>
          <p className="mt-2 text-sm text-mist">
            Finalized teams will appear here once the registration process is complete.
          </p>
        </div>
      ) : (
        <div className="max-h-[450px] overflow-y-auto overscroll-y-auto pr-2">
          <div className="divide-y divide-white/10 border-y border-white/10 pb-12">
            {teams.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.04 }}
                className="group flex items-center gap-4 py-4 transition-all duration-300 hover:bg-white/[0.03] sm:gap-6"
              >
                <span className="w-8 shrink-0 font-mono text-sm text-stone/60 sm:w-10 sm:text-base">
                  #T{String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 font-display text-lg text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-cream">
                  {t.name[0]}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-xl uppercase tracking-wide text-cream sm:text-2xl">
                    {t.name}
                  </h3>
                  <p className="mt-0.5 truncate text-sm text-mist">
                    {t.uni}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {!final && <ConfirmSlot wa={wa} />}
    </section></main>;
}
