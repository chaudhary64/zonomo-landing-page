"use client"
import Promotion from './../../../components/promotion';
import PlayStore from './../../../components/playStore';
import { useState, useEffect } from "react"
import {
  Zap,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  Calendar,
  Star,
  Wrench,
  Lightbulb,
  Settings,
  Battery,
  ChevronLeft,
  ChevronRight,
  Home,
  HeartPulse,
  AlertTriangle,
  BadgeCheck,
  DollarSign,
  ThumbsUp
} from "lucide-react"

export default function ElectricalServicesPage() {
  const services = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Fan & Light Installation",
      description: "Professional installation of ceiling fans, LED lights, and decorative fixtures for optimal lighting and cooling.",
      benefits: ["Improved illumination", "Energy efficiency", "Enhanced ambiance"],
      price: "₹199 - ₹499",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Switchboard Installation",
      description: "Modern switchboard solutions that ensure safety and protect your appliances from electrical hazards.",
      benefits: ["Child safety features", "Surge protection", "Future-proof design"],
      price: "₹199 - ₹399",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Wiring & Circuit Repair",
      description: "Comprehensive wiring solutions to eliminate hazards and ensure your electrical system operates safely.",
      benefits: ["Hazard prevention", "Code compliance", "Reliable performance"],
      price: "₹299 - ₹599",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fuse Replacement",
      description: "Expert diagnosis and replacement of fuses to maintain uninterrupted power supply in your home.",
      benefits: ["Quick resolution", "Root cause analysis", "Preventive measures"],
      price: "₹299 - ₹499",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "AC Point Setup",
      description: "Specialized installation of heavy-duty AC power points designed for optimal performance and safety.",
      benefits: ["Load capacity", "Professional setup", "Cooling efficiency"],
      price: "₹399 - ₹799",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Inverter Connections",
      description: "Reliable backup power solutions to keep your essential appliances running during outages.",
      benefits: ["Uninterrupted power", "Automatic switching", "Battery maintenance"],
      price: "₹399 - ₹999",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [servicesPerSlide, setServicesPerSlide] = useState(3)
  const [promo,setPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPromo(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const updateServicesPerSlide = () => {
    if (window.innerWidth >= 1024) {
      setServicesPerSlide(3)
    } else if (window.innerWidth >= 768) {
      setServicesPerSlide(2)
    } else {
      setServicesPerSlide(1)
    }
  }

  useEffect(() => {
    updateServicesPerSlide()
    window.addEventListener('resize', updateServicesPerSlide)
    return () => window.removeEventListener('resize', updateServicesPerSlide)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / servicesPerSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / servicesPerSlide)) % Math.ceil(services.length / servicesPerSlide))
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, currentSlide, servicesPerSlide])

  const features = [
    { icon: <BadgeCheck className="w-5 h-5" />, text: "Licensed & Certified Electricians" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Emergency Services" },
    { icon: <ThumbsUp className="w-5 h-5" />, text: "5-Year Workmanship Guarantee" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Transparent Pricing" },
  ]

  const benefits = [
    {
      title: "Safety First",
      description: "Our certified electricians prioritize safety in every job, using proper protective equipment and following all electrical codes.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Advanced Diagnostics",
      description: "We use state-of-the-art tools to accurately diagnose electrical issues, saving you time and money on repairs.",
      icon: <HeartPulse className="w-8 h-8" />
    },
    {
      title: "Energy Efficiency",
      description: "Our solutions are designed to optimize your home's energy usage, reducing your electricity bills significantly.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Preventive Maintenance",
      description: "Regular check-ups help identify potential issues before they become serious hazards or costly repairs.",
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ]

  return (
<div className="min-h-screen bg-gray-50">
  {/* Hero Section */}
  <section className="relative text-white overflow-hidden">
    {/* Background Image with Blur */}
    <div 
      className="absolute inset-0 bg-cover bg-center z-0 "
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    />
    
    {/* Content Container */}
    {promo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50 pacity-50">
          <PlayStore onClose={() => setPromo(false)} />
        </div>
      )}
    <div className="container mx-auto px-6 py-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center mb-6 bg-white/20 p-4 rounded-full border border-white/30 backdrop-blur-sm">
          <Zap className="w-10 h-10" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Professional Electrical Services <span className="text-blue-500">You Can Trust</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
          Complete residential electrical solutions from certified professionals ensuring safety, reliability, and efficiency
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20"
            >
              <span className="text-white">{feature.icon}</span>
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <Phone className="w-5 h-5" />
            Request a Callback
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
            <Calendar className="w-5 h-5" />
            Schedule Inspection
          </button>
        </div>
      </div>
    </div>
  </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Electrical Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert solutions for all your residential electrical needs
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
                {Array.from({ length: Math.ceil(services.length / servicesPerSlide) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                      {services
                        .slice(slideIndex * servicesPerSlide, (slideIndex + 1) * servicesPerSlide)
                        .map((service, index) => (
                          <div 
                            key={index} 
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                                  {service.price}
                                </span>
                              </div>
                              
                              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                              <p className="text-gray-600 mb-4">{service.description}</p>
                              
                              <ul className="mb-6 space-y-2">
                                {service.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
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
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(services.length / servicesPerSlide) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Electrical Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional quality and service that sets us apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 text-center text-gray-800">
              <h3 className="text-4xl font-bold mb-4">Transparent Pricing Structure</h3>
              <p className="text-gray-700 mb-6">
                No hidden fees - we provide clear estimates before any work begins
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="text-4xl font-bold mb-2">₹149 – ₹999*</div>
                <p className="text-sm text-gray-600">*Final pricing depends on scope of work and materials required</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    What's Included
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Professional diagnosis and assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Quality materials and equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Clean and efficient installation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-700" />
                    Our Guarantee
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>30-day service warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Licensed and insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Compliance with safety standards</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">
                <Home className="w-5 h-5" />
                Get Your Free Home Electrical Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Home's Electrical System?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Don't compromise on safety or quality. Our certified electricians are ready to help with any electrical need.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +91 98765 43210
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Online
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
        
      </section>
{/* <Promotion/> */}
      
    </div>
  )
}