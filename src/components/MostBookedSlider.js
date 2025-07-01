"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "AC Repair and service",
    rating: 4.81,
    reviews: "120K",
    price: "₹1,299",
    img: "/images/ac-repairs.jpg",
  },
  {
    title: "Facial Massage",
    rating: 4.8,
    reviews: "66K",
    price: "₹899",
    img: "/images/facial-massage.jpg",
  },
  {
    title: "Laundry",
    rating: 4.78,
    reviews: "2.6M",
    price: "₹950",
    oldPrice: "₹1,038",
    img: "/images/laundry.jpg",
  },
  {
    title: "Medical Consultation",
    rating: 4.88,
    reviews: "478K",
    price: "₹259",
    img: "/images/medical-examination-service-1.jpg",
  },
  {
    title: "Vacuum Cleaning",
    rating: 4.84,
    reviews: "179K",
    price: "₹1,299",
    img: "/images/vacuum-cleaning.jpg",
  },
];

export default function MostBookedSlider() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">Most booked services</h2>
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group opacity-80 hover:opacity-100">
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group opacity-80 hover:opacity-100">
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow border border-gray-200 rounded-xl overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="font-medium text-base mb-3">{service.title}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    ⭐ {service.rating} ({service.reviews})
                  </p>
                  <p className="text-black font-semibold">
                    {service.price}
                    {service.oldPrice && (
                      <span className="text-gray-500 line-through ml-2 text-sm">
                        {service.oldPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
