"use client";
import {
  // Service Type Icons
  Sparkles,       // Bridal Makeup
  PartyPopper,    // Party Makeup
  Briefcase,      // Professional Makeup
  Camera,         // Photoshoot Makeup
  Smile,          // Natural Makeup
  Palette,        // Creative Makeup
  Truck,
  MapPin ,
  Box ,
  Building,
  PackageSearch ,
  PackageOpen ,
  Calculator ,
  // Feature Icons
  Droplet,        // Hydrating Formulas
  Shield,         // Hypoallergenic/Sanitation
  Clock,          // Long-Lasting
  Flower,         // Cruelty-Free
  Leaf,           // Organic/Natural
  Gift,           // Free Touch-Up Kit
  Settings,       // Customization

  // Benefit Icons
  Heart,          // Gentle Care

  // CTA Button Icons
  Calendar,       // Book Appointment
  Image,          // View Portfolio
  Video,          // Virtual Consultation
  Phone,          // Call Now
  MessageSquare,  // Chat Consultation

  // Badge/Trust Icons
  Award,          // Certified MUAs
  Star,           // Ratings
  Gem,            // Luxury Brands
  ThumbsUp,       // Customer Satisfaction
  BadgeCheck,     // Verified Professionals

  // Pricing Section
  DollarSign,     // Price/Value
  Tag,            // Discounts
  Zap,            // Quick Service

  // Additional Makeup Specific
  Lightbulb,
  Wrench,
  Battery,
  HeartPulse,
  AlertTriangle,
  Download,
  Home,
  User,
  ShoppingCart,
  Brain,
  BedDouble,
  // AC Repair Services Icons
  Hammer,
  SquareStack,
  UserCheck,
  AlertCircle,
  Dumbbell,
  UserCog,
  DoorOpen,
  LayoutTemplate,
  Table2,
  ClipboardList,
   Monitor,
   Ruler, 
  // Pet Services Icons
  PawPrint,
  Bone,
  ShoppingBag,
  Dog,
  List,
  CheckCircle,
  ShieldCheck,
  
} from 'lucide-react';
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
        "We use state-of-the-art UserCogs to accurately diagnose electrical issues, saving you time and money on repairs.",
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
    "/images/electric.jpg",
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
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
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
 
  // CTA Section
  ctaSectionTitle: "Ready to Upgrade Your Home's Electrical System?",
  ctaSectionSubtitle:
    "Don't compromise on safety or quality. Our certified electricians are ready to help with any electrical need.",
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
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
    "/images/plumber.jpg",
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
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
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
    { text: "Quality materials and UserCogs" },
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
  
  // CTA Section
  ctaSectionTitle: "Need a Plumber You Can Trust?",
  ctaSectionSubtitle:
    "Our expert plumbers are ready to solve any plumbing issue, big or small.",
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
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
  // Services
  services: [
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Doctor Consultation",
      description:
        "Book appointments with certified doctors for general health checkups, illness, and preventive care.",
      benefits: [
        "Qualified professionals",
        "Personalized advice",
        "Convenient scheduling",
      ],
      price: "₹299 - ₹799",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Home Sample Collection",
      description:
        "Get blood, urine, and other lab samples collected at your doorstep by trained technicians.",
      benefits: ["Hygienic process", "Certified labs", "Quick results"],
      price: "₹199 - ₹499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Nursing Care",
      description:
        "Professional nursing services for post-surgery care, injections, wound dressing, and elderly support.",
      benefits: [
        "Experienced nurses",
        "Compassionate care",
        "24/7 availability",
      ],
      price: "₹499 - ₹1499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Health Checkup Packages",
      description:
        "Comprehensive health checkup packages for all age groups, including blood tests, ECG, and more.",
      benefits: ["Early detection", "Affordable packages", "Detailed reports"],
      price: "₹999 - ₹2999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Physiotherapy at Home",
      description:
        "Personalized physiotherapy sessions for pain relief, injury recovery, and mobility improvement.",
      benefits: [
        "Certified therapists",
        "Modern techniques",
        "Flexible timings",
      ],
      price: "₹399 - ₹999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Medical Equipment Rental",
      description:
        "Rent wheelchairs, oxygen concentrators, and other medical equipment for home use.",
      benefits: ["Quality equipment", "Sanitized & safe", "Doorstep delivery"],
      price: "₹299 - ₹1999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
  ],
  // Features
  features: [
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      text: "Certified Healthcare Professionals",
    },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Appointments" },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      text: "Trusted & Verified Staff",
    },
    { icon: <DollarSign className="w-5 h-5" />, text: "Transparent Pricing" },
  ],
  // Benefits
  benefits: [
    {
      title: "Convenience at Home",
      description:
        "Access quality healthcare services without leaving your home, saving time and effort.",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "Qualified Experts",
      description:
        "All services are provided by certified and experienced healthcare professionals.",
      icon: <BadgeCheck className="w-8 h-8" />,
    },
    {
      title: "Comprehensive Care",
      description:
        "From diagnosis to recovery, we offer a wide range of healthcare solutions for every need.",
      icon: <HeartPulse className="w-8 h-8" />,
    },
    {
      title: "Safety & Hygiene",
      description:
        "Strict protocols for hygiene and safety are followed for every service.",
      icon: <Shield className="w-8 h-8" />,
    },
  ],
  // Hero Section
  heroImage:
    "/images/healthCare.jpg",
  heroTitle: (
    <>
      Quality Healthcare Services{" "}
      <span className="text-blue-500">At Your Doorstep</span>
    </>
  ),
  heroSubtitle:
    "Comprehensive home healthcare solutions by trusted professionals for your family's well-being",
  ctaButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
      },
    },
    {
      text: "Book Online",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm",
      },
    },
  ],
  // Pricing Section
  pricingTitle: "Affordable Healthcare Packages",
  pricingSubtitle:
    "Transparent pricing for all services – no hidden charges, clear estimates provided",
  pricingRange: "₹199 – ₹1599*",
  pricingNote: "*Final pricing depends on service type and requirements",
  pricingIncluded: [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-700" />,
      text: "Qualified healthcare professionals",
    },
    { text: "Certified labs and equipment" },
    { text: "Clean and safe procedures" },
  ],
  pricingGuarantee: [
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      text: "Service warranty & support",
    },
    { text: "Verified and insured staff" },
    { text: "Compliance with health standards" },
  ],
 
  // CTA Section
  ctaSectionTitle: "Need Healthcare Services at Home?",
  ctaSectionSubtitle:
    "Our expert team is ready to provide quality care and support for you and your loved ones.",
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
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
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Certified Staff" },
    { icon: <Clock className="w-4 h-4" />, text: "On-Time Service" },
    { icon: <Star className="w-4 h-4" />, text: "Top Rated" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "100% Satisfaction" },
  ],
  servicesSectionTitle: "Comprehensive Healthcare Services",
  servicesSectionDescription:
    "Expert medical and wellness solutions for your family at home",
  benefitsSectionTitle: "Why Choose Our Healthcare Services?",
  benefitsSectionDescription:
    "We deliver quality, safety, and compassion for every patient",
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
        "Professional cleaning and shampooing of sofas, carpets, and upholstery to remove dust, stains, and Shields.",
      benefits: ["Shield removal", "Restores appearance", "Odor free"],
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
    "/images/cleaning.jpg",
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
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
      },
    },
    {
      text: "Book Online",
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
  pricingRange: "₹399 – ₹1999*",
  pricingNote: "*Final pricing depends on area size and service type",
  pricingIncluded: [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-700" />,
      text: "Trained cleaning staff",
    },
    { text: "Safe and effective cleaning agents" },
    { text: "All equipment and UserCogs included" },
  ],
  pricingGuarantee: [
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      text: "Satisfaction guarantee",
    },
    { text: "Verified and insured cleaners" },
    { text: "Compliance with safety standards" },
  ],
  
  // CTA Section
  ctaSectionTitle: "Want a Spotless Home or Office?",
  ctaSectionSubtitle:
    "Our expert cleaning team is ready to transform your space. Book now for a sparkling clean experience!",
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
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

