import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/data/footerLinks';
import { Point } from '@/data/svg';

export const Footer: React.FC = () => {
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
                  <Image
                    width={10}
                    height={10}
                    src={Point}
                    alt=""
                    className="mr-2 fill-white md:hidden lg:hidden"
                  />
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="bg-black p-5">
        <p className="text-white">
          La Pizza de Hugo S.L © Diseño y Desarrollo{' '}
          <a href="https://www.linkedin.com/in/andrei-florian-bratila/">
            <span className="text-yellow-200">Andrei Bratila</span>
          </a>
        </p>
      </div>
    </>
  );
};
