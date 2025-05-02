'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import ContactOverlay from '../../components/ContactOverlay';

export default function ProductDetailsPage() {
  const { t } = useLanguage();
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent z-10" />
            <Image
              src="/images/services/reparation.jpeg"
              alt="Réparation de Balances"
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
              quality={100}
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-primary-900">
                Réparation de Balances
              </h1>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                  Service
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary-900">
                Service de Réparation Professionnel
              </h2>
              <div className="prose prose-lg text-secondary-600">
                <p>
                  Nous offrons un service de réparation rapide et fiable pour tous types de balances, quelle que soit la marque ou le modèle. Nos techniciens qualifiés diagnostiquent et réparent les pannes avec précision, en utilisant des pièces de rechange certifiées. Redonnez à vos équipements leur performance d'origine grâce à notre expertise.
                </p>
                <p>
                  Nous intervenons sur site ou dans notre atelier selon vos besoins, tout en respectant les normes de qualité et de sécurité en vigueur. Votre productivité est notre priorité.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <button 
                onClick={() => setIsContactOverlayOpen(true)}
                className="w-full md:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('products.requestQuote')}
              </button>
              <div className="flex items-center space-x-4 text-secondary-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Service certifié</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactOverlay 
        isOpen={isContactOverlayOpen} 
        onClose={() => setIsContactOverlayOpen(false)} 
      />
    </div>
  );
} 