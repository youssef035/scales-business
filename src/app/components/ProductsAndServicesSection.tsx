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
  categories: ('product' | 'service' | 'balance_et_indicateur' | 'plateforme_de_pesage')[];
  details: string;
  price: string;
}

const productsAndServices: Product[] = [
  {
    id: 1,
    name: 'INDICATEUR 120 SAURUS',
    description: 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54',
    image: '/images/Products/INDICATEUR 120 SAURUS.jpg',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54. Clavier étanche à 6 touches fonctionnelles, écran LED rouge haute visibilité, 7 voyants LED d\'indication d\'état. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Plage de température de fonctionnement : -10°C à +40°C. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures. Interface RS232 intégrée. Unités sélectionnables : kg et lb. Homologué OIML classe III, jusqu\'à 3 000 divisions. Certification CE.',
    price: 'Prix sur demande'
  },
  {
    id: 2,
    name: 'INDICATEUR 200',
    description: 'Indicateur Poids-Tare Professionnel avec boîtier ABS et protection IP54',
    image: '/images/Products/IND 200.jpeg',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Indicateur Poids-Tare Professionnel avec boîtier ABS et protection IP54. Clavier étanche à 6 touches fonctionnelles + touche ON/OFF, grand écran LCD rétroéclairé de 6 chiffres (40 mm). Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 800Ω. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie rechargeable 6V/4Ah avec autonomie d\'environ 80 heures (rétroéclairage activé et RS232 ON) ou jusqu\'à 320 heures (rétroéclairage désactivé et RS232 OFF). Interface RS232 intégrée. Unités sélectionnables : kg, g ou t. Homologué OIML classe III, 3 000 divisions. Certification CE.',
    price: 'Prix sur demande'
  },
  {
    id: 3,
    name: 'INDICATEUR SAURUS 300',
    description: 'Indicateur de Poids SAURUS 300 - Performance et durabilité en inox pour un usage intensif et professionnel',
    image: '/images/Products/IND-300.webp',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Indicateur de Poids SAURUS 300 - Performance et durabilité en inox pour un usage intensif et professionnel. Boîtier en acier inoxydable (INOX) avec protection IP65. Clavier étanche à 6 touches de fonction, écran LCD lisible en toutes conditions. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Alimentation : transformateur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures d\'utilisation continue. Interface RS232 intégrée pour connexion à PC, imprimante, afficheur répétiteur. Unités sélectionnables : kg et lb. Gravité configurable selon la zone géographique. Précision jusqu\'à 100 000 divisions (non homologuées).',
    price: 'Prix sur demande'
  },
  {
    id: 4,
    name: 'BALANCE BREHM B10',
    description: 'Balance de pesage simple, compacte et performante pour une utilisation quotidienne',
    image: '/images/Products/B10.png',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Balance de pesage simple, compacte et performante pour une utilisation quotidienne. Capacité de 3 kg à 15 kg (selon modèle). Protection IP54 contre la poussière et les éclaboussures. Plateau en acier inoxydable (230 × 190 mm). Pieds réglables en hauteur pour une stabilité optimale. Écran LED rouge avec 6 chiffres de 20 mm de hauteur. 3 touches avec 7 symboles d\'indication. Unités sélectionnables : kg et lb. Fonctions de pesage : Zéro, Tare, Brut, Net. Protection contre les surcharges intégrée. Alimentation par batterie interne rechargeable avec adaptateur secteur AC 9V fourni.',
    price: 'Prix sur demande'
  },
  {
    id: 5,
    name: 'INDICATEUR BREHM DIS 100',
    description: 'Indicateur de Poids BREHM DIS 100 - Polyvalent et fiable, idéal pour les applications de pesage industrielles standard',
    image: '/images/Products/DIS100.png',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Indicateur de Poids BREHM DIS 100 - Polyvalent et fiable, idéal pour les applications de pesage industrielles standard. Boîtier en plastique ABS avec protection IP54. Support colonne inclus pour une installation facilitée. Plage de température de fonctionnement : -10°C à +40°C. Écran LED rouge avec 6 chiffres de 20 mm. 7 LEDs d\'indication d\'état/fonction. Clavier étanche à 6 touches de fonction. Unités sélectionnables : kg et lb. Gravité configurable selon la localisation géographique. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures. Interface RS232 pour connexion PC, imprimante, afficheur répétiteur. Déconnexion automatique configurable. Homologué OIML classe III, 3 000 divisions. Certification CE.',
    price: 'Prix sur demande'
  },
  {
    id: 6,
    name: 'INDICATEUR BREHM DIS 300',
    description: 'Indicateur de Poids BREHM DIS 300 - Un indicateur robuste et précis, conçu pour répondre aux besoins de pesage professionnels',
    image: '/images/Products/DIS300.png',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Indicateur de Poids BREHM DIS 300 - Un indicateur robuste et précis, conçu pour répondre aux besoins de pesage professionnels. Boîtier en ABS avec protection IP54 contre poussière et éclaboussures. Support colonne inclus pour une installation facilitée. Plage de température de fonctionnement : -10°C à +40°C. Écran LED rouge avec 6 chiffres de 20 mm. 7 LEDs d\'indication d\'état et fonction. Clavier étanche à 6 touches de fonction. Unités sélectionnables : kg et lb. Gravité configurable selon la zone d\'utilisation. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures. Interface RS232 pour connexion à un PC, imprimante, ou répétiteur. Déconnexion automatique réglable. Homologué OIML classe III, 3 000 divisions. Certification CE.',
    price: 'Prix sur demande'
  },
  {
    id: 7,
    name: 'BALANCE DESICCATEUR',
    description: 'Analyse rapide et précise de l\'humidité, avec un séchage uniforme pour des résultats constants',
    image: '/images/Products/ohaus.jpg',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Balance Dessiccateur - Analyse rapide et précise de l\'humidité, avec un séchage uniforme pour des résultats constants. Type d\'analyse : Analyse de l\'humidité. Chauffage rapide à halogène avec technologie infrarouge. Navigation ergonomique pour une utilisation simplifiée. Mémoire de plus de 100 méthodes enregistrables. Séchage uniforme pour garantir des résultats précis et répétables. Quatre profils de séchage pour des performances flexibles et puissantes. Critères d\'arrêt pour exécution automatique du test. Nettoyage facile sans outils supplémentaires.',
    price: 'Prix sur demande'
  },
  {
    id: 8,
    name: 'TRANSPALETTE MANUEL PESEUR',
    description: 'Combine transport et pesage avec précision, idéal pour un usage industriel intensif',
    image: '/images/Products/transpalette-peseur.png',
    categories: ['product', 'plateforme_de_pesage'],
    details: 'Transpalette Manuel Peseur - Combine transport et pesage avec précision, idéal pour un usage industriel intensif. Caractéristiques Générales : Fonction de manutention et pesage intégrés. Utilisation simple, robuste et adaptée aux environnements industriels. Structure en châssis acier peint pour une grande résistance. Roues directrices en caoutchouc et galets doubles en Vulkolan. Indicateur de pesage numérique avec affichage LCD rétro-éclairé à haut contraste pour une lecture aisée même en faible luminosité. Fonctions disponibles : Remise à zéro, Tare, Totalisation, Comptage de pièces simple et précis. 4 capteurs inox à jauge de contrainte avec protection IP68, résistants à l\'eau et à la poussière. Alimentation par batterie rechargeable 12V avec autonomie d\'environ 3 jours, chargeur inclus. Connectivité par sortie RS232 bidirectionnelle pour connexion à PC ou imprimante.',
    price: 'Prix sur demande'
  },
  {
    id: 9,
    name: 'BALANCE INDUSTRIELLE B30 BREHM',
    description: 'Robuste, polyvalente et précise, elle s\'adapte parfaitement à toutes vos opérations de pesage industriel',
    image: '/images/Products/B30.png',
    categories: ['product', 'balance_et_indicateur'],
    details: 'Balance Industrielle B30 Brehm - Robuste, polyvalente et précise, elle s\'adapte parfaitement à toutes vos opérations de pesage industriel. Caractéristiques Générales : Écran LCD rétroéclairé. Boîtier résistant en ABS. Plateau en acier inoxydable (300 x 230 mm). Protection IP44 contre poussière et éclaboussures. 7 touches de fonction. Fonctions : Zéro, Tare, Brut/Net, Comptage de pièces. Construction et Utilisation : Protection contre les surcharges, pieds réglables en hauteur, niveau à bulle intégré, blister inclus. Unités de mesure : g, kg, t, lb, oz. Connectivité : Sortie RS232 (en option) - format PC. Conditions d\'utilisation : Température de fonctionnement de 0°C à +40°C. Alimentation : Batterie interne rechargeable avec adaptateur AC/DC 230Vac 50Hz. Modèles disponibles : B30-3 (3 kg, précision 0,5/1 g), B30-6 (6 kg, précision 1/2 g), B30-15 (15 kg, précision 2/5 g), B30-30 (30 kg, précision 5/10 g).',
    price: 'Prix sur demande'
  },
  {
    id: 13,
    name: 'BALANCE À PLATEAU BRS – BREHM',
    description: 'Balance industrielle renforcée, idéale pour les environnements humides grâce à sa conception tout inox et son capteur IP68',
    image: '/images/Products/balance-plateau.png',
    categories: ['product', 'plateforme_de_pesage'],
    details: 'Balance à plateau BRS – Brehm - Balance industrielle renforcée, idéale pour les environnements humides grâce à sa conception tout inox et son capteur IP68. Spécifications : Capacité de 30 kg à 600 kg. Châssis en tube rond en acier inoxydable. Plateau et colonne en acier inoxydable renforcé. Capteur Zemic inox, homologué OIML, IP68. Protection globale IP65. Affichage et Fonctions : Indicateur compatible BREHM DIS400. Écran LCD rétroéclairé de 52 mm. Fonctions intégrées : Brut/Net/Tare, Comptage de pièces, Accumulation, Contrôle de poids, Pesée d\'animaux. Performance : Nombre de divisions 6000d (OIML), Précision d\'affichage jusqu\'à 30 000d. Unités : g, kg, lb. Connectivité : Sortie RS232 (en option). Alimentation : Batterie rechargeable 6V/1,3 Ah, autonomie 60 h, Secteur 220V. Conditions d\'utilisation : Température de fonctionnement de -10°C à +40°C.',
    price: 'Prix sur demande'
  },
  {
    id: 14,
    name: 'PLATEFORME DE PESAGE ACIER',
    description: 'Plateforme robuste avec surface gaufrée, idéale pour le pesage industriel de chariots, bacs et linge en environnement exigeant',
    image: '/images/Products/acier.png',
    categories: ['product', 'plateforme_de_pesage'],
    details: 'Plateforme de pesage Acier – Pesage chariots et bacs de blanchisserie. Spécifications : Dimensions du plateau disponibles : 1000 x 1000 mm, 1200 x 1200 mm, 1500 x 1500 mm. Applications : Pesage statique et dynamique, Comptage de pièces, Contrôle du poids, Pesée d\'animaux. Caractéristiques techniques : Construction solide adaptée aux milieux industriels, Surface gaufrée antidérapante pour une meilleure adhérence, Rampes d\'accès disponibles en option pour un chargement facile, Compatibilité : fonctionne avec plusieurs types d\'indicateurs, Câble blindé de 5 mètres environ. Capacités de charge : De 1000 kg à 3000 kg, Précision : de 0,2 g à 0,5 g.',
    price: 'Prix sur demande'
  },
  {
    id: 15,
    name: 'PLATEFORME DE PESAGE EN INOX',
    description: 'Plateforme robuste et personnalisable en acier inoxydable AISI 304, conçue pour un pesage précis et fiable, même dans des environnements industriels exigeants',
    image: '/images/Products/inox.png',
    categories: ['product', 'plateforme_de_pesage'],
    details: 'Plateforme de pesage en inox. Spécifications : Modèles Disponibles : P1250INOXN (Max 3000 kg, dimensions 1250 x 1250 mm), P1500INOXN (Max 3000 kg, dimensions 1500 x 1500 mm), Plateformes sur demande : Personnalisables jusqu\'à 2500 x 2500 mm et 6000 kg. Construction : Matériau : Acier inoxydable AISI 304, Plateau de charge d\'inspection côté capteurs et boîte de jonction inox, Boîte de jonction avec carte d\'égalisation et câble de sortie à 6 fils (5 m). Capteurs de pesage : 4 capteurs de cisaillement inox 17-4PH, protection IP68. Précision : Classe de précision : C3 (selon OIML R60). Caractéristiques supplémentaires : Pieds articulés en inox AISI 304, avec centrage automatique à bille, 2 trous M12 pour anneaux de levage.',
    price: 'Prix sur demande'
  },
  {
    id: 16,
    name: 'Étalonnage de Balances',
    description: 'Services professionnels d\'étalonnage pour garantir des mesures précises et conformes aux normes',
    image: '/images/services/calib.jpeg',
    categories: ['service'],
    details: 'Nous proposons des services professionnels d\'étalonnage de balances pour garantir la précision et la conformité de vos instruments de pesage. Grâce à notre expertise et à nos équipements certifiés, nous assurons un étalonnage conforme aux normes en vigueur, adapté aux secteurs industriels, commerciaux et laboratoires. Faites confiance à notre savoir-faire pour maintenir la fiabilité de vos mesures.',
    price: 'Prix sur demande'
  },
  {
    id: 17,
    name: 'Réparation de Balances',
    description: 'Services de réparation experts pour tous types de balances',
    image: '/images/services/reparation.jpeg',
    categories: ['service'],
    details: 'Notre équipe d\'experts propose des services de réparation complets pour tous types de balances. Nous intervenons rapidement pour diagnostiquer et réparer les problèmes, qu\'il s\'agisse de dysfonctionnements mécaniques, électroniques ou de problèmes de précision. Nous utilisons des pièces de rechange d\'origine et suivons les protocoles de réparation les plus stricts pour garantir la qualité et la durabilité de nos interventions.',
    price: 'Prix sur demande'
  },
  {
    id: 18,
    name: 'Maintenance de Balances',
    description: 'Maintenance préventive et corrective pour garantir le bon fonctionnement et prolonger la durée de vie de vos balances',
    image: '/images/services/mainten.jpg',
    categories: ['service'],
    details: 'Nous assurons la maintenance préventive et corrective de vos balances afin de garantir leur bon fonctionnement et prolonger leur durée de vie. Nos interventions régulières permettent de prévenir les pannes, réduire les temps d\'arrêt et maintenir la précision de vos instruments de pesage. Notre équipe intervient sur site avec des équipements adaptés et selon un planning flexible, pour s\'adapter à vos contraintes opérationnelles. Faites confiance à notre expertise pour préserver la fiabilité de vos balances au quotidien.',
    price: 'Prix sur demande'
  }
];

