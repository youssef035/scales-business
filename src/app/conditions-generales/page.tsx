'use client';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-primary-900 mb-8">Conditions générales</h1>
        
        <div className="prose prose-lg">
          <p className="text-secondary-600">
            Les présentes conditions générales régissent l'utilisation des services proposés par OmegaMesure.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8">1. Acceptation des conditions</h2>
          <p className="text-secondary-600">
            En accédant à nos services, vous acceptez d'être lié par ces conditions générales.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8">2. Services</h2>
          <p className="text-secondary-600">
            OmegaMesure propose des services de mesure et d'étalonnage. Les spécifications exactes des services sont définies dans les devis individuels.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8">3. Prix et paiement</h2>
          <p className="text-secondary-600">
            Les prix sont indiqués dans les devis. Le paiement doit être effectué selon les modalités définies dans le devis accepté.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8">4. Livraison</h2>
          <p className="text-secondary-600">
            Les délais de livraison sont indicatifs et peuvent varier selon les conditions spécifiques de chaque commande.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8">5. Contact</h2>
          <p className="text-secondary-600">
            Pour toute question concernant ces conditions générales, veuillez nous contacter à info@omegamesure.com
          </p>
        </div>
      </div>
    </div>
  );
} 