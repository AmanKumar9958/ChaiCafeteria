import React, { useMemo, useRef } from 'react';
import QRCode from 'react-qr-code';

export default function QRMenu() {
  const containerRef = useRef(null);
  const url = useMemo(() => {
    // Build absolute URL to the /menu-images route
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      return `${origin}/menu-images`;
    }
    return '/menu-images';
  }, []);

  return (
    <div className="min-h-screen bg-brand-background text-brand-text flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-4">Scan to view our Menu</h1>
        <p className="text-gray-700 mb-6">This QR code opens the menu images page. Share it with customers for quick access.</p>
        <div className="bg-white p-4 rounded-xl inline-block shadow" ref={containerRef}>
          <QRCode value={url} size={220} level="H" />
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 rounded-full bg-brand-primary text-black font-semibold shadow hover:opacity-90"
            onClick={() => {
              // Render the SVG to a canvas and download as PNG
              const svg = containerRef.current?.querySelector('svg');
              if (!svg) return;
              const xml = new XMLSerializer().serializeToString(svg);
              const svg64 = window.btoa(unescape(encodeURIComponent(xml)));
              const imgSrc = 'data:image/svg+xml;base64,' + svg64;
              const image = new Image();
              image.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0);
                const png = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = png;
                a.download = 'chai-cafeteria-menu-qr.png';
                a.click();
              };
              image.src = imgSrc;
            }}
          >
            Download QR (PNG)
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-600 break-all">{url}</p>
      </div>
    </div>
  );
}
