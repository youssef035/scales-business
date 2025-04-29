'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

export default function AnimatedHeroSection() {
  const { t } = useLanguage();
  const scaleRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scaleAnimation = useCallback(((): void => {
    const scale = scaleRef.current;
    if (!scale) return;

    scale.style.transform = 'scale(1.05)';
    setTimeout(() => {
      scale.style.transform = 'scale(1)';
    }, 1000);
  }), [scaleRef]);

  const numbersAnimation = useCallback(((): void => {
    const numbers = numbersRef.current;
    if (!numbers) return;

    const numbersList = numbers.querySelectorAll('.number');
    numbersList.forEach((number, index) => {
      setTimeout(() => {
        number.classList.add('animate-bounce');
        setTimeout(() => {
          number.classList.remove('animate-bounce');
        }, 1000);
      }, index * 200);
    });
  }), [numbersRef]);

  useEffect(() => {
    scaleAnimation();
    numbersAnimation();
    animationIntervalRef.current = setInterval(() => {
      scaleAnimation();
      numbersAnimation();
    }, 5000);

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, [scaleAnimation, numbersAnimation]);

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20"
      aria-label="Hero Section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-100 rounded-full opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-primary-900 leading-tight">
              <span className="block mb-2">{t('hero.title')}</span>
              <span className="text-primary-600">Précision & Qualité</span>
            </h1>
            
            <p className="text-xl text-secondary-600 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Animated numbers */}
            <div 
              ref={numbersRef} 
              className="grid grid-cols-2 gap-4 mt-8"
              aria-live="polite"
            >
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-primary-600 number" aria-label="20 plus">20+</div>
                <div className="text-sm text-secondary-600">Années d'expérience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-primary-600 number" aria-label="24 sur 7">24/7</div>
                <div className="text-sm text-secondary-600">Support technique</div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="#contact" 
                className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors"
                aria-label="Contact us"
              >
                Contactez-nous
              </a>
              <a 
                href="#products" 
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-md hover:bg-primary-50 transition-colors"
                aria-label="View our products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Nos Produits
              </a>
            </div>
          </div>

          {/* Right side - Animated scale */}
          <div className="relative">
            <div 
              ref={scaleRef}
              className="relative w-full h-96 transition-transform duration-1000 ease-in-out"
              aria-label="Animated scale demonstration"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-lg shadow-xl p-4">
                  <div className="relative w-full h-full">
                    {/* Scale display */}
                    <div className="absolute top-4 left-4 right-4 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-600" aria-label="Current weight">0.00 kg</span>
                    </div>
                    
                    {/* Scale platform */}
                    <div className="absolute bottom-4 left-4 right-4 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                      <div className="w-24 h-24 bg-white rounded-full shadow-inner" />
                    </div>
                    
                    {/* Scale base */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-300 rounded-b-lg" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-primary-100 rounded-full animate-float" aria-hidden="true" />
              <div className="absolute top-20 right-0 w-12 h-12 bg-secondary-100 rounded-full animate-float-delayed" aria-hidden="true" />
              <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-primary-200 rounded-full animate-float" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 