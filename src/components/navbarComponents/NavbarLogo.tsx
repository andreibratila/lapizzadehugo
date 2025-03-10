import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const NavbarLogo: FC = () => {
  return (
    <Link className="flex" href="/">
      <Image
        src="/img/logo-pizza-hugo.png"
        width={97}
        height={97}
        alt="Logo"
        style={{ width: 'auto', height: 'auto' }}
      />
      <span className="self-center indent-8 font-garamond font-semibold uppercase tracking-widest text-white underline underline-offset-4 xs:hidden sm:text-2xl md:text-3xl lg:text-3xl">
        La Pizza de Hugo
      </span>
    </Link>
  );
};
