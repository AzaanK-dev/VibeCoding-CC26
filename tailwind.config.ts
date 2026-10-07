import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand:"#E0201A", crimson:"#6B1316", cream:"#F5F5F2", ink:"#0A0A0A", char:"#1A1A1A", surf:"#1E1E1E", tint:"#2A0808", mist:"#C4C4BF", stone:"#9A9A95" },
    fontFamily: { display:["var(--font-display)","Impact","sans-serif"], sans:["var(--font-body)","system-ui","sans-serif"], mono:["var(--font-mono)","monospace"] },
    keyframes: { marquee:{to:{transform:"translateX(-50%)"}}, float:{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-14px)"}}, pulseGlow:{"0%,100%":{opacity:".55"},"50%":{opacity:".95"}} },
    animation: { marquee:"marquee 30s linear infinite", float:"float 6s ease-in-out infinite", glow:"pulseGlow 4s ease-in-out infinite" },
  } },
  plugins: [],
} satisfies Config;
