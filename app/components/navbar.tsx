import Image from "next/image";
import Link from "next/link";
import Anim from "../../public/anim.gif";

export default function Header() {
  return (
    <header className="relative flex justify-center items-center w-full header py-5">
      <Link href="/">
        <Image
          className="absolute top-2"
          src={Anim}
          alt="logo"
          width={160}
          height={160}
        />
      </Link>
      <nav className="flex justify-center items-center w-full py-5">
        <ul className="flex space-x-10">
          <Link href="/projects">
            <li>
              <p className="font-bold text-lg">Projects</p>
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <p className="font-bold text-lg">Contact</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
