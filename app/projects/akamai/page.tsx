import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-4xl">Akamai Sensor</h2>
        <div className="flex justify-between items-center space-x-8 flex-grow">
          <iframe
            className="flex-grow"
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7152803180223819776?compact=1"
            height="500"
            width="1200"
            frameBorder="0"
            allowFullScreen
            title="Embedded post"
          ></iframe>
          <div className="flex-shrink">
            <p className="font-medium text-xl mb-8">
              Akamai Sensor generates realistic sensors that Akamai cannot
              differentiate between fake and real. Akamai sells anti-bot
              solutions to companies to ward off bots and web scrapers. This
              project demonstrates how one can de-obfuscate and reverse engineer
              a script.
            </p>
            <ul className="list-disc list-inside space-y-8 font-small text-lg">
              <li>
                Rebuilt the script in Go after gathering all the functions and
                steps used in generating a &quot;sensor&quot; for Akamai&apos;s
                anti-bot service.
              </li>
              <li>
                Debugged and documented the code utilizing the Chrome DevTools
                to keep track of variable values while stepping through the code
                while running.
              </li>
              <li>
                Researched Akamai and their anti-bot solutions to gather
                information on techniques Akamai employs to stop web scrapers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
