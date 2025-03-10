import Link from 'next/link';

export const LandingSection1 = () => {
  return (
    <section className="flex pt-14">
      <div className="mt-20 h-full w-screen bg-landing-section1 bg-cover bg-center bg-no-repeat px-20 py-56">
        <div className="bg-bgClientes bg-opacity-70 text-center font-garamond tracking-widest text-bglogo xs:py-5 sm:p-8 md:p-10 lg:p-14">
          <h1 className="text-2xl font-bold sm:text-2xl md:text-4xl lg:text-5xl">
            Calidad Experiencia Pasión Y Elegancia
          </h1>

          <h2 className="xs:py-4 xs:text-lg sm:py-5 sm:text-xl md:py-7 md:text-2xl lg:py-10 lg:text-3xl">
            Trabajamos con productos{' '}
            <span className="font-bold underline">naturales</span>{' '}
            <span className="font-bold underline">artesanales</span> y{' '}
            <span className="font-bold underline">sin conservantes</span> <br />{' '}
            Nos esmeramos en darle calidad.
          </h2>

          <Link
            className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 sm:text-xl md:text-2xl lg:text-3xl"
            href="/pizzas"
          >
            <span>
              <span className="xs:hidden">Visualiza Nuestros</span> Productos
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
