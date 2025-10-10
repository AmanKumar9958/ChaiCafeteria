import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleLinkClick = () => setIsMenuOpen(false);

    // --- Style Definitions ---

    // Base classes for all nav links
    const baseLinkClasses = "relative z-10 font-medium px-5 py-2 transition-all duration-300 inline-flex items-center justify-center min-w-[100px]";

    // Active style using a robust gradient pill
    const activeLinkClasses = `text-white shadow-sm`;
    const activeLinkStyle = {
        background: '#FBBE25',
        borderRadius: '9999px',
        paddingInline: '20px',
        paddingBlock: '8px',
    };

    // Classes for inactive links
    const inactiveLinkClasses = "text-black hover:text-[var(--color-brand-primary)] rounded-md";

    const MenuIcon = () => (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    );

    const CloseIcon = () => (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    );


    return (
        <nav className="shadow-lg sticky top-0 z-[100] w-full" style={{ backgroundColor: 'var(--color-brand-background, #FFF8F0)' }}>
            <div className="container mx-auto flex justify-between items-center p-1">
                {/* Logo */}
                <Link to="/" onClick={handleLinkClick}>
                    <img src="/images/logo_png.png" alt="Cafe Logo" className='h-16 md:h-20' />
                </Link>

                {/* Desktop Menu Links */}
                <div className="hidden md:flex items-center space-x-2">
                    <NavLink to="/" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Home</NavLink>
                    <NavLink to="/menu" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Menu</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >About Us</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Contact</NavLink>
                    <NavLink to="/gallery" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Gallery</NavLink>
                </div>

                {/* Desktop Action Buttons with Dropdown */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative group">
                        <button
                            type="button"
                            className="text-black font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:opacity-90 z-20 flex items-center gap-2"
                            style={{ backgroundColor: 'var(--color-brand-primary)' }}
                        >
                            Order Online
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="absolute hidden group-hover:block right-0 pt-2 w-48 bg-transparent">
                            <div className="bg-white rounded-md shadow-lg px-1 py-1 z-50 ring-1 ring-black ring-opacity-5">
                                <a
                                    href="https://www.zomato.com/ranchi/chai-cafeteria-hatia/order"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg block px-4 py-2 text-sm text-gray-700 hover:bg-[#E23747] hover:text-white duration-200 transition-all"
                                >
                                    Zomato
                                </a>
                                <a
                                    href="https://www.swiggy.com/city/ranchi/chai-cafeteria-blue-diamond-complex-hatia-rest953762"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg block px-4 py-2 text-sm text-gray-700 hover:bg-[#FF5200] hover:text-white duration-200 transition-all"
                                >
                                    Swiggy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-brand-text focus:outline-none">{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-full left-0 w-full md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`} style={{ backgroundColor: 'var(--color-brand-background, #FFF8F0)' }}>
                <div className="flex flex-col items-center space-y-6 py-8 px-4">
                    <Link to="/" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Home</Link>
                    <Link to="/menu" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Menu</Link>
                    <Link to="/about" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>About Us</Link>
                    <Link to="/contact" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Contact</Link>
                    <Link to="/gallery" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Gallery</Link>
                    
                    {/* Direct links for mobile for better UX */}
                    <div className="w-full pt-4 mt-4 border-t border-gray-300 flex flex-col items-center gap-4">
                         <a
                            href="https://www.zomato.com/ranchi/chai-cafeteria-hatia/order"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:opacity-90 w-full max-w-xs text-center"
                            style={{ backgroundColor: '#E23747' }}
                            onClick={handleLinkClick}
                        >
                            Order on Zomato
                        </a>
                        <a
                            href="https://www.swiggy.com/city/ranchi/chai-cafeteria-blue-diamond-complex-hatia-rest953762"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:opacity-90 w-full max-w-xs text-center"
                            style={{ backgroundColor: '#FF5200' }}
                            onClick={handleLinkClick}
                        >
                            Order on Swiggy
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;