"use client";
import React, { useState, useEffect, useCallback } from "react";
import PlayStore from "@/components/playStore";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServiceSection({
  services = [],
  features = [],
  benefits = [],
  heroImage = "",
  heroTitle = "",
  heroSubtitle = "",
  ctaButtons = [],
  servicesSectionTitle = "",
  servicesSectionDescription = "",
  benefitsSectionTitle = "",
  benefitsSectionDescription = "",
  pricingTitle = "",
  pricingSubtitle = "",
  pricingRange = "",
  pricingNote = "",
  pricingIncluded = [],
  pricingGuarantee = [],
  pricingButton = null,
  ctaSectionTitle = "",
  ctaSectionSubtitle = "",
  ctaSectionButtons = [],
  ctaSectionBadges = [],
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [servicesPerSlide, setServicesPerSlide] = useState(3);
  const [promo, setPromo] = useState(false);

  const updateServicesPerSlide = () => {
    if (window.innerWidth >= 1024) {
      setServicesPerSlide(3);
    } else if (window.innerWidth >= 768) {
      setServicesPerSlide(2);
    } else {
      setServicesPerSlide(1);
    }
  };

  useEffect(() => {
    updateServicesPerSlide();
    window.addEventListener("resize", updateServicesPerSlide);
    return () => window.removeEventListener("resize", updateServicesPerSlide);
  }, []);

useEffect(() => {
  // Check if promo has already been shown
  const promoShown = localStorage.getItem('promoShown');
  
  if (!promoShown) {
    const timer = setTimeout(() => {
      setPromo(true);
      // Set flag in localStorage
      localStorage.setItem('promoShown', 'true');
    }, 4000);

    return () => clearTimeout(timer);
  }
}, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(services.length / servicesPerSlide)
    );
  }, [services.length, servicesPerSlide]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(services.length / servicesPerSlide)) %
        Math.ceil(services.length / servicesPerSlide)
    );
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide, servicesPerSlide, nextSlide]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 "
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        {/* PlayStore Promo (always mounted, visibility toggled) */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-amber-50 pacity-50 transition-opacity duration-200 ${
            promo
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!promo}
        >
          <PlayStore onClose={() => setPromo(false)} />
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 bg-white/20 p-4 rounded-full border border-white/30 backdrop-blur-sm">
              {ctaSectionBadges && ctaSectionBadges[0]?.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed font-medium">
              {heroSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature) => (
                <div
                  key={
                    typeof feature.text === "string"
                      ? feature.text
                      : JSON.stringify(feature)
                  }
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20"
                >
                  <span className="text-white">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {ctaButtons.map((btn) => (
                <button
                  key={
                    typeof btn.text === "string"
                      ? btn.text
                      : JSON.stringify(btn)
                  }
                  {...btn.props}
                >
                  {btn.icon}
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {servicesSectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {servicesSectionDescription}
            </p>
          </div>
          {/* Services Carousel */}
          <div className="relative">
            <div
              className="overflow-hidden mb-8"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({
                  length: Math.ceil(services.length / servicesPerSlide),
                }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                      {services
                        .slice(
                          slideIndex * servicesPerSlide,
                          (slideIndex + 1) * servicesPerSlide
                        )
                        .map((service) => (
                          <div
                            key={
                              typeof service.title === "string"
                                ? service.title
                                : JSON.stringify(service)
                            }
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                  {service.icon}
                                </div>
                               
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 mb-4">
                                {service.description}
                              </p>
                              <ul className="mb-6 space-y-2">
                                {service.benefits.map((benefit) => (
                                  <li
                                    key={
                                      typeof benefit === "string"
                                        ? benefit
                                        : JSON.stringify(benefit)
                                    }
                                    className="flex items-center gap-2 text-sm text-gray-700"
                                  >
                                    {service.benefitIcon}
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                Book Service
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
              aria-label="Previous services"
            >
              <FaArrowLeft />

            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
              aria-label="Next services"
            >
              <FaArrowRightLong />

            </button>
            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({
                length: Math.ceil(services.length / servicesPerSlide),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      
      {/* ...existing code... */}

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 text-center text-gray-800">
              <h3 className="text-4xl font-bold mb-4">{pricingTitle}</h3>
              <p className="text-gray-700 mb-6">{pricingSubtitle}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="text-4xl font-bold mb-2">{pricingRange}</div>
                <p className="text-sm text-gray-600">{pricingNote}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    {pricingIncluded[0]?.icon}
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {pricingIncluded.map((item) => (
                      <li
                        key={
                          typeof item.text === "string"
                            ? item.text
                            : JSON.stringify(item)
                        }
                        className="flex items-start gap-2"
                      >
                        <span>•</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    {pricingGuarantee[0]?.icon}
                    Our Guarantee
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {pricingGuarantee.map((item) => (
                      <li
                        key={
                          typeof item.text === "string"
                            ? item.text
                            : JSON.stringify(item)
                        }
                        className="flex items-start gap-2"
                      >
                        <span>•</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {pricingButton}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{ctaSectionTitle}</h2>
            <p className="text-xl text-blue-200 mb-8">{ctaSectionSubtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              {ctaSectionButtons.map((btn) => (
                <button
                  key={
                    typeof btn.text === "string"
                      ? btn.text
                      : JSON.stringify(btn)
                  }
                  {...btn.props}
                >
                  {btn.icon}
                  {btn.text}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              {ctaSectionBadges.map((badge) => (
                <div
                  key={
                    typeof badge.text === "string"
                      ? badge.text
                      : JSON.stringify(badge)
                  }
                  className="flex items-center gap-2"
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
