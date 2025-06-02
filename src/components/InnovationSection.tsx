import React from "react";
import { Button } from "@/components/ui/button"; // Assuming this path is correct
import {
  Award,
  PlayCircle,
  Phone,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CompanyIcon = ({ className }) => (
  <Stethoscope className={className} strokeWidth={1.5} />
);

const AboutCompanySection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const LEFT_IMAGE_URL =
    "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";
  const RIGHT_IMAGE_URL =
    "https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  const handleEnquiryClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-sky-100 relative overflow-hidden">
      {/* Decorative Blobs - subtle background elements */}
      <div className="absolute top-1/4 left-[-100px] w-72 h-72 bg-pharma-blue/10 rounded-full filter blur-2xl opacity-50 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-[-100px] w-72 h-72 bg-pharma-green/10 rounded-full filter blur-2xl opacity-50 animate-pulse-glow animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Column */}
          <div
            className="animate-slide-in-left" // Make sure these animation classes are defined in your global CSS
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group mb-10 shadow-2xl rounded-2xl overflow-hidden">
              <img
                src={LEFT_IMAGE_URL}
                alt="Madrid Pharmaceuticals Research Lab" // Changed alt text to be more generic
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div
                className="absolute -bottom-8 -right-6 sm:bottom-6 sm:right-6 
                           bg-gradient-to-br from-pharma-green to-green-500 text-white 
                           rounded-xl p-5 sm:p-6 shadow-2xl text-center 
                           w-[200px] sm:w-[220px]
                           transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
              >
                <Award
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 drop-shadow-lg"
                  strokeWidth={2}
                />
                <p className="text-3xl sm:text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold">Years Of Experience</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-8 text-md md:text-lg">
              We are committed to providing access to affordable and innovative
              medicines, driven by our purpose of 'Good Health Can’t Wait'. Our
              products and services span Active Pharmaceuticals Ingredients
              (API), generics, and branded generics.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                size="lg"
                className="bg-pharma-blue hover:bg-pharma-darkBlue text-white px-8 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center group transform hover:scale-105 w-full sm:w-auto"
                onClick={() => navigate("/about")} // Example: Learn More button navigates to /about
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              {/* === MODIFIED ENQUIRY SECTION === */}
              <div
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                onClick={handleEnquiryClick} // Added onClick handler
                role="button" // Added role for accessibility
                tabIndex={0} // Added tabIndex for keyboard accessibility
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleEnquiryClick();
                }} // Keyboard interaction
              >
                <div className="p-2.5 bg-pharma-green/10 rounded-full">
                  <Phone className="w-4 h-4 text-pharma-green" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">
                    Enquiries
                  </span>
                  {/* The phone number is still displayed but the whole block is clickable */}
                  {/* <span // Changed <a> to <span> as the parent div is the clickable target
                    className="text-pharma-darkBlue font-semibold text-base group-hover:text-pharma-blue transition-colors" // Added group-hover for text color
                  >
                    +91 7564852518
                  </span> */}
                </div>
              </div>
              {/* === END OF MODIFIED ENQUIRY SECTION === */}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="lg:pl-8 animate-slide-in-right" // Make sure these animation classes are defined
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 text-base font-semibold uppercase text-pharma-green mb-4">
              <div className="w-10 h-10 bg-pharma-green/10 rounded-lg flex items-center justify-center">
                <CompanyIcon className="w-6 h-6 text-pharma-green" />
              </div>
              <span>About Our Company</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
              Innovation Shaping{" "}
              <span className="text-pharma-blue">Healthcare's Future</span>
            </h2>

            <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-[16/10] lg:aspect-video">
              <img
                src={RIGHT_IMAGE_URL}
                alt="Innovative Healthcare Technology"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pharma-darkBlue/60 via-transparent to-pharma-blue/20 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 md:w-24 md:h-24 text-white/80 hover:text-white transition-all duration-300 cursor-pointer transform group-hover:scale-110 drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
