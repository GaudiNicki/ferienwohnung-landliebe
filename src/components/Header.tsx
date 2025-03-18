'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollTo = (elementId: string) => {
        setMenuOpen(false);
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const navigationItems = [
        { id: 'overview', label: 'Übersicht' },
        { id: 'gallery', label: 'Bildergalerie' },
        { id: 'amenities', label: 'Ausstattung' },
        { id: 'prices', label: 'Preise' },
        { id: 'availability', label: 'Verfügbarkeit' },
        { id: 'contact', label: 'Kontakt & Buchung' },
        { id: 'location', label: 'Lage' },
    ];

    return (
        <header className="relative h-screen max-h-[800px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-left-top bg-cover brightness-90"
                style={{backgroundImage: "url('/dom.jpg')"}}
            />
            <nav className="fixed w-full z-50 py-4 px-4 bg-[#f8f5f1] backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="Ferienwohnung Landliebe" width="0" height="0" sizes="100vw" className="w-full h-16" />
                    </div>

                    <div className="hidden xl:flex gap-8 text-gray-800">
                        {navigationItems.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                onClick={() => handleScrollTo(item.id)}
                                className="hover:text-emerald-700 text-md hover:bg-transparent"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    <button
                        className="xl:hidden text-gray-800 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-24 z-40 p-4 w-full bg-white shadow-lg xl:hidden">
                    <div className="flex flex-col text-center gap-4">
                        {navigationItems.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                onClick={() => handleScrollTo(item.id)}
                                className="text-lg py-6 hover:bg-transparent hover:text-emerald-700"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center text-white">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">Willkommen in Kerzell</h2>
                    <p className="text-xl md:text-2xl mb-8">Ihre gemütliche Ferienwohnung in der Nähe von Fulda <br/> am Fuße der Rhön</p>
                    <Button
                        onClick={() => handleScrollTo("contact")}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold p-8 rounded-full w-50"
                    >
                        Jetzt anfragen
                    </Button>
                </div>
            </div>
        </header>
    );
}

