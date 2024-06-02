import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creating Turbo \u2014 Dalphan | Thomas Allred",
  description: "Learn about the Turbo project by Dalphan (Thomas Allred).",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "Turbo",
    "Go",
    "Project",
    "Anti-Bot",
    "Cybersecurity",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
};

export default function TurboBlog() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-5xl">Creating Turbo</h2>
        <h3 className="font-medium text-3xl">CycleTLS Inspiration</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          Turbo is modern request library used to bypass cybersecurity checks.
          This project was first inspired by an already existing repo called
          CycleTLS, which was a NodeJS library that mimicked JA3 fingerprints to
          effectively do the same thing Turbo now does. However, I was not a fan
          of CycleTLS&apos;s object structure as it made using it in Dalphan
          AIO&apos;s development difficult. The main issue was that CycleTLS was
          made to be usable for someone who didn&apos;t necessarily know how JA3
          fingerprints worked, which limited the customizability as the repo
          assumed a lot of design choices for you. <br />
          <br />
          If you are interested with the technicals of the issue, I&apos;ll keep
          it short, but pretty much because you needed to control the fine
          details in Go, and the majority of the user facing code was written in
          NodeJS, CycleTLS had to find a way to merge both languages together
          while aiming to keep it simple. This led to having to create a request
          worker in NodeJS, however this worker had a lot of issues closing
          properly, and stalling on some requests.
        </p>
        <h3 className="font-medium text-3xl">Turbo&apos;s Creation</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          So here I am, faced with really only one option, to create my own
          library. I had previously attempted this a year ago, however found
          that it was too complicated for me to complete. I was definitely
          nervous this time around taking on this project, but I had no other
          choice so I figured I would brute force the knowledge and start work
          on Turbo.
          <br />
          <br />I knew I had to use Go, as it already had a supporting library
          to assist in editing Go&apos;s net/http JA3 fingerprint. This library
          is Refraction Network&apos;s uTLS library. I had to learn Go as I had
          no prior experience with it, but I was able to get the hang of it
          pretty quickly. I was able to create a working prototype in 2 weeks,
          and after another month of testing and debugging, I was able to
          release a stable version Turbo.
        </p>
        <h3 className="font-medium text-3xl">Technical Details</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          The information I will share in this section is not meant to be a
          tutorial, but rather a high level overview of how Turbo works. If you
          are interested in learning more about Turbo, I would recommend
          checking out the repository.
          <br />
          <br />
          JA3 fingerprints are a way to identify a client based on the TLS and
          Client Hello packet that is sent to a server. These JA3 fingerprints
          are composed of configurations including the ciphersuites, extensions,
          and elliptic curves that are used in the Client Hello packet. After
          collecting the JA3 fingerprints of popular modern browsers, I created
          configurations for those browsers that Turbo could use when making
          requests.
          <br />
          <br />
          For these configurations to be used, Turbo had to actually expand upon
          the default net/http library. This was done by stepping through
          majority of the files in the net/http library, and adding a few lines
          of code to each file to allow for the JA3 fingerprint to be set. This
          was a very time consuming process, but it was necessary to ensure that
          Turbo could be used in any Go project without any issues.
          <br />
          <br />
          For the last touch, Turbo had to also mimic the browser http header
          settings and order of these headers to ensure that the request would
          be as close to a real browser as possible. This was done by creating a
          map of the headers and their order, and then setting the headers in
          the same order as the map.
        </p>
      </div>
    </main>
  );
}
