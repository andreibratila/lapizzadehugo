'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navbarProductosLink } from '@/data/navbarProductosLink';

export const NavProductos: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="container pt-52 text-center">
      <ul className="mx-auto flex max-w-2xl flex-wrap items-center justify-center rounded-full text-lg font-semibold outline outline-offset-4 outline-dorado xs:rounded-3xl xs:py-2">
        {navbarProductosLink.map(({ link, name }, i) => (
          <li key={i} className="p-0">
            <Link href={`/productos${link}`}>
              <span
                className={`block px-2 py-1 text-webC ${
                  pathname === `/productos${link}`
                    ? 'underline decoration-double underline-offset-4'
                    : 'hover:opacity-50'
                }`}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
