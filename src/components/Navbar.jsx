import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleLinkClick = () => setIsMenuOpen(false);

    // --- Style Definitions ---

    // Base classes for all nav links
    const baseLinkClasses = "relative z-10 font-medium px-5 py-2 transition-all duration-300 inline-flex items-center justify-center min-w-[100px]"; // inline-flex to size to content


    // Active style using a robust gradient pill; avoids data-URI parsing issues
    const activeLinkClasses = `text-white shadow-sm`;
    const activeLinkStyle = {
        background: 'linear-gradient(180deg, #FDBD26 0%, #FFD24D 100%)',
        borderRadius: '9999px',
        paddingInline: '20px',
        paddingBlock: '8px',
    };

    // Classes for inactive links
    const inactiveLinkClasses = "text-black hover:text-[var(--color-brand-primary)] rounded-md";

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
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to='/order-online'
                        className="text-black font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:opacity-90 z-20"
                        style={{ backgroundColor: 'var(--color-brand-primary)' }}
                    >
                        Order Online
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-brand-text focus:outline-none">{isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}</button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-full left-0 w-full md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`} style={{ backgroundColor: 'var(--color-brand-background, #FFF8F0)' }}>
                <div className="flex flex-col items-center space-y-6 py-8">
                    {/* For mobile, you might want simpler active styles, or repeat the SVG background if it fits */}
                    <Link to="/" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Home</Link>
                    <Link to="/menu" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Menu</Link>
                    <Link to="/about" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>About Us</Link>
                    <Link to="/contact" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Contact</Link>
                    <Link
                        to='/order-online'
                        className="text-black font-bold py-3 px-8 rounded-full shadow-lg text-lg mt-4 hover:opacity-90"
                        style={{ backgroundColor: 'var(--color-brand-primary)' }}
                        onClick={handleLinkClick}
                    >
                        Order Online
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;