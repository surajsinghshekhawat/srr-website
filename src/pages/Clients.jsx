import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "Philips", logo: "/philips.png" },
    { name: "Samsung", logo: "/samsung.png" },
    { name: "Zebronics", logo: "/zebronics.png" },
    { name: "Elan", logo: "/elan_pro.png" },
    { name: "TVS", logo: "/tvs.jpeg" },
    { name: "Cresco", logo: "/cresco.jpeg" },
    { name: "DP World", logo: "/dp world.jpeg" },
    { name: "Incom", logo: "/incom.jpeg" },
    { name: "MBM", logo: "/mbm.png" },
    { name: "Oxair", logo: "/oxair.jpeg" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Philips India",
      position: "Supply Chain Manager",
      content:
        "Sri Ragavendhira Roadways has been our trusted partner for over 5 years. Their reliability and on-time delivery have been exceptional. We've never had a single issue with our cargo.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Samsung Electronics",
      position: "Operations Head",
      content:
        "The professionalism and efficiency of SRR is unmatched. Their real-time tracking and communication make our job so much easier. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Zebronics",
      position: "Logistics Coordinator",
      content:
        "Working with SRR has been a game-changer for our business. Their nationwide network and flexible solutions have helped us streamline our operations significantly.",
      rating: 5,
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
              Our Clients
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Trusted by leading brands across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Our Esteemed Clients
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to serve industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.15, y: -10, rotate: 3 }}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center h-48 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-primary-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 max-w-full object-contain relative z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="h-10 w-10 text-primary-red/20 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary-red font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Building long-term partnerships through excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "99% On-Time Delivery",
              "24/7 Customer Support",
              "Real-Time Tracking",
              "Competitive Pricing",
              "Nationwide Network",
              "Custom Solutions",
              "Safe & Secure",
              "Experienced Team",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-primary-gray rounded-xl"
              >
                <div className="w-2 h-2 bg-primary-red rounded-full" />
                <span className="font-medium text-gray-700">{benefit}</span>
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
              Ready to Join Our Client Family?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Experience the SRR difference today
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-red text-white font-semibold rounded-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
