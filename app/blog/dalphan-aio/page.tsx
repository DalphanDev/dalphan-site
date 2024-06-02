import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building Dalphan AIO \u2014 Dalphan | Thomas Allred",
  description:
    "Learn about the Dalphan AIO project by Dalphan (Thomas Allred).",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "DalphanAIO",
    "React",
    "Node",
    "Go",
    "Project",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
};

export default function DalphanAIOBlog() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-5xl">Building Dalphan AIO</h2>
        <h3 className="font-medium text-3xl">What is Dalphan AIO?</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          Dalphan AIO is an electron-based desktop app used to automate checkout
          processes on different shopping platforms. The app was first inspired
          by other similar apps like CyberAIO and Kodai, which are both very
          popular in the sneakerhead community. I wanted to create a similar app
          since I believed I could improve upon the existing apps by adding more
          features and optimizing performance.
          <br />
          <br />
          Dalphan AIO supported Shopify and Goat when it released, and was able
          to checkout some limited items fairly quickly thanks to the use of
          Turbo in the backend. The Goat checkout process was pretty
          interesting, as it utilized a proxy server to read the user&apos;s
          phone requests to Goat, and scrape akamai tokens to use across
          multiple other requests mimiced in Dalphan AIO. I&apos;ll likely go
          more in depth on this in a future blog post.
        </p>
        <h3 className="font-medium text-3xl">Building Dalphan AIO</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          When first starting Dalphan AIO, I had no idea where to start. All I
          knew was that I could use electron to view webpages, and that I was
          going to have to build a local webpage that was hosted in the window.
          So I did that, using only HTML, CSS, and JS. I was able to create a
          basic webpage that had buttons and looked like a sneaker bot.
          <br />
          <br />
          Here was when I noticed flickering when swapping pages, and this was
          because electron had to actually load different html files when I
          clicked a button. This was not ideal, so I did some research and
          landed upon React. I had never used React before, and it was
          definitely a learning curve, but after a month of learning, I scrapped
          the old code and rewrote the entire app in React.
          <br />
          <br />
          Here, I worked on the UI and UX of the app, and after a almost a year
          of development, I was able to release the first version of Dalphan
          AIO. The app could barely run a couple tasks without crashing due to
          some memory leaks, but it was a start. The main cause of this, was
          trying to remember states while swapping pages, and here is when I
          discovered Redux.
          <br />
          <br />
          So I learned Redux, and scrapped the old code again, and rewrote the
          app in TypeScript with Redux. This was a huge improvement, and I was
          able to run near 100 tasks without any issues. I was able to release
          the app to a few friends, and they were able to run the bot without
          any critical issues. This was a huge milestone for me, and I was able
          to start working on the backend of the app.
          <br />
          <br />
          The backend was written in Go, and was able to run tasks very quickly
          thanks to the use of Turbo. Building these scripts however, took a lot
          of time and energy as Go is a low level language, and I had to build
          the scripts from scratch. I was able to build a few scripts for Goat
          and Shopify, and was able to run them in the app. We actually had some
          success with the Goat scripts, however no checkouts due to low stock
          and not writing code to allow for instances to be run on servers.
        </p>
        <h3 className="font-medium text-3xl">Technical Details</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          The information I will share in this section is not meant to be a
          tutorial, but rather a high level overview of how Dalphan AIO&apos;s
          backend works.
          <br />
          <br />
          The backend of Dalphan AIO used Turbo, however Turbo was only a
          request library. I had to architect a way to utilize Turbo and also
          optimize it for use in Dalphan AIO. So, I developed something I called
          the &quot;Brain&quot;. The entire architecture of this system was
          modeled after a human nervous system, with the brain being the main
          controller of the system. The brain would send signals to running
          tasks, and these tasks would send signals back to the brain. This was
          helpful as it allowed tasks to spread information to other tasks, and
          also allowed the brain to control the tasks in a more efficient
          manner.
          <br />
          <br />
          For example, if a task picked up a product earlier than any other
          task, it would notify the brain, and the brain would immediately send
          a signal to all other tasks to stop looking for that product. This was
          a huge optimization, as it allowed for tasks to not waste time looking
          for products that were already picked up by another task.
        </p>
      </div>
    </main>
  );
}
