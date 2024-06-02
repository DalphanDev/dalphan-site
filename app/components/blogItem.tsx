"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

export default function BlogItem({
  href,
  imgSrc,
  title,
  description,
  direction,
}: {
  href: string;
  imgSrc: string | StaticImport;
  title: string;
  description: string;
  direction: "left" | "right";
}) {
  const showItem = "opacity-100";
  let hideItem = "opacity-0 -translate-x-8";

  if (direction === "right") {
    hideItem = "opacity-0 translate-x-8";
  }

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Link
      href={href}
      className={`shadow-2xl shadow-black outline outline-1 outline-white rounded-lg w-full transform transition duration-300 delay-75 ${
        loaded ? showItem : hideItem
      }`}
    >
      <div className="flex">
        <Image
          className="rounded-lg"
          src={imgSrc}
          width={200}
          height={200}
          alt={title}
        />
        <div className="flex flex-col grow mx-8 my-4 space-y-4">
          <h2 className="text-5xl">{title}</h2>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </Link>
  );
}
