import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- INLINE SVG ICONS ---
const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 5.5a3 3 0 00-3 0V13a1 1 0 001 1h1a1 1 0 001-1v-1.5zM16 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 5.5a3 3 0 00-3 0V13a1 1 0 001 1h1a1 1 0 001-1v-1.5z" />
    </svg>
);
const MugHotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);


// Reusable animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const About = () => {
  return (
    <div className="min-h-screen bg-brand-background text-brand-text overflow-hidden" style={{'--brand-background': '#FFF8F0', '--brand-text': '#4A4A4A', '--brand-primary': '#E66328', '--brand-secondary': '#FDBD26'}}>
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
            className="mt-6 text-lg max-w-2xl mx-auto text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            In the busy life of Ranchi, we wanted to bring back the charm of those small tea breaks that refresh both mind and heart.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Philosophy Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div variants={fadeInUp} className="w-full">
            <img 
              src="/images/cafe_area.jpg" 
              alt="Cafe Interior" 
              className="rounded-2xl shadow-xl object-cover w-full h-full"
            />
          </motion.div>
          {/* Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-brand-text mb-6">Our Philosophy is Simple</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-md mt-1"><LeafIcon /></div>
                <div>
                  <h4 className="font-semibold text-lg">Freshness First</h4>
                  <p className="text-gray-600">We believe great food starts with great ingredients. We source the freshest local produce to craft every single item on our menu.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-md mt-1"><UsersIcon /></div>
                <div>
                  <h4 className="font-semibold text-lg">A Place for Community</h4>
                  <p className="text-gray-600">More than just a cafe, we aim to be a hub for our neighborhood. A place to catch up with friends, work, or simply enjoy a quiet moment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-md mt-1"><MugHotIcon /></div>
                <div>
                  <h4 className="font-semibold text-lg">Passion in Every Cup</h4>
                  <p className="text-gray-600">Our team is passionate about their craft. Whether it's a perfectly spiced chai or a juicy burger, we pour our hearts into everything we serve.</p>
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-brand-text mb-4">Meet the Founder</motion.h2>
            <motion.div variants={fadeInUp}>
            <img 
                src="/images/Owner.webp" 
                alt="Sachidanand Singh, Founder" 
                className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
            />
            <h4 className="mt-4 text-xl font-semibold text-brand-primary">Sachida Kumar Singh</h4>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 italic">
                "Chai Cafeteria was started with a simple thought — to create a warm and welcoming space where people could relax, connect, and share conversations over a perfect cup of chai and delicious snacks."
            </p>
            </motion.div>
        </div>
      </motion.section>

      {/* --- NEW: Meet Our Team Section --- */}
      <motion.section
        className="py-20 bg-brand-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-brand-text mb-12">
                The Heart of Our Cafe
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
                {/* Team Member 1 */}
                <motion.div variants={fadeInUp}>
                    <img 
                        src="/images/member_1.webp"
                        alt="Team Member One"
                        className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
                    />
                    <h4 className="mt-5 text-xl font-semibold text-brand-primary">Soni Kumari</h4>
                    <p className="mt-3 text-gray-700">
                        "Creating dishes that bring a smile to people's faces is my greatest joy. Every ingredient has a story, and I love telling it through our food."
                    </p>
                </motion.div>

                {/* Team Member 2 */}
                <motion.div variants={fadeInUp}>
                    <img 
                        src="/images/member_2.webp"
                        alt="Team Member Two"
                        className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
                    />
                    <h4 className="mt-5 text-xl font-semibold text-brand-primary">Nishant</h4>
                    <p className="mt-3 text-gray-700">
                        "For me, this cafe is all about the people. I strive to make sure every person who walks through our doors feels like a part of our family."
                    </p>
                </motion.div>
            </div>
          </div>
      </motion.section>


      {/* Final CTA */}
      <motion.section 
        id="order" 
        className="py-24 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8 text-center bg-brand-background">
          <h4 className="text-2xl font-bold text-brand-primary">Come Say Hello!</h4>
          <p className="text-brand-text mt-2 mb-6">Explore our full menu of delicious food and drinks.</p>
          <Link to="/menu" className="bg-brand-primary text-black hover:bg-brand-secondary transition-all duration-300 inline-block px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform">
            View Our Menu
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default About;
