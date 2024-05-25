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
        <div className="flex sm:flex-col 2xl:flex-row sm:items-center 2xl:items-start justify-between space-x-8 flex-grow">
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
                Turbo was able to bypass JA3 protections 100% of the time.
              </li>
              <li>
                Created multiple browser mimics including ones such as Chrome,
                Firefox, and Safari.
              </li>
              <li>
                Forked off Go&apos;s net/http library to make modifications to
                allow for JA3 editing on the individual requests.
              </li>
              <li>
                Researched salesforce&apos;s JA3 security and different
                browsers&apos; JA3 fingerprints to document how to appropriately
                recreate them.
              </li>
            </ul>
            <Link href="https://github.com/DalphanDev/Turbo" target="_blank">
              <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50">
                View Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
