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
  details: string;
  price: string;
}

const productsAndServices: Product[] = [
  {
    id: 1,
    name: 'INDICATEUR 120 SAURUS',
    description: 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54',
    image: '/images/Products/INDICATEUR 120 SAURUS.jpg',
    category: 'product',
    details: 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54. Clavier étanche à 6 touches fonctionnelles, écran LED rouge haute visibilité, 7 voyants LED d\'indication d\'état. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Plage de température de fonctionnement : -10°C à +40°C. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures. Interface RS232 intégrée. Unités sélectionnables : kg et lb. Homologué OIML classe III, jusqu\'à 3 000 divisions. Certification CE.',
    price: 'Prix sur demande'
  },
  {
    id: 2,
    name: 'Industrial Floor Scale',
    description: 'Heavy-duty floor scale perfect for warehouses and industrial settings',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Industrial+Floor+Scale',
    category: 'product',
    details: '',
    price: ''
  },
  {
    id: 3,
    name: 'Laboratory Balance',
    description: 'Precision laboratory scale for scientific and research applications',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Laboratory+Balance',
    category: 'product',
    details: '',
    price: ''
  },
  {
    id: 4,
    name: 'Retail Scale',
    description: 'Compact and accurate scale for retail and commercial use',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Retail+Scale',
    category: 'product',
    details: '',
    price: ''
  },
  {
    id: 5,
    name: 'Scale Calibration',
    description: 'Professional calibration services to ensure accurate measurements',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Scale+Calibration',
    category: 'service',
    details: '',
    price: ''
  },
  {
    id: 6,
    name: 'Scale Repair',
    description: 'Expert repair services for all types of scales',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Scale+Repair',
    category: 'service',
    details: '',
    price: ''
  },
  {
    id: 7,
    name: 'Scale Maintenance',
    description: 'Regular maintenance to keep your scales in optimal condition',
    image: 'https://placehold.co/600x400/222222/FFFFFF/png?text=Scale+Maintenance',
    category: 'service',
    details: '',
    price: ''
  }
];

export default function ProductsAndServicesSection({ id }: { id: string }) {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'product' | 'service'>('all');
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
      const cardWidth = 320;
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
      updateScrollState();
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [updateScrollState]);

  const filteredItems = productsAndServices.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || item.category === filter;
    return matchesSearch && matchesFilter;
  });

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

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder={t('products.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('products.all')}
            </button>
            <button
              onClick={() => setFilter('product')}
              className={`px-4 py-2 rounded-md ${
                filter === 'product'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('products.products')}
            </button>
            <button
              onClick={() => setFilter('service')}
              className={`px-4 py-2 rounded-md ${
                filter === 'service'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('products.services')}
            </button>
          </div>
        </div>

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
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md flex-shrink-0 w-80 snap-center hover:shadow-lg transition-shadow flex flex-col"
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
                  <div className="p-6 flex flex-col h-[200px]">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{item.name}</h3>
                    <p className="text-secondary-600 mb-4 line-clamp-2">{item.description}</p>
                    <a 
                      href={`/products/${item.id}`}
                      className="bg-primary-600 text-white w-full py-2 rounded-md hover:bg-primary-700 transition-colors block text-center mt-auto"
                      aria-label={`View details for ${item.name}`}
                    >
                      {t('products.viewDetails')}
                    </a>
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