'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

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

export default function ProductsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'product' | 'service'>('all');

  const filteredItems = productsAndServices.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            {t('products.title')}
          </h1>
          <p className="text-xl text-secondary-600">
            {t('products.subtitle')}
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.category === 'product'
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-secondary-100 text-secondary-600'
                    }`}
                  >
                    {item.category === 'product'
                      ? t('products.product')
                      : t('products.service')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-secondary-600 mb-4">{item.description}</p>
                <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors">
                  {t('products.viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 