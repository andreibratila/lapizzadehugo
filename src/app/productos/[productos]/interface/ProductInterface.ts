import type { productosData } from '../data';

export interface ProductI {
  name: string;
  path: string;
  price?: string;
  desc?: string;
}
export interface ProductWithTitleI {
  title: string;
  pizzas: ProductI[];
}
export type PropsProductos = Promise<{ productos: keyof typeof productosData }>;
