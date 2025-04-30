import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import TabsComponenets from "./Tabs";
import DrawerComponent from "./DrawerComponent";

import { siteConfig } from "@/config/site";
import ModalSignIn from "@/components/modalSignIn";
import { Logo } from "./icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      isBlurred={false}
      isBordered={false}
      maxWidth="2xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NavbarContent className="sm:hidden">
            <DrawerComponent />
          </NavbarContent>
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo size={32} />
            <p className="font-semibold text-xl text-inherit">Imagenfly</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <TabsComponenets />

        <div className="hidden gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <ModalSignIn />
        {/* <ThemeSwitch /> */}
      </NavbarContent>
    </HeroUINavbar>
  );
};
