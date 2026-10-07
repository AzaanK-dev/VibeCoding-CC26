import type { Metadata } from "next"; import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css"; import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = { title: "Vibe Coding Hackathon | Code//Connect'26", description: "Vibe Coding Hackathon at UBIT, University of Karachi. 17–18 Oct online, 22 Oct onsite."};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}><body><Navbar />{children}<Footer /></body></html>;
}
