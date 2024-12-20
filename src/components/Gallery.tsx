'use client';

import { useState, useEffect, useCallback} from 'react';
import { ChevronLeft, ChevronRight, Info, X, Minimize2, Maximize2} from 'lucide-react';
import Image from "next/image";

const images = [
    {
        src: '/gallery/image-1.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-2.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-3.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-4.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-5.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-6.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-7.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-8.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-9.jpg',
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        src: '/gallery/image-10.jpg',
        description: 'Lorem ipsum dolor sit amet'
    }
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Handle keyboard navigation
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            goToNext();
        } else if (event.key === 'ArrowLeft') {
            goToPrevious();
        } else if (event.key === 'Escape') {
            setIsFullscreen(false);
        }
    }, [goToNext, goToPrevious]);

    // Add/remove keyboard event listeners
    useEffect(() => {
        if (isFullscreen) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [isFullscreen, handleKeyDown]);

    const MainGalleryImage = () => (
        <div className={`relative overflow-hidden rounded-xl group ${isFullscreen ? 'h-screen' : 'aspect-[4/3]'}`}>
            {/* Main Image */}
            <div className="absolute inset-0">
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].description}
                    width="0" 
                    height="0"
                    sizes="100vw"
                    className="w-full h-full object-cover"
                    priority={true}
                />
            </div>

            {/* Description Overlay */}
            <div 
                className={`absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transform transition-transform duration-300 ${
                    showDescription ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <p className="text-lg">{images[currentIndex].description}</p>
            </div>

            {/* Control Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
                <button
                    onClick={() => setShowDescription(!showDescription)}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Toggle description"
                >
                    <Info className="w-6 h-6" />
                </button>
                <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Toggle fullscreen"
                >
                    {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                </button>
                {isFullscreen && (
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        aria-label="Close fullscreen"
                    >
                        <X className="w-6 h-6" />
                    </button>
                )}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );

    return (
        <>
            {/* Fullscreen Modal */}
            {isFullscreen ? (
                <div className="fixed inset-0 z-50 bg-black">
                    <MainGalleryImage />
                </div>
            ) : (
                <section id="gallery" className="p-8 lg:py-20 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-emerald-800">Bildergalerie</h2>
                        <div className="relative w-full">
                            <MainGalleryImage />

                            {/* Thumbnails */}
                            <div className="mt-4 grid grid-cols-6 gap-2">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`relative aspect-[4/3] overflow-hidden rounded-lg group ${
                                            index === currentIndex ? 'ring-2 ring-emerald-500' : ''
                                        }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.description}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Thumbnail Hover Description */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2">
                                            <p className="text-white text-xs text-center">{image.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}