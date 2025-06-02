import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Brain, Heart, Bone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TherapyDetail = () => {
  const { therapyName } = useParams();

  const therapyDetails = {
    neurology: {
      name: "Neurology",
      description:
        "Comprehensive neurological care for brain and nervous system disorders.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56", // Example: Brain model
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-100",
      treatments: [
        "Epilepsy Management",
        "Migraine Treatment",
        "Neuropathic Pain",
        "Cognitive Disorders",
        "Multiple Sclerosis",
        "Parkinson's Disease",
      ],
      conditions: [
        "Seizure disorders and epilepsy",
        "Chronic headaches and migraines",
        "Memory and cognitive issues",
        "Nerve pain and neuropathy",
      ],
      approach:
        "Our neurological approach combines advanced diagnostics with personalized treatment plans to address complex brain and nervous system conditions.",
      // Optional: Add an "additionalInfo" section similar to ProductDetail
      additionalInfo: {
        title: "Understanding Neurological Care",
        content:
          "Neurological care involves diagnosing and treating disorders of the nervous system, which includes the brain, spinal cord, and nerves. Our specialists use the latest advancements to provide comprehensive care.",
        tips: [
          "Maintain a healthy lifestyle, including regular exercise and a balanced diet.",
          "Ensure adequate sleep, as it's crucial for brain health.",
          "Engage in mentally stimulating activities to support cognitive function.",
        ],
      },
    },
    cardiology: {
      name: "Cardiology",
      description:
        "Advanced cardiovascular treatments for heart health and circulation.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae", // Example: Pill strips
      icon: Heart,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-100",
      treatments: [
        "Hypertension Management",
        "Heart Disease Prevention",
        "Arrhythmia Treatment",
        "Cholesterol Control",
        "Heart Failure Management",
        "Coronary Artery Disease",
      ],
      conditions: [
        "High blood pressure",
        "Heart rhythm disorders",
        "Chest pain and angina",
        "Heart failure symptoms",
      ],
      approach:
        "Our cardiology team focuses on prevention, early detection, and comprehensive treatment of cardiovascular conditions using evidence-based medicine.",
      additionalInfo: {
        title: "Focus on Heart Health",
        content:
          "Cardiology is the branch of medicine dealing with disorders of the heart as well as some parts of the circulatory system. Our comprehensive approach aims to improve your quality of life.",
        tips: [
          "Monitor your blood pressure and cholesterol levels regularly.",
          "Follow a heart-healthy diet low in saturated fats and sodium.",
          "Engage in regular physical activity as recommended by your doctor.",
        ],
      },
    },
    orthopaedics: {
      name: "Orthopaedics",
      description: "Bone and joint health solutions for mobility and strength.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063", // Example: X-ray or bone model
      icon: Bone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
      treatments: [
        "Osteoporosis Treatment",
        "Arthritis Management",
        "Joint Pain Relief",
        "Bone Density Support",
        "Fracture Healing",
        "Sports Injuries",
      ],
      conditions: [
        "Joint pain and stiffness",
        "Bone density loss",
        "Arthritis symptoms",
        "Movement limitations",
      ],
      approach:
        "Our orthopedic solutions focus on maintaining bone health, improving joint function, and enhancing overall mobility through targeted treatments.",
      additionalInfo: {
        title: "Supporting Your Mobility",
        content:
          "Orthopaedics focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active.",
        tips: [
          "Maintain a healthy weight to reduce stress on your joints.",
          "Practice good posture to prevent back and neck pain.",
          "Incorporate strength training and flexibility exercises into your routine.",
        ],
      },
    },
    // Add other therapies here
  };

  const therapy = therapyDetails[therapyName as keyof typeof therapyDetails];

  if (!therapy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Therapy not found
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="hover:bg-blue-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Therapies
        </Button>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Section 1: Image and Core Details (Two columns on large screens) */}
          <div className="grid lg:grid-cols-2 gap-16 mb-12">
            {/* Column 1: Image and Optional Additional Info (like ProductDetail) */}
            <div>
              <div className="relative mb-8">
                {" "}
                {/* Image container */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${therapy.color} rounded-2xl blur opacity-30`}
                ></div>
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="relative w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Optional: Additional Information Section (like in ProductDetail) */}
              {therapy.additionalInfo && (
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {therapy.additionalInfo.title ||
                      `More About ${therapy.name}`}
                  </h3>
                  {therapy.additionalInfo.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {therapy.additionalInfo.content}
                    </p>
                  )}
                  {therapy.additionalInfo.tips &&
                    therapy.additionalInfo.tips.length > 0 && (
                      <>
                        <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                          Helpful Tips:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {therapy.additionalInfo.tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </>
                    )}
                </div>
              )}
            </div>

            {/* Column 2: Core Text Details */}
            <div>
              <div className="mb-6">
                <div
                  className={`inline-flex items-center bg-gradient-to-r ${therapy.color} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}
                >
                  <therapy.icon className="w-4 h-4 mr-2" />
                  Therapeutic Area
                </div>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-6">
                {therapy.name}
              </h1>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                {therapy.description}
              </p>

              {/* Treatment Areas */}
              <div
                className={`bg-gradient-to-br ${therapy.bgColor} rounded-2xl p-8 mb-8 border border-white/50 shadow-lg`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Treatment Areas
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {therapy.treatments.map((treatment, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Conditions - Now part of this second column */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Common Conditions
                </h3>
                <ul className="space-y-2">
                  {therapy.conditions.map((condition, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Approach - Now part of this second column */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {therapy.approach}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Contact Button (Full width relative to container, below the grid) */}
          <div className="text-center pt-4">
            <Button
              size="lg"
              className={`bg-gradient-to-r ${therapy.color} hover:opacity-90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              Contact for Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TherapyDetail;
