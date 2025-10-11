import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaPepperHot, FaHamburger, FaCookieBite } from 'react-icons/fa';
import { GiCupcake, GiFullPizza } from 'react-icons/gi';
import { MdFastfood, MdRiceBowl, MdRamenDining, MdEmojiFoodBeverage } from 'react-icons/md';
import { LuSandwich } from "react-icons/lu";
import { IoEggOutline, IoChevronDown, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { CiFries } from "react-icons/ci";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

// --- MENU DATA ---
const categoryIcons = {
    chilli: FaPepperHot,
    burgers: FaHamburger,
    rolls: MdFastfood,
    biryani: MdRiceBowl,
    chowmein: MdRamenDining,
    beverages: MdEmojiFoodBeverage,
    beverages_2: MdEmojiFoodBeverage,
    muffins: GiCupcake,
    cookies: FaCookieBite,
    pizza: GiFullPizza,
    sandwich: LuSandwich,
    egg: IoEggOutline,
    fries: CiFries,
    soup: MdOutlineSoupKitchen,
    thali: GiMeal,
};

const menuData = {
    chilli: {
        name: 'Chilli',
        items: [
            { name: 'Chilli Paneer', price: "H-₹89/ F-₹179", imgSrc: '/images/chilli_paneer.webp' },
            { name: 'Potato Chilli', price: "₹69", imgSrc: '/images/chilli_potato.webp' },
            { name: 'Mushroom Chilli', price: "H-₹99/ F-₹199", imgSrc: '/images/mushroom_chilli.webp' },
            { name: 'Baby Corn Chilli', price: "H-₹89/ F-₹179", imgSrc: '/images/chilli_baby_corn.webp' },
            { name: 'Soya Chilli', price: "H-₹79/ F-₹169", imgSrc: '/images/soya_chilli.webp' },
        ]
    },
    burgers: {
        name: 'Burgers',
        items: [
            { name: 'Veg Burger', price: "₹79", imgSrc: '/images/burger_4.webp' },
            { name: 'Veg Cheese Burger', price: "₹89", imgSrc: '/images/burger_veg_cheese.webp' },
            { name: 'Paneer Burger', price: "₹109", imgSrc: '/images/burger_3.webp' },
            { name: 'Paneer Cheese Burger', price: "₹119", imgSrc: '/images/burger_paneer_cheese.webp' },
            { name: 'Chicken Burger', price: "₹119", imgSrc: '/images/burger_2.webp' },
            { name: 'Egg Burger', price: "₹99", imgSrc: '/images/burger_1.webp' },
        ]
    },
    rolls: {
        name: 'Rolls',
        items: [
            { name: 'Paneer Roll', price: "₹69", imgSrc: '/images/paneer_roll.webp' },
            { name: 'Egg Roll', price: "₹69", imgSrc: '/images/roll_egg.webp' },
            { name: 'Double Egg Roll', price: "₹79", imgSrc: '/images/roll_special.webp' },
            { name: 'Chicken Roll', price: "₹89", imgSrc: '/images/roll_chicken.webp' },
            { name: 'Chicken Egg Roll', price: "₹99", imgSrc: '/images/roll_chicken_egg.webp' },
        ]
    },
    biryani: {
        name: 'Biryani',
        items: [
            { name: 'Paneer Mushroom', imgSrc: '/images/paneer_mushroom_biryani.webp' },
            { name: 'Paneer Capsicum', imgSrc: '/images/paneer_capsicum_biryani.webp' },
            { name: 'Veg Biryani', imgSrc: '/images/veg_biryani.webp' },
        ]
    },
    chowmein: {
        name: 'Chowmein',
        items: [
            { name: 'Veg Chowmein', price: "H-₹49/ F-₹89", imgSrc: '/images/veg_chowmein.webp' },
            { name: 'Chicken Chowmein', price: "H-₹89/ F-₹169", imgSrc: '/images/Chicken_Chowmein.webp' },
            { name: 'Egg Chowmein', price: "H-₹69/ F-₹129", imgSrc: '/images/egg_chowmein.webp' },
            { name: 'Chicken Egg Chowmein', price: "H-₹99/ F-₹189", imgSrc: '/images/Chicken_Chowmein.webp' },
        ]
    },
    beverages: {
        name: 'Beverages (Summer Special)',
        items: [
            { name: 'Desi Drink (Sattu)', price: "₹39", imgSrc: '/images/sattu.webp' },
            { name: 'Choice of Fresh Juice', price: "₹69-89", imgSrc: '/images/fresh_juice.webp' },
            { name: 'Fresh Lassi', price: "₹69", imgSrc: '/images/lassi.webp' },
            { name: 'Fresh Chhachh', price: "₹69", imgSrc: '/images/chhachh.webp' },
            { name: 'Cold Coffee', price: "₹89", imgSrc: '/images/cold_coffee.webp' },
            { name: 'Mango Lassi', price: "₹89", imgSrc: '/images/mango_lassi.webp' },
            { name: 'Oreo/KitKat/Vanila Shake', price: "₹89", imgSrc: '/images/oreo_shake.webp' },
            { name: 'Mango/Banana/Papaya Shake', price: "₹89", imgSrc: '/images/fruit_shake.webp' },
            { name: 'Ice-cream (any flavour) Shake', price: "₹99", imgSrc: '/images/icecream_shake.webp' },
            { name: 'Masala/Pudina Sikanji', price: "₹89", imgSrc: '/images/shikanji.webp' },
            { name: 'W.melon/Grapes/Apple/Mango Mojito', price: "₹99", imgSrc: '/images/mojito.webp' },
            { name: 'Blue Lagoon', price: "₹99", imgSrc: '/images/blue_lagoon.webp' },
        ]
    },
    beverages_2: {
        name: 'Beverages (Hot)',
        items: [
            { name: 'Khulhad Chai', price: "₹19", imgSrc: '/images/tea.webp' },
            { name: 'Green Tea', price: "₹39", imgSrc: '/images/green_tea.webp' },
            { name: 'Lemon Grass Tea', price: "₹29", imgSrc: '/images/lemon_grass.webp' },
            { name: 'Coffee (S)', price: "₹15", imgSrc: '/images/coffee.webp' },
            { name: 'Cafeteria Spl. Coffee', price: "₹29", imgSrc: '/images/coffee_2.webp' },
            { name: 'Black Coffee', price: "₹25", imgSrc: '/images/black_coffee.webp' },
            { name: 'Hot Chocolate', price: "₹69", imgSrc: '/images/hot_chocolate.webp' },
            { name: 'Horlicks Milk', price: "₹69", imgSrc: '/images/horlicks_milk.png' },
        ]
    },
    muffins: {
        name: 'Muffins',
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
    pizza: {
        name: 'Pizza',
        items: [
            { name: 'Customized Non-Veg. Pizza', price: '₹269', imgSrc: '/images/non_veg_pizza.webp' },
            { name: 'Customized Veg. Pizza', price: '₹189', imgSrc: '/images/veg_pizza.webp' },
            { name: 'Margherita Pizza', price: '₹129', imgSrc: '/images/margherita_pizza.webp' },
            { name: 'Pasta Pizza', price: '₹149', imgSrc: '/images/pasta_pizza.webp' },
            { name: 'Cheese Onion Pizza', price: '₹159', imgSrc: '/images/chesse_onion_pizza.webp' },
            { name: 'Mushroom Pizza', price: '₹149', imgSrc: '/images/mushroom_pizza.webp' },
            { name: 'Paneer Tikka Pizza', price: '₹159', imgSrc: '/images/paneer_tikka_pizza.webp' },
            { name: 'Paneer Tandoori Pizza', price: '₹149', imgSrc: '/images/paneer_tandoori_pizza.webp' },
            { name: 'Baby Corn Pizza', price: '₹149', imgSrc: '/images/baby_corn_pizza.webp' },
            { name: 'Tomato Pizza', price: '₹149', imgSrc: '/images/tomato_pizza.webp' },
            { name: 'Sweet Corn Pizza', price: '₹149', imgSrc: '/images/sweet_corn_pizza.webp' },
            { name: 'Onion Capsicum Pizza', price: '₹179', imgSrc: '/images/onion_capsicum_pizza.webp' },
            { name: 'Garden Special Pizza', price: '₹179', imgSrc: '/images/garden_special_pizza.webp' },
            { name: 'Capsicum & Paneer Pizza', price: '₹179', imgSrc: '/images/paneer_capsicum_pizza.webp' },
            { name: 'Capsicum Pizza', price: '₹149', imgSrc: '/images/capsicum_pizza.png' },
            { name: 'Peper Barbeque Chi. Pizza', price: '₹169', imgSrc: '/images/paneer_bbq_pizza.webp' },
            { name: 'Chicken Sausage Pizza', price: '₹179', imgSrc: '/images/chicken_sausage_pizza.webp' },
            { name: 'Chicken Tikka Pizza', price: '₹179', imgSrc: '/images/chicken_tikka.webp' },
            { name: 'Chicken Sweet Corn Pizza', price: '₹189', imgSrc: '/images/chicken_sweet_corn_pizza.webp' },
            { name: 'Chicken Pepperoni Pizza', price: '₹179', imgSrc: '/images/chicken_pepperoni.webp' },
            { name: 'Egg Pizza (Boiled)', price: '₹149', imgSrc: '/images/boiled_egg_pizza.png' },
            { name: 'Fried Egg Pizza', price: '₹169', imgSrc: '/images/egg_pizza.webp' },
            { name: 'Non-Veg. Loaded Pizza', price: '₹209', imgSrc: '/images/non_veg_loaded_pizza.webp' },
            { name: 'Cafeteria Spl. Non-Veg. Pizza', price: '₹249', imgSrc: '/images/spl_non_veg_pizza.webp' },
            { name: 'Extra Cheese', price: '₹30', imgSrc: '/images/extra_cheese.webp' },
        ],
    },
    sandwich: {
        name: 'Sandwiches',
        items: [
            { name: 'Chicken Sandwich', price: "₹129", imgSrc: '/images/chicken_sand.webp' },
            { name: 'Chicken Cheese Sandwich', price: "₹139", imgSrc: '/images/chicken_cheese_sand.webp' },
            { name: 'Egg Sandwich (Fried/Boiled)', price: "₹119/₹129", imgSrc: '/images/egg_sand.webp' },
            { name: 'Egg Cheese Sandwich', price: "₹129/₹149", imgSrc: '/images/egg_cheese_sand.webp' },
            { name: 'Cafeteria Spl. Paneer Sandwich', price: "₹49", imgSrc: '/images/paneer_sand.webp' },
            { name: 'Potato Sandwich', price: "₹119", imgSrc: '/images/potato_sand.webp' },
            { name: 'Paneer Haryali Sandwich', price: "₹109", imgSrc: '/images/hariyali_sand.png' },
            { name: 'Mushroom Sandwich', price: "₹109", imgSrc: '/images/mushroom_sand.webp' },
            { name: 'Paneer Tikka Sandwich', price: "₹89", imgSrc: '/images/paneer_tikka_sand.webp' },
            { name: 'Cheese Corn Sandwich', price: "₹79", imgSrc: '/images/cheese_corn_sand.webp' },
            { name: 'Pizza Sandwich', price: "₹79", imgSrc: '/images/pizza_sand.webp' },
            { name: 'Cheese Grilled Sandwich', price: "₹59", imgSrc: '/images/cheese_grilled_sand.webp' },
            { name: 'Veggie Grilled Sandwich', price: "₹20", imgSrc: '/images/veggie_grilled_sand.webp' },
        ]
    },
    egg: {
        name: 'Egg Items',
        items: [
            { name: 'Boiled Egg (2 Pcs.)', price: "₹39", imgSrc: '/images/boiled_egg.webp' },
            { name: 'Omelette (2 Pcs.)', price: "₹39", imgSrc: '/images/omelette.webp' },
            { name: 'Bread Omelette (Jumbo 2 Pcs.)', price: "₹69", imgSrc: '/images/bread_omelette.webp' },
        ]
    },
    fries: {
        name: 'Fries',
        items: [
            { name: 'Chicken Popcorn (8 Pcs.)', price: "₹99", imgSrc: '/images/chicken_popcorn.webp' },
            { name: 'Chicken Nuggets (8 Pcs.)', price: "₹99", imgSrc: '/images/chicken_nuggets.webp' },
            { name: 'Chilli Garlic Potato (10 Pcs.)', price: "₹89", imgSrc: '/images/chilli_garlic_potato.webp' },
            { name: 'Onion Rings (5 Pcs.)', price: "₹49", imgSrc: '/images/onion_rings.webp' },
            { name: 'Mixed Platter (10 Pcs.)', price: "₹139", imgSrc: '/images/mixed_platter.png' },
            { name: 'Chicken Sausage Deep Fried (5 Pcs.)', price: "₹129", imgSrc: '/images/chicken_sausage_deep_fried.webp' },
            { name: 'Chicken Sausage Steamed (5 Pcs.)', price: "₹119", imgSrc: '/images/chicken_sausage_steamed.webp' },
            { name: 'Chicken Sausage Pan Fried (5 Pcs.)', price: "₹139", imgSrc: '/images/chicken_sausage_pan_fried.webp' },
            { name: 'French Fries', price: "₹79", imgSrc: '/images/french_fries.webp' },
            { name: 'Cheese French Fries', price: "₹89", imgSrc: '/images/cheese_french_fries.webp' },
            { name: 'Peri-Peri Fries', price: "₹89", imgSrc: '/images/peri_peri_fries.webp' },
        ]
    },
    soup: {
        name: 'Soup',
        items: [
            { name: 'Chicken Delight Soup', price: "₹89", imgSrc: '/images/chicken_soup.webp' },
            { name: 'Creamy Chicken Soup', price: "₹99", imgSrc: '/images/creamy_chicken_soup.png' },
            { name: 'Mushroom Soup', price: "₹69", imgSrc: '/images/mushroom_soup.webp' },
            { name: 'Creamy Mushroom Soup', price: "₹79", imgSrc: '/images/creamy_mushroom_soup.webp' },
            { name: 'Sweet Corn Soup', price: "₹49", imgSrc: '/images/sweet_corn_soup.webp' },
            { name: 'Sweet Corn Vegetable Soup', price: "₹59", imgSrc: '/images/sweet_corn_vege_soup.webp' },
            { name: 'Tomato Soup', price: "₹59", imgSrc: '/images/tomato_soup.webp' },
            { name: 'Manchow Noodles', price: "₹69", imgSrc: '/images/manchow_noodles.png' },
        ]
    },
    thali: {
        name: 'Thali',
        items: [
            { name: 'Veg Thali', price: "₹139", imgSrc: '/images/thali_veg.png' },
            { name: 'CS Thali', price: "₹199", imgSrc: '/images/thali_veg_cs.png' },
            { name: 'Non Veg Thali', price: "₹189", imgSrc: '/images/thali_non_veg.png' },
            { name: 'CS Non Veg Thali', price: "₹259", imgSrc: '/images/thali_non_veg_cs.png' },
            { name: 'Egg Thali', price: "₹169", imgSrc: '/images/thali_egg.png' },
            { name: 'CS Egg Thali', price: "₹239", imgSrc: '/images/thali_egg_cs.png' },
        ]
    },
};

// --- MENU COMPONENT ---
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);
    const [expanded, setExpanded] = useState(false);
    const COLLAPSE_COUNT = 4;
    const catScrollRef = React.useRef(null);

    const scrollCats = (dir) => {
        const el = catScrollRef.current;
        if (!el) return;
        const amount = Math.floor((el.clientWidth || 280) * 0.9);
        el.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    // Collapse again when switching category (all viewports)
    React.useEffect(() => {
        setExpanded(false);
    }, [activeCategory]);

    return (
        <div className="relative min-h-screen bg-[#FFFBF2] text-[#333333]">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none" />
            <div className="relative z-10 container mx-auto px-4 py-12">
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

                {/* --- CATEGORY TABS (slider on all viewports) --- */}
                <div className="relative mb-12">
                    {/* Scrollable rail: visible on all sizes */}
                    <div
                        ref={catScrollRef}
                        className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory px-16"
                        style={{ scrollPaddingLeft: '4rem', scrollPaddingRight: '4rem' }}
                    >
                        <div aria-hidden className="shrink-0 w-16" />
                        {Object.entries(menuData).map(([key, category]) => {
                            const isActive = activeCategory === key;
                            const Icon = categoryIcons[key] || MdFastfood;
                            return (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`shrink-0 snap-start hover:cursor-pointer relative flex items-center justify-center px-5 py-3 text-sm md:text-base font-bold rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E66328] shadow-sm ${
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
                                    <span className="relative z-10 flex items-center whitespace-nowrap">
                                        <span
                                            className="mr-2 inline-flex items-center justify-center w-7 h-7 rounded-full"
                                            style={{ backgroundColor: isActive ? '#E66328' : '#F2E6E0' }}
                                        >
                                            <Icon className="text-white" size={16} />
                                        </span>
                                        {category.name}
                                    </span>
                                </motion.button>
                            );
                        })}
                        <div aria-hidden className="shrink-0 w-16" />
                    </div>

                    {/* Chevrons + edge fades container (all sizes) */}
                    <div className="pointer-events-none absolute inset-y-0 inset-x-0">
                        {/* Fades: z-20 (Top layer) */}
                        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FFFBF2] to-transparent z-20" />
                        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FFFBF2] to-transparent z-20" />

                        {/* Arrows: z-10 (Middle layer) */}
                        <button
                            type="button"
                            onClick={() => scrollCats(-1)}
                            className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 bg-[#E66328] text-white rounded-full shadow-lg p-2 ring-1 ring-white/80 z-10"
                            aria-label="Scroll categories left"
                        >
                            <IoChevronBack size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCats(1)}
                            className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 bg-[#E66328] text-white rounded-full shadow-lg p-2 ring-1 ring-white/80 z-10"
                            aria-label="Scroll categories right"
                        >
                            <IoChevronForward size={20} />
                        </button>
                    </div>
                </div>
                
                {/* Collapse toggle (all viewports) */}
                {menuData[activeCategory].items.length > COLLAPSE_COUNT && (
                    <div className="flex justify-end mb-4">
                        <button
                            type="button"
                            onClick={() => setExpanded((v) => !v)}
                            className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-full bg-white shadow border border-gray-200"
                            aria-expanded={expanded}
                            aria-controls="menu-items-grid"
                        >
                            <span>{expanded ? 'Show less' : `Show all (${menuData[activeCategory].items.length})`}</span>
                            <IoChevronDown className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <div
                            id="menu-items-grid"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {(!expanded
                                ? menuData[activeCategory].items.slice(0, COLLAPSE_COUNT)
                                : menuData[activeCategory].items
                            ).map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <div className="overflow-hidden h-44 md:h-48">
                                        <img
                                            loading='lazy'
                                            src={item.imgSrc}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                        />
                                    </div>
                                    <div className="p-5 flex-grow flex flex-row gap-2">
                                        <h3 className="text-xl font-bold text-[#333333] mb-2 flex-grow">{item.name}</h3>
                                        <p className="text-lg font-semibold text-[#E66328]">{item.price}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Menu;