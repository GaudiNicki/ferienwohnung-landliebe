'use client';

import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '600px'
};

const center = {
    lat: 50.48458,
    lng: 9.67025
};

const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: true,
    mapTypeControl: true,
    streetViewControl: true
};

export default function LocationMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });

    const [isOpen, setIsOpen] = useState(true);

    return (
        <section id="location" className="p-8 lg:py-20 lg:px-8 bg-emerald-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-emerald-800">Lage</h2>
                <div className="flex-col gap-8 h-full">
                    {/* Map and Address Section */}
                    <div className="lg:col-span-2 min-h-20">
                        <div className="bg-white p-6 rounded-2xl h-full">
                            <div className="h-full rounded-lg overflow-hidden">
                                {!isLoaded ? (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                        <div className="text-gray-600">Loading map...</div>
                                    </div>
                                ) : (
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={18}
                                        options={mapOptions}
                                    >
                                         <MarkerF 
                                            position={center}
                                            title="Ferienwohnung Landliebe"
                                            onClick={() => setIsOpen(true)}
                                        />
                                        {isOpen && (
                                            <InfoWindowF
                                                position={center}
                                                onCloseClick={() => setIsOpen(false)}
                                            >
                                                <div className="p-2">
                                                    <h3 className="font-semibold text-emerald-800 mb-2">
                                                        Ferienwohnung Landliebe
                                                    </h3>
                                                    <div className="text-sm text-gray-600">
                                                        <p>Fatimastraße 19</p>
                                                        <p>36124 Eichenzell</p>
                                                        <p>Kerzell</p>
                                                    </div>
                                                </div>
                                            </InfoWindowF>
                                        )}
                                    </GoogleMap>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Nearby Section */}
                        <div className="bg-white p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">In der Nähe</h3>
                            <div className="grid grid-cols-2 gap-x-24 gap-y-8">
                                <div>
                                    <h4 className="font-semibold mb-2">Orte</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center justify-between">
                                            <span>Fulda</span>
                                            <span className="text-gray-600">8 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Schlüchtern</span>
                                            <span className="text-gray-600">21 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Gersfeld</span>
                                            <span className="text-gray-600">21 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Hünfeld</span>
                                            <span className="text-gray-600">25 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Schlitz</span>
                                            <span className="text-gray-600">38 km</span>
                                        </li>  
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Restaurants & Cafés</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center justify-between">
                                            <span>Gasthof Waidmannsheil</span>
                                            <span className="text-gray-600">300 m</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Pizzeria La Strega</span>
                                            <span className="text-gray-600">2 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Pizzeria Italia</span>
                                            <span className="text-gray-600">3 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Amvrosia Gastrobar</span>
                                            <span className="text-gray-600">3 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Pizzeria Blero</span>
                                            <span className="text-gray-600">4 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Gasthoff Schmitt</span>
                                            <span className="text-gray-600">7 km</span>
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
                                            <span>Guckaisee</span>
                                            <span className="text-gray-600">18 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Rotes Moor</span>
                                            <span className="text-gray-600">27 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Milseburg</span>
                                            <span className="text-gray-600">28 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Wasserkuppe</span>
                                            <span className="text-gray-600">30 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Kloster Kreuzberg</span>
                                            <span className="text-gray-600">40 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Schwarzes Moor</span>
                                            <span className="text-gray-600">48 km</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Einkaufsmöglichkeiten</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center justify-between">
                                            <span>Lebensmittel</span>
                                            <span className="text-gray-600">2 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Getränke</span>
                                            <span className="text-gray-600">2 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Bäcker</span>
                                            <span className="text-gray-600">2 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Einkauszentrum</span>
                                            <span className="text-gray-600">6 km</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}