// AC- SERVICE CONTENT
const acRepairServicesData = {
  // Services
  services: [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "AC General Service",
      description:
        "Comprehensive maintenance including cleaning, gas check, and performance optimization for your air conditioner.",
      benefits: [
        "Improved cooling efficiency",
        "Reduced electricity bills",
        "Extended AC lifespan",
      ],
      price: "₹599 - ₹1499",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "AC Gas Charging",
      description:
        "Professional refrigerant gas refilling with leak testing to restore optimal cooling performance.",
      benefits: ["Restores cooling power", "Eco-friendly gases", "Leak detection"],
      price: "₹999 - ₹2999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AC Repair",
      description:
        "Expert troubleshooting and repair for all AC issues including water leakage, strange noises, and cooling problems.",
      benefits: ["Same-day service", "Genuine parts", "Warranty on repairs"],
      price: "₹799 - ₹3999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AC Installation",
      description:
        "Professional installation of new AC units with proper mounting, piping, and electrical connections.",
      benefits: ["Safe installation", "Optimal placement", "Free consultation"],
      price: "₹1499 - ₹4999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "AC Deep Cleaning",
      description:
        "Thorough cleaning of indoor and outdoor units including coils, filters, and drainage system.",
      benefits: ["Hygienic air quality", "Prevents odors", "Removes bacteria"],
      price: "₹899 - ₹1999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Annual Maintenance Contract",
      description:
        "Year-round protection with scheduled services, priority support, and discounted repairs.",
      benefits: ["Multiple visits", "20% discount", "Emergency support"],
      price: "₹2999 - ₹7999/year",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />,
    },
  ],
  // Features
  features: [
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      text: "Certified AC Technicians",
    },
    { icon: <Clock className="w-5 h-5" />, text: "90-Minute Response Time" },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      text: "90-Day Service Warranty",
    },
    { icon: <DollarSign className="w-5 h-5" />, text: "No Hidden Charges" },
  ],
  // Benefits
  benefits: [
    {
      title: "Expert Technicians",
      description:
        "Our team consists of manufacturer-trained professionals with 5+ years of experience.",
      icon: <UserCheck className="w-8 h-8" />,
    },
    {
      title: "Genuine Parts",
      description:
        "We use only OEM-approved spare parts with warranty for all repairs.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Advanced Equipment",
      description:
        "Latest UserCogs and digital gauges for precise diagnosis and servicing.",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: "24/7 Emergency",
      description:
        "Round-the-clock service for urgent AC breakdowns and repairs.",
      icon: <AlertCircle className="w-8 h-8" />,
    },
  ],
  // Hero Section
  heroImage:
    "/images/ac-repairs.jpg",
  heroTitle: (
    <>
      Professional <span className="text-blue-500">AC Repair</span> & Maintenance
    </>
  ),
  heroSubtitle:
    "Expert solutions for all air conditioner problems - servicing, gas charging, repairs and installation",
  ctaButtons: [
    {
      text: "Download",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
      },
    },
    {
      text: "Schedule Service",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm",
      },
    },
  ],
  // Pricing Section
  pricingTitle: "Transparent AC Service Pricing",
  pricingSubtitle:
    "Fair and competitive rates for all types of air conditioner services",
  pricingRange: "₹299 – ₹999*",
  pricingNote: "*Final pricing depends on AC tonnage and service type",
  pricingIncluded: [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-700" />,
      text: "Trained AC technicians",
    },
    { text: "Original equipment parts" },
    { text: "Complete diagnostic check" },
  ],
  pricingGuarantee: [
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      text: "90-day service warranty",
    },
    { text: "7-day follow-up support" },
    { text: "No repair-no charge policy" },
  ],
  
  // CTA Section
  ctaSectionTitle: "AC Not Cooling Properly?",
  ctaSectionSubtitle:
    "Our certified AC technicians can diagnose and fix any air conditioner issue quickly and effectively",
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
    {
      text: "Book Preventive Maintenance",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className:
          "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2",
      },
    },
  ],
  ctaSectionBadges: [
    { icon: <BadgeCheck className="w-4 h-4" />, text: "BEE Certified" },
    { icon: <Clock className="w-4 h-4" />, text: "Same-Day Service" },
    { icon: <Star className="w-4 h-4" />, text: "4.9/5 Ratings" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Warranty Backed" },
  ],
  servicesSectionTitle: "Complete AC Solutions",
  servicesSectionDescription:
    "From routine maintenance to complex repairs - we handle all air conditioner needs",
  benefitsSectionTitle: "Why Choose Our AC Services?",
  benefitsSectionDescription:
    "Expert care for your cooling systems with guaranteed satisfaction",
};

