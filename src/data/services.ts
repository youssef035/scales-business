export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: ('product' | 'service' | 'balance_et_indicateur' | 'plateforme_de_pesage')[];
  details: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Étalonnage et Vérification de Balances',
    description: 'Services professionnels d\'étalonnage et de vérification de balances pour garantir la précision et la conformité de vos instruments de pesage.',
    image: '/images/services/calib.jpeg',
    categories: ['service'],
    details: 'Nous proposons des services professionnels d\'étalonnage et de vérification de balances pour garantir la précision et la conformité de vos instruments de pesage. Grâce à notre expertise et à nos équipements certifiés, nous assurons un étalonnage conforme aux normes en vigueur, adapté aux secteurs industriels, commerciaux et laboratoires. Faites confiance à notre savoir-faire pour maintenir la fiabilité de vos mesures.'
  }
]; 