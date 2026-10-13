import Image from "next/image";
import { officialLogo } from "@/lib/site";

export function Brand() {
  return (
    <Image
      src={officialLogo.src}
      alt="COSAQ Digital"
      width={officialLogo.width}
      height={officialLogo.height}
      sizes="(max-width: 767px) 175px, 220px"
      className="brand-image"
      unoptimized
    />
  );
}
