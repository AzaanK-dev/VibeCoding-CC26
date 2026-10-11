// ===== EDIT ME: all rules content lives here =====
export type Item = string | { t: string; sub: string[] };
export type Section = {
  id: string; title: string; summary: string;
  lead?: string; items?: Item[]; steps?: { t: string; d: string }[]; note?: string; danger?: boolean;
};

export const rulesIntro =
  "Vibe Coding Hackathon is a 36-hour build sprint focused on shipping working products. Read the rules before starting. Participation means accepting these guidelines.";

export const keyFacts = [
  { k: "Problems released", v: "17 Oct · 10:00 AM" },
  { k: "Submission deadline", v: "18 Oct · 10:00 PM" },
  { k: "Build time", v: "36 hours" },
  { k: "Late commits", v: "Disqualified" },
];

export const rulesSections: Section[] = [
  { id: "timeline", title: "Hackathon timeline", summary: "Release, deadline and total time", items: [
    "The problem statements will be released online at 10:00 AM on 17 October 2026.",
    "Teams must submit their complete projects before 10:00 PM on 18 October 2026.",
    "The total development time is 36 hours.",
    "All submissions must be completed within the given deadline. Late submissions will not be accepted.",
  ] },
  { id: "github", title: "GitHub & commit policy", summary: "Repository and commit history", items: [
    "Every team must submit a valid GitHub repository link containing the project's source code.",
    "The repository must include the project's commit history.",
    "Any Git commit made after 10:00 PM on 18 October 2026 will result in disqualification.",
    "Teams are advised to push their final code and verify repository accessibility before the deadline.",
    "The submitted repository must belong to the participating team or be accessible to the organizers and judges.",
  ] },
  { id: "ai", title: "AI tools & development", summary: "What you can and cannot use", items: [
    "All vibe coding tools, AI coding assistants, frameworks, libraries, and programming languages are allowed.",
    "There are no restrictions on the technology stack or choice of development tools.",
    "Teams may use AI tools to generate, modify, debug, and improve their code.",
    "Using existing projects, pre-built solutions, or previously developed code as the submitted product is strictly prohibited.",
    "Starter templates and third-party libraries may be used only where they do not violate the requirement to build the solution from scratch.",
    "Teams must be able to explain their implementation and demonstrate an understanding of their submitted product.",
  ] },
  { id: "requirements", title: "Project requirements", summary: "What your product must be", items: [
    "Teams must develop a complete and functional product based on their assigned problem statement.",
    "Accepted formats include websites, web applications, mobile applications, or other suitable software products.",
    "The final product must be accessible through a working live/demo link.",
    "The project must meaningfully address the assigned problem statement and demonstrate practical functionality.",
    "Incomplete, non-functional, or unrelated submissions may be rejected or scored accordingly.",
  ] },
  { id: "submission", title: "Submission requirements", summary: "Eight things to submit before the deadline",
    lead: "Each team must submit the following before the deadline:",
    steps: [
      { t: "Team details", d: "Team name and names of all registered members." },
      { t: "Live product link", d: "A working URL to the deployed product or accessible demo." },
      { t: "GitHub repository link", d: "Source code with commit history." },
      { t: "Project description", d: "A brief explanation of the product and the problem it solves." },
      { t: "Key features", d: "A list of the main features and functionalities." },
      { t: "Tools and technologies", d: "The AI tools, frameworks, libraries, and technologies used." },
      { t: "AI usage disclosure", d: "A brief description of how AI tools were used during development." },
      { t: "Demo instructions", d: "Any necessary login credentials, setup instructions, or steps required to test the product." },
    ],
    note: "The official submission method and form will be communicated by the organizers." },
  { id: "team", title: "Team rules", summary: "Fair play between teams", items: [
    "Only officially registered team members may participate in development.",
    "Teams must not share solutions, source code, or project-specific implementations with other participating teams.",
    "Collaboration between different teams on the submitted product is not allowed.",
    "Each team must submit its own original solution.",
    "Any change in registered team membership must be approved by the organizers.",
  ] },
  { id: "judging", title: "Judging & shortlisting", summary: "How teams reach the final pitch", items: [
    "All valid submissions will be evaluated by the judging panel.",
    { t: "Evaluation may consider:", sub: [
      "Relevance to the assigned problem statement.",
      "Functionality and completeness.",
      "Creativity and innovation.",
      "User experience and interface quality.",
      "Technical implementation and effective use of AI tools.",
      "Practical value, usability, and potential impact.",
    ] },
    "Only the top-performing teams will qualify for the final onsite pitch round.",
    "The judges' decisions regarding evaluation and shortlisting will be final.",
  ] },
  { id: "disqualification", title: "Disqualification", summary: "What gets a team removed", danger: true,
    lead: "A team may be disqualified for:", items: [
    "Making any Git commit after the submission deadline.",
    "Submitting copied, previously developed, or unauthorized existing code.",
    "Plagiarism or copying another team's solution.",
    "Providing false team or project information.",
    "Receiving unauthorized assistance from non-team members.",
    "Manipulating commit history or submission timestamps to conceal late development.",
    "Failing to follow the official submission requirements or event rules.",
  ] },
  { id: "general", title: "General guidelines", summary: "Responsibilities and final notes", items: [
    "Teams are responsible for maintaining their own code, backups, and deployment.",
    "Organizers are not responsible for internet outages, device failures, hosting issues, or lost work; teams should plan accordingly.",
    "Teams should verify that their live links and repositories remain accessible for evaluation.",
    "Organizers reserve the right to verify submissions, request demonstrations, and ask teams to explain their code.",
    "Any clarification regarding the rules should be requested from the official organizing team.",
    "Participation in the hackathon indicates acceptance of these rules and guidelines.",
  ] },
];