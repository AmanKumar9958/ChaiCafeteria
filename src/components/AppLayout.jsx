import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const AppLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 px-3 mt-2">
        <Outlet />
        </main>
    </div>
)

export default AppLayout