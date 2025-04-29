'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">
          {t('contact.title')}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-secondary-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-secondary-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-secondary-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                {t('contact.sendMessage')}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2 text-primary-900">Email</h3>
            <p className="text-secondary-600">info@omegamesure.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-primary-900">Phone</h3>
            <p className="text-secondary-600">+212 661 123 456</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-semibold mb-2 text-primary-900">Location</h3>
            <p className="text-secondary-600">Rabat, Morocco</p>
          </div>
        </div>
      </div>
    </section>
  );
} 