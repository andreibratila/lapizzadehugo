'use client';

import { useNavbar } from '@/context/UI/UIProvider';

export const NavbarButton = ({ children }: { children: React.ReactNode }) => {
  const { handleMenu } = useNavbar();
  return (
    <button
      className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black outline-none focus:outline-none lg:hidden"
      onClick={handleMenu}
    >
      {children}
    </button>
  );
};