// PET-SERVICE
const petServicesData = {
  // Services
  services: [
    {
      icon: <PawPrint className="w-6 h-6" />,
      title: "Pet Grooming",
      description: "Professional bathing, haircut, nail trimming, and styling to keep your pet clean and healthy.",
      benefits: [
        "Reduces shedding & matting",
        "Prevents skin infections",
        "Professional styling"
      ],
      price: "₹799 - ₹2999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Veterinary Care",
      description: "Complete health checkups, vaccinations, and treatment by certified veterinarians.",
      benefits: [
        "Vaccination programs",
        "Disease diagnosis",
        "Post-op care"
      ],
      price: "₹399 - ₹2999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Pet Boarding",
      description: "Safe and comfortable overnight stays with daily walks, playtime, and personalized care.",
      benefits: [
        "24/7 supervision",
        "Regular exercise",
        "Medication administration"
      ],
      price: "₹999/day",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Bone className="w-6 h-6" />,
      title: "Pet Training",
      description: "Obedience training and behavior correction by certified trainers for dogs of all ages.",
      benefits: [
        "Basic commands",
        "Leash training",
        "Behavioral issues"
      ],
      price: "₹1499/session",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Pet Supplies Delivery",
      description: "Monthly subscription for food, treats, toys, and other essentials delivered to your door.",
      benefits: [
        "Curated packages",
        "Auto-shipping",
        "Discounts on bulk orders"
      ],
      price: "₹1499/month",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Dog className="w-6 h-6" />,
      title: "Dog Walking",
      description: "Daily exercise sessions with trained walkers who follow your pet's routine.",
      benefits: [
        "GPS tracked walks",
        "Photo updates",
        "Puppy socialization"
      ],
      price: "₹199/walk",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    }
  ],

  // Features
  features: [
    { icon: <BadgeCheck className="w-5 h-5" />, text: "Certified Professionals" },
    { icon: <Clock className="w-5 h-5" />, text: "Flexible Scheduling" },
    { icon: <Shield className="w-5 h-5" />, text: "Insured Services" },
    { icon: <Heart className="w-5 h-5" />, text: "Pet First Aid Trained" }
  ],

  // Benefits
  benefits: [
    {
      title: "Stress-Free Experience",
      description: "We use positive reinforcement techniques to ensure pets feel comfortable.",
      icon: <Smile className="w-8 h-8" />
    },
    {
      title: "Customized Care",
      description: "Services tailored to your pet's breed, age, and special needs.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Emergency Support",
      description: "24/7 availability for urgent pet care needs.",
      icon: <AlertCircle className="w-8 h-8" />
    },
    {
      title: "Eco-Friendly Products",
      description: "Only use organic, pet-safe shampoos and cleaning supplies.",
      icon: <Leaf className="w-8 h-8" />
    }
  ],

  // Hero Section
  heroImage: "https://images.unsplash.com/photo-1529472119196-cb724127a98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  heroTitle: <>Premium Care for Your <span className="text-blue-500">Furry Friends</span></>,
  heroSubtitle: "Complete pet care services from grooming to veterinary care - because they're family",
  
  ctaButtons: [
    {
      text: "Book Service",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      }
    },
    {
      text: "View Packages",
      icon: <List className="w-5 h-5" />,
      props: {
        className: "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
      }
    }
  ],

  // Pricing Section
  pricingTitle: "Transparent Pet Care Pricing",
  pricingSubtitle: "No hidden fees - just quality care for your companion",
  pricingRange: "₹299 - 999*",
  pricingNote: "*Prices vary based on pet size and service requirements",
  
  pricingIncluded: [
    { icon: <CheckCircle className="w-5 h-5 text-green-700" />, text: "Certified professionals" },
    { text: "Pet-friendly facilities" },
    { text: "Sanitized equipment" }
  ],
  
  pricingGuarantee: [
    { icon: <Shield className="w-5 h-5 text-blue-700" />, text: "100% satisfaction guarantee" },
    { text: "Service insurance" },
    { text: "Free follow-up consultation" }
  ],
  
  pricingButton: (
    <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <PawPrint className="w-5 h-5" />
      Get Customized Plan
    </button>
  ),

  // CTA Section
  ctaSectionTitle: "Ready to Pamper Your Pet?",
  ctaSectionSubtitle: "Join hundreds of pet parents who trust us with their furry family members",
  
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      }
    },
    {
      text: "Emergency Vet",
      icon: <AlertTriangle className="w-5 h-5" />,
      props: {
        className: "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
      }
    }
  ],
  
  ctaSectionBadges: [
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Certified" },
    { icon: <Heart className="w-4 h-4" />, text: "Pet-Loved" },
    { icon: <Star className="w-4 h-4" />, text: "4.8/5 Ratings" },
    { icon: <Shield className="w-4 h-4" />, text: "Insured" }
  ],

  servicesSectionTitle: "Our Pet Care Services",
  servicesSectionDescription: "Comprehensive solutions for all your pet's needs",
  
  benefitsSectionTitle: "Why Pet Parents Choose Us",
  benefitsSectionDescription: "We treat your pets like our own"
};

