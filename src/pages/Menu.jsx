import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MENU DATA ---
// NOTE: The SVG icons have been replaced with image paths.
// You should place your corresponding icon images in the `public/icons/` folder.
const menuData = {
    chilli: {
        name: 'Chilli',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🌶️', // Example: /icons/chilli.webp
        items: [
            { name: 'Chicken Chilli (Bone)', imgSrc: '/images/chicken_chilli_bone.webp' },
            { name: 'Chicken Chilli (Boneless)', imgSrc: '/images/chicken_chilli_boneless.webp' },
            { name: 'Baby Corn Chilli', imgSrc: '/images/chilli_baby_corn.webp' },
            { name: 'Chilli Paneer', imgSrc: '/images/chilli_paneer.webp' },
        ]
    },
    burgers: {
        name: 'Burgers',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🍔', // Example: /icons/burger.webp
        items: [
            { name: 'Veg Burger', imgSrc: '/images/burger_4.webp' },
            { name: 'Paneer Burger', imgSrc: '/images/burger_3.webp' },
            { name: 'Chicken Burger', imgSrc: '/images/burger_2.webp' },
            { name: 'Egg Burger', imgSrc: '/images/burger_1.webp' },
        ]
    },
    rolls: {
        name: 'Rolls',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🌯', // Example: /icons/rolls.webp
        items: [
            { name: 'Paneer Roll', imgSrc: '/images/paneer_roll.webp' },
            { name: 'Egg Chicken Roll', imgSrc: '/images/roll_chicken_egg.webp' },
            { name: 'Chicken Roll', imgSrc: '/images/roll_chicken.webp' },
            { name: 'Egg Roll', imgSrc: '/images/roll_egg.webp' },
            { name: 'Special Roll', imgSrc: '/images/roll_special.webp' },
            { name: 'Rolls', imgSrc: '/images/rolls.webp' },
        ]
    },
    biryani: {
        name: 'Biryani',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🍚', // Example: /icons/biryani.webp
        items: [
            { name: 'Paneer Mushroom Biryani', imgSrc: '/images/paneer_mushroom_biryani.webp' },
            { name: 'Paneer Capsicum Biryani', imgSrc: '/images/paneer_capsicum_biryani.webp' },
            { name: 'Veg Biryani', imgSrc: '/images/veg_biryani.webp' },
        ]
    },
    chowmein: {
        name: 'Chowmein',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🍜', // Example: /icons/chowmein.webp
        items: [
            { name: 'Veg Chowmein', imgSrc: '/images/veg_chowmein.webp' },
            { name: 'Chicken Chowmein', imgSrc: '/images/Chicken_Chowmein.webp' },
            { name: 'Mix Veg Chowmein', imgSrc: '/images/mix_veg_chowmein.webp' },
            { name: 'Mix Non-Veg Chowmein', imgSrc: '/images/non_veg_mix_chowmein.webp' },
            { name: 'Mushroom Chowmein', imgSrc: '/images/mushroom_chowmein.webp' },
        ]
    },
    beverages: {
        name: 'Beverages',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🥤', // Example: /icons/beverages.webp
        items: [
            { name: 'Masala Chai', imgSrc: '/images/tea.webp' },
            { name: 'Cold Coffee', imgSrc: '/images/coffee.webp' },
            { name: 'Mojito', imgSrc: '/images/mojito.webp' },
            { name: 'Cold Drinks', imgSrc: '/images/colddrinks.webp' },
        ]
    },
    muffins: {
        name: 'Muffins',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🧁', // Example: /icons/muffin.webp
        items: [
            { name: 'Walnut Brownie Muffin', imgSrc: '/images/walnut_brownie_muffins.webp' },
            { name: 'Pista Vanilla Muffin', imgSrc: '/images/pista_vanilla_muffins.webp' },
            { name: 'Cranberry Muffin', imgSrc: '/images/cranberry_muffins.webp' },
            { name: 'Butterscotch Muffin', imgSrc: '/images/butterscotch_muffins.webp' },
            { name: 'Cashew & Almonds Muffin', imgSrc: '/images/cashew_almonds_muffins.webp' },
        ]
    },
    cookies: {
        name: 'Cookies',
        iconSrc: 'https://placehold.co/24x24/E66328/FFFFFF?text=🍪', // Example: /icons/cookies.webp
        items: [
            { name: 'Mangrella Cookies', imgSrc: '/images/mangrella_cookies.webp' },
            { name: 'Jam Treats Cookies', imgSrc: '/images/jam_treats_cookies.webp' },
            { name: 'Jeera Cookies', imgSrc: '/images/jeera_cookies.webp' },
            { name: 'Elaichi Cookies', imgSrc: '/images/elaichi_cookies.webp' },
            { name: 'Ajwain Cookies', imgSrc: '/images/ajwain_cookies.webp' },
            { name: 'Coconut Cookies', imgSrc: '/images/coconut_cookies.webp' },
            { name: 'Butter Atta Cookies', imgSrc: '/images/butter_atta_cookies.webp' },
        ]
    },
};

// --- MENU COMPONENT ---
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);

    return (
        <div className="relative min-h-screen bg-[#FFFBF2] text-[#333333]">
            {/* --- Gradient overlay --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* --- HEADER --- */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-black">Our Menu</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Deliciously crafted, just for you. Explore our range of popular dishes and find your new favorite.
                    </p>
                </motion.div>

                {/* --- CATEGORY TABS --- */}
                <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-12">
                    {Object.entries(menuData).map(([key, category]) => {
                        const isActive = activeCategory === key;
                        return (
                            <motion.button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`hover:cursor-pointer relative flex items-center justify-center px-5 py-3 text-sm md:text-base font-bold rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E66328] shadow-sm ${
                                    isActive ? 'text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-[#FBBE25] rounded-full"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center">
                                    <img src={category.iconSrc} alt={`${category.name} icon`} className="w-6 h-6 mr-2 rounded-full" />
                                    {category.name}
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
                                        loading='lazy'
                                        src={item.imgSrc}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                    />
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-[#333333] mb-1">{item.name}</h3>
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