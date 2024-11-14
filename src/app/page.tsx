'use client';

import React from 'react';
import {
  Ban,
  Car,
  Star,
  Check,
  Clock,
  Coffee,
  CookingPot,
  Home,
  Info,
  Mail,
  MapPin,
  Menu,
  Phone,
  Tv,
  Users,
  Wifi,
  X
} from 'lucide-react';
import { Gallery } from '@/components/Gallery';
import { AvailabilityCalendar } from '@/components/AvailabilityCalendar';
import { Map } from '@/components/Map';
import { HostSection } from '@/components/HostSection';

export default function HomePage() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [currentYear] = React.useState(() => new Date().getFullYear());

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="relative h-screen max-h-[800px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center brightness-90"
                    style={{backgroundImage: "url('/header.jpg')"}}
                />
                <nav className="fixed w-full z-50 py-4 px-4 bg-white/90 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img src="/logo.png" alt="Ferienwohnung Landliebe" className="h-16 w-auto"/>
                        </div>
                        <div className="hidden md:flex gap-8 text-gray-800">
                            <a href="#description" className="hover:text-emerald-700">Übersicht</a>
                            <a href="#gallery" className="hover:text-emerald-700">Galerie</a>
                            <a href="#amenities" className="hover:text-emerald-700">Ausstattung</a>
                            <a href="#location" className="hover:text-emerald-700">Lage</a>
                            <a href="#availability" className="hover:text-emerald-700">Verfügbarkeit</a>
                            <a href="#prices" className="hover:text-emerald-700">Preise</a>
                            <a href="#contact" className="hover:text-emerald-700">Kontakt</a>
                        </div>
                        <button
                            className="md:hidden text-gray-800 p-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="fixed top-24 z-40 w-full bg-white shadow-lg md:hidden">
                        <div className="flex flex-col p-4">
                            <a href="#description" className="py-2 px-4 hover:bg-emerald-50">Übersicht</a>
                            <a href="#gallery" className="py-2 px-4 hover:bg-emerald-50">Galerie</a>
                            <a href="#amenities" className="py-2 px-4 hover:bg-emerald-50">Ausstattung</a>
                            <a href="#location" className="py-2 px-4 hover:bg-emerald-50">Lage</a>
                            <a href="#availability" className="py-2 px-4 hover:bg-emerald-50">Verfügbarkeit</a>
                            <a href="#prices" className="py-2 px-4 hover:bg-emerald-50">Preise</a>
                            <a href="#contact" className="py-2 px-4 hover:bg-emerald-50">Kontakt</a>
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

            {/* Description Section */}
            <section id="description" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold mb-6 text-emerald-800">Ihre Ferienwohnung Landliebe</h2>
                            <div className="prose max-w-none text-gray-600">
                                <p className="text-lg mb-4">
                                    Die Ferienwohnung Landliebe liegt in Kerzell, das ist ein Ortsteil von Eichenzell in
                                    der Nähe von Fulda.
                                    Unsere renovierte gemütliche Altbau-Ferienwohnung für zwei Personen befindet sich im
                                    idyllischen Kerzell.
                                    Mit dem Auto ist Kerzell ca 8 km südlich von der Stadt Fulda und ist gut über die
                                    A7/A66 oder die B27 zu erreichen.
                                </p>
                                <p className="text-lg mb-4">
                                    Rund um Kerzell gibt es viele Möglichkeiten sich die Zeit zu vertreiben. Wer gerne
                                    wandert oder Fahrrad fährt,
                                    findet hier einige tolle Wanderwege und Fahrradwege. Der Fahrradweg R1 geht direkt
                                    an Kerzell vorbei und führt z.b. nach Fulda.
                                    Anspruchsvolle Wanderstrecken gibt es in der nahegelegenen Rhön mit dem Höchsten
                                    Berg von Hessen der Wasserkuppe.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="flex items-center gap-2">
                                    <Home className="text-emerald-600" size={20}/>
                                    <span>40 m² Wohnfläche</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="text-emerald-600" size={20}/>
                                    <span>Für 2 Personen</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Wifi className="text-emerald-600" size={20}/>
                                    <span>Kostenloses WLAN</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Car className="text-emerald-600" size={20}/>
                                    <span>Kostenfreie Parkplätze</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-emerald-600" size={20}/>
                                    <span>Zentrale Lage</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Coffee className="text-emerald-600" size={20}/>
                                    <span>Komplett ausgestattet</span>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Preview */}
                        <div className="w-full md:w-1/3">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Gästebewertungen</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-3xl font-bold text-emerald-600">9,3</span>
                                    <div>
                                        <p className="font-semibold">Hervorragend</p>
                                        <p className="text-sm text-gray-600">12 Bewertungen</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="border-b pb-4">
                                        <p className="italic text-gray-600">Eine saubere und gepflegte Ferienwohnung mit
                                            netten Vermietern.</p>
                                        <p className="text-sm text-gray-500 mt-2">- Silke, Deutschland</p>
                                    </div>
                                    <div className="border-b pb-4">
                                        <p className="italic text-gray-600">atmosphärisches Appartement, liebevoll
                                            eingerichtet</p>
                                        <p className="text-sm text-gray-500 mt-2">- Patricia, Deutschland</p>
                                    </div>
                                    <div className="pb-4">
                                        <p className="italic text-gray-600">Sehr gut ausgestattete Wohnung. Mit viel
                                            Liebe zu Detail wurde an alles gedacht.</p>
                                        <p className="text-sm text-gray-500 mt-2">- Martina, Deutschland</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Bildergalerie</h2>
                    <Gallery />
                </div>
            </section>

            {/* Amenities Section */}
            <section id="amenities" className="py-20 px-4 bg-emerald-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-emerald-800">Ausstattung</h2>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                            <span className="text-lg font-bold text-emerald-700">9,6</span>
                            <span className="text-gray-600">Tolle Ausstattung!</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Kitchen */}
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <CookingPot className="text-emerald-600" size={24}/>
                                Küche
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Voll ausgestattete Küche',
                                    'Geschirrspüler',
                                    'Mikrowelle',
                                    'Kaffeemaschine',
                                    'Kühlschrank',
                                    'Wasserkocher',
                                    'Toaster',
                                    'Küchenzeile',
                                    'Küchenutensilien',
                                    'Backofen',
                                    'Herdplatte'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Living Area */}
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Home className="text-emerald-600" size={24}/>
                                Wohnbereich
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Sitzbereich',
                                    'Essbereich',
                                    'Gartenblick',
                                    'Bettwäsche',
                                    'Handtücher',
                                    'Wäscheständer',
                                    'Bügeleisen',
                                    'Holz- oder Parkettböden',
                                    'Heizung'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Media & Technology */}
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Tv className="text-emerald-600" size={24}/>
                                Medien & Technik
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Flachbild-TV',
                                    'Satellitenempfang',
                                    'DVD-Player',
                                    'Radio',
                                    'Kostenfreies WLAN',
                                    'TV',
                                    'Steckdose in Bettnähe'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Additional Features */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Badezimmer</h3>
                            <ul className="space-y-3">
                                {[
                                    'Eigenes Badezimmer',
                                    'Dusche',
                                    'WC',
                                    'Toilettenpapier',
                                    'Handtücher'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Außenbereich & Parken</h3>
                            <ul className="space-y-3">
                                {[
                                    'Kostenfreie Parkplätze an der Straße',
                                    'Gartenblick',
                                    'Nichtraucherbereich',
                                    'Obere Stockwerke nur über Treppe erreichbar'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Host Section */}
            <HostSection />

            {/* Location Section */}
            <section id="location" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Lage</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <div className="bg-white p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Adresse</h3>
                                <p className="text-gray-600 mb-4">
                                    Fatimastraße 19<br />
                                    36124 Eichenzell<br />
                                    Deutschland
                                </p>
                                <div className="h-[400px] rounded-lg overflow-hidden">
                                    <Map />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="mt-8 bg-white p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Entfernungen</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center justify-between">
                                        <span>Eichenzell Zentrum</span>
                                        <span className="font-semibold">2,5 km</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Fulda</span>
                                        <span className="font-semibold">8 km</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Wasserkuppe</span>
                                        <span className="font-semibold">30 km</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Frankfurt Flughafen</span>
                                        <span className="font-semibold">105 km</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="bg-white p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">In der Nähe</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Restaurants & Cafés</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-center justify-between">
                                                <span>Gasthof Waidmannsheil</span>
                                                <span className="text-gray-600">300 m</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>La Strega</span>
                                                <span className="text-gray-600">2,3 km</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Löwe Fulda</span>
                                                <span className="text-gray-600">4,5 km</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Sehenswürdigkeiten</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-center justify-between">
                                                <span>Schloss Fasanerie</span>
                                                <span className="text-gray-600">5 km</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Dom zu Fulda</span>
                                                <span className="text-gray-600">8 km</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Kloster Kreuzberg</span>
                                                <span className="text-gray-600">40 km</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Section */}
            <section id="rules" className="py-20 px-4 bg-emerald-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Hausregeln</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Check-in & Check-out</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Clock className="text-emerald-600 mt-1" size={20}/>
                                    <div>
                                        <p className="font-semibold">Check-in: 15:00 - 20:00 Uhr</p>
                                        <p className="text-sm text-gray-600">Bitte informieren Sie uns im Voraus über
                                            Ihre Ankunftszeit</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="text-emerald-600 mt-1" size={20}/>
                                    <div>
                                        <p className="font-semibold">Check-out: bis 12:00 Uhr</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Wichtige Hinweise</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <Ban className="text-emerald-600" size={20}/>
                                    <span>Nichtraucherdomizil</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Ban className="text-emerald-600" size={20}/>
                                    <span>Keine Haustiere erlaubt</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Ban className="text-emerald-600" size={20}/>
                                    <span>Keine Partys oder Veranstaltungen</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Info className="text-emerald-600" size={20}/>
                                    <span>Mindestalter für Check-in: 18 Jahre</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 bg-white p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Weitere Informationen</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Info className="text-emerald-600 mt-1" size={20}/>
                                <span>Bitte teilen Sie uns Ihre voraussichtliche Ankunftszeit im Voraus mit.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Info className="text-emerald-600 mt-1" size={20}/>
                                <span>Baby- und Zustellbetten sind in dieser Unterkunft nicht verfügbar.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Info className="text-emerald-600 mt-1" size={20}/>
                                <span>Die Ferienwohnung ist für maximal 2 Personen ausgelegt.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Availability Section */}
            <section id="availability" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Verfügbarkeit</h2>
                    <div className="max-w-2xl mx-auto">
                        <AvailabilityCalendar />
                    </div>
                </div>
            </section>

            {/* Prices Section */}
            <section id="prices" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Preise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold">Oktober - April</h3>
                                <p className="text-4xl font-bold mt-4">ab 45€ <span
                                    className="text-base font-normal text-gray-600">/Nacht</span></p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span>1-2 Personen</span>
                                    <span className="font-semibold">45€ / Nacht</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Mindestaufenthalt</span>
                                    <span className="font-semibold">2 Nächte</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold">Mai - September</h3>
                                <p className="text-4xl font-bold mt-4">ab 70€ <span
                                    className="text-base font-normal text-gray-600">/Nacht</span></p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span>1-2 Personen</span>
                                    <span className="font-semibold">70€ / Nacht</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Mindestaufenthalt</span>
                                    <span className="font-semibold">2 Nächte</span>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Costs */}
                        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Zusätzliche Kosten</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span>Endreinigung</span>
                                    <span className="font-semibold">40€ einmalig</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-600">
                                    <Info className="shrink-0 mt-1" size={20}/>
                                    <span>Alle Preise verstehen sich inklusive Bettwäsche, Handtücher und Nebenkosten.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-emerald-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-emerald-800">Kontakt</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Ihre Gastgeberin</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-20 h-20 bg-gray-200 bg-center bg-cover rounded-full overflow-hidden"
                                    style={{backgroundImage: "url('/host.jpg')"}}
                                >
                                </div>
                                <div>
                                    <p className="font-semibold">Kerstin Witzel</p>
                                    <p className="text-gray-600">Spricht: Deutsch</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <Phone className="text-emerald-600" size={20}/>
                                    <span>[Telefonnummer]</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="text-emerald-600" size={20}/>
                                    <span>[E-Mail-Adresse]</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Für Ihre Anfrage benötigen wir</h3>
                            <ul className="space-y-3">
                                {[
                                    'Gewünschter Zeitraum (Anreise- und Abreisetag)',
                                    'Anzahl der Personen',
                                    'Name und Anschrift',
                                    'Telefonnummer für Rückfragen',
                                    'E-Mail-Adresse'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="text-emerald-600" size={20}/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            {/* Footer */}
            <footer className="bg-emerald-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="col-span-1 md:col-span-2">
                            <img
                                src="/logo.png"
                                alt="Ferienwohnung Landliebe"
                                className="h-16 w-auto mb-4"
                            />
                            <p className="text-emerald-100 mb-4">
                                Ihre perfekte Auszeit in der malerischen Rhön - gemütliche Ferienwohnung für 2 Personen
                            </p>
                            <div className="flex items-center gap-2 text-emerald-100">
                                <MapPin size={16} />
                                <span>Fatimastraße 19, 36124 Eichenzell</span>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-emerald-100">
                                <Phone size={16} />
                                <span>[Telefonnummer]</span>
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
        </div>
    );
}