import { Link } from "react-router-dom";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
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
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Sri Ragavendhira Roadways. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
