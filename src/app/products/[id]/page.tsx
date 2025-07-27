import React from 'react';
import Link from 'next/link';
import ProductDetails from './ProductDetails';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: ('product' | 'service' | 'balance_et_indicateur' | 'plateforme_de_pesage')[];
  details: string;
  price: string;
}

const products: Product[] = [
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
  }
];

export async function generateMetadata({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  if (!product) {
    return { title: 'Produit non trouvé | OmegaMesure' };
  }
  return {
    title: `${product.name} | OmegaMesure`,
    description: product.description,
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const productId = parseInt(resolvedParams.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Produit non trouvé</h1>
          <Link 
            href="/products"
            className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors inline-block"
          >
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetails product={product} />;
} 