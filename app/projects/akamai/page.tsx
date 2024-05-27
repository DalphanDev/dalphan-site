import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Link from "next/link";
import PrettyImage from "@/app/components/prettyImage";
import AkamaiImg from "../../../public/akamai.png";

export const metadata: Metadata = {
  title: "Akamai Sensor \u2014 Dalphan | Thomas Allred",
  description: "Explore the Akamai Sensor project by Dalphan (Thomas Allred).",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "Akamai",
    "JavaScript",
    "Go",
    "Project",
    "Anti-Bot",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
};

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-4xl">Akamai Sensor</h2>
        <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start justify-between space-x-8 flex-grow">
          <PrettyImage
            src={AkamaiImg}
            alt="akamai code"
            width={736}
            height={800}
          />
          <div className="flex-shrink">
            <p className="font-medium text-xl mb-8">
              Akamai Sensor generates realistic sensors that Akamai cannot
              differentiate between fake and real. Akamai sells anti-bot
              solutions to companies to ward off bots and web scrapers. This
              project demonstrates how one can de-obfuscate and reverse engineer
              a script.
            </p>
            <ul className="list-disc list-inside space-y-8 font-small text-lg mb-8">
              <li>
                Developed a system to generate realistic sensors
                indistinguishable from real ones by Akamai, achieving a 95%
                success rate in detection evasion.
              </li>
              <li>
                Reverse engineered the sensor generation script in Go, improving
                execution speed by 100%.
              </li>
              <li>
                Invested over 100 hours researching Akamai&apos;s anti-bot
                techniques, gathering comprehensive data on methods used to
                block web scrapers.
              </li>
            </ul>
            <Link
              href="https://github.com/DalphanDev/akamai-sensor"
              target="_blank"
            >
              <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50 transform transition hover:scale-110 outline outline-2 outline-sky-400">
                View Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
