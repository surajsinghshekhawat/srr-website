import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Navigation,
  Clock,
  TrendingUp,
  Shield,
  Users,
  Award,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const Fleet = () => {
  const [selectedBranch, setSelectedBranch] = useState("Chennai");

  const branches = [
    {
      name: "Chennai",
      lat: 13.0827,
      lng: 80.2707,
      address:
        "Flat No. 11, 1st Floor, Door No. 19/7, Kilburn Nagar, Madhavaram, Chennai – 600060",
    },
    {
      name: "Gurgaon",
      lat: 28.4089,
      lng: 77.0378,
      address:
        "No. 121 feet Road, Dharm Colony, Palam Vihar, Opp. Spanish Court, Gurgaon - 122001",
    },
    {
      name: "Ahmedabad",
      lat: 23.0225,
      lng: 72.5714,
      address:
        "Office No BT-18, 3rd Floor, Radhey Business Empire, S P Ring Road, Aslali Circle, Aslali, Ahmedabad - 382427",
    },
    {
      name: "Bangalore",
      lat: 12.9716,
      lng: 77.5946,
      address:
        "No. 36/2, Dhawan Complex, Opp Balaji Electro Control, Dasanapur, Hobli, Madanayakan Halli, Bangalore - 562123",
    },
    {
      name: "Bhiwandi",
      lat: 19.296,
      lng: 73.0625,
      address: "Om Sai Complex, Rehanal Village, Rehanal, Bhiwandi - 421302",
    },
  ];

  const selectedBranchData = branches.find((b) => b.name === selectedBranch);

  const fleetStats = [
    { label: "Owned Vehicles", value: "40+", icon: Truck },
    { label: "Attached Vehicles", value: "100+", icon: Truck },
    { label: "Container Types", value: "SXL, 20ft & 32ft MXL", icon: Truck },
    { label: "Branch Offices", value: "5", icon: MapPin },
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
              Fleet & Network
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A robust fleet and strategic network covering India's major
              industrial hubs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Our Fleet Strength
            </h2>
            <p className="text-xl text-gray-600">
              40+ Owned | 100+ Attached Vehicles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Our Branch Network
            </h2>
            <p className="text-xl text-gray-600">
              Strategic locations across India for seamless operations
            </p>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-gray rounded-2xl p-8 mb-12"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d${
                  selectedBranchData.lng
                }!3d${
                  selectedBranchData.lat
                }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${
                  selectedBranchData.lat
                }%2C${
                  selectedBranchData.lng
                }!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=${encodeURIComponent(
                  selectedBranchData.address
                )}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Branch Cards - First 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.slice(0, 3).map((branch, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedBranch(branch.name)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 text-left ${
                  selectedBranch === branch.name
                    ? "border-primary-red bg-primary-red/5"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedBranch === branch.name
                        ? "bg-primary-red"
                        : "bg-primary-red/10"
                    }`}
                  >
                    <MapPin
                      className={`h-6 w-6 ${
                        selectedBranch === branch.name
                          ? "text-white"
                          : "text-primary-red"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-navy mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                    <p className="text-gray-600 text-sm">
                      24/7 Operations Center
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Last 2 Cards Centered */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {branches.slice(3, 5).map((branch, index) => (
              <motion.button
                key={index + 3}
                onClick={() => setSelectedBranch(branch.name)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 text-left w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                  selectedBranch === branch.name
                    ? "border-primary-red bg-primary-red/5"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedBranch === branch.name
                        ? "bg-primary-red"
                        : "bg-primary-red/10"
                    }`}
                  >
                    <MapPin
                      className={`h-6 w-6 ${
                        selectedBranch === branch.name
                          ? "text-white"
                          : "text-primary-red"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-navy mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                    <p className="text-gray-600 text-sm">
                      24/7 Operations Center
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Performance Metrics */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Fleet Performance Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Proven track record of excellence and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* On-Time Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-5xl font-bold text-primary-red mb-2">
                99%
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-2">
                On-Time Delivery
              </div>
              <div className="text-gray-600 text-sm">
                Consistent timely deliveries across all routes
              </div>
            </motion.div>

            {/* Load Capacity Utilization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-5xl font-bold text-primary-red mb-2">
                95%
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-2">
                Load Utilization
              </div>
              <div className="text-gray-600 text-sm">
                Optimal space utilization for cost efficiency
              </div>
            </motion.div>

            {/* Fuel Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-5xl font-bold text-primary-red mb-2">
                8.5
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-2">
                KM/L Average
              </div>
              <div className="text-gray-600 text-sm">
                Fuel-efficient fleet for sustainable operations
              </div>
            </motion.div>

            {/* Customer Satisfaction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-5xl font-bold text-primary-red mb-2">
                4.8/5
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-2">
                Customer Rating
              </div>
              <div className="text-gray-600 text-sm">
                Based on 500+ client reviews
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Technology & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Our Fleet Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern vehicles and experienced professionals at your service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GPS Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Navigation className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                GPS Tracking
              </h3>
              <p className="text-gray-200">
                Monitor your cargo 24/7 with real-time location updates
              </p>
            </motion.div>

            {/* Expert Drivers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-primary-red to-red-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Expert Drivers
              </h3>
              <p className="text-gray-100">
                Highly skilled professionals with extensive road knowledge and
                experience
              </p>
            </motion.div>

            {/* Route Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Route Expertise
              </h3>
              <p className="text-gray-200">
                Deep knowledge of Indian highways and logistics corridors
              </p>
            </motion.div>

            {/* Insurance Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-red to-red-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Insurance Coverage
              </h3>
              <p className="text-gray-100">
                Comprehensive cargo insurance for complete peace of mind
              </p>
            </motion.div>

            {/* 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-200">
                Round-the-clock dispatch and emergency support
              </p>
            </motion.div>

            {/* Regular Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-red to-red-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Well Maintained Fleet
              </h3>
              <p className="text-gray-100">
                Regular servicing and maintenance for reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">
              Fleet Features
            </h2>
            <p className="text-xl text-gray-200">
              Modern vehicles equipped with the latest technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                GPS Tracking
              </h3>
              <p className="text-gray-200">
                Real-time location tracking for all vehicles
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-200">
                Round-the-clock dispatch and customer support
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Well Maintained
              </h3>
              <p className="text-gray-200">
                Regular servicing and maintenance for reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
