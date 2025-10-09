import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaUsers, FaMugHot } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Reusable animation variant from the Landing Page for consistency
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const About = () => {
    return (
        <div className="min-h-screen bg-brand-background text-brand-text overflow-hidden">
            {/* Page Header */}
            <motion.section 
                className="relative text-center py-20 lg:py-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold text-brand-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        From a Simple Idea to Your Favorite Spot
                    </motion.h1>
                    <motion.p 
                        className="mt-6 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        The Chai Cafeteria was born from a simple passion: to create a cozy corner in Delhi where good food, great conversations, and the perfect cup of chai come together.
                    </motion.p>
                </div>
            </motion.section>

            {/* Our Philosophy Section */}
            <motion.section 
                className="max-w-7xl mx-auto px-6 py-16"
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div variants={fadeInUp} className="w-full">
                        <img 
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                            alt="Cafe Interior" 
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                    {/* Content */}
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl font-bold text-brand-text mb-6">Our Philosophy is Simple</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white rounded-full p-3 shadow-md mt-1"><FaLeaf className="text-xl text-brand-primary"/></div>
                                <div>
                                    <h4 className="font-semibold text-lg">Freshness First</h4>
                                    <p className="text-gray-600">We believe great food starts with great ingredients. We source the freshest local produce to craft every single item on our menu, from our burgers to our beverages.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white rounded-full p-3 shadow-md mt-1"><FaUsers className="text-xl text-brand-primary"/></div>
                                <div>
                                    <h4 className="font-semibold text-lg">A Place for Community</h4>
                                    <p className="text-gray-600">More than just a cafe, we aim to be a hub for our neighborhood. A place to catch up with friends, work on your next big idea, or simply enjoy a quiet moment.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white rounded-full p-3 shadow-md mt-1"><FaMugHot className="text-xl text-brand-primary"/></div>
                                <div>
                                    <h4 className="font-semibold text-lg">Passion in Every Cup</h4>
                                    <p className="text-gray-600">Our team is passionate about their craft. Whether it's a perfectly spiced chai or a juicy, handcrafted burger, we pour our hearts into everything we serve.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

             {/* Meet the Founder Section */}
            <motion.section
                className="py-16 bg-white"
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3 }}
                transition={{ staggerChildren: 0.3 }}
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                     <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-brand-text mb-4">Meet the Founder</motion.h2>
                     <motion.div variants={fadeInUp}>
                        <img 
                            src="https://media.licdn.com/dms/image/D4D03AQE41wUjV2bBwA/profile-displayphoto-shrink_800_800/0/1699990861074?e=1734144000&v=beta&t=Ue4R-q9qM0J3m-p7m0N7p2m-o5n6f8c2M0h2q4o5m-A" 
                            alt="Aman Kumar, Founder" 
                            className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
                        />
                        <h4 className="mt-4 text-xl font-semibold text-brand-primary">Sachidanand Singh</h4>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 italic">
                            "Chai Cafeteria was started with a simple thought — to create a warm and welcoming space where people could relax, connect, and share conversations over a perfect cup of chai and delicious snacks. In the busy life of Ranchi, we wanted to bring back the charm of those small tea breaks that refresh both mind and heart. Our goal was to blend traditional flavors with a cozy modern vibe, offering a place where every sip of chai and every bite of snack feels like comfort and togetherness."
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Final CTA */}
            <motion.section 
                id="order" 
                className="py-24 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
                    <h4 className="text-2xl font-bold text-brand-primary">Come Say Hello!</h4>
                    <p className="text-brand-text mt-2 mb-6">Explore our full menu of delicious food and drinks.</p>
                    <Link to="/menu" className="bg-brand-primary text-black hover:bg-brand-secondary hover:text-brand-text transition-all duration-300 inline-block px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105">
                        View Our Menu
                    </Link>
                </div>
            </motion.section>
        </div>
    )
}

export default About