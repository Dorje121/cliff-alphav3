"use client";
import { Lens } from "@/components/magicui/lens";
import Image from "next/image";

export default function LensDemo() {
  return (
    <Lens zoomFactor={2} lensSize={190} isStatic={false} ariaLabel="Zoom Area">
      <Image
        src="/vf.jpg"
        alt="image placeholder"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </Lens>
  );
}