const facialMakeupData = {
  // Services
  services: [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Bridal Makeup",
      description: "Luxurious bridal makeup for your special day with long-lasting, photo-friendly formulas.",
      benefits: [
        "HD camera-ready finish",
        "12+ hours wear",
        "Custom color matching"
      ],
      price: "₹5,999 - ₹15,999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-pink-500" />
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      title: "Party Makeup",
      description: "Glamorous looks for special occasions with customizable intensity levels.",
      benefits: [
        "Trending styles",
        "Skin prep included",
        "False lash application"
      ],
      price: "₹2,999 - ₹7,999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-pink-500" />
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Makeup",
      description: "Corporate-appropriate makeup that enhances your natural features.",
      benefits: [
        "Subtle enhancement",
        "Oil-control formulas",
        "Quick application"
      ],
      price: "₹1,999 - ₹4,999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-pink-500" />
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photoshoot Makeup",
      description: "Specialized makeup designed for studio lighting and camera work.",
      benefits: [
        "Light-adaptive formulas",
        "Contour enhancement",
        "Multiple look changes"
      ],
      price: "₹3,999/session",
      benefitIcon: <CheckCircle className="w-4 h-4 text-pink-500" />
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Natural Makeup",
      description: "Enhance your features with a 'no-makeup' makeup look.",
      benefits: [
        "Skin-like finish",
        "Breathable formulas",
        "Quick application"
      ],
      price: "₹1,499 - ₹3,999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-pink-500" />
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Makeup",
      description: "Artistic and avant-garde looks for fashion shows or special events.",
      benefits: [
        "Custom designs",
        "Special effects",
        "High-pigment products"
      ],
      price: "₹4,999 - ₹12,999",
      benefitIcon: <CheckCircle className="w-4 h-4 text-pink-500" />
    }
  ],

  // Features
  features: [
    { icon: <Droplet className="w-5 h-5" />, text: "Hydrating Formulas" },
    { icon: <Shield className="w-5 h-5" />, text: "HypoShieldic" },
    { icon: <Clock className="w-5 h-5" />, text: "Long-Lasting" },
    { icon: <Flower className="w-5 h-5" />, text: "Cruelty-Free Products" }
  ],

  // Benefits
  benefits: [
    {
      title: "Skin Prep Included",
      description: "Every service includes professional cleansing, toning and moisturizing",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Custom Color Matching",
      description: "We analyze your skin tone to create perfect foundation matches",
      icon: <Droplet className="w-8 h-8" />
    },
    {
      title: "Sanitized UserCogs",
      description: "All brushes and UserCogs are sterilized between clients",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Touch-Up Kit",
      description: "Receive a mini touch-up kit with your bridal/event makeup",
      icon: <Gift className="w-8 h-8" />
    }
  ],

  // Hero Section
  heroImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwfGVufDB8fDB8fHww",
  heroTitle: <>Professional <span className="text-pink-500">Facial Makeup</span> Services</>,
  heroSubtitle: "Enhance your natural beauty with our expert makeup artists",
  
  ctaButtons: [
    {
      text: "Book Appointment",
      icon: <Calendar className="w-5 h-5" />,
      props: {
        className: "bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      }
    },
    {
      text: "View Portfolio",
      icon: <Image className="w-5 h-5" alt="Portfolio" />,
      props: {
        className: "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
      }
    }
  ],

  // Pricing Section
  pricingTitle: "Transparent Makeup Pricing",
  pricingSubtitle: "Premium products and techniques at competitive prices",
  pricingRange: "₹199 - 2999*",
  pricingNote: "*Prices vary based on complexity and products used",
  
  pricingIncluded: [
    { icon: <CheckCircle className="w-5 h-5 text-pink-700" />, text: "Luxury brand products" },
    { text: "Skin preparation" },
    { text: "Color consultation" }
  ],
  
  pricingGuarantee: [
    { icon: <Shield className="w-5 h-5 text-pink-700" />, text: "Satisfaction guarantee" },
    { text: "Sanitized UserCogs" },
    { text: "Touch-up tips" }
  ],
  
  pricingButton: (
    <button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Sparkles className="w-5 h-5" />
      Get Personalized Quote
    </button>
  ),

  // CTA Section
  ctaSectionTitle: "Ready for Your Makeup Transformation?",
  ctaSectionSubtitle: "Join thousands of clients who trust us for their special occasions",
  
  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      }
    },
    {
      text: "Book Online",
      icon: <Video className="w-5 h-5" />,
      props: {
        className: "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
      }
    }
  ],
  
  ctaSectionBadges: [
    { icon: <Award className="w-4 h-4" />, text: "Certified MUAs" },
    { icon: <Star className="w-4 h-4" />, text: "4.9/5 Ratings" },
    { icon: <Shield className="w-4 h-4" />, text: "Hygienic" },
    { icon: <Gem className="w-4 h-4" />, text: "Luxury Brands" }
  ],

  servicesSectionTitle: "Our Makeup Services",
  servicesSectionDescription: "From natural day looks to full glam transformations",
  
  benefitsSectionTitle: "Why Choose Our Makeup Artists",
  benefitsSectionDescription: "We enhance your natural beauty with professional techniques"
};

