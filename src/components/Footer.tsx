'use client';

import Image from 'next/image'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
    const [currentYear] = useState(() => new Date().getFullYear());
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleScrollTo = (elementId: string) => {
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

    return (
        <footer className="bg-emerald-900 text-white p-8 lg:py-12 lg:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Ferienwohnung Landliebe"
                                width="0" 
                                height="0"
                                sizes="100vw"
                                className="h-24 w-auto mb-4"
                            />
                        </Link>
                        <p className="text-emerald-100 mb-4">
                            Ihre perfekte Auszeit in der malerischen Rhön - gemütliche Ferienwohnung für 2 Personen
                        </p>
                        <div className="flex items-center gap-2 text-emerald-100">
                            <MapPin size={16} />
                            <span>Fatimastraße 19, 36124 Eichenzell</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-emerald-100">
                            <Mail size={16} />
                            <a href="mailto:kontakt@ferienwohnunglandliebe.de"><span className="hover:text-emerald-600">kontakt@ferienwohnunglandliebe.de</span></a>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-emerald-100">
                            <Phone size={16} />
                            <a href="tel:+4915756041425"><span className="hover:text-emerald-600">+4915756041425</span></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {[
                                { id: 'overview', label: 'Übersicht' },
                                { id: 'gallery', label: 'Bildergalerie' },
                                { id: 'amenities', label: 'Ausstattung' },
                                { id: 'prices', label: 'Preise' },
                                { id: 'availability', label: 'Verfügbarkeit' },
                                { id: 'contact', label: 'Kontakt & Buchung' },
                                { id: 'location', label: 'Lage' },
                            ].map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleScrollTo(item.id)}
                                        className="text-emerald-100 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/impressum" className="text-emerald-100 hover:text-white transition-colors">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/datenschutz" className="text-emerald-100 hover:text-white transition-colors">
                                    Datenschutz
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-6 text-emerald-100">
                            <p className="text-sm">Diese Unterkunft wird von einem privaten Gastgeber geführt.</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-emerald-800">
                    <p className="text-emerald-100 text-sm text-center">
                        © {currentYear} Ferienwohnung Landliebe. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    );
}