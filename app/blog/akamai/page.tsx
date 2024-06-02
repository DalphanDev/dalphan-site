import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reverse Engineering Akamai \u2014 Dalphan | Thomas Allred",
  description:
    "Learn about the Akamai Sensor project by Dalphan (Thomas Allred).",
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

export default function AkamaiBlog() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-5xl">Reverse Engineering Akamai</h2>
        <h3 className="font-medium text-3xl">Researching the Sensor Script</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          Akamai Sensor was created as a way to test my de-obfuscation skills as
          I would likely need a strong understanding to keep developing Dalphan
          AIO. I decided on the Mr. Porter website as I was aware they had
          Akamai protection embedded into their site.
          <br />
          <br />
          By using Chrome DevTools, I inspected the network traffic, and
          discovered that the sensor was being created on the client side and
          sent to the server. This meant there was a script on the client side I
          would have to reverse engineer to generate the sensor. I utilized the
          debugger to step through the script and read variable values. With
          this, I was able to piece together parts of the algorithm used to
          generate the sensor.
        </p>
        <h3 className="font-medium text-3xl">Rebuilding in Go</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          After finishing research, and detailing the algorithm used to generate
          the sensor, I began to rebuild the script in Go. The algorithm used
          random numbers, timing information, graphic card information, and
          other data to create a sensor that was unique to the client. I was
          able to recreate the sensor with a 95% success rate in detection
          evasion.
          <br />
          <br />
          For the timing functions, I had to fake that the client was taking
          time to run the calculations, so I used a random number to fill this
          value. For the graphic card information, I used the same information
          that the browser would send to the server. This was done by creating a
          map of the information that the browser would send, and then setting
          the values in the same order as the map.
        </p>
        <h3 className="font-medium text-3xl">Technical Details</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          The information I will share in this section is not meant to be a
          tutorial, but rather a high level overview of how Akamai Sensor works.
          If you are interested in learning more about Akamai Sensor, I would
          recommend checking out the repository.
          <br />
          <br />
          Akamai Sensor needed to create a sensor string that was unique to the
          client, and would be sent to the server to verify the client. There
          were multiple steps I broke into their own functions that would add on
          parts to the sensor string. Some would use the sensor string itself as
          a parameter to expand upon it. The final sensor string would be sent
          to the server to verify the client. Overall it took about 2 weeks to
          finish this project, and I was able to evade detection on the Mr.
          Porter website.
        </p>
      </div>
    </main>
  );
}
