'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const handleScrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="relative h-screen max-h-[800px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-left-top bg-cover brightness-90"
                style={{backgroundImage: "url('/header.jpg')"}}
            />

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
        </div>
    );
}