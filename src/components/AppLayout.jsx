import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const AppLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Add top padding so sticky navbar doesn't overlap content */}
        <main className="flex-1 px-3 pt-4 md:pt-6">
        <Outlet />
        </main>
        <Footer />
    </div>
)

export default AppLayout