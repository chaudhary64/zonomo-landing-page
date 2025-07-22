import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  CursorArrowRaysIcon,
  UsersIcon,
  BoltIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";
import PointerHighlight from "./ui/pointer-highlight";

import Image from "next/image";

const features = [
  {
    name: "Middleman Model – Zero Ownership, Full Control",
    description:
      "Zonomo connects users directly to professionals without owning any agency—enabling full flexibility and reduced overhead.",
    icon: LightBulbIcon,
  },
  {
    name: "Any Service. Anytime. Anywhere.",
    description:
      "From repairs to healthcare, Zonomo delivers services right to your doorstep on-demand.",
    icon: BoltIcon,
  },
  {
    name: "AI-Powered Matching System",
    description:
      "Smart algorithms recommend top-rated professionals tailored to user preferences and location.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Dual Platform – Users & Service Professionals",
    description:
      "A two-sided interface for both users and providers to manage bookings, earnings, and feedback.",
    icon: UsersIcon,
  },
  {
    name: "Zero Hiring Costs for Professionals",
    description:
      "Service providers list for free, access customers, and control their offerings independently.",
    icon: UserIcon,
  },
  {
    name: "End-to-End Chat & Negotiation System",
    description:
      "Real-time messaging enables smooth negotiations and transparent service agreements.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Verified & Rated Professionals",
    description:
      "Trustworthy services backed by verified profiles, user ratings, and reviews.",
    icon: UserIcon,
  },
  {
    name: "Fast Booking & On-Time Service",
    description:
      "Instant bookings with timely service delivery—experience speed and convenience.",
    icon: BoltIcon,
  },
];

export default function Feat_Sec() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Get all the features you need
              </h2>

              <PointerHighlight>
                <span className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Featues of Zonomo
                </span>
              </PointerHighlight>

              <p className="mt-6 text-lg/8 text-gray-700">
                Zonomo streamlines service access through an AI-powered,
                zero-ownership model. It connects users and professionals
                directly, offers doorstep services on demand, and supports both
                sides with a dual-platform interface—no hiring fees
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-12">
                    <dt className="inline font-bold text-xl text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-7 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <Image
            alt="Product screenshot"
            src="https://images.unsplash.com/photo-1556742208-999815fca738?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHNob3BwaW5nfGVufDB8fDB8fHww"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

// https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png
