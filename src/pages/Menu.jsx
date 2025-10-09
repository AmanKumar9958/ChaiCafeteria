import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPepperHot, FaGlassMartini, FaHamburger, FaUtensils, FaPizzaSlice, FaLeaf } from 'react-icons/fa';

// --- DUMMY DATA ---
// This is where you'll put all your menu items.
// I've created a structure that's easy to expand.
const menuData = {
  chowmein: {
    name: 'Chowmein',
    icon: FaPepperHot,
    items: [
      { name: 'Veg Chowmein', price: '₹120', description: 'Stir-fried noodles with fresh, crisp vegetables.', imgSrc: '/images/menu/chowmein-veg.png' },
      { name: 'Egg Chowmein', price: '₹140', description: 'A classic favorite with scrambled egg and veggies.', imgSrc: '/images/menu/chowmein-egg.png' },
      { name: 'Chicken Hakka Noodles', price: '₹180', description: 'Spicy noodles with tender chicken pieces.', imgSrc: '/images/menu/chowmein-chicken.png' },
      { name: 'Singapore Noodles', price: '₹190', description: 'Curry-flavored noodles with mixed meats and veggies.', imgSrc: '/images/menu/chowmein-singapore.png' },
    ]
  },
  burgers: {
    name: 'Burgers',
    icon: FaHamburger,
    items: [
      { name: 'Aloo Tikki Burger', price: '₹90', description: 'A crispy potato patty with our special sauce.', imgSrc: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60' },
      { name: 'Spicy Paneer Burger', price: '₹150', description: 'Grilled paneer steak with a fiery marinade.', imgSrc: '/images/menu/burger-paneer.png' },
      { name: 'Chicken Zinger Burger', price: '₹200', description: 'Extra crispy chicken fillet with lettuce and mayo.', imgSrc: '/images/menu/burger-zinger.png' },
    ]
  },
  rolls: {
    name: 'Rolls',
    icon: FaUtensils,
    items: [
      { name: 'Paneer Tikka Roll', price: '₹160', description: 'Smoky paneer tikka wrapped in a soft paratha.', imgSrc: '/images/rolls.png' },
      { name: 'Chicken Seekh Roll', price: '₹190', description: 'Juicy chicken seekh kebabs with mint chutney.', imgSrc: '/images/menu/roll-chicken.png' },
      { name: 'Egg Roll', price: '₹110', description: 'A simple classic, fried egg with onions and sauces.', imgSrc: '/images/menu/roll-egg.png' },
    ]
  },
  beverages: {
    name: 'Beverages',
    icon: FaGlassMartini,
    items: [
      { name: 'Masala Chai', price: '₹50', description: 'Our signature spiced tea, brewed to perfection.', imgSrc: '/images/beverages.png' },
      { name: 'Cold Coffee', price: '₹120', description: 'Rich, creamy, and cold. A perfect refresher.', imgSrc: '/images/menu/bev-coldcoffee.png' },
      { name: 'Virgin Mojito', price: '₹140', description: 'A classic mocktail with mint and lime.', imgSrc: '/images/menu/bev-mojito.png' },
    ]
  },
};

// Animation variant for the grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variant for the grid items
const gridItemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('chowmein');
  const activeItems = menuData[selectedCategory].items;

  return (
    <div className="min-h-screen bg-brand-background text-brand-text">
      {/* Page Header */}
      <motion.section 
        className="text-center py-16 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-brand-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafted with passion, served with love. Explore our delicious offerings.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Scrollbar */}
      <div className="sticky top-[112px] z-30 bg-brand-background/80 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-hide">
            {Object.keys(menuData).map((key) => {
              const category = menuData[key];
              const Icon = category.icon;
              const isActive = selectedCategory === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'bg-brand-primary text-white shadow-md' : 'bg-white text-brand-text hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={isActive ? 'text-white' : 'text-brand-primary'}/>
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Items Display */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory} // This key is crucial for AnimatePresence to work on change
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
          >
            {activeItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group"
                variants={gridItemVariants}
              >
                <div className="overflow-hidden">
                    <img src={item.imgSrc} alt={item.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-bold text-lg text-brand-primary">{item.name}</h4>
                  <p className="text-sm text-gray-600 mt-1 flex-grow">{item.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-brand-text text-lg">{item.price}</span>
                    <button className="bg-brand-secondary text-brand-text text-sm font-bold px-4 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors duration-300">
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Menu;