const careServicesData = {
  // Services
  services: [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Home Nursing",
      description: "Skilled nursing care at home including medication management, wound care, and vital monitoring.",
      benefits: [
        "Certified nurses",
        "Post-hospital care",
        "24/7 availability"
      ],
      price: "₹999 - ₹3999/day",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Companion Services",
      description: "Trained companions for emotional support, light housekeeping, and daily assistance.",
      benefits: [
        "Friendly companionship",
        "Daily routines assistance",
        "Mental well-being support"
      ],
      price: "₹499 - ₹1999/day",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Grocery & Errands",
      description: "Help with grocery shopping, pharmacy pick-ups, and essential errands.",
      benefits: [
        "Safe transportation",
        "Scheduled deliveries",
        "Caregiver assistance"
      ],
      price: "₹299 - ₹799/visit",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Memory Care",
      description: "Support services tailored for individuals with Alzheimer's or dementia.",
      benefits: [
        "Cognitive exercises",
        "Routine supervision",
        "Safe environment"
      ],
      price: "₹1499/session",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <BedDouble className="w-6 h-6" />,
      title: "Overnight Care",
      description: "Comforting overnight presence for safety, assistance, and peace of mind.",
      benefits: [
        "Nighttime monitoring",
        "Mobility support",
        "Emergency response"
      ],
      price: "₹1999/night",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Physiotherapy",
      description: "In-home physical therapy to promote strength, balance, and mobility.",
      benefits: [
        "Personalized programs",
        "Post-surgery rehab",
        "Fall prevention"
      ],
      price: "₹999/session",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    }
  ],

  // Features
  features: [
    { icon: <BadgeCheck className="w-5 h-5" />, text: "Verified Caregivers" },
    { icon: <Clock className="w-5 h-5" />, text: "Flexible Scheduling" },
    { icon: <Shield className="w-5 h-5" />, text: "Insured Services" },
    { icon: <Smile className="w-5 h-5" />, text: "Empathetic Support" }
  ],

  // Benefits
  benefits: [
    {
      title: "Personalized Attention",
      description: "Each care plan is tailored to individual needs and medical history.",
      icon: <UserCog className="w-8 h-8" />
    },
    {
      title: "Trusted & Background-Checked Staff",
      description: "Every caregiver undergoes thorough vetting and verification.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Emergency Support",
      description: "Immediate response for medical emergencies, 24/7.",
      icon: <AlertCircle className="w-8 h-8" />
    },
    {
      title: "Family Involvement",
      description: "Transparent updates and active involvement for peace of mind.",
      icon: <User className="w-8 h-8" />
    }
  ],

  // Hero Section
  heroImage: "/images/Care.jpg",
  heroTitle: <>Compassionate Care for <span className="text-blue-500">Your Loved Ones</span></>,
  heroSubtitle: "Reliable at-home support and healthcare services for seniors and individuals with special needs",

  ctaButtons: [
    {
      text: "Schedule Care",
      icon: <Phone className="w-5 h-5" />,
      props: {
        className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      }
    },
    {
      text: "View Services",
      icon: <List className="w-5 h-5" />,
      props: {
        className: "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
      }
    }
  ],

  // Pricing Section
  pricingTitle: "Transparent Elderly Care Pricing",
  pricingSubtitle: "Affordable care, tailored to your family's needs",
  pricingRange: "₹299 - ₹3999*",
  pricingNote: "*Rates vary based on level of care and duration",

  pricingIncluded: [
    { icon: <CheckCircle className="w-5 h-5 text-green-700" />, text: "Certified caregivers" },
    { text: "In-home assistance" },
    { text: "Flexible plans" }
  ],

  pricingGuarantee: [
    { icon: <Shield className="w-5 h-5 text-blue-700" />, text: "Safety guaranteed" },
    { text: "Emergency support ready" },
    { text: "Regular feedback & check-ins" }
  ],

  pricingButton: (
    <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Bone className="w-5 h-5" />
      Get Custom Care Plan
    </button>
  ),

  // CTA Section
  ctaSectionTitle: "Need Help for a Loved One?",
  ctaSectionSubtitle: "Join families who trust us to provide safe, loving care",

  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      }
    },
    {
      text: "Speak to Care Advisor",
      icon: <AlertTriangle className="w-5 h-5" />,
      props: {
        className: "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
      }
    }
  ],

  ctaSectionBadges: [
    { icon: <BadgeCheck className="w-4 h-4" />, text: "Trusted by 10k+ families" },
    { icon: <Heart className="w-4 h-4" />, text: "Empathy-driven" },
    { icon: <Star className="w-4 h-4" />, text: "Rated 4.9/5" },
    { icon: <Shield className="w-4 h-4" />, text: "Fully Insured" }
  ],

  servicesSectionTitle: "Our Elderly Care Services",
  servicesSectionDescription: "Comfort, dignity, and independence through expert care",

  benefitsSectionTitle: "Why Families Choose Us",
  benefitsSectionDescription: "Dedicated to enhancing the lives of those who need it most"
};

