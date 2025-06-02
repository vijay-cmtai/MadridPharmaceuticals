import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, Target, Heart, Lightbulb, Shield, Zap } from "lucide-react";

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-blue-700 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 right-16 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-16 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Vision & Mission
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Guiding our path towards a healthier tomorrow
          </p>
        </div>
      </section>

      {/* Vision & Mission Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the most trusted Pharmaceuticals company globally,
                  recognized for our commitment to improving human health
                  through innovative, safe, and effective medicines that make a
                  meaningful difference in patients' lives.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To develop, manufacture, and deliver high-quality
                  Pharmaceuticals products that address unmet medical needs
                  while ensuring accessibility, affordability, and
                  sustainability for communities worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="mt-20 text-center">
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl p-12 border border-yellow-200/50 shadow-2xl">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mr-6 shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-800 to-orange-600 bg-clip-text text-transparent">
                    Our Commitment
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                  We are committed to upholding the highest standards of
                  quality, safety, and efficacy in all our Pharmaceuticals
                  products. Our dedication extends beyond manufacturing to
                  fostering partnerships with healthcare professionals,
                  regulatory bodies, and communities to ensure our medicines
                  reach those who need them most.
                </p>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-16">
              Our Strategic Goals
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation Excellence",
                  description:
                    "Continuously invest in R&D to develop breakthrough therapies for complex diseases.",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100",
                },
                {
                  icon: Shield,
                  title: "Global Accessibility",
                  description:
                    "Expand our reach to make quality healthcare accessible to underserved populations.",
                  color: "from-green-500 to-green-600",
                  bgColor: "from-green-50 to-green-100",
                },
                {
                  icon: Zap,
                  title: "Sustainable Growth",
                  description:
                    "Build a sustainable business model that benefits all stakeholders and the environment.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100",
                },
              ].map((goal, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${goal.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
                >
                  <div
                    className={`bg-gradient-to-r ${goal.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <goal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                    {goal.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;
