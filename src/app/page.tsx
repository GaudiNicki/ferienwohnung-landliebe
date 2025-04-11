import React from 'react';

import Header from '@/components/Header';
import Overview from '@/components/Overview';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';
import Availability from '@/components/Availability';
import Prices from '@/components/Prices';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <Header />

            {/* Overview Section */}
            <Overview />

            {/* Gallery Section */}
            <Gallery />
            
            {/* Amenities Section */}
            <Amenities />

            {/* Prices Section */}
            <Prices />

            {/* Availability Section */}
            <Availability />

            {/* Contact Section */}
            <Contact />

            {/* Location & Map Section */}
            <LocationMap />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}