import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

// Reusable animation variant for consistency
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const Contact = () => {
    return (
        <div className="relative min-h-screen bg-brand-background text-brand-text overflow-hidden">
            {/* Gradient Overlay from other pages */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(230,99,40,0.08)] via-[rgba(253,189,38,0.04)] to-transparent pointer-events-none"
            />

            <div className="relative z-10">
                {/* Page Header */}
                <motion.section 
                    className="text-center py-16 lg:py-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary">Get in Touch</h1>
                        <p className="mt-4 text-lg max-w-2xl mx-auto">
                            We'd love to hear from you. Whether it's a question, feedback, or a simple 'hello', don't hesitate to reach out or visit us.
                        </p>
                    </div>
                </motion.section>

                {/* Main Content: Details + Form */}
                <motion.section
                    className="max-w-7xl mx-auto px-6 pb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Side: Contact Details */}
                        <motion.div variants={fadeInUp} className="bg-white/50 p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold text-brand-text mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-2xl text-brand-primary mt-1"/>
                                    <div>
                                        <h4 className="font-semibold">Address</h4>
                                        {/* TODO: Update with your address */}
                                        <p className="text-gray-600">Shop No. 5, Connaught Place, New Delhi, Delhi 110001, India</p>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <FaPhone className="text-xl text-brand-primary mt-1"/>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        {/* TODO: Update with your phone number */}
                                        <p className="text-gray-600">+91 98765 43210</p>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <FaEnvelope className="text-xl text-brand-primary mt-1"/>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        {/* TODO: Update with your email */}
                                        <p className="text-gray-600">hello@chaicafeteria.com</p>
                                    </div>
                                </div>
                                {/* Hours */}
                                <div className="flex items-start gap-4 border-t border-gray-200 pt-6 mt-6">
                                    <FaClock className="text-xl text-brand-primary mt-1"/>
                                    <div>
                                        <h4 className="font-semibold">Opening Hours</h4>
                                        {/* TODO: Update with your hours */}
                                        <p className="text-gray-600">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Contact Form */}
                        <motion.div variants={fadeInUp} className="bg-white/50 p-8 rounded-2xl shadow-lg">
                             <h2 className="text-2xl font-bold text-brand-text mb-6">Send us a Message</h2>
                             <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                                </div>
                                 <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-secondary hover:text-brand-text transition-all duration-300 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105">
                                    Send Message
                                </button>
                             </form>
                        </motion.div>
                    </div>
                </motion.section>

                 {/* Map Section */}
                <motion.section
                    className="max-w-7xl mx-auto px-6 pb-24"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="rounded-2xl shadow-xl overflow-hidden h-96">
                        {/* TODO: Replace the `src` with your Google Maps embed link */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996181766946!2d77.2138864752538!3d28.63000578426034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741cf11%3A0x24767b7278255ac!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1728487770000" 
                            width="100%" 
                            height="100%" 
                            style={{ border:0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Contact;