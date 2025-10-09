import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPepperHot, FaGlassMartini, FaHamburger, FaUtensils } from 'react-icons/fa';

// --- MENU DATA (using Unsplash Images) ---
// (No changes to this part, it remains the same)
const menuData = {
  chowmein: {
    name: 'Chowmein',
    icon: FaPepperHot,
    items: [
      { name: 'Veg Chowmein', price: '₹120', description: 'Stir-fried noodles with fresh, crisp vegetables.', imgSrc: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1292' },
      { name: 'Egg Chowmein', price: '₹140', description: 'A classic favorite with scrambled egg and veggies.', imgSrc: 'https://images.unsplash.com/photo-1626728092363-428de03c94a7?q=80&w=1287' },
      { name: 'Chicken Hakka Noodles', price: '₹180', description: 'Spicy noodles with tender chicken pieces.', imgSrc: 'https://images.unsplash.com/photo-1626728014454-76615b1e102b?q=80&w=1287' },
      { name: 'Prawn Schezwan Noodles', price: '₹220', description: 'Fiery schezwan noodles loaded with juicy prawns.', imgSrc: 'https://images.unsplash.com/photo-1563245362-d7b1a6a6a0e8?q=80&w=1287' },
    ]
  },
  burgers: {
    name: 'Burgers',
    icon: FaHamburger,
    items: [
      { name: 'Aloo Tikki Burger', price: '₹90', description: 'A crispy potato patty with our special tangy sauce.', imgSrc: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1472' },
      { name: 'Spicy Paneer Burger', price: '₹150', description: 'Grilled paneer steak with a fiery tandoori marinade.', imgSrc: 'https://images.unsplash.com/photo-1603614568433-8c4e16107513?q=80&w=1470' },
      { name: 'Chicken Zinger Burger', price: '₹200', description: 'Extra crispy chicken fillet with lettuce and mayo.', imgSrc: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1299' },
      { name: 'Mutton Kebab Burger', price: '₹250', description: 'A juicy mutton kebab patty with mint chutney.', imgSrc: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1470' },
      { name: 'Double Cheese Burger', price: '₹280', description: 'Two layers of cheese and patty for the extra hungry.', imgSrc: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1287' },
    ]
  },
  rolls: {
    name: 'Rolls',
    icon: FaUtensils,
    items: [
      { name: 'Paneer Tikka Roll', price: '₹160', description: 'Smoky paneer tikka wrapped in a soft paratha.', imgSrc: 'https://images.unsplash.com/photo-1605596347314-b9152b1b3aab?q=80&w=1470' },
      { name: 'Chicken Seekh Roll', price: '₹190', description: 'Juicy chicken seekh kebabs with mint chutney.', imgSrc: 'https://images.unsplash.com/photo-1625220194771-7ebdea0d0270?q=80&w=1470' },
      { name: 'Mutton Boti Roll', price: '₹240', description: 'Tender mutton boti pieces in a flaky wrap.', imgSrc: 'https://images.unsplash.com/photo-1619822648742-b883a07538a2?q=80&w=1470' },
      { name: 'Veggie Delight Roll', price: '₹130', description: 'A mix of fresh, crunchy vegetables and sauces.', imgSrc: 'https://images.unsplash.com/photo-1631110292398-8a4b4550066d?q=80&w=1334' },
    ]
  },
  beverages: {
    name: 'Beverages',
    icon: FaGlassMartini,
    items: [
      { name: 'Masala Chai', price: '₹50', description: 'Our signature spiced tea, brewed to perfection.', imgSrc: 'https://images.unsplash.com/photo-1594582319362-282a524a1b02?q=80&w=1288' },
      { name: 'Cold Coffee', price: '₹120', description: 'Rich, creamy, and cold. A perfect refresher.', imgSrc: 'https://images.unsplash.com/photo-1579953724395-a2283a7c64a6?q=80&w=1287' },
      { name: 'Virgin Mojito', price: '₹140', description: 'A classic mocktail with fresh mint and zesty lime.', imgSrc: 'https://images.unsplash.com/photo-1551538850-096b759648b2?q=80&w=1287' },
      { name: 'Iced Tea', price: '₹110', description: 'Chilled black tea with a hint of lemon.', imgSrc: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1287' },
    ]
  },
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [radius, setRadius] = useState(220); // State for the orbit radius

  const activeCategory = selectedCategory ? menuData[selectedCategory] : null;
  const orbitContainerRef = useRef(null); // Ref for the container div

  // This effect calculates the radius based on the container size
  useLayoutEffect(() => {
    if (orbitContainerRef.current) {
      const { width, height } = orbitContainerRef.current.getBoundingClientRect();
      const smallerDimension = Math.min(width, height);
      // Calculate radius to be 40% of the container's smaller side, minus a little padding
      const newRadius = smallerDimension * 0.4 - 20;
      setRadius(newRadius > 0 ? newRadius : 100); // Ensure radius is a positive number
    }
  }, [selectedCategory]); // Re-calculate when a category is selected

  const getPosition = (index, total) => {
    const angle = (index / total) * 360;
    // Use the dynamic radius from state
    const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
    const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
    return { x, y };
  };

  return (
    // ---- FIX 1: Main container is now a flex column that fits the screen height ----
    <div className="h-screen flex flex-col bg-brand-background text-brand-text overflow-hidden">
      <div className="text-center pt-12 lg:pt-16 pb-6 flex-shrink-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary">Discover Our Menu</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto px-4">Click a category to begin your culinary journey.</p>
      </div>

      <div className="relative z-40 flex justify-center items-center gap-4 md:gap-8 py-4 flex-wrap flex-shrink-0">
        {Object.keys(menuData).map(key => {
          const category = menuData[key];
          const Icon = category.icon;
          return (
            <motion.div
              key={key}
              layoutId={`category-container-${key}`}
              onClick={() => setSelectedCategory(key)}
              className="p-4 md:p-5 rounded-full bg-white shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Icon className="text-2xl md:text-3xl text-brand-primary" />
            </motion.div>
          );
        })}
      </div>
      
      {/* ---- FIX 2: This container now grows to fill available space ---- */}
      <div ref={orbitContainerRef} className="relative w-full flex-grow">
        <AnimatePresence>
          {selectedCategory && activeCategory && (
            <>
              {/* Central Information Box (no changes needed here) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <div className="w-64 h-64 bg-brand-background rounded-full flex items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredItem ? hoveredItem.name : 'category'}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full px-4"
                    >
                      {hoveredItem ? (
                        <>
                          <h3 className="text-xl font-bold text-brand-primary">{hoveredItem.name}</h3>
                          <p className="text-sm mt-1">{hoveredItem.description}</p>
                          <p className="text-lg font-bold mt-2">{hoveredItem.price}</p>
                          <button className="mt-3 bg-brand-secondary text-brand-text text-sm font-bold px-4 py-2 rounded-full">Add</button>
                        </>
                      ) : (
                        <h2 className="text-3xl font-extrabold text-brand-primary">{activeCategory.name}</h2>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Central Category Icon (no changes needed here) */}
              <motion.div
                layoutId={`category-container-${selectedCategory}`}
                onClick={() => setSelectedCategory(null)}
                className="absolute z-10 inset-0 flex items-center justify-center p-6 rounded-full bg-white shadow-xl cursor-pointer"
                style={{ width: '120px', height: '120px', margin: 'auto' }}
              >
                <activeCategory.icon className="text-5xl text-brand-primary" />
              </motion.div>

              {/* Orbiting Items (now use dynamic radius) */}
              {activeCategory.items.map((item, index) => {
                const { x, y } = getPosition(index, activeCategory.items.length);
                return (
                  <motion.div
                    key={item.name}
                    className="absolute z-20 inset-0 flex items-center justify-center"
                    style={{ margin: 'auto' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, x, y, transition: { type: 'spring', stiffness: 100, delay: index * 0.1 } }}
                    exit={{ scale: 0, opacity: 0, x: 0, y: 0, transition: { duration: 0.3, delay: index * 0.05 } }}
                    onHoverStart={() => setHoveredItem(item)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg cursor-pointer border-4 border-white">
                      <img src={item.imgSrc} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                );
              })}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;