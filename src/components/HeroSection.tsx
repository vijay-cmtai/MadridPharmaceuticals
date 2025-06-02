import React from "react";
import { Button } from "@/components/ui/button"; // Assuming this path is correct
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion"; // Using Framer Motion for content animation
import video from "../components/video.mp4";

// If you still want a fallback image for browsers that don't support video
// or while the video is loading, you can define it.
// const FALLBACK_IMAGE_URL = "https://devrajhospital.co.in/wp-content/uploads/2023/03/pharmaceutical-industry.jpeg";

const HeroSection = () => {
  const textShadowStyle = { textShadow: "0 3px 15px rgba(0, 0, 0, 0.5)" };

  // Framer Motion variants for text animation
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.3 },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.8 },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 1.2 },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-pharma-darkBlue">
      {" "}
      {/* Fallback bg color */}
      {/* Background Video and Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          // The path is relative to the pblic folder
          src={video} // IMPORTANT: Update with your video file name
          autoPlay
          loop
          muted // Essential for autoplay in most browsers
          playsInline // Good for mobile compatibility
          className="w-full h-full object-cover"
          // Optional: Add a poster image that shows while video loads or if it fails
          // poster={FALLBACK_IMAGE_URL}
        ></video>
      </div>
      {/* Gradient Overlay - On top of the video */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-pharma-darkBlue/75 to-pharma-blue/70 z-[1]"></div>
      {/* Content */}
      <motion.div
        className="relative z-[2] text-center text-white max-w-4xl lg:max-w-5xl mx-auto px-6"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          variants={titleContainerVariants}
          style={{ ...textShadowStyle }}
        >
          {"Pioneering Health, ".split("").map((char, i) => (
            <motion.span
              key={char + "-" + i}
              variants={titleWordVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.span
            variants={titleWordVariants}
            className="inline-block bg-gradient-to-r from-pharma-lightBlue via-pharma-green to-accent-magenta bg-clip-text text-transparent animate-text-gradient-flow"
            style={{ backgroundSize: "250% auto" }}
          >
            Inspiring Life.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-10 text-slate-200/95 leading-relaxed"
          variants={paragraphVariants}
          style={{ ...textShadowStyle }}
        >
          Madrid Pharmaceuticals is dedicated to advancing healthcare through
          cutting-edge research, innovative therapies, and a commitment to
          patient well-being.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          variants={buttonContainerVariants}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-pharma-green to-emerald-600 hover:from-pharma-green/90 hover:to-emerald-600/90 text-white px-8 py-3.5 text-lg font-semibold rounded-xl shadow-xl hover:shadow-pharma-green/50 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-pharma-green/50 w-full sm:w-auto"
          >
            Discover Innovations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-pharma-lightBlue text-pharma-lightBlue hover:bg-pharma-lightBlue hover:text-pharma-darkBlue px-8 py-3.5 text-lg font-semibold rounded-xl shadow-lg hover:shadow-pharma-lightBlue/40 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-pharma-lightBlue/50 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-bounce-slow hidden md:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
      >
        <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
