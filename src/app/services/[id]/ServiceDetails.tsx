import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative h-96 md:h-full">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-primary-900">{service.name}</h1>
            <p className="text-lg text-gray-600">{service.description}</p>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line">{service.details}</p>
            </div>

            <div className="pt-6">
              <Link
                href="/services"
                className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors inline-block"
              >
                Retour aux services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 