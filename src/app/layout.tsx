import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, NavBar } from '@/components';
import { Toaster } from '@/components/ui/sonner';
import { URL_WEB } from '@/config';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | La Pizza de Hugo',
    default: 'La Pizza de Hugo',
  },
  creator: 'Andrei Florian Bratila',
  authors: [
    {
      name: 'Andrei Florian Bratila',
      url: 'andreiflorianbratila.dev',
    },
  ],
  description: `Descubre 'La Pizza de Hugo', una experiencia culinaria que combina calidad, pasión y elegancia. Desde 1996, ofrecemos productos naturales y artesanales sin conservantes. Comenzando como 'La Cuina de Hugo', hemos evolucionado para brindarte lo mejor en pizzas, empanadillas y más. Visítanos en Tarragona o realiza tu pedido a domicilio`,
  category: 'Restauración y Gastronomía',
  classification: 'Pizzería y Comida Italiana',

  metadataBase: new URL(`${URL_WEB}`),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'La Pizza de Hugo',
    description: `Descubre La Pizza de Hugo, una experiencia culinaria que combina calidad, pasión y elegancia. Desde 1996, ofrecemos productos naturales y artesanales sin conservantes. Comenzando como 'La Cuina de Hugo', hemos evolucionado para brindarte lo mejor en pizzas, empanadillas y más. Visítanos en Tarragona o realiza tu pedido a domicilio`,
    images: [
      {
        url: '/img/logo-pizza-hugo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
