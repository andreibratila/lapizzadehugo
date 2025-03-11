import { FaCircle } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/data/footerLinks';

export const Footer = () => {
  return (
    <>
      <nav className="bg-webC py-14">
        <div className="md: flex flex-wrap items-center justify-between xs:container sm:container lg:container xs:flex-col xs:pb-5 lg:flex-wrap">
          <Image
            width={1000}
            height={1000}
            className="xs:py-5 sm:hidden md:hidden lg:hidden"
            src="/img/logo-pizza-hugo.png"
            alt="Logo"
          />
          <div className="text-white sm:grid sm:grid-cols-1 md:flex md:flex-grow md:place-content-center md:divide-x lg:flex lg:flex-grow lg:place-content-center lg:divide-x lg:text-base md:[&>*]:px-2 lg:[&>*]:px-7">
            {footerLinks.map(({ name, link }, i) => (
              <Link className="hover:text-gray-400" href={link} key={i}>
                <p className="flex items-center">
                  <FaCircle className="mr-2 text-white md:hidden lg:hidden" />
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="w-full bg-black p-5 text-center">
        <p className="text-white">
          La Pizza de Hugo S.L © Diseño y Desarrollo{' '}
          <a href="https://andreiflorianbratila.dev">
            <span className="text-yellow-200">andreiflorianbratila.dev</span>
          </a>
        </p>
      </div>
    </>
  );
};
