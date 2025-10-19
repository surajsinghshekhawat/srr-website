import { motion } from "framer-motion";
import { Award, Target, Users, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable service you can count on",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Your cargo is our top priority",
    },
    {
      icon: Target,
      title: "Timeliness",
      description: "On-time delivery, every time",
    },
    {
      icon: Users,
      title: "Transparency",
      description: "Clear communication throughout the journey",
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
              About Sri Ragavendhira Roadways
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building India's supply chain, one delivery at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-primary-navy mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Sri Ragavendhira Roadways (SRR) has been a cornerstone of
                  India's logistics industry for over 15 years. We specialize in
                  containerized cargo transport, connecting businesses across
                  the nation with reliable, efficient transportation solutions.
                </p>
                <p>
                  What started as a small fleet has grown into a trusted network
                  of 40+ owned vehicles and 100+ attached trucks, serving major
                  industrial and commercial clients from Chennai to Gurugram,
                  Ahmedabad to Bangalore.
                </p>
                <p>
                  Our commitment to excellence, safety, and customer
                  satisfaction has made us the preferred logistics partner for
                  leading brands across India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/truck.jpg"
                  alt="Sri Ragavendhira Roadways Fleet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-red text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-red" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-navy mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become India's most trusted and efficient logistics partner,
                setting new standards in cargo transportation while fostering
                sustainable growth for our clients and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary-red" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-navy mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver exceptional logistics solutions with unwavering
                reliability, ensuring our clients' cargo reaches its destination
                safely, on time, and with complete transparency throughout the
                journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Meet the visionary behind Sri Ragavendhira Roadways
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white p-12 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center text-6xl font-bold">
                HS
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-3xl font-bold mb-2">
                  Mr. Hanuman Singh Shekhawat
                </h3>
                <p className="text-xl text-gray-200 mb-4">
                  Founder & Proprietor
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With over 20 years of experience in the logistics industry,
                  Mr. Shekhawat has built Sri Ragavendhira Roadways from the
                  ground up. His vision of reliable, transparent, and
                  customer-centric transportation has shaped the company into
                  what it is today.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                  <value.icon className="h-8 w-8 text-primary-red" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
