import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import BlurBlob from './BlurBlob';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-10 bg-gray-900 text-white">
      <BlurBlob position={{ top:"35%", left:"20%" }} size={{ width:"25%", height:"30%"}} ></BlurBlob>
      <BlurBlob position={{ top:"60%", left:"70%" }} size={{ width:"25%", height:"30%"}} ></BlurBlob>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-9/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-gray-900 mt-15 py-3 px-6 rounded-lg font-bold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-lg" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-green-500 mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500 rounded-full flex-shrink-0">
                      <FaEnvelope className="text-gray-900 text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <a 
                        href="mailto:peyalhasan143@gmail.com" 
                        className="text-gray-300 hover:text-green-500 transition-colors duration-200 break-all"
                      >
                        peyalhasan143@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500 rounded-full flex-shrink-0">
                      <FaPhone className="text-gray-900 text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <a 
                        href="tel:+8801794904180" 
                        className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                      >
                        +8801794904180
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <FaMapMarkerAlt className="text-gray-900 text-lg" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-300 hover:text-green-500 transition-colors duration-200">
                        Gazipur, Dahaka, Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-green-500 mb-4">
                  Why Work With Me?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Fast response time (within 24 hours)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Clean and efficient code
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Modern and responsive designs
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-4">
            Ready to start your project?
          </p>
          <a
            href="mailto:peyalhasan143@gmail.com"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-green-500 text-green-500 px-8 py-3 rounded-full font-bold hover:bg-green-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope />
            Email Me Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;