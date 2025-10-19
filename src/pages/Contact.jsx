import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(
        `Inquiry from ${data.name} - ${data.company}`
      );
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
      );
      const mailtoLink = `mailto:srrchennai9@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      setSubmitStatus({
        type: "success",
        message: "Opening your email client... We'll get back to you soon!",
      });
      reset();
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const branches = [
    {
      city: "Chennai",
      address:
        "Flat No. 11, 1st Floor, Door No. 19/7, Kilburn Nagar, Madhavaram, Chennai – 600060",
      phone: "+91 9884704471",
      email: "srrchennai9@gmail.com",
    },
    {
      city: "Gurgaon",
      address:
        "No. 121 feet Road, Dharm Colony, Palam Vihar, Opp. Spanish Court, Gurgaon - 122001",
      phone: "+91 9310205098",
      email: "vcschennai@yahoo.com",
    },
    {
      city: "Ahmedabad",
      address:
        "Office No BT-18, 3rd Floor, Radhey Business Empire, S P Ring Road, Aslali Circle, Aslali, Ahmedabad - 382427",
      phone: "+91 9310205098",
      email: "vcschennai@yahoo.com",
    },
    {
      city: "Bangalore",
      address:
        "No. 36/2, Dhawan Complex, Opp Balaji Electro Control, Dasanapur, Hobli, Madanayakan Halli, Bangalore - 562123",
      phone: "+91 9342091555",
      email: "vcschennai@yahoo.com",
    },
    {
      city: "Bhiwandi",
      address: "Om Sai Complex, Rehanal Village, Rehanal, Bhiwandi - 421302",
      phone: "+91 9820325096",
      email: "vcschennai@yahoo.com",
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to help. Reach out to us for any inquiries or quotes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-primary-navy mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company *
                  </label>
                  <input
                    {...register("company", {
                      required: "Company name is required",
                    })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your logistics needs..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-red text-white font-semibold rounded-lg hover:bg-red-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-primary-navy mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 9884704471</p>
                    <p className="text-gray-600">24/7 Customer Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">srrchennai9@gmail.com</p>
                    <p className="text-gray-600">vcschennai@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-600">
                      Sunday: Emergency Support Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-primary-gray rounded-2xl p-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886540684!2d80.06892478828125!3d13.047487800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-primary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary-navy mb-4">
              Our Branch Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our offices across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.slice(0, 3).map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-navy mb-1">
                      {branch.city}
                    </h3>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-primary-red" />
                    {branch.phone}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-primary-red" />
                    {branch.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last 2 Cards Centered */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {branches.slice(3, 5).map((branch, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-navy mb-1">
                      {branch.city}
                    </h3>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-primary-red" />
                    {branch.phone}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-primary-red" />
                    {branch.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Profile CTA */}
      <section className="py-20 bg-primary-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Download Our Company Profile
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get detailed information about our services, fleet, and network
            </p>
            <a
              href="/SRR profile - latest.pdf"
              download="SRR Company Profile"
              className="inline-flex items-center px-8 py-4 bg-primary-red text-white font-semibold rounded-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              <Send className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
