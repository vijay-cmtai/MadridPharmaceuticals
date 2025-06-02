import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Brain,
  Heart,
  Bone,
  Shield,
  Eye,
  Stethoscope,
  Activity,
  Pill,
  ChevronRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Therapies = () => {
  const navigate = useNavigate();

  const therapies = [
    {
      name: "Neurology",
      description:
        "Advanced neurological care for brain and nervous system disorders with cutting-edge treatments.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      treatments: [
        "Epilepsy Management",
        "Migraine Treatment",
        "Neuropathic Pain",
        "Cognitive Disorders",
      ],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-100",
      slug: "neurology",
      rating: 4.9,
      patients: "10K+",
    },
    {
      name: "Cardiology",
      description:
        "Comprehensive cardiovascular treatments for optimal heart health and circulation.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      treatments: [
        "Hypertension",
        "Heart Disease",
        "Arrhythmia",
        "Cholesterol Management",
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-100",
      slug: "cardiology",
      rating: 4.8,
      patients: "15K+",
    },
    {
      name: "Orthopedics",
      description:
        "Expert bone and joint health solutions for enhanced mobility and strength.",
      icon: Bone,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
      treatments: ["Osteoporosis", "Arthritis", "Bone Density", "Joint Pain"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
      slug: "orthopaedics",
      rating: 4.7,
      patients: "8K+",
    },
    {
      name: "Immunology",
      description:
        "Advanced immune system support and autoimmune disorder management.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      treatments: [
        "Immune Deficiency",
        "Autoimmune Disorders",
        "Allergies",
        "Vaccination Support",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-100",
      slug: "immunology",
      rating: 4.9,
      patients: "5K+",
    },
    {
      name: "Ophthalmology",
      description:
        "Specialized eye care and vision health Pharmaceuticals solutions.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
      treatments: [
        "Glaucoma",
        "Diabetic Retinopathy",
        "Dry Eyes",
        "Eye Infections",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-100",
      slug: "ophthalmology",
      rating: 4.8,
      patients: "12K+",
    },
    {
      name: "General Medicine",
      description:
        "Comprehensive healthcare solutions for common medical conditions.",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
      treatments: [
        "Diabetes",
        "Respiratory Issues",
        "Digestive Health",
        "Pain Management",
      ],
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-100",
      slug: "general-medicine",
      rating: 4.6,
      patients: "20K+",
    },
  ];

  const handleTherapyClick = (slug: string) => {
    navigate(`/therapies/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <TopBar />
      <Navbar />

      {/* Hero Section with Floating Elements */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Floating Animation Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent animate-fade-in">
              Therapeutic Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in delay-300">
              Discover comprehensive Pharmaceuticals solutions across multiple
              therapeutic specialties, designed to enhance lives and deliver
              exceptional healthcare outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-500">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">6 Specialties</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">70K+ Patients</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">
                  15+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Therapies Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-6">
              Specialized Care Areas
            </h2>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
              Our therapeutic expertise spans across major medical specialties,
              providing targeted treatments and comprehensive care solutions for
              diverse health conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer overflow-hidden border border-gray-100"
                onClick={() => handleTherapyClick(therapy.slug)}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={therapy.image}
                    alt={therapy.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">
                      {therapy.rating}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${therapy.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <therapy.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {therapy.name}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {therapy.patients} patients
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {therapy.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                      Key Treatment Areas:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {therapy.treatments.slice(0, 4).map((treatment, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${therapy.color} rounded-full mr-2 animate-pulse`}
                          ></div>
                          <span className="text-gray-600">{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${therapy.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                  >
                    Explore Treatment
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Research & Development Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                Research & Innovation
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Our commitment to advancing therapeutic care drives our
                continuous research and development efforts. We invest
                significantly in discovering new treatment modalities and
                improving existing therapies across all our therapeutic areas.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Activity,
                    title: "Novel Drug Discovery",
                    description:
                      "Developing innovative Pharmaceuticals compounds using cutting-edge research methodologies",
                    color: "from-blue-500 to-blue-600",
                    stats: "50+ compounds",
                  },
                  {
                    icon: Pill,
                    title: "Clinical Research",
                    description:
                      "Rigorous clinical trials and comprehensive safety studies with international standards",
                    color: "from-green-500 to-green-600",
                    stats: "25+ trials",
                  },
                  {
                    icon: Heart,
                    title: "Formulation Innovation",
                    description:
                      "Advanced drug delivery systems and next-generation Pharmaceuticals formulations",
                    color: "from-purple-500 to-purple-600",
                    stats: "15+ patents",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start group bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-300"
                  >
                    <div
                      className={`bg-gradient-to-r ${feature.color} text-white rounded-2xl w-16 h-16 flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-2xl font-bold text-gray-800">
                          {feature.title}
                        </h4>
                        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                  alt="Research Lab"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    State-of-the-Art Facilities
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our world-class research facilities are equipped with the
                    latest technology and staffed by expert scientists dedicated
                    to breakthrough discoveries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Therapies;
