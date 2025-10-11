import React from 'react';
import { motion } from 'framer-motion';

// --- SVG Icons ---
const MapMarkerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary mt-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary mt-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary mt-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
    </svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary mt-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.94 6.94a1.5 1.5 0 00-.44 1.06v6a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-.44-1.06l-6.56 4.27a1.5 1.5 0 01-1.48 0L2.94 6.94z" />
        <path d="M18 5H4a1.5 1.5 0
            00-1.5 1.5v.638l8.132 5.3a3.5 3.5 0 003.736 0L19.5 7.138V6.5A1.5 1.5 0 0018 5z" />
    </svg>
);

// --- Animation Variant ---
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

// --- Main Component ---
const Contact = () => {
    return (
        <div className="relative min-h-screen bg-brand-background text-brand-text overflow-hidden">
            {/* ✅ Same Gradient Background as Home Page */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none" />

            <div className="relative z-10">
                {/* Page Header */}
                <motion.section
                    className="text-center py-16 lg:py-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary">Let’s Brew a Conversation</h1>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
                            Whether it’s a casual meet-up or just a moment to relax, our doors are always open — come sip and smile with us.
                        </p>
                    </div>
                </motion.section>

                {/* Contact Info + Form */}
                <motion.section
                    className="max-w-7xl mx-auto px-6 pb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-brand-text mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapMarkerIcon />
                                    <div>
                                        <h4 className="font-semibold text-lg">Address</h4>
                                        <p className="text-gray-600">
                                            Shop No. 106, Gr. Floor, Blue Diamond, Kachnartoli, Abdul Kalam Chowk, near Axis Bank, Singh More, Hesag, Ranchi, Jharkhand 834003, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <PhoneIcon />
                                    <div>
                                        <h4 className="font-semibold text-lg">Phone</h4>
                                        <p className="text-gray-600 hover:text-brand-primary transition-colors">
                                            <a href="tel:+919155354939">+91 9155354939</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MailIcon />
                                    <div>
                                        <h4 className="font-semibold text-lg">Email</h4>
                                        <p className="text-gray-600 hover:text-brand-primary transition-colors">
                                            <a href="mailto:chaicafeteria99@gmail.com">chaicafeteria99@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 border-t border-gray-200 pt-6 mt-6">
                                    <ClockIcon />
                                    <div>
                                        <h4 className="font-semibold text-lg">Opening Hours</h4>
                                        <p className="text-gray-600">Monday - Sunday: 10:00 AM - 02:30 AM</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={fadeInUp}>
                            <img src="/images/waiter-in-a-restaurant.png" alt="Waiter" />
                        </motion.div>
                    </div>
                </motion.section>

                {/* Google Map */}
                <motion.section
                    className="max-w-7xl mx-auto px-6 pb-24"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="rounded-2xl shadow-xl overflow-hidden h-96 md:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.521480431016!2d85.31036737548129!3d23.2968309789825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f51f460066ab37%3A0xa9a545b406aff74!2sChai%20cafeteria!5e0!3m2!1sen!2sin!4v1715412345678!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
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