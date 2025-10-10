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

// --- Fallback Component ---
// This simple component will be displayed while a lazy page is loading.
// You can replace this with a more stylish spinner or skeleton loader.
const LoadingFallback = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <p>Loading...</p>
    </div>
);

const App = () => {
    return (
        <>
            <ScrollToTop />
            {/* The Suspense component wraps your routes. 
              It will catch the loading state of any lazy component inside it
              and display the 'fallback' UI until the component is ready.
            */}
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/gallery' element={<Gallery />} />
                    </Route>
                </Routes>
            </Suspense>
            <WhatsAppButton />
        </>
    );
};

export default App;
