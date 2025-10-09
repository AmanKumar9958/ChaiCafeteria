import React from 'react'
import { FaUtensils, FaCoffee, FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-brand-background)' }}>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(230,99,40,0.12) 0%, rgba(253,189,38,0.06) 60%, rgba(255,255,255,0) 100%)',
                        pointerEvents: 'none',
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand-primary)] bg-white/60 dark:bg-black/20 py-1 px-3 rounded-full shadow-sm">New • Open Daily</p>
                            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: 'var(--color-brand-primary)' }}>
                                Savor the Taste — Burgers, Rolls & Fresh Beverages
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl" style={{ color: 'rgba(0,0,0,0.7)' }}>
                                Cozy neighborhood café serving handcrafted burgers, warming chai, cold brews and everything in between. Fast service, friendly faces.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link to="/menu" className="hover:scale-105 transition-transform duration-300 inline-block px-6 py-3 rounded-full font-semibold text-black shadow" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                                    Explore Menu
                                </Link>
                                <Link to="/order" className="hover:scale-105 transition-transform duration-300 inline-block px-6 py-3 rounded-full font-semibold border-2" style={{ borderColor: 'var(--color-brand-primary)', color: 'var(--color-brand-primary)' }}>
                                    Order Now
                                </Link>
                            </div>

                            <div className="mt-8 flex gap-6 items-center">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full p-3 bg-white shadow">
                                        <FaUtensils className="text-xl text-[color:var(--color-brand-primary)]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">Fresh Ingredients</div>
                                        <div className="text-sm text-gray-600">Sourced locally and cooked to order</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="rounded-full p-3 bg-white shadow">
                                        <FaCoffee className="text-xl text-[color:var(--color-brand-secondary)]" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">Specialty Drinks</div>
                                        <div className="text-sm text-gray-600">Chai, lattes and cold brews</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md">
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80&auto=format&fit=crop" alt="Burger" className="rounded-3xl shadow-xl w-full object-cover" />
                                    <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4">
                                        <img src="https://images.unsplash.com/photo-1543353071-087092ec393a?w=200&q=60&auto=format&fit=crop" alt="roll" className="w-16 h-16 rounded-md object-cover" />
                                        <div>
                                            <div className="font-semibold">Classic Roll</div>
                                            <div className="text-sm text-gray-600">Crispy, spicy & satisfying</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Items */}
            <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="text-2xl font-bold mb-6">Popular at the Chai Cafeteria</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60&auto=format&fit=crop" alt="burger" className="w-full h-40 object-cover rounded-md" />
                        <h4 className="mt-3 font-semibold">Burger</h4>
                        <p className="text-sm text-gray-600">Veg, Chicken burger, Egg burger, more</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
                        <img src="images/rolls.png" alt="rolls" className="w-full h-40 object-cover rounded-md" />
                        <h4 className="mt-3 font-semibold">Roll</h4>
                        <p className="text-sm text-gray-600">Paneer, Egg, Chicken and more</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
                        <img src="images/thali.png" alt="thali" className="w-full h-40 object-cover rounded-md" />
                        <h4 className="mt-3 font-semibold">Thali</h4>
                        <p className="text-sm text-gray-600">A complete meal with various dishes.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
                        <img src="images/beverages.png" alt="beverage" className="w-full h-40 object-cover rounded-md" />
                        <h4 className="mt-3 font-semibold">Fresh Beverages</h4>
                        <p className="text-sm text-gray-600">Chai, iced tea, cold brew and more.</p>
                    </div>
                </div>
            </section>

            {/* CTA strip */}
            <section id="order" className="mt-12 py-12">
                <div className="max-w-7xl mx-auto px-6 bg-[rgba(230,99,40,0.05)] rounded-xl py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-xl font-bold">Hungry now?</h4>
                        <p className="text-gray-700">Order online or visit us for a quick bite.</p>
                    </div>
                    <div>
                        <a href="#" className="px-6 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: 'var(--color-brand-primary)' }}>Order Online</a>
                    </div>
                </div>
            </section>
        </div>
    )
}