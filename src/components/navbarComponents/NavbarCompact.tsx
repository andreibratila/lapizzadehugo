'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavbar } from '@/context/UI/UIProvider';
import { navbarLinks } from '@/data/navbarLinks';

export const NavbarCompact = () => {
  const { isOpen, handleMenu } = useNavbar();
  const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <div className="sm: container h-72 pt-10 xs:h-72 md:h-40 lg:hidden">
          <div className="mt-4 flex flex-col place-content-center items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:py-5">
            {navbarLinks.map(({ link, name }, i) => (
              <div
                key={i}
                className={pathname === link ? 'rounded bg-slate-300' : ''}
              >
                <Link
                  className="flex items-center px-3 py-2 text-xl font-bold uppercase leading-snug text-webC underline hover:opacity-50"
                  href={link}
                  onClick={handleMenu}
                >
                  <span>{name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
