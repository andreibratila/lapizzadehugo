import { Metadata } from "next";
import { Product, ProductDiv } from "@/components";
import { postresData } from "@/data/productos";
import { URL_WEB } from "@/config/envVariables";

export const metadata: Metadata = {
  title: "Postres | La Pizza de Hugo",
  description: `Endulza tu paladar con nuestros exquisitos postres en 'La Pizza de Hugo'. Desde las cremosas Tarrinas Häagen-Dazs y los refrescantes Helados de Cucurucho hasta las tradicionales delicias como el Flan con Nata y Dulce de Leche o los Alfajores Havanna. Cada postre es una invitación a un viaje de sabores inolvidables.`,
  category: "Restauración y Gastronomía",
  classification: "Pizzería y Comida Italiana",
  metadataBase: new URL(`https://${URL_WEB}`),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `https://${URL_WEB}/postres`,
    title: "Postres de La Pizza de Hugo",
    description: `Endulza tu paladar con nuestros exquisitos postres en 'La Pizza de Hugo'. Desde las cremosas Tarrinas Häagen-Dazs y los refrescantes Helados de Cucurucho hasta las tradicionales delicias como el Flan con Nata y Dulce de Leche o los Alfajores Havanna. Cada postre es una invitación a un viaje de sabores inolvidables.`,
    images: [
      {
        url: "/img/productos/postres/Postre-vainilla-cookies.jpg",
      },
    ],
  },
};

export default function Postres() {
  return (
    <ProductDiv>
      {postresData.map(({ path, name }) => (
        <Product path={path} name={name} key={name} />
      ))}
    </ProductDiv>
  );
}
