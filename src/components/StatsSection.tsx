import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Briefcase, PackageSearch, MapPin, FlaskConical } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Corrected path assumption

// AnimatedStat component (can be in this file or imported)
const AnimatedStat = ({
  finalValue,
  label,
  duration = 2000,
  icon: IconComponent,
  iconColor = "text-pharma-green",
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% visible
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(finalValue.toString().replace(/\D/g, "") || "0");

      if (start === end && end !== 0) {
        setCount(end);
        return;
      }
      if (start === end && end === 0) {
        setCount(0);
        return;
      }

      const incrementTime = Math.max(10, duration / (end || 1));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, finalValue, duration]);

  return (
    <div
      ref={ref}
      className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700/50 transition-all duration-300 hover:bg-white/10 hover:border-slate-600 transform hover:scale-105"
    >
      {IconComponent && (
        <div
          className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-br ${iconColor.replace("text-", "from-")}/30 ${iconColor.replace("text-", "to-")}/10 flex items-center justify-center mb-3 shadow-inner`}
        >
          <IconComponent className={`w-6 h-6 ${iconColor}`} strokeWidth={2} />
        </div>
      )}
      <span className={`text-4xl md:text-5xl font-bold ${iconColor}`}>
        {count}
      </span>
      <span className="text-4xl md:text-5xl font-bold text-slate-200 ml-1">
        +
      </span>
      <p className="text-xs sm:text-sm uppercase text-slate-400 tracking-wider mt-1 md:mt-2">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  // The main section will fade in. Individual stats animate via AnimatedStat's useInView.
  const sectionRefHook = useScrollAnimation("animate-fade-in", 0.1);

  const stats = [
    {
      value: "35",
      label: "Employees",
      icon: Briefcase,
      iconColor: "text-pharma-green",
    },
    {
      value: "50",
      label: "Products",
      icon: PackageSearch,
      iconColor: "text-pharma-lightBlue",
    },
    {
      value: "80",
      label: "City Presence",
      icon: MapPin,
      iconColor: "text-accent-purple",
    }, // Changed from "City"
    {
      value: "1",
      label: "R&D Centers",
      icon: FlaskConical,
      iconColor: "text-accent-orange",
    },
  ];

  return (
    <section
      ref={sectionRefHook} // Apply scroll animation ref to the section
      className="py-12 md:py-16 bg-pharma-darkBlue/80 backdrop-blur-md relative z-10" // Removed initial opacity-0 if hook handles it
    >
      <div className="container mx-auto px-4">
        {/* 
          The grid layout will handle the items. We map each stat to an AnimatedStat.
          The dividers are part of the grid flow or can be omitted for a cleaner look on mobile.
        */}
        <div className="grid grid-cols-2 items-center gap-x-2 gap-y-8 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:gap-x-0 md:gap-y-0">
          {stats.map((stat, index) => (
            // Using React.Fragment here is fine as it's just grouping for the map key.
            // The AnimatedStat component itself renders a div, which can take data-attributes.
            <React.Fragment key={stat.label}>
              {/* The AnimatedStat component already has a root div.
                  If data-lov-id is applied by an external tool, it will likely target this div. */}
              <AnimatedStat
                finalValue={stat.value}
                label={stat.label}
                icon={stat.icon}
                iconColor={stat.iconColor}
              />
              {/* Vertical divider for larger screens (only between items) */}
              {index < stats.length - 1 && (
                <div className="hidden md:flex justify-center items-center h-full px-4 lg:px-6">
                  {" "}
                  {/* Added padding for better spacing */}
                  <div className="h-16 sm:h-20 w-px bg-slate-600/70"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
