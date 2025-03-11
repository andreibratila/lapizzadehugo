import { Metadata } from 'next';

import { Product } from '@/components';

import { metadataData, productosData, productosMap } from './data';
import { PropsProductos } from './interface';

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: PropsProductos;
}): Promise<Metadata> {
  const { productos } = await params;
  const productoSeleccionado = metadataData[productos];
  return {
    ...productoSeleccionado,
  };
}

export async function generateStaticParams() {
  return productosMap;
}

export default async function Postres({ params }: { params: PropsProductos }) {
  const { productos } = await params;
  if (productos === 'pizzas') {
    return (
      <>
        {productosData.pizzas.map(({ title, pizzas }) => (
          <div key={title}>
            <h2 className="-mb-10 pt-16 text-center font-bold xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              {title}
            </h2>
            <div className="container grid content-center gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
            </div>
          </div>
        ))}
      </>
    );
  }

  // Para otros productos, usamos la estructura genérica
  return (
    <div className="container grid content-center gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {productosData[productos].map(({ path, name, desc, price }) => (
        <Product path={path} name={name} key={name} desc={desc} price={price} />
      ))}
    </div>
  );
}
