import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Therapies", href: "/therapies" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Madrid <span className="text-green-400">Pharmaceuticals</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Pharmaceuticals company dedicated to improving healthcare
              through innovative solutions and quality products. Your health is
              our priority.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  MADRID PHARMACEUTICAL PVT LTD H.N. B-2405 MAIN ROAD,
                  <br />
                  PUSTA-1 SONIA VIHAR, DELHI- 110094
                </p>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">+91 86036 62883</p>
              </div> */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Madridpharmaceautical@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-gray-400">
                Developer Credit
              </h5>
              <p className="text-sm text-gray-400">
                Developed by <span className="text-green-400">CMT AI</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Madrid Pharmaceuticalss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