const carpentryServicesData = {
  // Services
  services: [
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Furniture Repair",
      description: "Expert restoration of damaged furniture including chairs, tables, cabinets, and antique pieces.",
      benefits: [
        "Color matching",
        "Structural reinforcement",
        "Vintage restoration"
      ],
      price: "₹499 - ₹4999/item",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <SquareStack className="w-6 h-6" />,
      title: "Custom Furniture",
      description: "Handcrafted bespoke furniture tailored to your specifications and space requirements.",
      benefits: [
        "Design consultation",
        "Premium materials",
        "Precision joinery"
      ],
      price: "₹2999 - ₹29999/piece",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <DoorOpen className="w-6 h-6" />,
      title: "Door Installation",
      description: "Professional fitting of interior/exterior doors including adjustments and hardware installation.",
      benefits: [
        "Perfect alignment",
        "Weatherproofing",
        "Security checks"
      ],
      price: "₹999 - ₹5999/door",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Shelving Units",
      description: "Custom built-in or freestanding shelves for optimal storage solutions.",
      benefits: [
        "Space optimization",
        "Weight capacity planning",
        "Finish matching"
      ],
      price: "₹1299 - ₹9999/unit",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Table2 className="w-6 h-6" />,
      title: "Kitchen Cabinetry",
      description: "Custom kitchen storage solutions including cabinets, pantries, and islands.",
      benefits: [
        "Ergonomic design",
        "Soft-close hinges",
        "Modular options"
      ],
      price: "₹5999 - ₹49999/set",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <BedDouble className="w-6 h-6" />,
      title: "Bed Frame Crafting",
      description: "Solid wood bed frames built to last with customized dimensions and storage options.",
      benefits: [
        "Load tested",
        "Dust-proof designs",
        "Anti-squeak construction"
      ],
      price: "₹3999 - ₹24999/frame",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    }
  ],

  // Features
  features: [
    { icon: <Ruler className="w-5 h-5" />, text: "Precision Measurements" },
    { icon: <Clock className="w-5 h-5" />, text: "On-Time Completion" },
    { icon: <Shield className="w-5 h-5" />, text: "5-Year Craftsmanship Warranty" },
    { icon: <Leaf className="w-5 h-5" />, text: "Eco-Friendly Materials" }
  ],

  // Benefits
  benefits: [
    {
      title: "Material Guidance",
      description: "Expert advice on selecting the right wood type and finishes for your project.",
      icon: <ClipboardList className="w-8 h-8" />
    },
    {
      title: "Dust-Free Workspace",
      description: "Contained work areas with daily cleanup to minimize disruption.",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "3D Design Preview",
      description: "Visualize your custom pieces with digital mockups before construction.",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Aftercare Support",
      description: "Free maintenance advice and minor adjustments post-installation.",
      icon: <UserCog className="w-8 h-8" />
    }
  ],

  // Hero Section
  heroImage: "/images/wood.jpg",
  heroTitle: <>Precision <span className="text-violet-600">Woodcraft</span> for Your Home</>,
  heroSubtitle: "Custom carpentry solutions blending functionality with artisan craftsmanship",

  ctaButtons: [
    {
      text: "Download",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "bg-violet-600 cursor-pointer hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      }
    },
    {
      text: "Explore",
      icon: <Image className="w-5 h-5" />,
      props: {
        className: "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
      }
    }
  ],

  // Pricing Section
  pricingTitle: "Transparent Carpentry Pricing",
  pricingSubtitle: "Fair rates for exceptional woodworking quality",
  pricingRange: "₹499 - ₹2999*",
  pricingNote: "*Project-based pricing depending on materials and complexity",

  pricingIncluded: [
    { icon: <CheckCircle className="w-5 h-5 text-green-700" />, text: "Detailed estimates" },
    { text: "Material samples" },
    { text: "Site measurements" }
  ],

  pricingGuarantee: [
    { icon: <Shield className="w-5 h-5 text-amber-700" />, text: "Satisfaction guarantee" },
    { text: "Waste removal included" },
    { text: "Damage protection" }
  ],

  pricingButton: (
    <button className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Hammer className="w-5 h-5" />
      Get Free Quote
    </button>
  ),

  // CTA Section
  ctaSectionTitle: "Ready to Transform Your Space?",
  ctaSectionSubtitle: "50+ homeowners trust our carpentry team monthly",

  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "cursor-pointer bg-violet-500 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      }
    },
    {
      text: "WhatsApp Us",
      icon: <MessageSquare className="w-5 h-5" />,
      props: {
        className: "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
      }
    }
  ],

  ctaSectionBadges: [
    { icon: <Award className="w-4 h-4" />, text: "Master Craftsmen" },
    { icon: <Clock className="w-4 h-4" />, text: "On-Time Delivery" },
    { icon: <Heart className="w-4 h-4" />, text: "Eco-Conscious" },
    { icon: <Shield className="w-4 h-4" />, text: "Insured Work" }
  ],

  servicesSectionTitle: "Our Carpentry Services",
  servicesSectionDescription: "From repairs to full custom builds - precision in every cut",

  benefitsSectionTitle: "Why Choose Our Woodcraft",
  benefitsSectionDescription: "Where traditional techniques meet modern design sensibilities"
};

