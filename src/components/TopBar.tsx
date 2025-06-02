import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const TopBar = () => {
  return (
    // If TopBar is sticky, ensure its z-index is less than the mobile menu overlay (z-40)
    // For example, if it needs to be sticky: className="bg-pharma-darkBlue ... sticky top-0 z-30"
    // If it's not sticky, z-index is not a concern for this problem.
    <div className="bg-pharma-darkBlue text-white py-2.5 px-4 text-xs sm:text-sm">
      {" "}
      {/* Assuming pharma-darkBlue */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-y-1 sm:gap-y-0 sm:space-x-4 mb-2 sm:mb-0">
          {/* <a
            href="tel:+918603662883"
            className="flex items-center space-x-1.5 hover:text-pharma-lightBlue transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 86036 62883</span>
          </a> */}
          <a
            href="mailto:MadridPharmaceuticals@gmail.com"
            className="flex items-center space-x-1.5 hover:text-pharma-lightBlue transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>MadridPharmaceuticals@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="hidden md:inline">Follow Us:</span>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pharma-lightBlue transition-colors"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
