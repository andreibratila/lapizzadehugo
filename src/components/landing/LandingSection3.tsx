import { opinionesClientes } from '@/data/opiniones';
import '@/slick-slider/slick-theme.min.css';
import '@/slick-slider/slick.min.css';

import { SliderCSR } from '../';
import { ClientOpinion } from './components';

export const LandingSection3 = () => {
  return (
    <section className="mt-14 bg-webC pb-24 pt-20">
      <h1
        className={`pb-7 text-center font-garamond text-xl text-white underline decoration-white decoration-2 underline-offset-8 sm:pb-10 sm:text-4xl md:pb-14 md:text-5xl lg:pb-14 lg:text-6xl`}
      >
        RESEÑAS SOBRE NOSOTROS
      </h1>

      <div className="container rounded-3xl bg-white outline-dashed -outline-offset-8">
        <SliderCSR>
          {opinionesClientes.map((opinionesClientes, i) => (
            <ClientOpinion key={i} {...opinionesClientes} />
          ))}
        </SliderCSR>
      </div>
    </section>
  );
};
