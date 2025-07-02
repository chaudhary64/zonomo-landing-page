'use client';

import Image from 'next/image';

const companyLogo = [
  {
    name: "Slack",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
  },
  {
    name: "Framer",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
  },
  {
    name: "Netflix",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
  },
  {
    name: "Google",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
  },
  {
    name: "LinkedIn",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
  },
  {
    name: "Instagram",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
  },
  {
    name: "Facebook",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
  },
];

export default function Slider() {
  return (
    <div className="relative w-full py-12 bg-gradient-to-br from-purple-800 via-gray-300 to-purple-700 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

      {/* Marquee animation style */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 20s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Marquee Container */}
      <div className="max-w-6xl mx-auto">
        <div className="marquee-inner flex will-change-transform min-w-[200%] items-center">
          <div className="flex items-center">
            {[...companyLogo, ...companyLogo].map((company, index) => (
              <Image
                key={index}
                src={company.image}
                alt={company.name}
                width={100}
                height={40}
                className="mx-6 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
