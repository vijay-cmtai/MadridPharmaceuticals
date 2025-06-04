import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Users,
  ShieldCheck,
  ShoppingBag,
  Pill,
  Package,
  HeartPulse,
  Edit3,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure path is correct
import { Link, useLocation } from "react-router-dom";
import logoImage from "../logo.png"; // Ensure path is correct

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    dropdown: true,
    activeCheckPaths: ["/about", "/vision-mission", "/quality"],
    items: [
      {
        href: "/about",
        label: "About Company",
        subtitle: "Our story",
        icon: Briefcase,
      },
      {
        href: "/vision-mission",
        label: "Vision & Mission",
        subtitle: "Our goals",
        icon: Users,
      },
      {
        href: "/quality",
        label: "Quality Assurance",
        subtitle: "Our standards",
        icon: ShieldCheck,
      },
    ],
  },
  {
    label: "Products",
    dropdown: true,
    activeCheckPaths: ["/products"],
    items: [
      {
        href: "/products",
        label: "All Products",
        subtitle: "Complete range",
        icon: ShoppingBag,
      },
      {
        href: "/products/lexprate-cr",
        label: "Lexprate-CR",
        subtitle: "Cardiovascular",
        icon: Pill,
      },
      {
        href: "/products/calvilux",
        label: "Calvilux",
        subtitle: "Bone Health",
        icon: Package,
      },
      {
        href: "/products/multilux",
        label: "Multilux",
        subtitle: "Multivitamin",
        icon: Pill,
      },
    ],
  },
  { href: "/therapies", label: "Our Therapies", icon: HeartPulse },
  { href: "/events", label: "Events", icon: Edit3 },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isDrawerActuallyVisible, setIsDrawerActuallyVisible] = useState(false);

  const navbarRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const location = useLocation();

  const isActive = (link) => {
    if (link.dropdown && link.activeCheckPaths) {
      if (
        link.label === "Products" &&
        location.pathname.startsWith("/products")
      ) {
        return true;
      }
      return link.activeCheckPaths.some((path) =>
        location.pathname.startsWith(path)
      );
    }
    return location.pathname === link.href;
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsDrawerActuallyVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDesktopDropdown(null);
      }
      if (
        isMobileMenuOpen &&
        mobileDrawerRef.current &&
        !mobileDrawerRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setOpenMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (label) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
  };

  const closeMobileMenuAndNavigate = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const handleDesktopDropdownEnter = (label) => setOpenDesktopDropdown(label);
  const handleDesktopDropdownLeave = () => setOpenDesktopDropdown(null);

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-40 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center"
              onClick={
                isMobileMenuOpen ? closeMobileMenuAndNavigate : undefined
              }
            >
              <img
                src={logoImage}
                alt="Madrid Pharmaceuticals Logo"
                className="h-10 w-auto mr-2"
              />
            </Link>
            <div className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleDesktopDropdownEnter(link.label)}
                    onMouseLeave={handleDesktopDropdownLeave}
                  >
                    <button
                      className={`flex items-center text-sm font-medium px-3 py-2 rounded-md group transition-colors ${
                        isActive(link)
                          ? "text-pharma-blue"
                          : "text-gray-700 hover:text-pharma-blue"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDesktopDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDesktopDropdown === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border rounded-lg shadow-xl z-[41] p-3 grid grid-cols-1 sm:grid-cols-2 gap-2 min-w-[300px] max-w-md">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center p-2.5 rounded-md hover:bg-pharma-blue/10 group/item"
                            onClick={() => {
                              setOpenDesktopDropdown(null);
                              if (isMobileMenuOpen)
                                closeMobileMenuAndNavigate();
                            }}
                          >
                            {item.icon && (
                              <item.icon className="w-5 h-5 text-pharma-blue mr-2.5 shrink-0" />
                            )}
                            <div>
                              <span className="text-sm font-medium text-gray-800 group-hover/item:text-pharma-blue">
                                {item.label}
                              </span>
                              {item.subtitle && (
                                <p className="text-xs text-gray-500">
                                  {item.subtitle}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-sm font-medium px-3 py-2 rounded-md ${
                      isActive(link)
                        ? "text-pharma-blue"
                        : "text-gray-700 hover:text-pharma-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contact" className="ml-3">
                <Button className="bg-gradient-to-r from-pharma-blue to-pharma-green hover:from-pharma-blue/90 hover:to-pharma-green/90 text-white px-5 py-2 text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="lg:hidden">
              <Button
                ref={mobileMenuButtonRef}
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:bg-pharma-blue/10 focus:ring-2 focus:ring-pharma-blue/50 relative z-[51]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isDrawerActuallyVisible && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-45 transition-opacity duration-300 ease-in-out lg:hidden ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMobileMenu}
          ></div>
          <div
            ref={mobileDrawerRef}
            className={`fixed top-16 right-0 bg-white z-50 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden
              ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
              w-auto max-w-[90vw] sm:max-w-sm  /* Width classes */
              max-h-[calc(100vh-4rem-2rem)] /* Max height, with some bottom margin */
              overflow-y-auto /* Scroll if content exceeds max-h */
            `}
            onAnimationEnd={() => {
              if (!isMobileMenuOpen) setIsDrawerActuallyVisible(false);
            }}
          >
            <div className="min-w-[200px]">
              {" "}
              {/* Optional: adjust min-width or remove */}
              <div className="space-y-2">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div
                      key={link.label}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <button
                        className={`flex justify-between items-center w-full text-left text-lg font-semibold py-3 transition-colors ${isActive(link) ? "text-pharma-blue" : "text-gray-800"}`}
                        onClick={() => toggleMobileSubmenu(link.label)}
                      >
                        <span>{link.label}</span>
                        {openMobileSubmenu === link.label ? (
                          <ChevronUp className="w-5 h-5 text-pharma-blue" />
                        ) : (
                          <ChevronDown
                            className={`w-5 h-5 ${isActive(link) ? "text-pharma-blue" : "text-gray-500"}`}
                          />
                        )}
                      </button>
                      {openMobileSubmenu === link.label && (
                        <div className="pl-4 py-2 mt-1 space-y-1 bg-gray-50 rounded-md">
                          {link.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={closeMobileMenuAndNavigate}
                              className={`flex items-center text-base font-medium rounded-md py-2 group transition-colors ${location.pathname.startsWith(item.href) ? "text-pharma-blue font-semibold" : "text-gray-700 hover:text-pharma-blue"}`}
                            >
                              {item.icon && (
                                <item.icon
                                  className={`w-5 h-5 mr-3 transition-colors ${location.pathname.startsWith(item.href) ? "text-pharma-blue" : "text-pharma-blue/80 group-hover:text-pharma-blue"}`}
                                />
                              )}
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={closeMobileMenuAndNavigate}
                      className={`block text-lg py-3 font-semibold transition-colors border-b border-gray-200 last:border-b-0 ${isActive(link) ? "text-pharma-blue" : "text-gray-800 hover:text-pharma-blue"}`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-6">
                  <Link to="/contact" onClick={closeMobileMenuAndNavigate}>
                    <Button className="w-full bg-gradient-to-r from-pharma-blue to-pharma-green hover:from-pharma-blue/90 hover:to-pharma-green/90 text-white px-6 py-3 rounded-lg shadow-md text-base font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
