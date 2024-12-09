'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollTo = (elementId: string) => {
        // Close mobile menu if open
        setMenuOpen(false);
        
        // Find the element
        const element = document.getElementById(elementId);
        if (element) {
            // Scroll smoothly to the element
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="relative h-screen max-h-[800px] w-full overflow-hidden bg-gray-50">
            <div
                className="absolute inset-0 bg-cover bg-center brightness-90"
                style={{backgroundImage: "url('/header.jpg')"}}
            />
            <nav className="fixed w-full z-50 py-4 px-4 bg-white/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="Ferienwohnung Landliebe" width="0" height="0" sizes="100vw" className="w-full h-16" />
                    </div>
                    <div className="hidden lg:flex gap-8 text-gray-800">
                    <button onClick={() => handleScrollTo('overview')} className="hover:text-emerald-700">Übersicht</button>
                        <button onClick={() => handleScrollTo('gallery')} className="hover:text-emerald-700">Bildergallerie</button>
                        <button onClick={() => handleScrollTo('amenities')} className="hover:text-emerald-700">Ausstattung</button>
                        <button onClick={() => handleScrollTo('contact')} className="hover:text-emerald-700">Kontakt & Buchung</button>
                        <button onClick={() => handleScrollTo('location')} className="hover:text-emerald-700">Lage</button>
                        <button onClick={() => handleScrollTo('rules')} className="hover:text-emerald-700">Hausregeln</button>
                        <button onClick={() => handleScrollTo('availability')} className="hover:text-emerald-700">Verfügbarkeit</button>
                        <button onClick={() => handleScrollTo('prices')} className="hover:text-emerald-700">Preise</button>
                     
                    </div>
                    <button
                        className="lg:hidden text-gray-800 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-24 z-40 w-full bg-white shadow-lg lg:hidden">
                    <div className="flex flex-col p-4 text-center">
                        <button onClick={() => handleScrollTo('overview')} className="py-2 px-4 hover:bg-emerald-50">Übersicht</button>
                        <button onClick={() => handleScrollTo('gallery')} className="py-2 px-4 hover:bg-emerald-50">Bildergallerie</button>
                        <button onClick={() => handleScrollTo('amenities')} className="py-2 px-4 hover:bg-emerald-50">Ausstattung</button>
                        <button onClick={() => handleScrollTo('contact')} className="py-2 px-4 hover:bg-emerald-50">Kontakt & Buchung</button>
                        <button onClick={() => handleScrollTo('location')} className="py-2 px-4 hover:bg-emerald-50">Lage</button>
                        <button onClick={() => handleScrollTo('rules')} className="py-2 px-4 hover:bg-emerald-50">Hausregeln</button>
                        <button onClick={() => handleScrollTo('availability')} className="py-2 px-4 hover:bg-emerald-50">Verfügbarkeit</button>
                        <button onClick={() => handleScrollTo('prices')} className="py-2 px-4 hover:bg-emerald-50">Preise</button>
                    </div>
                </div>
            )}

            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center text-white">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">Willkommen in Kerzell</h2>
                    <p className="text-xl md:text-2xl mb-8">Ihre gemütliche Ferienwohnung in der Rhön</p>
                    <a
                        href="#contact"
                        className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
                    >
                        Jetzt anfragen
                    </a>
                </div>
            </div>
        </header>
    );
}

