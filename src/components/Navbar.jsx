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
                    <NavLink to="/about" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >About Us</NavLink>
                    <NavLink to="/menu" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Menu</NavLink>
                    <NavLink to="/gallery" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Gallery</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Contact</NavLink>
                    <NavLink to="/career" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                        style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    >Careers</NavLink>
                </div>

                {/* Desktop Action Buttons with Dropdown */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative group">
                        <a
                            className="hover:cursor-pointer text-black font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:opacity-90 z-20 flex items-center gap-2"
                            style={{ backgroundColor: 'var(--color-brand-primary)' }}
                            href="https://play.google.com/store/apps/details?id=com.chaicafeteriaranchi.frontend"
                        >
                            Download the App Now
                        </a>
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
                    <Link to="/about" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>About Us</Link>
                    <Link to="/menu" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Menu</Link>
                    <Link to="/gallery" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Gallery</Link>
                    <Link to="/contact" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Contact</Link>
                    <Link to="/career" className="text-brand-text text-xl font-medium" onClick={handleLinkClick}>Careers</Link>
                    
                    {/* Direct links for mobile for better UX */}
                    <div className="w-full pt-4 mt-4 border-t border-gray-300 flex flex-col items-center gap-4">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.chaicafeteriaranchi.frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:opacity-90 w-full max-w-xs text-center"
                            style={{ backgroundColor: '#E23747' }}
                            onClick={handleLinkClick}
                        >
                            Download the App Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;