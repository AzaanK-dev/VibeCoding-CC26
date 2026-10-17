// ===== EDIT ME: all content & dates live here =====
export const LINKS = {
  reg: "https://codeconnect26-registration.vercel.app",
  submit: "https://vibe-coding-submission.vercel.app",
  waNumber: "923214158518", // payment screenshots go here
};
export const DATES = {
  start: "2026-10-17T10:00:00+05:00",       // problems revealed, timer starts
  // start: "2026-10-16T22:13:00+05:00",
  end: "2026-10-18T10:00:00+05:00",         // timer = 0 -> submissions open
  // end: "2026-10-16T22:51:00+05:00",
  paymentDeadline: "2026-10-15T23:59:00+05:00",
};
export const FORCE_FINALIZED = true; // true = always show "Finalized Teams"
// Testing: set NEXT_PUBLIC_PHASE_OVERRIDE=before|live|ended

export const teams = [
  { name: "Tech Titans", uni: "UBIT, University of Karachi" },
  { name: "Khubsoorat Shklen", uni: "NED University of Engineering and Technology" },
  { name: "Maple_X", uni: "Muhammad Ali Jinnah University" },
  { name: "Byte Alpha's", uni: "UBIT, University of Karachi" },
  { name: "Coding Hunters", uni: "DHA Suffa University" },
  { name: "Nex Gen", uni: "Iqra University" },
  { name: "VibeBuilders", uni: "UBIT, University of Karachi" },
  { name: "Bug beaters", uni: "Muhammad Ali Jinnah University" },
  { name: "Nova Strike", uni: "UBIT, University of Karachi" },
  { name: "Token Burners", uni: "Sindh Madressatul Islam University" },
  { name: "Byte Forge", uni: "UBIT, University of Karachi" },
  { name: "Noobies", uni: "FAST NUCES Karachi" },
  { name: "Aerostack", uni: "Sindh Madressatul Islam University" },
  { name: "Red John", uni: "UBIT, University of Karachi" },
  { name: "Crimson Nova", uni: "DHA Suffa University" },
  { name: "Code Benders", uni: "UBIT, University of Karachi" },
  { name: "Bitwise", uni: "NED University of Engineering and Technology" },
  { name: "Zyphora", uni: "UBIT, University of Karachi" },
  { name: "CopyCoders", uni: "UBIT, University of Karachi" },
];

export const problems = [
  { id: "A", domain: "Disaster Response", brief: "During floods, heatwaves and other disasters, warnings may not reach everyone, while rescue teams, vehicles, shelters and medical supplies remain limited. How can technology identify who needs help most and coordinate resources to reach them before the situation becomes critical?" },
  { id: "B", domain: "Threat Prevention", brief: "Cameras and sensors can record theft, violence, accidents or fires, but by the time a human notices the footage and responds, it may already be too late. How can intelligent technology detect a developing threat and act quickly and proactively to prevent or reduce harm?" },
  { id: "C", domain: "Misinformation Control", brief: "During elections or health crises, false information spreads rapidly through encrypted WhatsApp groups whose content cannot be seen. How can a system effectively slow its spread without censorship, while keeping user privacy fully intact and resisting sophisticated adversarial users?" },
];
export const top10 = [
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
  {
    id: "T01",
    name: `Team Name Placeholder `,
    uni: "University TBA",
    project: "Project Title TBA",
  },
];

export const why = [
  { t: "Build", d: "Pick a real-world problem and turn it into a working MVP." },
  { t: "Vibe", d: "Code with AI, instinct and your team's energy." },
  { t: "Ship", d: "Deploy a live link and GitHub repo before time runs out." },
  { t: "Connect", d: "Meet software companies and startups at Career Connect'26." },
];
export const steps = [
  { t: "Shortlist", d: "Register your team. Selected teams are published on the Teams page." },
  { t: "Confirm slot", d: "Pay PKR 2000 and send the screenshot on WhatsApp." },
  { t: "Compete", d: "Choose 1 of 3 domains and build your MVP online." },
  { t: "Pitch", d: "Top 10 teams pitch live on stage at UBIT Garden." },
];
export const timeline = [
  { d: "Before deadline", t: "Shortlisting", s: "Shortlisted teams are published." },
  { d: "Payment window", t: "Payment", s: "Follow the payment instructions sent to your email." },
  { d: "17 – 18 Oct", t: "Competition", s: "Problems unlock. The timer runs." },
  { d: "After evaluation", t: "Top 12", s: "The best twelve teams are announced." },
  { d: "22 Oct", t: "Final pitch", s: "Live pitching and the Grand Prize." },
];
export const rules = [
  "Teams of 2–4 members including the lead.",
  "University students only. Bring your ID onsite.",
  "Choose exactly 1 of the 3 problem domains.",
  "Submit a live link plus a public GitHub repo before time ends.",
  "AI tools are allowed. Pre-built or plagiarised projects are disqualified.",
  "Late submissions are not evaluated.",
];
export const judging = [
  { t: "Problem fit & impact", v: 30 }, { t: "MVP functionality", v: 25 },
  { t: "UI / UX", v: 20 }, { t: "Innovation", v: 15 }, { t: "Pitch & clarity", v: 10 },
];
export const prizes = [
  { t: "Grand Prize", d: "Cash prize for the winning team." },
  { t: "Internships", d: "Opportunities with partner companies." },
  { t: "Certificates", d: "Every participating team earns one." },
  { t: "Free entry", d: "Career Connect'26 access for all registered teams." },
];
export const faqs = [
  { q: "Who can participate?", a: "University students in teams of 2 to 4." },
  { q: "When do I pay?", a: "Only shortlisted teams pay. Instructions appear on the Teams page and via email / WhatsApp." },
  { q: "How much is the fee?", a: "PKR 2000 per team." },
  { q: "Where is the final?", a: "UBIT Garden, University of Karachi, on 22 October 2026." },
  { q: "Can I use AI tools?", a: "Yes. This is a Vibe Coding Hackathon." },
  { q: "Who do I contact?", a: "Azaan Mehtab Khan: +92 321 4158518. Sharjeel Ahmed: +92 312 1198483." },
];
