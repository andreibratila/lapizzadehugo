import { Metadata } from 'next';

import { Product, ProductDiv } from '@/components';
import { URL_WEB } from '@/config/envVariables';
import { ensaladasData } from '@/data/productos';

export const metadata: Metadata = {
  title: 'Ensaladas | La Pizza de Hugo',
  description: `Refresca tu paladar con nuestras deliciosas ensaladas en 'La Pizza de Hugo'. Desde la clásica Ensalada César hasta nuestras tropicales de Cangrejo y Pollo, cada ensalada está preparada con ingredientes frescos y combinaciones únicas, ofreciendo una opción saludable y sabrosa para complementar tu comida.`,
  category: 'Restauración y Gastronomía',
  classification: 'Pizzería y Comida Italiana',
  metadataBase: new URL(`https://${URL_WEB}`),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: `https://${URL_WEB}/ensaladas`,
    title: 'Ensaladas de La Pizza de Hugo',
    description: `Refresca tu paladar con nuestras deliciosas ensaladas en 'La Pizza de Hugo'. Desde la clásica Ensalada César hasta nuestras tropicales de Cangrejo y Pollo, cada ensalada está preparada con ingredientes frescos y combinaciones únicas, ofreciendo una opción saludable y sabrosa para complementar tu comida.`,
    images: [
      {
        url: '/img/productos/ensaladas/Ensalada-cesar.jpg',
      },
    ],
  },
};

export default function Ensaladas() {
  return (
    <ProductDiv>
      {ensaladasData.map(({ path, name, price }) => (
        <Product path={path} name={name} price={price} key={name} />
      ))}
    </ProductDiv>
  );
}
