import AppLayout from './components/AppLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/menu' element={<Menu />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App