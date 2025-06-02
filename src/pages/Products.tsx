import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Heart, Brain, Bone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Lexprate-CR",
      category: "Cardiovascular",
      description:
        "Extended-release formulation for cardiovascular health management.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae", // Pill strips
      slug: "lexprate-cr",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Calvilux",
      category: "Bone Health",
      description:
        "Advanced calcium supplement for optimal bone health and strength.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063", // Brain model
      slug: "calvilux",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Multilux",
      category: "Multivitamin",
      description: "Comprehensive multivitamin complex for overall wellness.",
      // CHECK THIS URL VERY CAREFULLY IN YOUR FILE:
      image:
        "https://www.pharmavends.com/userspics/9bda8fec98e8e1cc62804dfc7338ea36.jpg", // Should be assorted pills
      slug: "multilux",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Neurolux",
      category: "Neurology",
      description: "Specialized neurological support for cognitive health.",
      // CHECK THIS URL VERY CAREFULLY IN YOUR FILE:
      // This image (orange pills) IS showing in your screenshot.
      // The Product Detail page for Neurolux uses a different image (a brain model).
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88", // Orange pills spilling from bottle
      slug: "neurolux",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Cardiolux",
      category: "Cardiology",
      description: "Advanced cardiac care formulation for heart health.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370", // Vials
      slug: "cardiolux",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Diabetlux",
      category: "Diabetes",
      description: "Effective diabetes management solution.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56", // Brain cross-section (used for Diabetlux card)
      slug: "diabetlux",
      color: "from-teal-500 to-blue-500",
    },
    {
      name: "Immunolux",
      category: "Immunity",
      description: "Immune system support and enhancement formula.",
      image:
        "https://meafarma.it/image/cache/data/pharmadb/980904510-512x512.jpg", // Pills and mask
      slug: "immunolux",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Gastrolux",
      category: "Gastroenterology",
      description: "Digestive health and gastrointestinal support.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926", // Different pill strips
      slug: "gastrolux",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <Navbar />

      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-green-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of Pharmaceuticals products
            designed to improve health and well-being
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}
                  ></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`bg-gradient-to-r ${product.color} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300"
                    onClick={() => handleProductClick(product.slug)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-8">
              Product Categories
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Our products span across multiple therapeutic areas to address
              diverse healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Cardiovascular",
                description: "Heart health and circulation support",
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-100",
              },
              {
                icon: Brain,
                title: "Neurology",
                description: "Brain and nervous system care",
                color: "from-purple-500 to-indigo-500",
                bgColor: "from-purple-50 to-indigo-100",
              },
              {
                icon: Activity,
                title: "Endocrinology",
                description: "Hormonal and metabolic disorders",
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-100",
              },
              {
                icon: Bone,
                title: "Gastroenterology",
                description: "Digestive system health",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-100",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${category.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
              >
                <div
                  className={`bg-gradient-to-r ${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {category.description}
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

export default Products;
