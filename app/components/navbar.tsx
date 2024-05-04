import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="w-full relative header">
      <div className="absolute left-4 top-2 transform ">
        <Link href="/">
          <Image src={Logo} alt="logo" width={84} height={84} />
        </Link>
      </div>
      <nav className="flex justify-center items-center w-full py-10">
        <ul className="flex space-x-10">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
