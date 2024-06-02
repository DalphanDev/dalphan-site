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
  customWidth,
  customHeight,
}: {
  href: string;
  imgSrc: string | StaticImport;
  title: string;
  description: string;
  direction: "left" | "right";
  customWidth?: number;
  customHeight?: number;
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

  let contents = (
    <div className="flex p-4 min-h-[150px] ">
      <Image
        className="rounded-lg mr-4"
        src={imgSrc}
        width={customWidth || 160}
        height={customHeight || 160}
        alt={title}
      />
      <div className="flex flex-col grow ml-4 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl">{title}</h2>
        <p className="text-lg sm:text-xl md:text-2xl">{description}</p>
      </div>
    </div>
  );

  if (direction === "right") {
    contents = (
      <div className="flex p-4 min-h-[150px]">
        <div className="flex flex-col grow mr-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl">{title}</h2>
          <p className="text-lg sm:text-xl md:text-2xl">{description}</p>
        </div>
        <Image
          className="rounded-lg m-4"
          src={imgSrc}
          width={customWidth || 160}
          height={customHeight || 160}
          alt={title}
        />
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`shadow-2xl shadow-black outline outline-1 outline-white rounded-lg w-full transform transition duration-300 delay-75 ${
        loaded ? showItem : hideItem
      }`}
    >
      {contents}
    </Link>
  );
}
