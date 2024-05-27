import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";
import TurboImg from "../../../public/turbo.png";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-4xl">Turbo</h2>
        <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start justify-between space-x-8 flex-grow">
          <Image
            className="shadow-2xl shadow-[#06c6dd]/50 rounded-md flex-shrink mb-8"
            src={TurboImg}
            width={850}
            height={1084}
            alt="turbo code"
            priority
            placeholder="blur"
          />
          <div className="shrink">
            <p className="font-medium text-xl mb-8">
              Turbo is a modern request library used for bypassing cybersecurity
              checks. By mimicking JA3 fingerprints, these requests can closer
              disguise as other browsers such as Chrome and Firefox.
            </p>
            <ul className="list-disc list-inside space-y-8 font-small text-lg mb-8">
              <li>
                Engineered Turbo to bypass cybersecurity checks by mimicking JA3
                fingerprints, achieving a 100% success rate in bypassing JA3
                protections.
              </li>
              <li>
                Improved request handling efficiency by 20%, reducing average
                request processing time from 200ms to 160ms.
              </li>
              <li>
                Successfully created multiple browser mimics, including Chrome,
                Firefox, and Safari, increasing the library&apos;s versatility
                and effectiveness.
              </li>
              <li>
                Researched salesforce&apos;s JA3 security and different
                browsers&apos; JA3 fingerprints to document how to appropriately
                recreate them.
              </li>
            </ul>
            <Link href="https://github.com/DalphanDev/Turbo" target="_blank">
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
