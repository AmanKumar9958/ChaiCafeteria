import React, { useEffect, useMemo, useRef, useState } from 'react';
import { incrementVisitorCounterFirebase, getVisitorCounterFirebase } from '../lib/firebaseCounter';

const Footer = () => {
    const [count, setCount] = useState(null);
    const [error, setError] = useState(null);
    const onceGuard = useRef(false);

    // Number ko format karne ke liye ek helper function (e.g., 1000 -> "1,000")
    const formatNumber = (n) => new Intl.NumberFormat('en-IN').format(Number(n || 0));

    const counterKey = useMemo(() => {
        try {
            const host = typeof window !== 'undefined' ? window.location.hostname : 'global';
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
                    setCount((prev) => (prev == null ? 0 : prev)); // em dash ke bajaye 0 dikhayein
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
            <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-black">
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