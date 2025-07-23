"use client";
import { TypewriterEffectSmooth } from "./ui/typewritter-effect";
import Link from "next/link";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Proudly",
    },
    {
      text: "Startup",
    },
    {
      text: "India",
    },
    {
      text: "Certified",
    },
    {
      text: "Platform. ",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-black dark:text-black text-xs sm:text-base  ">
        recognized for innovation and impact in service-tech
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="/">
          <button className="cursor-pointer w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Explore
          </button>
        </Link>

        <button className="w-40 cursor-pointer  h-10 rounded-xl bg-white text-black border border-black hover:bg-blue-300 text-sm">
          Download
        </button>
      </div>
    </div>
  );
}
