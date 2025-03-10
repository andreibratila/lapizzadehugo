import Image from 'next/image';

export const LandingSection2 = () => {
  return (
    <section className="pb-24 pt-20">
      <div className="container lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1
            className={`pb-7 text-center font-garamond text-5xl text-webC underline decoration-webC decoration-2 underline-offset-8 sm:pb-10 sm:text-5xl md:pb-14 md:text-6xl lg:pb-14 lg:text-7xl`}
          >
            Desde 1996
          </h1>
          <div
            className={`space-y-10 text-justify text-webC xs:text-lg sm:text-xl md:text-2xl lg:pr-20 lg:text-2xl`}
          >
            <p>
              La empresa comenzó como «La Cuina de Hugo» ubicada en el centro de
              Sant Pere i Sant Pau. Un negocio dedicado a la venta de pollo a
              l’ast que por la noche ofrecía pizzas y empanadillas para
              llevar.{' '}
            </p>
            <p>
              No fue hasta el año 2002 que nació lo que hoy conocemos como «La
              Pizza de Hugo» ubicada en Països Catalans.{' '}
            </p>
            <p>
              El éxito fue tanto que la empresa decidió enfocarse en el mundo de
              la restauración. Por lo tanto, a día de hoy existe el restaurante
              con servicio de comidas, cenas, pedidos a recoger y reparto a
              domicilio.
            </p>
          </div>
        </div>
        <div className="flex place-content-center pt-20">
          <Image src="/img/Section2IMG.jpg" width={1000} height={200} alt="" />
        </div>
      </div>
    </section>
  );
};
