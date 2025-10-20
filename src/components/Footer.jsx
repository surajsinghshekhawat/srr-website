import { Link } from "react-router-dom";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/srr_logo.png" alt="SRR Logo" className="h-14 w-auto" />
              <span className="font-heading text-2xl font-bold">
                Sri Ragavendhira Roadways
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Driving Reliability Across India for over 15 years. Your trusted
              partner in logistics and transport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary-red transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-primary-red transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="text-gray-300 hover:text-primary-red transition-colors"
                >
                  Fleet & Network
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-gray-300 hover:text-primary-red transition-colors"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary-red transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-red" />
                <span className="text-gray-300">
                  Flat No. 11, 1st Floor, Door No. 19/7,
                  <br />
                  Kilburn Nagar, Madhavaram,
                  <br />
                  Chennai – 600060
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-red" />
                <span className="text-gray-300">
                  srrchennai9@gmail.com
                  <br />
                  vcschennai@yahoo.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-300">
              © {currentYear} Sri Ragavendhira Roadways. All rights reserved.
            </p>
          </div>
          
          {/* Developed By Section */}
          <div className="border-t border-gray-700 pt-6 mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-sm">Developed with ❤️ by</span>
              <a 
                href="https://www.linkedin.com/in/suraj08/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-primary-red hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-semibold text-sm">Suraj Singh Shekhawat</span>
                <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            <div className="text-center mt-2">
              <span className="text-gray-500 text-xs">
                Crafting digital experiences that drive business forward
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
