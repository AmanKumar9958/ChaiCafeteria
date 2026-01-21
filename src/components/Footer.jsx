import React, { useEffect, useMemo, useRef, useState } from 'react';
import { incrementVisitorCounterFirebase, getVisitorCounterFirebase } from '../lib/firebaseCounter';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaMobileAlt, FaAndroid } from 'react-icons/fa';

const Footer = () => {
    const [count, setCount] = useState(null);
    const [error, setError] = useState(null);
    const onceGuard = useRef(false);

    // Number ko format karne ke liye ek helper function (e.g., 1000 -> "1,000")
    const formatNumber = (n) => new Intl.NumberFormat('en-IN').format(Number(n || 0));

    const counterKey = useMemo(() => {
        try {
            const host = typeof window !== 'undefined' ? window.location. hostname : 'global';
            return host && host !== '' ? `${host}-main` : 'global';
        } catch {
            return 'global';
        }
    }, []);

    useEffect(() => {
        const cacheKey = `visitorCount:${counterKey}`;
        // Perceived performance ke liye cached value turant dikhayein
        try {
            const cached = localStorage.getItem(cacheKey);
            if (cached) setCount(parseInt(cached, 10));
        } catch {
            // cache read errors ko ignore karein
        }

        // React Strict Mode dev mein double-increment se bachein
        if (onceGuard.current) return;
        onceGuard.current = true;

        (async () => {
            try {
                // Har page load par hamesha increment karein
                const total = await incrementVisitorCounterFirebase(counterKey);
                setCount(total);
                try {
                    localStorage.setItem(cacheKey, String(total));
                } catch {
                    // cache write errors ko ignore karein
                }
            } catch (e) {
                // Agar increment fail hota hai (rules/offline), toh current value read karne ki koshish karein
                try {
                    const readTotal = await getVisitorCounterFirebase(counterKey);
                    setCount(readTotal);
                    try { localStorage.setItem(cacheKey, String(readTotal)); } catch { /* ignore cache write */ }
                } catch (readErr) {
                    console.warn('Visitor counter failed:', e, readErr);
                    setError('counter');
                    setCount((prev) => (prev == null ? 0 :  prev)); // em dash ke bajaye 0 dikhayein
                }
            }
        })();
    }, [counterKey]);

    const year = new Date().getFullYear();

    return (
        <footer
            className="mt-12 border-t border-black/10"
            style={{ backgroundColor: 'var(--color-brand-background)' }}
        >
            {/* App Download Section */}
            <motion.div
                className="relative overflow-hidden py-16 px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(230,99,40,0.08)] via-[rgba(253,189,38,0.05)] to-transparent pointer-events-none" />
                
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-3 rounded-2xl shadow-lg">
                                    <FaMobileAlt className="text-3xl text-black" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-text">
                                    Order On-The-Go! 
                                </h3>
                            </div>
                            
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Download our app and enjoy exclusive deals, faster checkout, and seamless ordering.  Your favorite chai and snacks are just a tap away!
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary mt-0.5">✓</span>
                                    <span className="text-gray-700">Exclusive app-only discounts & offers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary mt-0.5">✓</span>
                                    <span className="text-gray-700">Track your order in real-time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary mt-0.5">✓</span>
                                    <span className="text-gray-700">Save your favorites for quick reordering</span>
                                </li>
                            </ul>

                            {/* Android Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <FaAndroid className="text-2xl text-[#3DDC84]" />
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Available for Android</span>
                            </div>

                            {/* Play Store Button */}
                            <motion.a
                                href="https://play.google.com/store/apps/details?id=com.chaicafeteriaranchi.frontend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGooglePlay className="text-3xl" />
                                <div className="text-left">
                                    <div className="text-xs font-normal opacity-90">GET IT ON</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                            </motion. a>
                        </motion. div>

                        {/* Right Image/Illustration */}
                        <motion.div
                            className="relative hidden md:block"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="relative">
                                {/* Decorative Circle Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-3xl scale-150"></div>
                                
                                {/* Mobile Mockup Placeholder */}
                                <div className="relative z-10 flex justify-center items-center">
                                    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-1 rounded-[3rem] shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                                        <div className="bg-brand-background rounded-[2.8rem] p-6 w-64 h-[28rem] flex flex-col items-center justify-center">
                                            {/* Play Store Icon in Mockup */}
                                            <div className="bg-white p-2 rounded-3xl shadow-lg mb-4">
                                                {/* <FaGooglePlay className="text-6xl text-[#414141]" /> */}
                                                <img src="/icon.png" alt="Google Play Badge" className="w-40 h-auto" />
                                            </div>
                                            <h4 className="text-xl font-bold text-brand-text mb-2">Chai Cafeteria</h4>
                                            <p className="text-sm text-gray-600 text-center mb-2">Order your favorites with ease! </p>
                                            <div className="flex items-center gap-1. 5 bg-[#3DDC84]/10 px-3 py-1.5 rounded-full">
                                                <FaAndroid className="text-[#3DDC84] text-sm" />
                                                <span className="text-xs font-semibold text-gray-700">Android App</span>
                                            </div>
                                            <div className="mt-6 space-y-3 w-full">
                                                <div className="h-3 bg-brand-primary/30 rounded-full w-full"></div>
                                                <div className="h-3 bg-brand-secondary/30 rounded-full w-3/4"></div>
                                                <div className="h-3 bg-brand-primary/20 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Original Footer Content */}
            <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-black border-t border-black/5">
                <p className="text-sm">© {year} Chai Cafeteria • All rights reserved</p>
                <div className="flex items-center gap-3">
                    <span className="text-sm opacity-70">Visitors</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 text-sm font-medium min-w-[3rem] justify-center">
                        {/* Sudhaar: Count ko formatNumber se display karein */}
                        {error ? 'Error' : (count === null ? '—' : formatNumber(count))}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;