import { FC } from 'react';

import Link from 'next/link';

import { navbarLinks } from '@/data/navbarLinks';

export const NavbarFull: FC = () => {
  return (
    <div className="flex items-center space-x-6 xs:hidden sm:hidden md:hidden">
      {navbarLinks.map(({ link, name }, i) => (
        <Link
          key={i}
          className="flex items-center px-3 py-2 text-sm font-bold uppercase leading-snug text-white underline hover:opacity-50"
          href={link}
        >
          <span className="ml-2">{name}</span>
        </Link>
      ))}
    </div>
  );
};
