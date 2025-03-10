import Image from 'next/image';

import { OpinionCliente } from '@/data/opiniones';

export const ClientOpinion = ({ img, opinion, nombre }: OpinionCliente) => {
  return (
    <div className="grid place-items-center p-9 sm:p-12 md:p-16 lg:p-16">
      <div className="flex justify-center">
        <Image
          width={55}
          height={55}
          className="rounded-full"
          src={img}
          alt="Photo Review"
        />
      </div>
      <p className="pt-6 text-center text-slate-400 sm:pt-6 md:pt-7 lg:pt-10">
        {opinion}
      </p>
      <h1 className="pt-5 text-center text-lg text-webC sm:pt-5 sm:text-xl md:pt-5 md:text-xl lg:pt-5 lg:text-2xl">
        {nombre}
      </h1>
    </div>
  );
};
