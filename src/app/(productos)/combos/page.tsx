import { Metadata } from "next";

import { Product, ProductDiv } from "@/components";
import { combosData } from "@/data/productos/combos";
import { URL_WEB } from "@/config/envVariables";

export const metadata: Metadata = {
  title: "Combos | La Pizza de Hugo",
  description: `Disfruta de las mejores combinaciones en 'La Pizza de Hugo' con nuestros combos especiales. Ya sea que desees empanadillas con una pizza mediana o prefieras una selección más grande para compartir, tenemos el combo perfecto para satisfacer tus antojos. Acompaña tu elección con una refrescante bebida de 1L y vive una experiencia culinaria completa.`,
  category: "Restauración y Gastronomía",
  classification: "Pizzería y Comida Italiana",
  metadataBase: new URL(`https://${URL_WEB}`),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `https://${URL_WEB}/combos`,
    title: "Combos de La Pizza de Hugo",
    description: `Disfruta de las mejores combinaciones en 'La Pizza de Hugo' con nuestros combos especiales. Ya sea que desees empanadillas con una pizza mediana o prefieras una selección más grande para compartir, tenemos el combo perfecto para satisfacer tus antojos. Acompaña tu elección con una refrescante bebida de 1L y vive una experiencia culinaria completa.`,
    images: [
      {
        url: "/img/productos/combos/Combo-1.jpg",
      },
    ],
  },
};

export default function Combos() {
  return (
    <ProductDiv>
      {combosData.map(({ path, name, desc, price }) => (
        <Product
          path={path}
          name={name}
          key={name}
          desc={desc}
          price={price}
          lgheigth="h-32"
        />
      ))}
    </ProductDiv>
  );
}
