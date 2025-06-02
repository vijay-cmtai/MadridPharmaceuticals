import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// ... (other imports: ArrowLeft, ArrowRight, useNavigate, Card, Button from previous response)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const productsData = [
  /* ... your product data ... */
  {
    name: "Lexprate-CR",
    category: "Cardiovascular",
    description: "Proactive cardiovascular health management.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    slug: "lexprate-cr",
    gradient: "from-accent-magenta to-pink-600",
    accentColor: "text-accent-magenta",
    borderColor: "border-accent-magenta",
  },
  {
    name: "Calvilux Forte",
    category: "Bone Health",
    description: "Optimal bone density and skeletal integrity.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    slug: "calvilux-forte",
    gradient: "from-pharma-blue to-sky-500",
    accentColor: "text-pharma-lightBlue",
    borderColor: "border-pharma-blue",
  },
  {
    name: "Multilux Gold",
    category: "Multivitamin",
    description: "Enhanced energy and robust immunity support.",
    image:
      "https://images.unsplash.com/photo-1550572017-4fae0de30b9e?auto=format&fit=crop&w=800&q=80",
    slug: "multilux-gold",
    gradient: "from-pharma-green to-emerald-500",
    accentColor: "text-pharma-green",
    borderColor: "border-pharma-green",
  },
  {
    name: "Neurolux Max",
    category: "Neurology",
    description: "Advanced cognitive support & brain health.",
    image:
      "https://images.unsplash.com/photo-1516509814484-8698039c9758?auto=format&fit=crop&w=800&q=80",
    slug: "neurolux-max",
    gradient: "from-accent-purple to-indigo-600",
    accentColor: "text-accent-purple",
    borderColor: "border-accent-purple",
  },
];

const OurProductsCarousel = () => {
  const sectionRef = useScrollAnimation("animate-fade-in"); // Animate whole section
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  // ... (scrollPrev, scrollNext, handleProductClick from previous response)
  const navigate = useNavigate();
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const handleProductClick = (slug) => navigate(`/products/${slug}`);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-slate-950 overflow-hidden opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-0">
            Featured{" "}
            <span className="bg-gradient-to-r from-pharma-lightBlue to-pharma-green bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <div className="flex items-center gap-3">
            {/* Navigation buttons (same as previous carousel code) */}
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="border-slate-600 text-slate-400 hover:bg-pharma-blue hover:text-white hover:border-pharma-blue"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="border-slate-600 text-slate-400 hover:bg-pharma-blue hover:text-white hover:border-pharma-blue"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        <div className="embla -mx-2" ref={emblaRef}>
          {" "}
          {/* Added negative margin to counteract pl-4 on slides */}
          <div className="embla__container flex">
            {productsData.map((product, index) => (
              <div
                className="embla__slide flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_31%] lg:flex-[0_0_24%] min-w-0 px-2" // Adjusted padding
                key={product.slug + index}
              >
                <Card
                  className={`h-full flex flex-col bg-slate-900 rounded-2xl shadow-2xl overflow-hidden group 
                              border-2 border-slate-800 hover:border-opacity-70 transition-all duration-400 
                              transform hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(var(--card-shadow-rgb),0.5)] cursor-pointer
                              ${product.borderColor}`} // Use the specific border color from data
                  style={
                    {
                      "--card-shadow-rgb":
                        product.accentColor === "text-accent-magenta"
                          ? "217, 70, 239"
                          : product.accentColor === "text-pharma-lightBlue"
                            ? "96, 165, 250"
                            : product.accentColor === "text-pharma-green"
                              ? "16, 185, 129"
                              : "139, 92, 246",
                    } as React.CSSProperties
                  }
                  onClick={() => handleProductClick(product.slug)}
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      /* ... image same as before ... */ src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-30 group-hover:opacity-10`}
                    ></div>
                    <span
                      className={`absolute top-3 right-3 text-xs font-semibold bg-black/50 ${product.accentColor} px-3 py-1 rounded-full backdrop-blur-sm`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="pt-5 pb-1">
                    <CardTitle
                      className={`text-xl font-semibold ${product.accentColor}`}
                    >
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-1 pb-5 flex flex-col flex-grow">
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    <span
                      className={`inline-flex items-center text-sm font-medium ${product.accentColor} group-hover:underline`}
                    >
                      View Product{" "}
                      <ArrowRight
                        size={16}
                        className="ml-1.5 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-pharma-green hover:bg-emerald-500 text-white px-10 py-3.5 text-lg font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/40 transition-all transform hover:scale-105"
            onClick={() => navigate("/products")}
          >
            View All Products
            <ArrowRight className="ml-2.5 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default OurProductsCarousel;
