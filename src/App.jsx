import AppLayout from './components/AppLayout'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'

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