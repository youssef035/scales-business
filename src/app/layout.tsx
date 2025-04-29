import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./context/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'OmegaMesure - Solutions de Balances Professionnelles',
    template: '%s | OmegaMesure'
  },
  description: 'Votre partenaire de confiance pour la vente et la réparation de balances. Nous fournissons des balances de haute qualité pour chaque industrie.',
  keywords: ['balances', 'pesage', 'industriel', 'professionnel', 'réparation', 'calibration', 'Maroc'],
  authors: [{ name: 'OmegaMesure' }],
  creator: 'OmegaMesure',
  publisher: 'OmegaMesure',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://omegamesure.com',
    siteName: 'OmegaMesure',
    title: 'OmegaMesure - Solutions de Balances Professionnelles',
    description: 'Votre partenaire de confiance pour la vente et la réparation de balances. Nous fournissons des balances de haute qualité pour chaque industrie.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmegaMesure - Solutions de Balances Professionnelles',
    description: 'Votre partenaire de confiance pour la vente et la réparation de balances. Nous fournissons des balances de haute qualité pour chaque industrie.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ErrorBoundary>
          <LanguageProvider>
            <main className="min-h-screen bg-white">
              {children}
            </main>
            <WhatsAppButton />
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
