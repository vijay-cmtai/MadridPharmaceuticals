import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle,
  Heart,
  Brain,
  Bone,
  Activity,
  ShieldCheck, // Added for Immunolux
  // Add other icons if needed, e.g., Aperture for Gastroenterology if Activity isn't specific enough
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { productName } = useParams();

  const productDetails = {
    "lexprate-cr": {
      name: "Lexprate-CR",
      category: "Cardiovascular",
      description:
        "Extended-release formulation for comprehensive cardiovascular health management.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae", // Pill strips
      features: [
        "Extended-release technology",
        "Improved patient compliance",
        "Reduced dosing frequency",
        "Enhanced bioavailability",
      ],
      indications: [
        "Hypertension management",
        "Cardiovascular risk reduction",
        "Long-term heart health support",
      ],
      composition:
        "Each tablet contains active Pharmaceuticals ingredients in optimized ratios",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-100",
      additionalInfo: {
        title: "Understanding Lexprate-CR",
        content:
          "Lexprate-CR is meticulously formulated to support your cardiovascular system. Its extended-release mechanism ensures a steady delivery of active ingredients, contributing to consistent blood pressure management and overall heart health. Remember, this medication is part of a broader cardiovascular care plan.",
        tips: [
          "Take as prescribed by your doctor, typically once daily.",
          "Monitor your blood pressure regularly as advised by your healthcare provider.",
          "Maintain a heart-healthy lifestyle, including diet and exercise.",
        ],
      },
    },
    calvilux: {
      name: "Calvilux",
      category: "Bone Health",
      description:
        "Advanced calcium supplement for optimal bone health and strength.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063", // Brain model (as per Products.js card and screenshot)
      features: [
        "High bioavailability calcium",
        "Vitamin D3 enhanced absorption",
        "Magnesium co-factor included",
        "Easy to digest formula",
      ],
      indications: [
        "Osteoporosis prevention",
        "Bone density support",
        "Calcium deficiency treatment",
      ],
      composition: "Calcium carbonate, Vitamin D3, Magnesium oxide",
      icon: Bone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
      additionalInfo: {
        title: "Maximizing Calvilux Benefits",
        content:
          "Calvilux provides essential nutrients for bone mineralization and strength. It's not just about calcium; the formula includes co-factors like Vitamin D3 and Magnesium to enhance absorption and utilization, supporting your skeletal health comprehensively.",
        tips: [
          "Best taken with food for optimal absorption.",
          "Engage in weight-bearing exercises to complement supplementation.",
          "Avoid taking with certain medications; consult your pharmacist.",
        ],
      },
    },
    multilux: {
      name: "Multilux",
      category: "Multivitamin",
      description: "Comprehensive multivitamin complex for overall wellness.",
      image:
        "https://www.pharmavends.com/userspics/9bda8fec98e8e1cc62804dfc7338ea36.jpg", // Assorted pills
      features: [
        "Complete vitamin profile",
        "Essential minerals included",
        "Antioxidant protection",
        "Daily wellness support",
      ],
      indications: [
        "Nutritional supplementation",
        "General health maintenance",
        "Immune system support",
      ],
      composition: "Multi-vitamin and mineral complex with natural extracts",
      icon: Activity,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-100",
      additionalInfo: {
        title: "Your Daily Dose of Wellness with Multilux",
        content:
          "Multilux is a balanced multivitamin designed to fill nutritional gaps and support your body's daily functions. From energy production to immune defense, it provides a foundation for overall health and vitality. It's an excellent supplement to a healthy diet.",
        tips: [
          "Take one tablet daily, preferably with a meal.",
          "Store in a cool, dry place away from direct sunlight.",
          "Multivitamins should not replace a varied and balanced diet.",
        ],
      },
    },
    neurolux: {
      name: "Neurolux",
      category: "Neurology",
      description: "Specialized neurological support for cognitive health.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88", // Brain model (specific detail page image)
      features: [
        "Cognitive enhancement",
        "Neuroprotective properties",
        "Memory support",
        "Brain health optimization",
      ],
      indications: [
        "Cognitive decline prevention",
        "Memory enhancement",
        "Neurological support",
      ],
      composition: "Nootropic compounds and neuroprotective agents",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-100",
      additionalInfo: {
        title: "Nourishing Your Mind with Neurolux",
        content:
          "Neurolux is crafted to support cognitive function and brain health. Its specialized ingredients work to protect neural pathways and enhance mental clarity. Consistent use, as part of a brain-healthy lifestyle, can contribute to improved focus, memory, and overall neurological well-being.",
        tips: [
          "Combine with mentally stimulating activities like puzzles or learning new skills.",
          "Ensure adequate hydration, as water is vital for brain function.",
          "A consistent sleep schedule can significantly enhance cognitive benefits.",
        ],
      },
    },
    cardiolux: {
      name: "Cardiolux",
      category: "Cardiology",
      description: "Advanced cardiac care formulation for heart health.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370", // Vials (from Products.js card)
      features: [
        "Supports heart function",
        "Aids in circulation",
        "Formulated for cardiac wellness",
      ],
      indications: [
        "Heart health maintenance",
        "Support for cardiac conditions (as adjunct)",
        "Improved cardiovascular performance",
      ],
      composition: "Key cardiac support nutrients and herbal extracts",
      icon: Heart,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-100",
      additionalInfo: {
        title: "Understanding Cardiolux",
        content:
          "Cardiolux is designed to provide comprehensive support for your heart. Its formulation helps maintain healthy cardiac function and promotes overall cardiovascular well-being. Consult your doctor for use alongside other medications.",
        tips: [
          "Follow dosage instructions carefully.",
          "Combine with a heart-healthy diet and regular exercise.",
          "Regular check-ups with your cardiologist are recommended.",
        ],
      },
    },
    diabetlux: {
      name: "Diabetlux",
      category: "Diabetes",
      description: "Effective diabetes management solution.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56", // Brain cross-section (as per Products.js card)
      features: [
        "Helps regulate blood sugar levels",
        "Supports metabolic health",
        "Natural ingredient blend",
      ],
      indications: [
        "Support for type 2 diabetes management",
        "Blood glucose level stabilization",
        "Metabolic syndrome support",
      ],
      composition: "Herbal extracts and minerals known for glucose regulation",
      icon: Activity, // Consider a more specific icon if available/relevant
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-100",
      additionalInfo: {
        title: "Managing Diabetes with Diabetlux",
        content:
          "Diabetlux offers a supportive approach to managing diabetes by helping to maintain healthy blood sugar levels. It should be used as part of a comprehensive diabetes care plan, including diet, exercise, and prescribed medications.",
        tips: [
          "Monitor blood glucose levels regularly.",
          "Adhere to a diabetes-friendly diet.",
          "Consult your endocrinologist about incorporating Diabetlux.",
        ],
      },
    },
    immunolux: {
      name: "Immunolux",
      category: "Immunity",
      description: "Immune system support and enhancement formula.",
      image:
        "https://meafarma.it/image/cache/data/pharmadb/980904510-512x512.jpg", // Pills and mask (from Products.js card)
      features: [
        "Boosts immune response",
        "Rich in antioxidants",
        "Supports overall defense mechanisms",
      ],
      indications: [
        "Strengthening immune system",
        "Seasonal wellness support",
        "Recovery aid",
      ],
      composition:
        "Vitamins, minerals, and herbal extracts to enhance immunity",
      icon: ShieldCheck,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-100",
      additionalInfo: {
        title: "Boosting Your Immunity with Immunolux",
        content:
          "Immunolux is formulated to strengthen your body's natural defenses. Its blend of essential nutrients and herbal extracts helps support a robust immune system, especially during times of stress or seasonal changes.",
        tips: [
          "Take daily for consistent immune support.",
          "Ensure a balanced diet rich in fruits and vegetables.",
          "Get adequate sleep and manage stress.",
        ],
      },
    },
    gastrolux: {
      name: "Gastrolux",
      category: "Gastroenterology",
      description: "Digestive health and gastrointestinal support.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926", // Pill strips (from Products.js card)
      features: [
        "Soothes digestive tract",
        "Promotes gut health",
        "Aids in nutrient absorption",
      ],
      indications: [
        "Digestive discomfort relief",
        "Support for healthy gut flora",
        "Improving digestion efficiency",
      ],
      composition: "Probiotics, digestive enzymes, and soothing herbs",
      icon: Activity, // Consider a more specific icon like 'Leaf' or 'Apple' if it fits
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-100",
      additionalInfo: {
        title: "Supporting Your Digestion with Gastrolux",
        content:
          "Gastrolux is designed to promote a healthy digestive system. It helps soothe discomfort, supports the balance of gut flora, and aids in efficient nutrient absorption for overall well-being.",
        tips: [
          "Take with meals for best results.",
          "Maintain a diet high in fiber.",
          "Stay hydrated throughout the day.",
        ],
      },
    },
  };

  const product = productDetails[productName as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product not found
          </h1>
          <p className="text-gray-600 mt-2">
            The product '{productName}' does not exist or is not yet configured.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="hover:bg-blue-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>

      {/* Product Detail */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Column 1: Image and Additional Info */}
            <div>
              <div className="relative mb-8">
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${product.color} rounded-2xl blur opacity-30`}
                ></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {product.additionalInfo && (
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.additionalInfo.title ||
                      `More About ${product.name}`}
                  </h3>
                  {product.additionalInfo.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {product.additionalInfo.content}
                    </p>
                  )}
                  {product.additionalInfo.tips &&
                    product.additionalInfo.tips.length > 0 && (
                      <>
                        <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                          Helpful Tips:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {product.additionalInfo.tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </>
                    )}
                </div>
              )}
            </div>

            {/* Column 2: Product Details */}
            <div>
              <div className="mb-6">
                <div
                  className={`inline-flex items-center bg-gradient-to-r ${product.color} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}
                >
                  <product.icon className="w-4 h-4 mr-2" />
                  {product.category}
                </div>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-6">
                {product.name}
              </h1>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                {product.description}
              </p>

              <div
                className={`bg-gradient-to-br ${product.bgColor} rounded-2xl p-8 mb-8 border border-white/50 shadow-lg`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Indications
                  </h3>
                  <ul className="space-y-2">
                    {product.indications.map((indication, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{indication}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Composition
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.composition}
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Contact for More Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
