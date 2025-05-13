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
import { Logo } from "./icons";
import Withch from "./Withch";

import { siteConfig } from "@/config/site";
import Test from "./test";

export const Navbar = () => {
  return (
    <HeroUINavbar
      isBlurred={false}
      isBordered={false}
      maxWidth="2xl"
      position="sticky"
    >
      <NavbarContent className="basis-20" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-full">
          <NavbarContent className="sm:hidden basis-1/12">
            <DrawerComponent />
          </NavbarContent>
          <NextLink
            className="flex justify-start items-center gap-1 max-sm:hidden"
            href="/"
          >
            <Logo size={32} />
            <p className="font-semibold text-xl text-inherit hidden">
              Imagenfly
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <TabsComponenets />

        <div className="hidden gap-4 justify-start">
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

      <NavbarContent className="basis-1" justify="end">
        <Withch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
