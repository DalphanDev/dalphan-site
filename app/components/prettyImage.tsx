"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function PrettyImage({
  src,
  alt,
  width,
  height,
}: {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
}) {
  const showImage = "opacity-100";
  const hideImage = "opacity-0 -translate-y-8";

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Image
      className={`shadow-2xl shadow-[#06c6dd]/50 rounded-md shrink mb-8 transform transition duration-300 delay-75 ${
        loaded ? showImage : hideImage
      }`}
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
    />
  );
}
