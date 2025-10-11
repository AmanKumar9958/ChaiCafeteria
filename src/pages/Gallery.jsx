import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample local images — replace with your own café images
import img1 from "/images/cafe_1.webp";
import img2 from "/images/cafe_2.webp";
import img3 from "/images/cafe_3.webp";
import img4 from "/images/cafe_4.webp";
import img5 from "/images/menu_1.jpg";
import img6 from "/images/menu_2.jpg";
import img7 from "/images/menu_3.jpg";
import img8 from "/images/opening.jpg";
import img9 from "/images/pamplet_1.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative min-h-screen bg-brand-background text-brand-text overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-4">
            Our Café Moments
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            A glimpse into the cozy corners, freshly brewed vibes, and memories
            shared at our café. Enjoy the visual warmth!
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)} // 👈 Open modal on click
            >
              <img
                src={img}
                alt={`Cafe Image ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-999 cursor-pointer"
          onClick={() => setSelectedImage(null)} // 👈 Close modal on click
        >
          <motion.img
            src={selectedImage}
            alt="Full view"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
