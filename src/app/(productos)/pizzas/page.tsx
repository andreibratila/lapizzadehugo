import { Metadata } from 'next';

import { Product, ProductDiv } from '@/components';
import { URL_WEB } from '@/config/envVariables';
import { pizzaData } from '@/data/productos';

export const metadata: Metadata = {
  title: 'Pizzas | La Pizza de Hugo',
  description: `Explora nuestra amplia variedad de pizzas en 'La Pizza de Hugo'. Desde las clásicas como la Básica y la Tropical hasta nuestras exclusivas Pizzas Gourmet como la Cocktail y la Bomba. Cada pizza está elaborada con ingredientes frescos y de calidad, garantizando un sabor inigualable. Ya sea que prefieras una mediana o una familiar, tenemos una pizza perfecta para ti.`,
  category: 'Restauración y Gastronomía',
  classification: 'Pizzería y Comida Italiana',
  metadataBase: new URL(`https://${URL_WEB}`),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: `https://${URL_WEB}/pizzas`,
    title: 'Pizzas de La Pizza de Hugo',
    description: `Explora nuestra amplia variedad de pizzas en 'La Pizza de Hugo'. Desde las clásicas como la Básica y la Tropical hasta nuestras exclusivas Pizzas Gourmet como la Cocktail y la Bomba. Cada pizza está elaborada con ingredientes frescos y de calidad, garantizando un sabor inigualable. Ya sea que prefieras una mediana o una familiar, tenemos una pizza perfecta para ti.`,
    images: [
      {
        url: '/img/productos/pizzas/premium/Pizza-provenzal.jpg',
      },
    ],
  },
};

export default function Pizzas() {
  return (
    <>
      {pizzaData.map(({ title, pizzas }) => (
        <div key={title}>
          <h2 className="-mb-10 pt-16 text-center font-bold xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl">
            {title}
          </h2>
          <ProductDiv>
            {pizzas.map(({ name, path, desc, price }) => (
              <Product
                path={path}
                name={name}
                key={name}
                desc={desc}
                price={price}
                lgheigth="h-36"
              />
            ))}
          </ProductDiv>
        </div>
      ))}
    </>
  );
}
