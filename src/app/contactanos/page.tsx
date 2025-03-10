import { Metadata } from 'next';

import { ContactaConNosotros, ReactForm } from '@/components';
import { IframeMaps } from '@/components/landing/components';
import { URL_WEB } from '@/config/envVariables';

export const metadata: Metadata = {
  title: 'Contactanos',
  description: `Conéctate con 'La Pizza de Hugo' y déjanos saber tus inquietudes, sugerencias o comentarios. Estamos ubicados en Sant Pere i Sant Pau, Tarragona, y te esperamos con los brazos abiertos para ofrecerte la mejor experiencia culinaria. Ya sea que desees visitarnos en nuestro horario de atención o prefieras contactarnos por correo o teléfono, estamos aquí para atenderte.`,
  category: 'Restauración y Gastronomía',
  classification: 'Pizzería y Comida Italiana',
  metadataBase: new URL(`https://${URL_WEB}`),

  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: `https://${URL_WEB}/contactanos`,
    title: 'Contacta con La Pizza de Hugo',
    description: `Conéctate con 'La Pizza de Hugo' y déjanos saber tus inquietudes, sugerencias o comentarios. Estamos ubicados en Sant Pere i Sant Pau, Tarragona, y te esperamos con los brazos abiertos para ofrecerte la mejor experiencia culinaria. Ya sea que desees visitarnos en nuestro horario de atención o prefieras contactarnos por correo o teléfono, estamos aquí para atenderte.`,
    images: [
      {
        url: '/img/logo-pizza-hugo.png',
      },
    ],
  },
};

export default function Contactanos() {
  return (
    <>
      <div className="pt-36">
        <IframeMaps />
      </div>
      <section className="bg-bgcontact py-10 sm:py-10 md:pt-10 lg:p-16">
        <div className="container bg-white lg:pb-16 lg:pt-16">
          <div className="grid lg:grid-cols-2">
            <ContactaConNosotros />

            <div className="sm:px-10 md:pr-10 lg:pl-20 lg:pr-10">
              <h1 className="pb-8 pt-10 text-center font-garamond text-3xl text-webC underline decoration-2 underline-offset-8 sm:pb-8 sm:pt-10 sm:text-5xl md:pb-8 md:pt-20 md:text-5xl lg:pt-1 lg:text-5xl">
                Formulario de contacto
              </h1>
              <ReactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
