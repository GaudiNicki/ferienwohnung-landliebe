'use client';

import React from 'react';
import HeaderMainMenu from '@/components/HeaderMainMenu';
import HeroSection from '@/components/HeroSection';

export default function Header() {
    return (
        <header>
            <HeaderMainMenu />
            <HeroSection />
        </header>
    );
}