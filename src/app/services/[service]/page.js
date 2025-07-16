"use client";
import {
  Zap,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  Calendar,
  Star,
  Home,
  BadgeCheck,
  ThumbsUp,
  DollarSign,
  Lightbulb,
  Settings,
  Wrench,
  Battery,
  HeartPulse,
  AlertTriangle,
} from "lucide-react";
import ServiceSection from "@/components/service/ServiceSection";
import { useParams } from "next/navigation";

// Electrician Section Data
const electricianServicesData = {
  // Services
  services: [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Fan & Light Installation",
      description:
        "Professional installation of ceiling fans, LED lights, and decorative fixtures for optimal lighting and cooling.",
      benefits: [
        "Improved illumination",
        "Energy efficiency",
        "Enhanced ambiance",
      ],
      price: "₹199 - ₹499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Switchboard Installation",
      description:
        "Modern switchboard solutions that ensure safety and protect your appliances from electrical hazards.",
      benefits: [
        "Child safety features",
        "Surge protection",
        "Future-proof design",
      ],
      price: "₹199 - ₹399",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Wiring & Circuit Repair",
      description:
        "Comprehensive wiring solutions to eliminate hazards and ensure your electrical system operates safely.",
      benefits: [
        "Hazard prevention",
        "Code compliance",
        "Reliable performance",
      ],
      price: "₹299 - ₹599",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fuse Replacement",
      description:
        "Expert diagnosis and replacement of fuses to maintain uninterrupted power supply in your home.",
      benefits: [
        "Quick resolution",
        "Root cause analysis",
        "Preventive measures",
      ],
      price: "₹299 - ₹499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "AC Point Setup",
      description:
        "Specialized installation of heavy-duty AC power points designed for optimal performance and safety.",
      benefits: ["Load capacity", "Professional setup", "Cooling efficiency"],
      price: "₹399 - ₹799",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Inverter Connections",
      description:
        "Reliable backup power solutions to keep your essential appliances running during outages.",
      benefits: [
        "Uninterrupted power",
        "Automatic switching",
        "Battery maintenance",
      ],
      price: "₹399 - ₹999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
  ],
  // Features
  features: [
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      text: "Licensed & Certified Electricians",
    },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Emergency Services" },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      text: "5-Year Workmanship Guarantee",
    },
    { icon: <DollarSign className="w-5 h-5" />, text: "Transparent Pricing" },
  ],
  // Benefits
  benefits: [
    {
      title: "Safety First",
      description:
        "Our certified electricians prioritize safety in every job, using proper protective equipment and following all electrical codes.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Advanced Diagnostics",
      description:
        "We use state-of-the-art tools to accurately diagnose electrical issues, saving you time and money on repairs.",
      icon: <HeartPulse className="w-8 h-8" />,
    },
    {
      title: "Energy Efficiency",
      description:
        "Our solutions are designed to optimize your home's energy usage, reducing your electricity bills significantly.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular check-ups help identify potential issues before they become serious hazards or costly repairs.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
  ],
  // Hero Section
  heroImage:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroTitle: (
    <>
      Professional Electrical Services{" "}
      <span className="text-blue-500">You Can Trust</span>
    </>
  ),
  heroSubtitle:
    "Complete residential electrical solutions from certified professionals ensuring safety, reliability, and efficiency",
  ctaButtons: [
    {
      text: "Request a Callback",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
      },
    },
    {
      text: "Schedule Inspection",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm",
      },
    },
  ],
  // Pricing Section
  pricingTitle: "Transparent Pricing Structure",
  pricingSubtitle:
    "No hidden fees - we provide clear estimates before any work begins",
  pricingRange: "₹149 – ₹999*",
  pricingNote: "*Final pricing depends on scope of work and materials required",
  pricingIncluded: [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-700" />,
      text: "Professional diagnosis and assessment",
    },
    { text: "Quality materials and equipment" },
    { text: "Clean and efficient installation" },
  ],
  pricingGuarantee: [
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      text: "30-day service warranty",
    },
    { text: "Licensed and insured professionals" },
    { text: "Compliance with safety standards" },
  ],
  pricingButton: (
    <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Home className="w-5 h-5" />
      Get Your Free Home Electrical Assessment
    </button>
  ),
  // CTA Section
  ctaSectionTitle: "Ready to Upgrade Your Home's Electrical System?",
  ctaSectionSubtitle:
    "Don't compromise on safety or quality. Our certified electricians are ready to help with any electrical need.",
  ctaSectionButtons: [
    {
      text: "Call Now: +91 98765 43210",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
    {
      text: "Schedule Online",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
  ],
  ctaSectionBadges: [
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Licensed & Insured" },
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Emergency Service" },
    { icon: <Star className="w-4 h-4" />, text: "5-Star Rated" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "100% Satisfaction" },
  ],
  servicesSectionTitle: "Comprehensive Electrical Services",
  servicesSectionDescription:
    "Expert solutions for all your residential electrical needs",
  benefitsSectionTitle: "Why Choose Our Electrical Services?",
  benefitsSectionDescription:
    "We deliver exceptional quality and service that sets us apart",
};

// Plumbing Section Data
const plumbingServicesData = {
  // Services
  services: [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Leak Repair",
      description:
        "Quick and reliable repair of leaking pipes, faucets, and fixtures to prevent water damage and save costs.",
      benefits: ["Water conservation", "Damage prevention", "Cost savings"],
      price: "₹199 - ₹499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Tap & Faucet Installation",
      description:
        "Professional installation of all types of taps and faucets for kitchens, bathrooms, and utility areas.",
      benefits: [
        "Drip-free fittings",
        "Modern designs",
        "Long-lasting performance",
      ],
      price: "₹199 - ₹399",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Drain Cleaning",
      description:
        "Thorough cleaning and unclogging of drains and pipelines to ensure smooth water flow.",
      benefits: ["Odor removal", "Prevents blockages", "Hygienic environment"],
      price: "₹299 - ₹599",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Water Heater Services",
      description:
        "Installation and repair of water heaters for consistent hot water supply throughout the year.",
      benefits: ["Safe installation", "Energy efficiency", "Quick repairs"],
      price: "₹299 - ₹799",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Bathroom Fittings",
      description:
        "Expert installation and replacement of showers, flush tanks, and other bathroom accessories.",
      benefits: ["Modern upgrades", "Leak-proof fittings", "Aesthetic appeal"],
      price: "₹399 - ₹899",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Water Tank Cleaning",
      description:
        "Comprehensive cleaning and disinfection of water storage tanks for safe and clean water.",
      benefits: [
        "Removes contaminants",
        "Improves water quality",
        "Healthier home",
      ],
      price: "₹499 - ₹1199",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
  ],
  // Features
  features: [
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      text: "Experienced & Verified Plumbers",
    },
    { icon: <Clock className="w-5 h-5" />, text: "Prompt Response Time" },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      text: "Workmanship Guarantee",
    },
    { icon: <DollarSign className="w-5 h-5" />, text: "Upfront Pricing" },
  ],
  // Benefits
  benefits: [
    {
      title: "Hygienic Solutions",
      description:
        "We ensure all plumbing work is carried out with utmost hygiene and cleanliness, leaving your home spotless.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Skilled Technicians",
      description:
        "Our plumbers are trained and experienced to handle all types of plumbing issues efficiently.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "Quality Materials",
      description:
        "We use only high-quality pipes, fittings, and fixtures for long-lasting results.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular inspections and maintenance help avoid major plumbing emergencies and costly repairs.",
      icon: <AlertTriangle className="w-8 h-8" />,
    },
  ],
  // Hero Section
  heroImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1169&auto=format&fit=crop",
  heroTitle: (
    <>
      Reliable Plumbing Services{" "}
      <span className="text-blue-500">For Every Home</span>
    </>
  ),
  heroSubtitle:
    "Complete residential plumbing solutions by trusted professionals for leak-free, worry-free living",
  ctaButtons: [
    {
      text: "Request a Plumber",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
      },
    },
    {
      text: "Book Inspection",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm",
      },
    },
  ],
  // Pricing Section
  pricingTitle: "Clear & Honest Pricing",
  pricingSubtitle: "No surprises – get a detailed estimate before work begins",
  pricingRange: "₹149 – ₹1199*",
  pricingNote: "*Final pricing depends on job complexity and materials used",
  pricingIncluded: [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-700" />,
      text: "Thorough inspection and diagnosis",
    },
    { text: "Quality materials and tools" },
    { text: "Clean and efficient service" },
  ],
  pricingGuarantee: [
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      text: "30-day service warranty",
    },
    { text: "Verified and insured plumbers" },
    { text: "Compliance with safety standards" },
  ],
  pricingButton: (
    <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Home className="w-5 h-5" />
      Get Your Free Plumbing Assessment
    </button>
  ),
  // CTA Section
  ctaSectionTitle: "Need a Plumber You Can Trust?",
  ctaSectionSubtitle:
    "Our expert plumbers are ready to solve any plumbing issue, big or small.",
  ctaSectionButtons: [
    {
      text: "Call Now: +91 98765 43211",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
    {
      text: "Book Online",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
  ],
  ctaSectionBadges: [
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Verified Plumbers" },
    { icon: <Clock className="w-4 h-4" />, text: "Quick Response" },
    { icon: <Star className="w-4 h-4" />, text: "Top Rated" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "100% Satisfaction" },
  ],
  servicesSectionTitle: "Comprehensive Plumbing Services",
  servicesSectionDescription:
    "Expert solutions for all your home plumbing needs",
  benefitsSectionTitle: "Why Choose Our Plumbing Services?",
  benefitsSectionDescription:
    "We deliver quality, reliability, and peace of mind for every job",
};

// Healthcare Section Data
const healthcareServicesData = {
  // ...existing code...
};

// Cleaning Section Data
const cleaningServicesData = {
  // Services
  services: [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Home Deep Cleaning",
      description:
        "Thorough cleaning of your entire home, including floors, walls, bathrooms, and kitchen for a spotless living space.",
      benefits: [
        "Sanitized environment",
        "Removes tough stains",
        "Fresh & hygienic home",
      ],
      price: "₹999 - ₹2999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Sofa & Carpet Cleaning",
      description:
        "Professional cleaning and shampooing of sofas, carpets, and upholstery to remove dust, stains, and allergens.",
      benefits: ["Allergen removal", "Restores appearance", "Odor free"],
      price: "₹499 - ₹1999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Bathroom Cleaning",
      description:
        "Intensive cleaning and disinfection of bathrooms, tiles, fittings, and fixtures for a sparkling clean look.",
      benefits: ["Kills germs", "Removes limescale", "Odor control"],
      price: "₹399 - ₹999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Kitchen Cleaning",
      description:
        "Degreasing and deep cleaning of kitchen surfaces, cabinets, appliances, and chimneys for a hygienic cooking space.",
      benefits: ["Grease removal", "Hygienic surfaces", "Pest prevention"],
      price: "₹499 - ₹1499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Office & Commercial Cleaning",
      description:
        "Comprehensive cleaning solutions for offices, shops, and commercial spaces to maintain a professional environment.",
      benefits: ["Healthy workspace", "Professional look", "Flexible timing"],
      price: "₹1499 - ₹4999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Move-in/Move-out Cleaning",
      description:
        "Specialized cleaning for tenants and homeowners before moving in or after moving out for a fresh start.",
      benefits: ["Ready-to-move", "Deposit safety", "Stress-free move"],
      price: "₹999 - ₹2999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
  ],
  // Features
  features: [
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      text: "Trained & Verified Cleaners",
    },
    { icon: <Clock className="w-5 h-5" />, text: "On-Time Service" },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      text: "Satisfaction Guarantee",
    },
    { icon: <DollarSign className="w-5 h-5" />, text: "Transparent Pricing" },
  ],
  // Benefits
  benefits: [
    {
      title: "Hygienic Living",
      description:
        "We use safe and effective cleaning agents to ensure a healthy and germ-free environment.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Attention to Detail",
      description:
        "Our team covers every nook and corner, leaving your space spotless and fresh.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "Eco-Friendly Solutions",
      description:
        "We offer green cleaning options that are safe for your family and the environment.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Flexible Scheduling",
      description:
        "Book cleaning services at your convenience, including weekends and holidays.",
      icon: <Clock className="w-8 h-8" />,
    },
  ],
  // Hero Section
  heroImage:
    "https://images.unsplash.com/photo-1593174260957-b4eba7b3820c?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroTitle: (
    <>
      Professional Cleaning Services{" "}
      <span className="text-blue-500">For Every Space</span>
    </>
  ),
  heroSubtitle:
    "Complete home and office cleaning solutions by trained professionals for a spotless, healthy environment",
  ctaButtons: [
    {
      text: "Book Cleaning",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
      },
    },
    {
      text: "Get Free Estimate",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm",
      },
    },
  ],
  // Pricing Section
  pricingTitle: "Transparent Cleaning Packages",
  pricingSubtitle:
    "No hidden charges – get a clear estimate before we start cleaning",
  pricingRange: "₹399 – ₹4999*",
  pricingNote: "*Final pricing depends on area size and service type",
  pricingIncluded: [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-700" />,
      text: "Trained cleaning staff",
    },
    { text: "Safe and effective cleaning agents" },
    { text: "All equipment and tools included" },
  ],
  pricingGuarantee: [
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      text: "Satisfaction guarantee",
    },
    { text: "Verified and insured cleaners" },
    { text: "Compliance with safety standards" },
  ],
  pricingButton: (
    <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Home className="w-5 h-5" />
      Get Your Free Cleaning Assessment
    </button>
  ),
  // CTA Section
  ctaSectionTitle: "Want a Spotless Home or Office?",
  ctaSectionSubtitle:
    "Our expert cleaning team is ready to transform your space. Book now for a sparkling clean experience!",
  ctaSectionButtons: [
    {
      text: "Call Now: +91 98765 43213",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
    {
      text: "Book Online",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
  ],
  ctaSectionBadges: [
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Verified Cleaners" },
    { icon: <Clock className="w-4 h-4" />, text: "On-Time Service" },
    { icon: <Star className="w-4 h-4" />, text: "Top Rated" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "100% Satisfaction" },
  ],
  servicesSectionTitle: "Comprehensive Cleaning Services",
  servicesSectionDescription:
    "Expert cleaning solutions for homes, offices, and commercial spaces",
  benefitsSectionTitle: "Why Choose Our Cleaning Services?",
  benefitsSectionDescription:
    "We deliver quality, reliability, and a sparkling clean every time",
};

const data = (id) => {
  switch (id) {
    case "electrician-services":
      return electricianServicesData;
    case "plumbing-services":
      return plumbingServicesData;
    case "healthcare-services":
      return healthcareServicesData;
    case "cleaning-services":
      return cleaningServicesData;
    default:
      return electricianServicesData; // Default to electrician services if no match
  }
};

export default function ElectricianServices() {
  const params = useParams();
  console.log("Route Params:", params.service); // Log the params for debugging
  return (
    <>
      <ServiceSection {...data(params.service)} />
    </>
  );
}
