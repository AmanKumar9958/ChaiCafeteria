import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPepperHot, FaGlassMartini, FaHamburger, FaUtensils } from 'react-icons/fa';

// --- MENU DATA (No changes here) ---
const menuData = {
  chilli: {
    name: 'Chilli',
    icon: FaPepperHot,
    items: [
      { name: 'Chicken chilli (bone)', imgSrc: 'images/chicken_chilli_bone.jpg' },
      { name: 'Chicken chilli (boneless)', imgSrc: 'images/chicken_chilli_boneless.jpg' },
      { name: 'Baby corn chilli', imgSrc: 'images/chilli_baby_corn.jpg' },
      { name: 'Chilli Paneer', imgSrc: 'images/chilli_paneer.jpg' },
    ]
  },
  burgers: {
    name: 'Burgers',
    icon: FaHamburger,
    items: [
      { name: 'Veg burger', price: '₹90', imgSrc: 'images/burger_1.png' },
      { name: 'Paneer burger', price: '₹150', imgSrc: 'images/burger_2.png' },
      { name: 'Chicken burger', price: '₹200', imgSrc: 'images/burger_3.png' },
      { name: 'Egg burger', price: '₹250', imgSrc: 'images/burger_4.png' },
    ]
  },
  rolls: {
    name: 'Rolls',
    icon: FaUtensils,
    items: [
      { name: 'Chicken egg roll', imgSrc: 'images/roll_chicken_egg.jpg' },
      { name: 'Chicken roll', imgSrc: 'images/roll_chicken.jpg' },
      { name: 'Egg roll', imgSrc: 'images/roll_egg.jpg' },
      { name: 'Chai Cafeteria special roll', imgSrc: 'images/roll_special.jpg' },
    ]
  },
  beverages: {
    name: 'Beverages',
    icon: FaGlassMartini,
    items: [
      { name: 'Masala Chai', imgSrc: 'https://images.unsplash.com/photo-1594582319362-282a524a1b02?q=80&w=1288' },
      { name: 'Cold Coffee', imgSrc: 'https://images.unsplash.com/photo-1579953724395-a2283a7c64a6?q=80&w=1287' },
      { name: 'Virgin Mojito', imgSrc: 'https://images.unsplash.com/photo-1551538850-096b759648b2?q=80&w=1287' },
      { name: 'Iced Tea', imgSrc: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1287' },
    ]
  },
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [radius, setRadius] = useState(220);

  const activeCategory = selectedCategory ? menuData[selectedCategory] : null;
  const orbitContainerRef = useRef(null);

  useLayoutEffect(() => {
    if (orbitContainerRef.current) {
      const { width, height } = orbitContainerRef.current.getBoundingClientRect();
      const smallerDimension = Math.min(width, height);
      const newRadius = smallerDimension * 0.4 - 20;
      setRadius(newRadius > 0 ? newRadius : 100);
    }
  }, [selectedCategory]);

  const getPosition = (index, total) => {
    const angle = (index / total) * 360;
    const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
    const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
    return { x, y };
  };

  return (
    // ---- CHANGE 1: Added `relative` to the main container ----
    <div className="relative h-screen flex flex-col bg-brand-background text-brand-text overflow-hidden">
      
      {/* ---- CHANGE 2: Added the gradient overlay div ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(230,99,40,0.08)] via-[rgba(253,189,38,0.04)] to-transparent pointer-events-none"
      />

      {/* --- Rest of the content, wrapped in a relative div to ensure it sits above the gradient --- */}
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="text-center pt-12 lg:pt-16 pb-6 flex-shrink-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary">Discover Our Menu</h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto px-4">Click a category to begin your culinary journey.</p>
        </div>

        <div className="z-40 flex justify-center items-center gap-4 md:gap-8 py-4 flex-wrap flex-shrink-0">
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
        
        <div ref={orbitContainerRef} className="relative w-full flex-grow">
          <AnimatePresence>
            {selectedCategory && activeCategory && (
              <>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <div className="w-64 h-64 bg-brand-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-center">
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

                <motion.div
                  layoutId={`category-container-${selectedCategory}`}
                  onClick={() => setSelectedCategory(null)}
                  className="absolute z-10 inset-0 flex items-center justify-center p-6 rounded-full bg-white shadow-xl cursor-pointer"
                  style={{ width: '120px', height: '120px', margin: 'auto' }}
                >
                  <activeCategory.icon className="text-5xl text-brand-primary" />
                </motion.div>

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
    </div>
  );
};

export default Menu;