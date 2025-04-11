'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeaderMainMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleScrollTo = (elementId: string) => {
        setMenuOpen(false);
        
        if (isHomePage) {
            // If we're on the home page, scroll to the element
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // If we're not on the home page, navigate to the home page with the hash
            window.location.href = `/#${elementId}`;
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
        <nav className="fixed w-full z-50 py-4 px-4 bg-[#f8f5f1] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image src="/logo.png" alt="Ferienwohnung Landliebe" width="0" height="0" sizes="100vw" className="w-full h-16" />
                    </Link>
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
        </nav>
    );
}