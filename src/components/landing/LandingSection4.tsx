import { ContactaConNosotros } from '@/components';
import { IframeMaps } from '@/components/landing/components';

export const LandingSection4 = () => {
  return (
    <section className="bg-bgcontact py-10 sm:py-10 md:pt-10 lg:p-16">
      <div className="container bg-white lg:pb-16 lg:pt-16">
        <div className="grid lg:grid-cols-2">
          <ContactaConNosotros />

          <div className="grid place-items-center xs:pt-3 sm:pt-5 md:px-10 md:pb-14 md:pt-7 lg:pr-14">
            <IframeMaps />
          </div>
        </div>
      </div>
    </section>
  );
};
