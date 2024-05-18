import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-8 space-x-8 w-full px-8">
        <h1 className="font-bold text-5xl">Contact Me</h1>
        <h2 className="font-medium text-xl">Email: tjallred02@gmail.com</h2>
        <h2 className="font-medium text-xl">Phone: 954-268-4555</h2>
        <h2 className="font-medium text-xl">Discord: dalphan</h2>
      </div>
    </main>
  );
}