const packersMoversData = {
  // Services
  services: [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Local Relocation",
      description: "Stress-free local moving with careful handling of all your belongings.",
      benefits: [
        "Door-to-door service",
        "Item wrapping",
        "Same-day delivery"
      ],
      price: "₹2999 - ₹9999/load",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Intercity Moving",
      description: "Safe long-distance relocation with tracking and insurance coverage.",
      benefits: [
        "GPS-tracked vehicles",
        "Packing materials included",
        "Loading/unloading"
      ],
      price: "₹8999 - ₹29999/load",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Packing Service",
      description: "Professional packing using high-quality materials for fragile items.",
      benefits: [
        "Bubble wrapping",
        "Custom crating",
        "Inventory labeling"
      ],
      price: "₹499 - ₹2999/room",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Office Relocation",
      description: "Efficient business moves with minimal downtime and equipment protection.",
      benefits: [
        "After-hours service",
        "IT equipment handling",
        "Furniture reassembly"
      ],
      price: "₹14999 - ₹59999/office",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <PackageSearch className="w-6 h-6" />,
      title: "Storage Solutions",
      description: "Secure short/long-term storage with climate control options.",
      benefits: [
        "24/7 security",
        "Monthly contracts",
        "Pickup/delivery"
      ],
      price: "₹999 - ₹4999/month",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Single Item Moving",
      description: "Specialized transport for heavy or delicate furniture pieces.",
      benefits: [
        "Blanket wrapping",
        "Staircase handling",
        "Placement setup"
      ],
      price: "₹799 - ₹4999/item",
      benefitIcon: <CheckCircle className="w-4 h-4 text-green-500" />
    }
  ],

  // Features
  features: [
    { icon: <Shield className="w-5 h-5" />, text: "Fully Insured" },
    { icon: <Clock className="w-5 h-5" />, text: "On-Time Guarantee" },
    { icon: <Ruler className="w-5 h-5" />, text: "Transparent Pricing" },
    { icon: <UserCheck className="w-5 h-5" />, text: "Trained Crew" }
  ],

  // Benefits
  benefits: [
    {
      title: "Damage Protection",
      description: "Comprehensive insurance coverage for all your items during transit.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Real-Time Tracking",
      description: "Live updates on your shipment's location and status.",
      icon: <Map className="w-8 h-8" />
    },
    {
      title: "Flexible Scheduling",
      description: "Book moves according to your convenience, including weekends.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Unpacking Assistance",
      description: "Help with unboxing and setting up at your new location.",
      icon: <PackageOpen className="w-8 h-8" />
    }
  ],

  // Hero Section
  heroImage: "https://plus.unsplash.com/premium_photo-1717529136641-c15d094ccfee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGx1Z2dhZ2V8ZW58MHx8MHx8fDA%3D",
  heroTitle: <>Smooth <span className="text-violet-600">Relocations</span> Made Simple</>,
  heroSubtitle: "Stress-free moving experiences with professional packing and transportation",

  ctaButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      }
    },
    {
      text: "Get Quote",
      icon: <Calculator className="w-5 h-5" />,
      props: {
        className: "bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
      }
    }
  ],

  // Pricing Section
  pricingTitle: "Honest Moving Pricing",
  pricingSubtitle: "No hidden charges - pay only for what you need",
  pricingRange: "₹2999 - ₹59999*",
  pricingNote: "*Based on volume, distance, and services required",

  pricingIncluded: [
    { icon: <CheckCircle className="w-5 h-5 text-green-700" />, text: "Free estimates" },
    { text: "Basic packing materials" },
    { text: "Loading/unloading" }
  ],

  pricingGuarantee: [
    { icon: <Shield className="w-5 h-5 text-violet-700" />, text: "Damage protection" },
    { text: "On-time delivery" },
    { text: "Price match guarantee" }
  ],

  pricingButton: (
    <button className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
      <Truck className="w-5 h-5" />
      Calculate Your Move
    </button>
  ),

  // CTA Section
  ctaSectionTitle: "Ready to Move Without Stress?",
  ctaSectionSubtitle: "Trusted by 500+ families monthly for seamless relocations",

  ctaSectionButtons: [
    {
      text: "Download App",
      icon: <Download className="w-5 h-5" />,
      props: {
        className: "bg-violet-600 cursor-pointer hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      }
    },
    {
      text: "Explore",
      icon: <MapPin className="w-5 h-5" />,
      props: {
        className: "bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
      }
    }
  ],

  ctaSectionBadges: [
    { icon: <Award className="w-4 h-4" />, text: "5-Star Rated" },
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Support" },
    { icon: <Shield className="w-4 h-4" />, text: "Fully Licensed" },
    { icon: <Heart className="w-4 h-4" />, text: "Eco-Friendly" }
  ],

  servicesSectionTitle: "Our Moving Services",
  servicesSectionDescription: "Comprehensive solutions for homes and businesses",

  benefitsSectionTitle: "Why Choose Our Packers",
  benefitsSectionDescription: "Where careful handling meets efficient logistics"
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
    case "ac-services":
      return acRepairServicesData;
    case "pet-services":
      return petServicesData;
    case "makeup-services":
      return facialMakeupData;
    case "taker-services":
      return careServicesData;
    case "carpentory-services":
      return carpentryServicesData;
    case "movers-services":
    return packersMoversData;
    default:
      return careServicesData; // Default to electrician services if no match
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
