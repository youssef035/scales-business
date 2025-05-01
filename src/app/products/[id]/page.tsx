import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductsAndServicesSection from '../../components/ProductsAndServicesSection';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'product' | 'service';
  details: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'INDICATEUR 120 SAURUS',
    description: 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54',
    image: '/images/Products/INDICATEUR 120 SAURUS.jpg',
    category: 'product',
    details: 'Indicateur Poids-Tare Professionnel avec boîtier robuste en ABS et protection IP54. Clavier étanche à 6 touches fonctionnelles, écran LED rouge haute visibilité, 7 voyants LED d\'indication d\'état. Compatible avec jusqu\'à 4 capteurs de 350Ω ou 8 capteurs de 700Ω. Plage de température de fonctionnement : -10°C à +40°C. Alimentation : adaptateur secteur AC/DC 100-240V, 50-60Hz. Batterie interne rechargeable 6V/4Ah avec autonomie d\'environ 24 heures. Interface RS232 intégrée. Unités sélectionnables : kg et lb. Homologué OIML classe III, jusqu\'à 3 000 divisions. Certification CE.',
    price: 'Prix sur demande'
  }
];

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductPage({ params }: PageProps) {
  const productId = parseInt(params.id);
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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-primary-900 mb-4">{product.name}</h1>
              <p className="text-2xl text-accent-600 font-medium">{product.price}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Description du Produit</h2>
              <p className="text-secondary-600">{product.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary-900 mb-4">Spécifications</h2>
              <p className="text-secondary-600 whitespace-pre-line">{product.details}</p>
            </div>

            <div className="flex gap-4">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors">
                Demander un Devis
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-md hover:bg-primary-50 transition-colors">
                Contacter les Ventes
              </button>
            </div>
          </div>
        </div>

        {/* Products and Services Section */}
        <ProductsAndServicesSection id="featured-products" />
      </div>
    </div>
  );
} 