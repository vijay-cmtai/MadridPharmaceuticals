import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  CheckCircle,
  Award,
  FileCheck,
  Microscope,
  Users,
  Globe,
  Lock,
} from "lucide-react";

const Quality = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-green-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Quality Assurance
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Uncompromising commitment to quality in every aspect of our
            Pharmaceuticals manufacturing
          </p>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-8">
              Our Quality Standards
            </h2>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              At Luxem Pharmaceuticalss, quality is not just a goal—it's our
              foundation. We adhere to the highest international standards to
              ensure every product meets rigorous safety and efficacy
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "GMP Compliance",
                description:
                  "Good Manufacturing Practices certified facilities ensuring consistent quality.",
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
              },
              {
                icon: CheckCircle,
                title: "ISO Certified",
                description:
                  "ISO 9001:2015 certified quality management systems across all operations.",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100",
              },
              {
                icon: Award,
                title: "WHO Standards",
                description:
                  "World Health Organization prequalified manufacturing standards.",
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-100",
              },
              {
                icon: FileCheck,
                title: "Regulatory Compliance",
                description:
                  "Full compliance with FDA, DCGI, and international regulatory requirements.",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100",
              },
            ].map((standard, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${standard.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
              >
                <div
                  className={`bg-gradient-to-r ${standard.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {standard.title}
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-16">
            Our Quality Process
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Raw Material Testing",
                    description:
                      "Every raw material undergoes rigorous testing before entering our production process.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    step: "2",
                    title: "In-Process Controls",
                    description:
                      "Continuous monitoring and testing throughout the manufacturing process.",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    step: "3",
                    title: "Final Product Testing",
                    description:
                      "Comprehensive testing of finished products before release to market.",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    step: "4",
                    title: "Continuous Monitoring",
                    description:
                      "Post-market surveillance and quality monitoring throughout product lifecycle.",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((process, index) => (
                  <div key={index} className="flex items-start group">
                    <div
                      className={`bg-gradient-to-r ${process.color} text-white rounded-full w-12 h-12 flex items-center justify-center mr-6 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">
                        {process.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                alt="Quality Control Lab"
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-16">
            Our Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Microscope,
                title: "GMP Certified",
                description:
                  "Good Manufacturing Practices certification ensuring quality production standards.",
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
              },
              {
                icon: Globe,
                title: "ISO 9001:2015",
                description:
                  "International quality management system certification for consistent excellence.",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100",
              },
              {
                icon: Lock,
                title: "WHO Prequalified",
                description:
                  "World Health Organization prequalification for global Pharmaceuticals standards.",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${cert.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
              >
                <div
                  className={`bg-gradient-to-r ${cert.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
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

export default Quality;
