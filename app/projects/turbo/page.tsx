import Image from "next/image";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-4xl">Turbo</h2>
        <div className="flex justify-between space-x-8 flex-grow">
          <div className="flex flex-col items-center grow min-w-80 space-y-8">
            <h3 className="font-medium text-2xl">Send a Request</h3>
            <button className="bg-[#0146a6] rounded-md w-40 py-4 shadow-lg shadow-[#0146a6]/50">
              Send
            </button>
            <p className="grow">Response Info Here</p>
          </div>
          <div className="shrink">
            <p className="font-medium text-xl mb-8">
              Turbo is a modern request library used for bypassing cybersecurity
              checks. By mimicking JA3 fingerprints, these requests can closer
              disguise as other browsers such as Chrome and Firefox.
            </p>
            <ul className="list-disc list-inside space-y-8 font-small text-lg">
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
          </div>
        </div>
      </div>
    </main>
  );
}
