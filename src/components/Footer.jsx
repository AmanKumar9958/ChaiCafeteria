import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-brand-primary text-white py-6 mt-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Chai Cafeteria. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer