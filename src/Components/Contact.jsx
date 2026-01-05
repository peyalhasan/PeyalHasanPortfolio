import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser'; 
import BlurBlob from './BlurBlob';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24  text-white overflow-hidden">
      {/* Background Blobs */}
      <BlurBlob position={{ top: "10%", left: "5%" }} size={{ width: "350px", height: "350px" }} />
      <BlurBlob position={{ top: "60%", left: "80%" }} size={{ width: "300px", height: "300px" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-6 italic bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent tracking-tighter"
          >
            LET'S WORK TOGETHER
          </motion.h2>
          <div className="h-1.5 w-24 bg-green-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto italic">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0f0e13] rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative"
            >
              {isSuccess && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 z-20 bg-[#0f0e13]/90 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-6"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out, Peyal will get back to you soon.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-6 text-green-500 underline uppercase tracking-widest text-xs font-bold">Send Another</button>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2 group-focus-within:text-green-500 transition-colors">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 text-white transition-all placeholder:text-gray-700"
                    placeholder="Your Name"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2 group-focus-within:text-green-500 transition-colors">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 text-white transition-all placeholder:text-gray-700"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2 group-focus-within:text-green-500 transition-colors">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 text-white transition-all placeholder:text-gray-700 resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95 ${
                    isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-green-500 text-black hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Why Me */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 gap-6">
                <ContactInfoCard 
                  icon={<FaEnvelope />} 
                  title="Email" 
                  value="peyalhasan143@gmail.com" 
                  link="mailto:peyalhasan143@gmail.com" 
                />
                <ContactInfoCard 
                  icon={<FaPhone />} 
                  title="Phone" 
                  value="+880 1794 904180" 
                  link="tel:+8801794904180" 
                />
                <ContactInfoCard 
                  icon={<FaMapMarkerAlt />} 
                  title="Location" 
                  value="Gazipur, Dhaka, Bangladesh" 
                />
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <h3 className="text-xl font-bold mb-6 text-green-500 uppercase tracking-tighter">Why Work With Me?</h3>
                <ul className="space-y-4">
                  <BenefitItem text="Fast response (within 24 hours)" />
                  <BenefitItem text="Clean, maintainable & scalable code" />
                  <BenefitItem text="Modern & User-centric designs" />
                  <BenefitItem text="End-to-end Project Management" />
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

// সাব-কম্পোনেন্ট: কন্টাক্ট ইনফো কার্ড
const ContactInfoCard = ({ icon, title, value, link }) => (
  <div className="flex items-center gap-5 p-6 bg-[#0f0e13] rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group">
    <div className="p-4 bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">{title}</p>
      {link ? (
        <a href={link} className="text-lg font-medium hover:text-green-500 transition-colors">{value}</a>
      ) : (
        <p className="text-lg font-medium">{value}</p>
      )}
    </div>
  </div>
);

// সাব-কম্পোনেন্ট: বেনিফিট আইটেম
const BenefitItem = ({ text }) => (
  <li className="flex items-center gap-3 text-gray-400">
    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
    <span className="text-sm">{text}</span>
  </li>
);

export default Contact;