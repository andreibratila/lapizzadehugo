'use client';

import { FC } from 'react';

import Image from 'next/image';

import { useNavbar } from '@/context/UI/UIProvider';
import { Menu } from '@/data/svg';

export const NavbarButton: FC = () => {
  const { handleMenu } = useNavbar();
  return (
    <button
      className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black outline-none focus:outline-none lg:hidden"
      onClick={handleMenu}
    >
      <Image
        src={Menu}
        className="h-auto w-6"
        alt="Expandir barra de navegacion"
      />
    </button>
  );
};
