import Image from "next/image";
import { partnerLogos } from "@/lib/content";

export default function LogoMarquee() {
  const loop = [...partnerLogos, ...partnerLogos];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track gap-16 py-3 md:gap-20 md:py-4">
        {loop.map((logo, i) => (
          <div key={i} className="flex w-52 shrink-0 items-center justify-center md:w-60">
            <Image
              src={logo}
              alt=""
              width={160}
              height={76}
              className="h-18 w-auto object-contain opacity-85 transition hover:opacity-100 md:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
