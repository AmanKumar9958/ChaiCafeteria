import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layout and components
import AppLayout from './components/AppLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// --- Lazy-loaded page components ---
// These pages will be loaded on demand.
const Home = lazy(() => import('./pages/Home.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Menu = lazy(() => import('./pages/Menu.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const MenuImages = lazy(() => import('./pages/MenuImages.jsx'));
const Career = lazy(() => import('./pages/Career.jsx'));
const QRMenu = lazy(() => import('./pages/QRMenu.jsx'));

const LoadingFallback = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <p>Loading...</p>
    </div>
);

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/menu-images' element={<MenuImages />} />
                        <Route path='/career' element={<Career />} />
                        <Route path='/qr-menu' element={<QRMenu />} />
                    </Route>
                </Routes>
            </Suspense>
            <WhatsAppButton />
        </>
    );
};

export default App;     
