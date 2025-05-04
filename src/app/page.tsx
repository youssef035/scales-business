'use client';

import Image from "next/image";
import { useState } from 'react';
import ReferencesSection from './components/ReferencesSection';
import ProductsAndServicesSection from './components/ProductsAndServicesSection';
import AnimatedHeroSection from './components/AnimatedHeroSection';
import FloatingFAQButton from './components/FloatingFAQButton';

// Define the Product type
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string;
  specifications: string[];
  price: string;
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openProductOverlay = (product: Product) => {
    setSelectedProduct(product);
    setIsOverlayOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProductOverlay = () => {
    setIsOverlayOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md" role="navigation" aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-900">OmegaMesure</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="#products" 
                className="text-secondary-600 hover:text-primary-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Produits
              </a>
              <a 
                href="#references" 
                className="text-secondary-600 hover:text-primary-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('references')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Références
              </a>
              <a 
                href="#contact" 
                className="text-secondary-600 hover:text-primary-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
              <a 
                href="tel:+212664323049" 
                className="flex items-center space-x-2 text-secondary-600 hover:text-primary-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+212 664 323 049</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Animated Hero Section */}
        <AnimatedHeroSection />

        {/* Products and Services Section */}
        <ProductsAndServicesSection id="products" />

        {/* References Section */}
        <ReferencesSection id="references" />

        {/* Contact Section */}
        <section id="contact" className="bg-primary-50 py-16" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="text-3xl font-bold text-center text-primary-900 mb-12">
              Contactez-nous
            </h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
              <p className="text-gray-300"> DOHA N°35 1 ER ETAGE BOUSKOURA<br />PROVINCE NOUACEUR</p>
              <p className="text-gray-300">Casablanca, Maroc</p>
              <p className="text-gray-300">Téléphone: +212 664 323 049</p>
              <p className="text-gray-300">Fix: +212 520 34 77 73</p>
              <p className="text-gray-300">Email: info@omegamesure.com</p>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-gray-300">
                <p>Lundi - Vendredi: 8h00 - 18h00</p>
                <p>Samedi: 9h00 - 13h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/profile.php?id=100063918705662&sk=about_contact_and_basic_info&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/omega-mesure-33432a282/?originalSubdomain=ma" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCNSn2pb2mImm86qrUrdHa1A?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://github.com/youssef035" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} OmegaMesure. Tous droits réservés.</p>
            <div className="mt-4 space-x-4">
              <a 
                href="/politique-de-confidentialite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
              <a 
                href="/conditions-generales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Conditions générales
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating FAQ Button */}
      <FloatingFAQButton />

      {/* Product Overlay */}
      {isOverlayOpen && selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-dialog-title"
        >
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex">
              <div className="w-1/2 relative h-[500px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <div className="p-6">
                <h2 id="product-dialog-title" className="text-3xl font-bold text-primary-900">{selectedProduct.name}</h2>
                <p className="mt-2 text-xl text-accent-600 font-medium">{selectedProduct.price}</p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-900">Description</h3>
                  <p className="mt-2 text-secondary-600">{selectedProduct.details}</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-900">Spécifications</h3>
                  <ul className="mt-2 space-y-2">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary-600">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Demander un devis
                  </button>
                  <button className="border border-primary-600 text-primary-600 py-3 px-6 rounded-md font-medium hover:bg-primary-50 transition-colors">
                    Contacter le service commercial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
