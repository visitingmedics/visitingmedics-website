import Image from "next/image";
import { photo } from "@/lib/images";
// Renders nothing if the image file has not been added yet.
export default function Photo({ name, alt, priority = false, ratio = "4 / 3", sizes = "(min-width: 768px) 480px, 100vw", small = false }:
  { name: string; alt: string; priority?: boolean; ratio?: string; sizes?: string; small?: boolean }) {
  const src = photo(name, small);
  if (!src) return null;
  return (
    <div className="photo" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
    </div>
  );
}
