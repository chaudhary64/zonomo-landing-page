"use client";
import React from "react";

const cardData = [
  {
    title: "Choose Your Own Service Provider",
    description:
      "Empower yourself with full visibility and control: browse a curated list of background verified professionals, compare their profiles, read honest customer reviews, and handpick the exact technician who meets your needs and budget.",
  },
  {
    title: "Flexible Pricing",
    description:
      "Say goodbye to rigid packages and hidden fees. With Zonomo, you see transparent, competitive quotes from multiple providers—so you pay only for the work you request, whether it's a quick wiring fix or a full home deep clean.",
  },
  {
    title: "AI-Powered Matching",
    description:
      "Our smart engine analyzes your location, service history, provider ratings and availability to instantly recommend the top three experts for your job—cutting search time and ensuring you get the right skillset at the right hour",
  },
  {
    title: "Chat Support",
    description:
      "Need help choosing a service or tracking your request? Tap into our 24/7 in-app chat to connect with a real Zonomo support agent—get instant answers on pricing, provider details, booking changes, or any tech issue.",
  },
  {
    title: "No Agency Lock-ins",
    description:
      "Unlike other platforms that assign you an arbitrary technician, Zonomo is a pure peer to peer marketplace. There are no middlemen or hidden markups—just a direct relationship between you and vetted professionals, every time.",
  },
  {
    title: "Exclusive Offers for New Users",
    description:
      "Kickstart your Zonomo experience with special launch-only discounts, referral credits and loyalty points on your first few bookings. Enjoy up to 20% off select services—and unlock ongoing perks as you keep using the app.",
  },
];

const Card = ({ title, description }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        lineHeight: 1,
      }}
      className="mt-[45vh] p-8 max-w-md border-2 border-purple-400 bg-white shadow-lg rounded-lg max-lg:mt-6 max-lg:p-4 max-lg:max-w-full"
    >
      <h2 className="text-2xl font-semibold text-purple-800 mb-2 max-lg:text-xl max-lg:mb-1 font-poppins">
        {title}
      </h2>
      <p className="text-lg text-gray-700 max-lg:text-base font-inter">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20 relative grid grid-cols-2 max-lg:my-3 max-lg:px-2 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-4">
      {/* Left Part */}
      <div className="h-fit w-fit sticky top-1/4 px-10 justify-self-center flex flex-col items-center justify-center text-8xl font-bold uppercase text-black border-l-4 border-purple-500 max-lg:static max-lg:border-l-0 max-lg:border-b-4 max-lg:text-3xl max-lg:w-full max-lg:py-3 max-lg:px-0">
        <span className="font-playfair">Why</span>
        <span className="font-playfair">Choose</span>
        <span className="font-playfair">Us</span>
      </div>

      {/* Right Part */}
      <div className="max-lg:w-full max-lg:flex max-lg:justify-center">
        <div className="flex flex-wrap justify-center xl:justify-start max-lg:flex-col max-lg:items-center max-lg:gap-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
