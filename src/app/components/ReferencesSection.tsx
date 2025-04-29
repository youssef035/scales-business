'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

interface Reference {
  id: number;
  name: string;
  logo: string;
}

const references: Reference[] = [
  {
    id: 1,
    name: 'Lafarge',
    logo: '/images/ref/lafarge.webp'
  },
  {
    id: 2,
    name: 'Richbond',
    logo: '/images/ref/richbond.png'
  },
  {
    id: 3,
    name: 'Coca-Cola',
    logo: '/images/ref/coca.jpg'
  },
  {
    id: 4,
    name: 'SPLAST',
    logo: '/images/ref/splast.jpeg'
  },
  {
    id: 5,
    name: 'IFAMEL',
    logo: '/images/ref/ifamel.jpeg'
  },
  {
    id: 6,
    name: 'MADEC',
    logo: '/images/ref/madec.jpeg'
  },
  {
    id: 7,
    name: 'Gastromixte',
    logo: '/images/ref/gastromixte.jpeg'
  },
  {
    id: 8,
    name: 'BIMO',
    logo: '/images/ref/bimo.jpeg'
  }
];

export default function ReferencesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">
            {t('references.title')}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative w-full overflow-hidden">
            <div className="w-[3000px] mx-auto">
              <div className="animate-scroll flex space-x-16">
                {/* First set of references */}
                {references.map((reference) => (
                  <div
                    key={reference.id}
                    className="flex items-center justify-center w-72 h-48"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={reference.logo}
                        alt={reference.name}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          console.error(`Failed to load image: ${reference.logo}`);
                        }}
                      />
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for infinite scroll effect */}
                {references.map((reference) => (
                  <div
                    key={`duplicate-${reference.id}`}
                    className="flex items-center justify-center w-72 h-48"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={reference.logo}
                        alt={reference.name}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          console.error(`Failed to load image: ${reference.logo}`);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 