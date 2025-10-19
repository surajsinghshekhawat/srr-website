import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  TrendingUp,
  Truck,
  MapPin,
  Package,
  Mail,
  Phone,
  MapPinned,
} from "lucide-react";

const Home = () => {
  const [counters, setCounters] = useState({
    years: 0,
    owned: 0,
    attached: 0,
    branches: 0,
  });

  const animateCounter = (target, setter) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(Math.round(target));
        clearInterval(timer);
      } else {
        setter(Math.round(current));
      }
    }, duration / steps);
  };

  useEffect(() => {
    animateCounter(15, (val) =>
      setCounters((prev) => ({ ...prev, years: val }))
    );
    animateCounter(40, (val) =>
      setCounters((prev) => ({ ...prev, owned: val }))
    );
    animateCounter(100, (val) =>
      setCounters((prev) => ({ ...prev, attached: val }))
    );
    animateCounter(5, (val) =>
      setCounters((prev) => ({ ...prev, branches: val }))
    );
  }, []);

  const services = [
    {
      icon: Truck,
      title: "Container Transport",
      description: "SXL, 20ft & 32ft MXL containerized cargo movement",
      link: "/services",
    },
    {
      icon: Package,
      title: "Industrial Cargo",
      description: "Safe handling of industrial and commercial goods",
      link: "/services",
    },
    {
      icon: MapPin,
      title: "Nationwide Network",
      description: "5 strategic branches across India for seamless delivery",
      link: "/fleet",
    },
  ];

  const clients = [
    { name: "Philips", logo: "/philips.png" },
    { name: "Samsung", logo: "/samsung.png" },
    { name: "Zebronics", logo: "/zebronics.png" },
    { name: "Elan", logo: "/elan_pro.png" },
    { name: "DP World", logo: "/dp world.jpeg" },
    { name: "TVS", logo: "/tvs.jpeg" },
  ];

  return (
    <div className="pt-20">
      {/* Top Header Bar */}
      <section className="bg-[#1a2f4a] py-2 border-b border-[#2a3f5a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-primary-red" />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-red" />
                <span>srrchennai9@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-red" />
              <span className="font-semibold">CALL US NOW:</span>
              <span className="font-bold">+91 9884704471</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4a]/95 via-[#1a2f4a]/90 to-[#1a2f4a]/85 z-10" />
          <img
            src="/SRR_truck photo.jpg"
            alt="SRR Logistics"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <p className="text-lg md:text-xl text-primary-red font-medium mb-4">
                Welcome to Sri Ragavendhira Roadways!
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Delivering Trust.
                <br />
                <span className="text-primary-red text-2xl md:text-3xl lg:text-4xl">
                  On Time. Every Time.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Sri Ragavendhira Roadways is committed to getting your goods
                where they need to go, when they need to get there. Contact us
                today for more information on our company and trucking services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-red text-white font-bold text-lg rounded-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl"
              >
                CONTACT US TODAY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            {/* Right Content - Truck Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center">
                <img
                  src="/truck_srr.jpg"
                  alt="SRR Truck"
                  className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f4a]/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-red mb-2">
                {counters.years}+
              </div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-red mb-2">
                {counters.owned}+
              </div>
              <div className="text-gray-700 font-medium">Owned Trucks</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-red mb-2">
                {counters.attached}+
              </div>
              <div className="text-gray-700 font-medium">Attached Vehicles</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-red mb-2">
                {counters.branches}
              </div>
              <div className="text-gray-700 font-medium">Branch Offices</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary-red" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-red font-semibold hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-navy text-white font-semibold rounded-lg hover:bg-primary-navy/90 transition-all transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Trusted By Leading Brands
            </h2>
            <p className="text-xl text-gray-600">
              We've served industry leaders across India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center h-40 group relative overflow-hidden border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-primary-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain relative z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#2a3f5a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Ship With Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with our team for a customized logistics solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-red text-white font-bold text-lg rounded-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl"
              >
                GET STARTED
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="/SRR profile - latest.pdf"
                download="SRR Company Profile"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-navy font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
