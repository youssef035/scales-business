'use client';

import React from 'react';
import Image from 'next/image';
import ProductsAndServicesSection from '../../components/ProductsAndServicesSection';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: ('product' | 'service' | 'balance_et_indicateur' | 'plateforme_de_pesage')[];
  details: string;
  price: string;
}

const generatePDF = async (product: Product) => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16
    });

    // Set default font and line height
    const lineHeight = 7;
    const margin = 20;
    
    // Add header with company logo and contact info
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, 210, 30, 'F');
    
    // Company name in blue
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(20);
    doc.text('OmegaMesure', margin, 20);
    
    // Contact information
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text('Contact: contact@omegamesure.com', 150, 15);
    doc.text('Tél: +216 XX XXX XXX', 150, 20);
    
    // Add product image with better quality
    try {
      const response = await fetch(product.image);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        
        // Add image with better quality and positioning
        doc.addImage(base64data, 'PNG', margin, 40, 170, 120, '', 'FAST');
        
        // Add product name with better styling
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.text(product.name, margin, 170);
        
        // Add price
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text(product.price, margin, 180);
        
        // Add description with better formatting
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(14);
        doc.text('Description:', margin, 195);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        const descriptionLines = doc.splitTextToSize(product.description, 170);
        let yPos = 205;
        descriptionLines.forEach((line: string) => {
          doc.text(line, margin, yPos);
          yPos += lineHeight;
        });
        
        // Add specifications with better formatting and reduced character spacing
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text('Spécifications:', margin, yPos + 10);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        // Split text into paragraphs and process each paragraph
        const paragraphs = product.details.split('\n');
        yPos += 20;
        
        paragraphs.forEach((paragraph: string) => {
          if (paragraph.trim()) {
            const detailsLines = doc.splitTextToSize(paragraph, 170);
            detailsLines.forEach((line: string) => {
              doc.text(line, margin, yPos);
              yPos += lineHeight;
            });
            yPos += lineHeight / 2; // Add small space between paragraphs
          }
        });
        
        // Add footer
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('© 2024 OmegaMesure - Tous droits réservés', margin, 290);
        
        // Save the PDF
        doc.save(`${product.name.toLowerCase().replace(/\s+/g, '-')}-details.pdf`);
      };
    } catch (error) {
      console.error('Error loading image:', error);
      // Continue without image if there's an error
      let yPos = 40;
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text(product.name, margin, yPos);
      yPos += 15;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text(product.price, margin, yPos);
      yPos += 20;
      
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(14);
      doc.text('Description:', margin, yPos);
      yPos += 10;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const descriptionLines = doc.splitTextToSize(product.description, 170);
      descriptionLines.forEach((line: string) => {
        doc.text(line, margin, yPos);
        yPos += lineHeight;
      });
      
      yPos += 10;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('Spécifications:', margin, yPos);
      yPos += 10;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      const paragraphs = product.details.split('\n');
      paragraphs.forEach((paragraph: string) => {
        if (paragraph.trim()) {
          const detailsLines = doc.splitTextToSize(paragraph, 170);
          detailsLines.forEach((line: string) => {
            doc.text(line, margin, yPos);
            yPos += lineHeight;
          });
          yPos += lineHeight / 2;
        }
      });
      
      // Add footer
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('© 2024 OmegaMesure - Tous droits réservés', margin, 290);
      
      doc.save(`${product.name.toLowerCase().replace(/\s+/g, '-')}-details.pdf`);
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export default function ProductDetails({ product }: { product: Product }) {
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
              className="object-contain"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <button 
                onClick={() => generatePDF(product)}
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-md hover:bg-primary-50 transition-colors"
              >
                Télécharger les Détails
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