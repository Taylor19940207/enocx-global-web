import Image from "next/image";
import { partnerLogos } from "@/lib/content";

export default function LogoMarquee() {
  const loop = [...partnerLogos, ...partnerLogos];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track gap-24 py-6">
        {loop.map((logo, i) => (
          <div key={i} className="flex w-48 shrink-0 items-center justify-center">
            <Image
              src={logo}
              alt="Partner logo"
              width={160}
              height={76}
              className="h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
