import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lightbulb, AwardIcon } from "lucide-react"; // Refined icons

const ApproachSection = () => {
  const approaches = [
    {
      icon: ShieldCheck,
      title: "Unwavering Integrity",
      description:
        "Highest ethical standards guide our operations, ensuring transparency and trust in every interaction and decision.",
      bgColor: "bg-pharma-blue/5",
      iconColor: "text-pharma-blue",
      borderColor: "hover:border-pharma-blue/50",
    },
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description:
        "Continuous research and development fuel our commitment to creating breakthrough Pharmaceuticals solutions for tomorrow.",
      bgColor: "bg-pharma-green/5",
      iconColor: "text-pharma-green",
      borderColor: "hover:border-pharma-green/50",
    },
    {
      icon: AwardIcon, // Changed from Star for differentiation
      title: "Commitment to Excellence",
      description:
        "We relentlessly pursue excellence in product quality, patient care, and customer service, setting industry benchmarks.",
      bgColor: "bg-accent-orange/5", // Example using an accent color
      iconColor: "text-accent-orange",
      borderColor: "hover:border-accent-orange/50",
    },
  ];

  return (
    <section className="py-15 md:py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 md:mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Core{" "}
            <span className="text-pharma-blue">Guiding Principles</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our approach is built on foundational pillars that define our
            commitment to advancing healthcare and fostering well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {approaches.map((approach, index) => (
            <Card
              key={index}
              className={`text-center ${approach.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group border-2 border-transparent ${approach.borderColor} animate-fade-in-up transform hover:-translate-y-2`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <CardHeader className="pt-8 pb-4 items-center">
                {" "}
                {/* Centering icon + title */}
                <div
                  className={`w-20 h-20 ${approach.bgColor} border-2 border-current rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-500 ease-out`}
                  style={{ color: approach.iconColor.replace("text-", "") }} // For border current
                >
                  <approach.icon
                    className={`w-10 h-10 ${approach.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
                <CardTitle
                  className={`text-2xl font-semibold text-slate-800 group-hover:${approach.iconColor} transition-colors duration-300`}
                >
                  {approach.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8 pt-0">
                <p className="text-md text-slate-600 leading-relaxed px-3">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
