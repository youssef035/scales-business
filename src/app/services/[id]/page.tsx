import React from 'react';
import Link from 'next/link';
import ServiceDetails from './ServiceDetails';
import { services } from '@/data/services';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServicePage({ params, searchParams }: PageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const serviceId = parseInt(resolvedParams.id);
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Service non trouvé</h1>
          <Link 
            href="/services"
            className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors inline-block"
          >
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return <ServiceDetails service={service} />;
} 