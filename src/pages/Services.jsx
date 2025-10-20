import { motion } from "framer-motion";
import { Truck, Package, Route, Clock, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Containerized Cargo Transport",
      description:
        "Specialized transportation for 32ft SXL, 20ft & 32ft MXL containers with state-of-the-art handling equipment.",
      features: [
        "32ft SXL, 20ft & 32ft MXL Container Transport",
        "Dedicated Container Handling",
        "Secure Loading & Unloading",
      ],
      image: "/truck.jpg",
    },
    {
      icon: Package,
      title: "Commercial Cargo Handling",
      description:
        "Safe and efficient movement of industrial goods, machinery, and heavy equipment across India.",
      features: [
        "Heavy Machinery Transportation",
        "Industrial Equipment Handling",
        "Weather-Controlled Cargo",
        "Specialized Packaging Solutions",
      ],
      image: "/warehouse.jpg",
    },
    {
      icon: Route,
      title: "Custom Transport Solutions",
      description:
        "Tailored logistics solutions designed to meet your specific business requirements and timelines.",
      features: [
        "Custom Route Planning",
        "Flexible Scheduling",
        "Multi-Drop Services",
        "Express Delivery",
      ],
      image: "/routenew.jpeg",
    },
    {
      icon: Clock,
      title: "Dispatch & Route Support",
      description:
        "24/7 dispatch support and real-time tracking to ensure your cargo is always monitored.",
      features: [
        "24/7 on Call Support",
        "GPS Tracking",
        "Route Optimization",
        "Emergency Support",
      ],
      image: "/dispatch_cartoon.webp",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous safety protocols and trained personnel",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99% on-time delivery rate across all routes",
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective",
      description: "Competitive pricing without compromising quality",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-navy/90 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary-red" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-red mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Why Choose Sri Ragavendhira Roadways?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver excellence in every shipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary-red" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Regions We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Nationwide coverage across major industrial hubs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              "Tamil Nadu",
              "Maharashtra",
              "Gujarat",
              "Telangana",
              "Madhya Pradesh",
              "Delhi - NCR",
              "Karnataka",
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center group"
              >
                <div className="text-3xl mb-3">📍</div>
                <span className="font-semibold text-lg">{region}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Ready to Get a Quote?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with our team for a customized logistics solution
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-red text-white font-semibold rounded-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
