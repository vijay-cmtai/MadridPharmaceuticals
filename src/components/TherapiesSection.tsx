import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Bone, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TherapiesSection = () => {
  const navigate = useNavigate();

  const featuredTherapies = [
    {
      icon: Brain,
      name: "Neurology Care",
      description:
        "Advanced solutions for complex neurological disorders and brain health.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      slug: "neurology",
      rating: 4.9,
      patients: "10K+",
      color: "pharma-blue", // Base color name from Tailwind config
      gradient: "from-pharma-blue to-sky-500",
    },
    {
      icon: Heart,
      name: "Cardiology Support",
      description:
        "Comprehensive treatments for optimal heart function and cardiovascular wellness.",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      slug: "cardiology",
      rating: 4.8,
      patients: "15K+",
      color: "accent-pink", // Example using an accent color
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Bone,
      name: "Orthopaedic Health",
      description:
        "Expert care for bone and joint conditions, enhancing mobility and strength.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      slug: "orthopaedics",
      rating: 4.7,
      patients: "8K+",
      color: "pharma-green",
      gradient: "from-pharma-green to-emerald-500",
    },
  ];

  const handleTherapyClick = (slug) => {
    navigate(`/therapies/${slug}`);
  };

  return (
    <section className="py-15 md:py-20 bg-gradient-to-br from-slate-900 via-pharma-darkBlue to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(200,200,255,0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-16 md:mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Specialized{" "}
            <span className="bg-gradient-to-r from-pharma-lightBlue to-pharma-green bg-clip-text text-transparent">
              Therapeutic Areas
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dedicated therapeutic solutions tailored to specific medical needs,
            driven by research and patient-centric care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredTherapies.map((therapy, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl hover:shadow-[0_0_30px_5px_rgba(var(--${therapy.color}-rgb),0.3)] transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up`}
              style={
                {
                  animationDelay: `${0.2 + index * 0.15}s`,
                  "--pharma-blue-rgb": "30, 99, 234", // For dynamic shadow color
                  "--accent-pink-rgb": "236, 72, 153",
                  "--pharma-green-rgb": "39, 174, 96",
                } as React.CSSProperties
              } // Type assertion for CSS variables
              onClick={() => handleTherapyClick(therapy.slug)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-70 group-hover:opacity-90"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${therapy.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                <div className="absolute top-4 left-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${therapy.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300`}
                  >
                    <therapy.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-slate-200">
                    {therapy.rating}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xl lg:text-2xl font-semibold text-white group-hover:text-${therapy.color} transition-colors`}
                  >
                    {therapy.name}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 min-h-[60px] line-clamp-3">
                  {therapy.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span>{therapy.patients} Patients</span>
                  </div>
                  <Button
                    variant="link"
                    className={`p-0 h-auto text-${therapy.color} group-hover:underline font-medium group/button`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTherapyClick(therapy.slug);
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/button:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="text-center mt-16 md:mt-20 animate-fade-in-up"
          style={{
            animationDelay: `${0.2 + featuredTherapies.length * 0.15 + 0.1}s`,
          }}
        >
          <Button
            size="lg"
            className="bg-pharma-lightBlue hover:bg-sky-400 text-pharma-darkBlue px-10 py-3.5 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate("/therapies")}
          >
            Discover All Therapies
            <ArrowRight className="ml-2.5 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
