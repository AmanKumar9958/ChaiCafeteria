import React from 'react';
import { FaUtensils, FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiZomato } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";

// A reusable animation variant for items that fade in and slide up
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    };

    // Reusable component for the Featured Item cards for cleaner code
    const FeaturedItemCard = ({ imgSrc, title, description, alt }) => (
    <motion.div 
        className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
        variants={fadeInUp}
    >
        <img src={imgSrc} alt={alt} className="w-full h-40 object-cover rounded-md" />
        <h4 className="mt-3 font-semibold text-brand-text">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
    );


    export default function Home() {
    return (
            <div className="min-h-screen bg-brand-background text-brand-text">
            {/* Welcome Banner */}
            
        {/* Hero Section */}
        <section className="relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div
            className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none"
            />
                <div className="bg-brand-primary/90 text-black text-center py-2 px-4 font-bold tracking-wide text-4xl">
                    Welcome to Chai Cafeteria
                </div>
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.2 }}
            >
                {/* Left Content */}
                <motion.div variants={fadeInUp}>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary bg-white/60 py-1 px-3 rounded-full shadow-sm">
                    Open Daily: 10:00 AM - 2:30 AM
                </p>
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">
                    Savor the Taste — Burgers, Rolls & Fresh Beverages
                </h1>
                <p className="mt-6 text-lg text-brand-text max-w-xl">
                    Cozy neighborhood café serving handcrafted burgers, warming chai, cold brews and everything in between. Fast service, friendly faces.
                </p>

                <motion.div 
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                    variants={fadeInUp}
                >
                    <Link to="/menu" className="bg-brand-primary text-black border-2 hover:bg-brand-secondary hover:text-brand-text transition-all duration-300 inline-block px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105">
                    Explore Menu
                    </Link>
                </motion.div>

                <motion.div className="mt-10 flex flex-col sm:flex-row gap-6 items-center" variants={fadeInUp}>
                    <div className="flex items-center gap-3">
                    <div className="rounded-full p-3 bg-white shadow"><FaUtensils className="text-xl text-brand-primary" /></div>
                    <div>
                        <div className="text-sm font-semibold">Fresh Ingredients</div>
                        <div className="text-sm text-gray-600">Sourced locally, cooked to order</div>
                    </div>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="rounded-full p-3 bg-white shadow"><FaCoffee className="text-xl text-brand-secondary" /></div>
                    <div>
                        <div className="text-sm font-semibold">Specialty Drinks</div>
                        <div className="text-sm text-gray-600">Chai, lattes and cold brews</div>
                    </div>
                    </div>
                </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div className="flex justify-center lg:justify-end" variants={fadeInUp}>
                <div className="w-full max-w-md relative">
                    <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80&auto=format&fit=crop" alt="A delicious burger" className="rounded-3xl shadow-2xl w-full object-cover" />
                    <motion.div 
                    className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    >
                    <img src="https://images.unsplash.com/photo-1543353071-087092ec393a?w=200&q=60&auto=format&fit=crop" alt="A crispy roll" className="w-16 h-16 rounded-md object-cover" />
                    <div>
                        <div className="font-semibold text-brand-text">Classic Roll</div>
                        <div className="text-sm text-gray-600">Crispy, spicy & satisfying</div>
                    </div>
                    </motion.div>
                </div>
                </motion.div>
            </motion.div>
            </div>
        </section>

        {/* Featured Items Section */}
        <motion.section 
            id="menu" 
            className="max-w-7xl mx-auto px-6 py-16"
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <h3 className="text-3xl font-bold mb-8 text-center text-brand-text">Popular at the Chai Cafeteria</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeaturedItemCard imgSrc="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60&auto=format&fit=crop" title="Burger" description="Veg, Chicken, Egg & more" alt="burger"/>
            <FeaturedItemCard imgSrc="/images/rolls.webp" title="Roll" description="Paneer, Egg, Chicken & more" alt="rolls"/>
            <FeaturedItemCard imgSrc="/images/thali.webp" title="Thali" description="A complete, wholesome meal." alt="thali"/>
            <FeaturedItemCard imgSrc="/images/colddrinks.webp" title="Fresh Beverages" description="Chai, iced tea, cold brew & more." alt="beverage"/>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
                <Link to="/menu" className="border-2 bg-brand-primary text-black hover:bg-brand-secondary hover:text-brand-text transition-all duration-300 inline-block px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105">
                More to eat
                </Link>
                </div>
            </div>
        </motion.section>

        {/* CTA Strip Section */}
        <motion.section 
            id="order" 
            className="pb-24 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
                <h4 className="text-2xl font-bold text-brand-primary">Hungry now?</h4>
                <p className="text-brand-text mt-1">Order online or visit us for a quick, delicious bite.</p>
            </div>
            <div className='flex items-center gap-2'>
                <a href="https://www.zomato.com/ranchi/chai-cafeteria-hatia/order" target='_blank'><SiZomato className='text-7xl text-brand-primary mr-4 hover:scale-110 transition-all duration-200' /></a>
                <a href="https://www.swiggy.com/city/ranchi/chai-cafeteria-blue-diamond-complex-hatia-rest953762" target='_blank'><SiSwiggy className='text-4xl text-brand-primary hover:scale-110 transition-all duration-200' /></a>
            </div>
            </div>
        </motion.section>
        </div>
    )
}