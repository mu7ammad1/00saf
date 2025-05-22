import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";

import DrawerComponent from "./DrawerComponent";
import { Logo } from "./icons";
import Withch from "./Withch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      isBlurred={false}
      isBordered={false}
      maxWidth="2xl"
      position="static"
      style={{ background: "#00000000", margin: "0 0 3rem 0" }}
    >

      <NavbarContent className="basis-20" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-full">
          <NavbarContent className="sm:hidden basis-1/12">
            <DrawerComponent />
          </NavbarContent>
          <NextLink
            className="flex justify-start items-center gap-1 max-sm:hidden text-yellow-400"
            href="/"
          >
            <Logo size={32} />
            <p className="font-semibold text-xl text-inherit">Imagenfly</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        {/* <TabsComponenets /> */}
      </NavbarContent>

      <NavbarContent className="basis-1" justify="end">
        <Withch />
      </NavbarContent>

    </HeroUINavbar>
  );
};
