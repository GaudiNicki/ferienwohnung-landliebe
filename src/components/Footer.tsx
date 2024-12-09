'use client';

import Image from 'next/image'; 
import { MapPin, Mail, Star } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {

    const [currentYear] = useState(() => new Date().getFullYear());

    return (
        <footer className="bg-emerald-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2">
                        <Image
                            src="/logo.png"
                            alt="Ferienwohnung Landliebe"
                            width="0" 
                            height="0"
                            sizes="100vw"
                            className="h-24 w-auto mb-4"
                        />
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
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#description" className="text-emerald-100 hover:text-white transition-colors">
                                    Übersicht
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-emerald-100 hover:text-white transition-colors">
                                    Galerie
                                </a>
                            </li>
                            <li>
                                <a href="#amenities" className="text-emerald-100 hover:text-white transition-colors">
                                    Ausstattung
                                </a>
                            </li>
                            <li>
                                <a href="#location" className="text-emerald-100 hover:text-white transition-colors">
                                    Lage
                                </a>
                            </li>
                            <li>
                                <a href="#availability" className="text-emerald-100 hover:text-white transition-colors">
                                    Verfügbarkeit
                                </a>
                            </li>
                            <li>
                                <a href="#prices" className="text-emerald-100 hover:text-white transition-colors">
                                    Preise
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-emerald-100 hover:text-white transition-colors">
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/impressum" className="text-emerald-100 hover:text-white transition-colors">
                                    Impressum
                                </a>
                            </li>
                            <li>
                                <a href="/datenschutz" className="text-emerald-100 hover:text-white transition-colors">
                                    Datenschutz
                                </a>
                            </li>
                            <li>
                                <a href="/agb" className="text-emerald-100 hover:text-white transition-colors">
                                    AGB
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 text-emerald-100">
                            <p className="text-sm">Diese Unterkunft wird von einem privaten Gastgeber geführt.</p>
                        </div>
                        <div className="mt-4 text-emerald-100">
                            <p className="text-sm flex items-center gap-2">
                                <Star className="text-yellow-400" size={16} />
                                <span>9,3/10 - Hervorragende Bewertungen</span>
                            </p>
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