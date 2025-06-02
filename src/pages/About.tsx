import React from "react";
import TopBar from "@/components/TopBar"; // Assuming TopBar is styled
import Navbar from "@/components/Navbar"; // Assuming Navbar is styled
import Footer from "@/components/Footer"; // Assuming Footer is styled
import {
  Users,
  Target,
  Award,
  Briefcase,
  Globe,
  Heart,
  Zap,
  Aperture,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Briefcase,
      number: "10+",
      label: "Years Experience",
      color: "pharma-blue",
      delay: "0.2s",
    },
    {
      icon: Heart,
      number: "50+",
      label: "Quality Products",
      color: "pharma-green",
      delay: "0.3s",
    },
    {
      icon: Globe,
      number: "80+",
      label: "Cities Served",
      color: "accent-teal",
      delay: "0.4s",
    }, // Using an accent color
    {
      icon: Users,
      number: "1000+",
      label: "Trusted Clients",
      color: "accent-orange",
      delay: "0.5s",
    }, // Using an accent color
  ];

  const coreValues = [
    {
      icon: Aperture, // Changed icon for Integrity (Focus/Transparency)
      title: "Unwavering Integrity",
      description:
        "We uphold the highest ethical standards, fostering transparency and trust in all our endeavors.",
      color: "pharma-blue",
      delay: "0.2s",
    },
    {
      icon: Zap, // Changed icon for Innovation (Spark/Energy)
      title: "Pioneering Innovation",
      description:
        "Continuously advancing Pharmaceuticals science through dedicated research and development for a healthier tomorrow.",
      color: "pharma-green",
      delay: "0.3s",
    },
    {
      icon: Award,
      title: "Commitment to Excellence",
      description:
        "Delivering superior quality products and services that consistently exceed expectations and set industry benchmarks.",
      color: "accent-purple", // Using an accent color
      delay: "0.4s",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {" "}
      {/* Simplified main background */}
      <TopBar />
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pharma-darkBlue via-slate-900 to-pharma-blue text-white py-32 md:py-40 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pharma-lightBlue rounded-full filter blur-3xl animate-pulse-glow animation-delay-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pharma-green rounded-full filter blur-3xl animate-pulse-glow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full filter blur-3xl animate-pulse-glow animation-delay-4000 opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              animationDelay: "0.2s",
            }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-pharma-lightBlue to-pharma-green bg-clip-text text-transparent">
              Madrid Pharmaceuticalss
            </span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-200 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Pioneering healthcare solutions with over a decade of unwavering
            commitment to excellence, innovation, and patient well-being.
          </p>
        </div>
      </section>
      {/* About Content & Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Text Content */}
            <div
              className="space-y-8 animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center bg-pharma-blue/10 text-pharma-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Journey of Growth
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Crafting a Legacy of{" "}
                <span className="text-pharma-blue">Health & Innovation</span>
              </h2>

              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  For over a decade, Luxem Pharmaceuticalss has been a beacon of
                  innovation in the healthcare sector. Our core mission is to
                  develop, manufacture, and deliver high-quality Pharmaceuticals
                  products that significantly improve patient lives across the
                  globe.
                </p>
                <p>
                  Our story began with a profound vision: to make effective
                  healthcare accessible to all. Today, this vision translates
                  into a robust portfolio of over 50 products, serving more than
                  80 cities and impacting countless lives through specialized
                  therapeutic solutions.
                </p>
                <p>
                  Driven by a dedicated team of professionals and
                  state-of-the-art manufacturing facilities, we relentlessly
                  push the boundaries of Pharmaceuticals excellence, ensuring
                  every product meets the highest standards of quality and
                  efficacy.
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative group animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-pharma-blue to-pharma-green rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Changed image for variety
                alt="Dedicated Healthcare Professionals"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-slate-700 text-sm font-medium max-w-[250px] transform group-hover:scale-105 transition-transform duration-300">
                <Target className="w-6 h-6 text-pharma-green mb-2" />
                Committed to enhancing global health outcomes through innovative
                research.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-slate-100 to-sky-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 md:mb-20 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Our Impact{" "}
              <span className="text-pharma-blue">by the Numbers</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              Quantifiable achievements reflecting our dedication and reach in
              the Pharmaceuticals landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group text-center transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: stat.delay }}
              >
                <div
                  className={`relative w-20 h-20 bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 border-2 border-${stat.color}/30 rounded-full mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_0px_var(--tw-shadow-color)] shadow-${stat.color}/40`}
                >
                  {/* This shadow won't work directly with dynamic color names in JIT mode unless full class name exists or you use CSS vars */}
                  <stat.icon className={`w-10 h-10 text-${stat.color}`} />
                </div>
                <h3
                  className={`text-3xl md:text-4xl font-bold text-slate-800 mb-1 group-hover:text-${stat.color} transition-colors`}
                >
                  {stat.number}
                </h3>
                <p className="text-slate-600 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 md:mb-20 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Our Guiding <span className="text-pharma-blue">Core Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              The principles that shape our culture, guide our decisions, and
              drive our success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className={`relative p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-${value.color}/30 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: value.delay }}
              >
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-${value.color} to-${value.color === "pharma-blue" ? "sky-500" : value.color === "pharma-green" ? "emerald-500" : "violet-500"} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-300 ease-out`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3
                  className={`mt-14 text-2xl font-semibold mb-4 text-slate-800 text-center group-hover:text-${value.color} transition-colors`}
                >
                  {value.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed text-md">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
