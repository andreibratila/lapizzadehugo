import { IoMenu } from 'react-icons/io5';

import {
  NavbarButton,
  NavbarCompact,
  NavbarFull,
  NavbarLogo,
} from '@/components/navbarComponents';
import { NavbarProvider } from '@/context/UI/UIProvider';

export const NavBar = () => {
  return (
    <nav className="fixed z-10 flex w-full justify-between bg-webC px-4 py-5 sm:px-7 md:px-20 lg:px-20">
      <NavbarProvider>
        <div className="flex w-full flex-col">
          <div className="flex justify-between space-x-20 xs:justify-center">
            <NavbarLogo />
            <NavbarButton>
              <IoMenu />
            </NavbarButton>
          </div>
          <NavbarCompact />
        </div>
      </NavbarProvider>
      <NavbarFull />
    </nav>
  );
};
