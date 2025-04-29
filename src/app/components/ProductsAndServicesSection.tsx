'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'product' | 'service';
}

const productsAndServices: Product[] = [
  {
    id: 1,
    name: 'Industrial Floor Scale',
    description: 'Heavy-duty floor scale perfect for warehouses and industrial settings',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Industrial+Floor+Scale',
    category: 'product'
  },
  {
    id: 2,
    name: 'Laboratory Balance',
    description: 'Precision laboratory scale for scientific and research applications',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Laboratory+Balance',
    category: 'product'
  },
  {
    id: 3,
    name: 'Retail Scale',
    description: 'Compact and accurate scale for retail and commercial use',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Retail+Scale',
    category: 'product'
  },
  {
    id: 4,
    name: 'Scale Calibration',
    description: 'Professional calibration services to ensure accurate measurements',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Scale+Calibration',
    category: 'service'
  },
  {
    id: 5,
    name: 'Scale Repair',
    description: 'Expert repair services for all types of scales',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Scale+Repair',
    category: 'service'
  },
  {
    id: 6,
    name: 'Scale Maintenance',
    description: 'Regular maintenance to keep your scales in optimal condition',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Scale+Maintenance',
    category: 'service'
  }
];

export default function ProductsAndServicesSection({ id }: { id: string }) {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const updateScrollState = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollPosition(scrollLeft);
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // Width of each card (w-80 = 20rem = 320px)
      const scrollAmount = cardWidth;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(updateScrollState, 100);
      };

      container.addEventListener('scroll', handleScroll);
      // Initial check
      updateScrollState();
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [updateScrollState]);

  return (
    <section id={id} className="py-20 bg-white" aria-label="Products and Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900">
              {t('products.title')}
            </h2>
            <a 
              href="/products" 
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
              aria-label="View all products and services"
            >
              {t('products.viewMore')}
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="reveal-stagger">
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors ${
                isAtStart ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isAtStart}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              role="region"
              aria-label="Products and services carousel"
            >
              {productsAndServices.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md flex-shrink-0 w-80 snap-center hover:shadow-lg transition-shadow"
                  role="article"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.category === 'product' 
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-secondary-100 text-secondary-600'
                      }`}>
                        {item.category === 'product' ? t('products.product') : t('products.service')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{item.name}</h3>
                    <p className="text-secondary-600 mb-4">{item.description}</p>
                    <button 
                      className="bg-primary-600 text-white w-full py-2 rounded-md hover:bg-primary-700 transition-colors"
                      aria-label={`View details for ${item.name}`}
                    >
                      {t('products.viewDetails')}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors ${
                isAtEnd ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isAtEnd}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 