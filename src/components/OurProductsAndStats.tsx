import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Removed PackageSearch as it's in StatsSection
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import StatsSection from "./StatsSection"; // Import the StatsSection

// Ensure your product data has distinct image paths if they are local
const featuredProducts = [
  {
    name: "Panxum-40",
    category: "Gastro",
    description: "Pantoprazole Gastro Resistant Tablets I.P.",
    image: "/images/products/panxum-40.png",
    slug: "panxum-40",
    gradient: "from-sky-400 to-cyan-500",
    accentColor: "text-sky-400",
    borderColor: "border-sky-500",
  },
  {
    name: "Pregaxum-MNT",
    category: "Neurology",
    description: "Pregabalin, Methylcobalamin & Nortriptyline Tablets.",
    image: "/images/products/pregaxum-mnt.png",
    slug: "pregaxum-mnt",
    gradient: "from-emerald-400 to-green-500",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500",
  },
  {
    name: "Betarow-10",
    category: "Cardiology",
    description: "Propranolol HCl Tablets I.P. 10 mg.",
    image: "/images/products/betarow-10.png",
    slug: "betarow-10",
    gradient: "from-purple-400 to-indigo-500",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500",
  },
  {
    name: "Lexprate-CR",
    category: "Cardiovascular",
    description: "Extended-release formulation for proactive health.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    slug: "lexprate-cr",
    gradient: "from-pink-500 to-red-500",
    accentColor: "text-pink-400",
    borderColor: "border-pink-500",
  },
  {
    name: "Calvilux Forte",
    category: "Bone Health",
    description: "Advanced calcium & D3 for optimal bone density.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80",
    slug: "calvilux-forte",
    gradient: "from-pharma-blue to-sky-600",
    accentColor: "text-pharma-lightBlue",
    borderColor: "border-pharma-blue",
  },
];

const OurProductsAndStats = () => {
  const sectionRefHook = useScrollAnimation("animate-fade-in", 0.05);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const navigate = useNavigate();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  const sectionBackgroundImage =
    "https://images.unsplash.com/photo-1585349150957-46d8869395ac?auto=format&fit=crop&w=1920&q=80";

  return (
    <section
      ref={sectionRefHook}
      className="py-16 md:py-20 bg-pharma-darkBlue text-white relative" // Removed initial opacity-0 if hook handles it
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(23, 37, 84, 0.95)), url(${sectionBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        // backgroundAttachment: 'fixed', // Uncomment for parallax effect
      }}
    >
      {/* Stats Section is rendered here, above the product carousel title */}
      <StatsSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0 text-center md:text-left">
            Our <span className="text-pharma-lightBlue">Products</span>
          </h2>
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-slate-600 text-slate-300 hover:text-white rounded-full w-10 h-10 md:w-12 md:h-12"
              aria-label="Previous product"
              disabled={!emblaApi || !emblaApi.canScrollPrev()}
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="w-24 md:w-32 h-0.5 bg-slate-600/50 rounded-full"></div>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-slate-600 text-slate-300 hover:text-white rounded-full w-10 h-10 md:w-12 md:h-12"
              aria-label="Next product"
              disabled={!emblaApi || !emblaApi.canScrollNext()}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        <div className="embla -mx-2 sm:-mx-4" ref={emblaRef}>
          <div className="embla__container flex pb-4">
            {featuredProducts.map(
              (
                product // Removed index from map key if slug is unique
              ) => (
                <div
                  className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_31%] lg:flex-[0_0_24%] min-w-0 px-2 sm:px-3"
                  key={product.slug} // Use a unique product identifier like slug for the key
                >
                  <Card
                    className={`h-full flex flex-col bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden group 
                              border-2 border-slate-700/80 hover:${product.borderColor}/70 
                              transition-all duration-400 transform hover:-translate-y-1.5 hover:shadow-[0_0_35px_-10px_rgba(var(--card-shadow-rgb),0.4)] cursor-pointer`}
                    // Simplified style for shadow, ensure your Tailwind config has the accent colors for borders.
                    // The CSS variable approach for shadow is fine if you have the --X-rgb vars globally.
                    // For simplicity here, I'm relying on Tailwind's direct border color class.
                    onClick={() => handleProductClick(product.slug)}
                  >
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden rounded-t-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out bg-slate-200/5"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-5 group-hover:opacity-10`}
                      ></div>
                      <span
                        className={`absolute top-3 right-3 text-xs font-semibold bg-slate-900/70 ${product.accentColor} px-3 py-1 rounded-full backdrop-blur-sm shadow-sm`}
                      >
                        {product.category}
                      </span>
                    </div>
                    <CardHeader className="pt-5 pb-1 px-4 sm:px-5">
                      <CardTitle
                        className={`text-lg sm:text-xl font-semibold ${product.accentColor} truncate`}
                      >
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4 sm:pb-5 px-4 sm:px-5 flex flex-col flex-grow">
                      <p className="text-xs sm:text-sm text-slate-400 mb-4 line-clamp-2 flex-grow min-h-[40px]">
                        {product.description}
                      </p>
                      <span
                        className={`inline-flex items-center text-sm font-medium ${product.accentColor} group-hover:underline self-start`}
                      >
                        View Details{" "}
                        <ArrowRight
                          size={16}
                          className="ml-1.5 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Button
            size="lg"
            className="bg-pharma-green hover:bg-emerald-500 text-white px-8 py-3 text-md font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/40 transition-all transform hover:scale-105"
            onClick={() => navigate("/products")}
          >
            Explore All Products
            <ArrowRight className="ml-2.5 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProductsAndStats;
