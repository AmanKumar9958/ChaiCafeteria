import React from 'react';

const images = ['/images/menu_1.jpg', '/images/menu_2.jpg', '/images/menu_3.jpg'];

export default function MenuImages() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-text">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-6 text-center">Menu Images</h1>
        <p className="text-center text-gray-700 mb-8">Scan the QR or share this link to view our menu boards.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((src) => (
            <div key={src} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={src} alt="Menu" className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
