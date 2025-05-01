'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// French translations only
const translations = {
  // Navigation
  'nav.products': 'Produits',
  'nav.contact': 'Contact',
  
  // Hero Section
  'hero.title': 'Solutions de Balances Professionnelles',
  'hero.subtitle': 'Votre partenaire de confiance pour la vente et la réparation de balances. Nous fournissons des balances de haute qualité pour chaque industrie.',
  
  // Products Section
  'products.title': 'Nos Produits et Services',
  'products.subtitle': 'Découvrez notre gamme de produits de haute qualité et services professionnels',
  'products.viewMore': 'Voir Plus',
  'products.product': 'Produit',
  'products.products': 'Produits',
  'products.service': 'Service',
  'products.services': 'Services',
  'products.all': 'Tous',
  'products.viewDetails': 'Voir les détails',
  'products.requestQuote': 'Demander un Devis',
  'products.contactSales': 'Contacter les Ventes',
  'products.description': 'Description du Produit',
  'products.specifications': 'Spécifications',
  'products.searchPlaceholder': 'Rechercher des produits et services...',
  
  // References Section
  'references.title': 'Nos Références',
  
  // Contact Section
  'contact.title': 'Contactez-nous',
  'contact.name': 'Nom',
  'contact.email': 'Email',
  'contact.message': 'Message',
  'contact.sendMessage': 'Envoyer le Message',
  
  // Product Details
  'product1.name': 'INDICATEUR 120 SAURUS',
  'product1.description': 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54',
  'product1.details': 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54. Clavier étanche à 6 touches fonctionnelles, écran LED rouge haute visibilité, 7 voyants LED d\'indication d\'état. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Plage de température de fonctionnement : -10°C à +40°C. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures. Interface RS232 intégrée. Unités sélectionnables : kg et lb. Homologué OIML classe III, jusqu\'à 3 000 divisions. Certification CE.',
  'product1.price': 'Prix sur demande',
  
  'product2.name': 'Balance de Laboratoire',
  'product2.description': 'Balance de laboratoire de précision pour les applications scientifiques et de recherche',
  'product2.details': 'Nos balances de laboratoire offrent une précision exceptionnelle pour les applications scientifiques. Avec une lisibilité jusqu\'à 0,0001g, ces balances sont idéales pour les laboratoires de recherche, les applications pharmaceutiques et les processus de contrôle qualité. Le système de calibration interne avancé assure une précision constante dans le temps.',
  'product2.price': 'À partir de 1899MAD',
  
  'product3.name': 'Balance de Commerce',
  'product3.description': 'Balance compacte et précise pour l\'utilisation commerciale et de détail',
  'product3.details': 'Nos balances de commerce allient design élégant et performance fiable. Parfaites pour les épiceries, les charcuteries et les petites entreprises, ces balances offrent des mesures rapides avec des affichages clairs. L\'interface intuitive facilite l\'utilisation par le personnel, tandis que la construction durable assure une performance durable dans les environnements à fort trafic.',
  'product3.price': 'À partir de 299MAD',
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 