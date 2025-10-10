import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- INLINE SVG ICONS (for stability) ---
const ChilliIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.086a2 2 0 00-2.788 0l-7 7a2 2 0 000 2.828l7 7a2 2 0 002.828 0l7-7a2 2 0 000-2.828l-7-7a2 2 0 00-.04-.04zM11 11.414V14a1 1 0 11-2 0v-2.586l-1.293-1.293a1 1 0 011.414-1.414L10 9.414l.879-.879a1 1 0 111.414 1.414L11 11.414z" />
    </svg>
);
const BurgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a2 2 0 002-2v-1a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a2 2 0 002 2zM5 6a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 01-2-2V6zm2 4a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);
const RollsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M4 7a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm3 2a1 1 0 000 2h4a1 1 0 100-2H7z" />
    </svg>
);
const BeveragesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 2a1 1 0 000 2h4a1 1 0 100-2H6zm0 4a1 1 0 100 2h4a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
);

// --- MENU DATA ---
const menuData = {
    chilli: {
        name: 'Chilli',
        icon: ChilliIcon,
        items: [
            { name: 'Chicken Chilli (Bone)', price: '₹220', imgSrc: 'https://images.unsplash.com/photo-1599305459344-96918b21d582?w=500' },
            { name: 'Chicken Chilli (Boneless)', price: '₹250', imgSrc: 'https://images.unsplash.com/photo-1565299585323-21d1d27995f3?w=500' },
            { name: 'Baby Corn Chilli', price: '₹180', imgSrc: 'https://images.unsplash.com/photo-1606491093925-58f1f725a533?w=500' },
            { name: 'Chilli Paneer', price: '₹200', imgSrc: 'https://images.unsplash.com/photo-1567188042792-23b034a73a38?w=500' },
        ]
    },
    burgers: {
        name: 'Burgers',
        icon: BurgerIcon,
        items: [
            { name: 'Veg Burger', price: '₹90', imgSrc: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500' },
            { name: 'Paneer Burger', price: '₹150', imgSrc: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500' },
            { name: 'Chicken Burger', price: '₹200', imgSrc: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
            { name: 'Egg Burger', price: '₹120', imgSrc: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500' },
        ]
    },
    rolls: {
        name: 'Rolls',
        icon: RollsIcon,
        items: [
            { name: 'Chicken Egg Roll', price: '₹130', imgSrc: 'https://images.unsplash.com/photo-1625220194771-49bdd72545b6?w=500' },
            { name: 'Chicken Roll', price: '₹110', imgSrc: 'https://images.unsplash.com/photo-1608039755403-57c4b4a33215?w=500' },
            { name: 'Egg Roll', price: '₹80', imgSrc: 'https://images.unsplash.com/photo-1628218903392-a61902803b9b?w=500' },
            { name: 'Special Roll', price: '₹160', imgSrc: 'https://images.unsplash.com/photo-1528735602780-2552fd46c766?w=500' },
        ]
    },
    beverages: {
        name: 'Beverages',
        icon: BeveragesIcon,
        items: [
            { name: 'Masala Chai', price: '₹40', imgSrc: 'https://images.unsplash.com/photo-1594582319362-282a524a1b02?w=500' },
            { name: 'Cold Coffee', price: '₹120', imgSrc: 'https://images.unsplash.com/photo-1579953724395-a2283a7c64a6?w=500' },
            { name: 'Virgin Mojito', price: '₹150', imgSrc: 'https://images.unsplash.com/photo-1551538850-096b759648b2?w=500' },
            { name: 'Iced Tea', price: '₹100', imgSrc: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500' },
        ]
    },
};

// --- MENU COMPONENT ---
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);

    return (
        <div className="relative min-h-screen bg-brand-background text-brand-text">
            {/* --- Gradient overlay (same as Home page) --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* --- HEADER --- */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary">Our Menu</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Deliciously crafted, just for you. Explore our range of popular dishes and find your new favorite.
                    </p>
                </motion.div>

                {/* --- CATEGORY TABS --- */}
                <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-12">
                    {Object.entries(menuData).map(([key, category]) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === key;
                        return (
                            <motion.button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`hover:cursor-pointer relative flex items-center justify-center px-5 py-3 text-sm md:text-base font-bold rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary ${
                                    isActive ? 'text-black bg-[#FBBE25]' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-brand-primary rounded-full"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center">
                                    <Icon /> {category.name}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* --- MENU ITEMS GRID --- */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {menuData[activeCategory].items.map((item, index) => (
                            <motion.div
                                key={item.name}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <div className="overflow-hidden h-56">
                                    <img 
                                        src={item.imgSrc} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                                    />
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-brand-text mb-1">{item.name}</h3>
                                    <p className="text-lg font-semibold text-brand-primary mb-4">{item.price}</p>
                                    <button className="mt-auto w-full bg-brand-secondary text-black font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-300">
                                        Add to Order
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Menu;