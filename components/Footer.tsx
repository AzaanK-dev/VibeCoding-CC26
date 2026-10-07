export default function Footer() {
  // return <footer className="border-t border-white/5 bg-char px-5 py-14"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
  //   <div><div className="font-display text-4xl">CODE<span className="text-brand">//</span>CONNECT<span className="text-brand">'26</span></div><p className="mt-2 font-mono text-sm text-brand">Code. Connect. Create Your Future.</p></div>
  //   <p className="max-w-sm text-sm text-stone">A sub-event of Career Connect'26. Department of Computer Science, UBIT, University of Karachi.</p></div></footer>;
  return (
    <footer className="border-t border-white/10 bg-char px-5 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          {/* Brand */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              CODE//CONNECT'26
            </p>

            <h2 className="font-display text-4xl uppercase tracking-wide text-cream sm:text-5xl">
              Vibe Coding
              <span className="text-brand"> Hackathon</span>
            </h2>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

              {/* Navigation */}
              <div className="mt-4">
                <div className="flex flex-col gap-2.5 text-sm">
                  <a href="/" className="text-stone transition-colors hover:text-cream">
                    Home
                  </a>
                  <a href="/teams" className="text-stone transition-colors hover:text-cream">
                    Teams
                  </a>
                  <a href="/competition" className="text-stone transition-colors hover:text-cream">
                    Competition
                  </a>
                  <a href="/top-12" className="text-stone transition-colors hover:text-cream">
                    Top 12
                  </a>
                  <a href="/organizers" className="text-stone transition-colors hover:text-cream">
                    Organizers
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="mt-4">
                <div className="flex flex-col gap-2.5 text-sm">
                  <a
                    href="https://www.instagram.com/code.connect2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone transition-colors hover:text-cream"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.linkedin.com/in/code-connect-784805441/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone transition-colors hover:text-cream"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/923214158518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone transition-colors hover:text-cream"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Event Info */}
          <div className="max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-stone">
              A flagship segment of <span className="text-cream">Career Connect'26</span>,
              organized by the Department of Computer Science, UBIT,
              University of Karachi.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-xs text-stone">
            © 2026 CODE//CONNECT'26 · All rights reserved.
          </p>

          <p className="font-mono text-xs text-stone">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/azaan-mehtab-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream transition-colors hover:text-brand"
            >
              Azaan Mehtab Khan
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
