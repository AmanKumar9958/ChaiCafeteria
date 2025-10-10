import AppLayout from './components/AppLayout.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Gallery from './pages/Gallery.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/gallery' element={<Gallery />} />
                </Route>
            </Routes>
            <WhatsAppButton />
        </>
    )
}

export default App