export default function ProductsAndServicesSection({ id }: { id: string }) {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'product' | 'service' | 'balance_et_indicateur' | 'plateforme_de_pesage'>('all');
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
    const matchesFilter = filter === 'all' || item.categories.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <section id={id} className="py-20 bg-white" aria-label="Produits et Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900">
              Nos Produits et Services
            </h2>
            <a 
              href="/products" 
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
              aria-label="Voir tous les produits et services"
            >
              Voir plus
            </a>
          </div>
        </RevealOnScroll>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Rechercher un produit ou service..."
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('product')}
              className={`px-4 py-2 rounded-md ${
                filter === 'product' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Produits
            </button>
            <button
              onClick={() => setFilter('service')}
              className={`px-4 py-2 rounded-md ${
                filter === 'service' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setFilter('balance_et_indicateur')}
              className={`px-4 py-2 rounded-md ${
                filter === 'balance_et_indicateur' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Balances et Indicateurs
            </button>
            <button
              onClick={() => setFilter('plateforme_de_pesage')}
              className={`px-4 py-2 rounded-md ${
                filter === 'plateforme_de_pesage' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Plateformes de Pesage
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
                      className="object-contain"
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.categories.includes('product') 
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-secondary-100 text-secondary-600'
                      }`}>
                        {item.categories.includes('product') ? t('products.product') : t('products.service')}
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