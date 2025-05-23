/* eslint-disable import/order */
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased rubik-rubikFont",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-full -z-0">
            <main className="w-full mx-auto max-w-7xl flex-grow">
              <Navbar />
              {children}
            </main>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics
        key={"G-75SHPDXGW3"}
        dataLayerName="G-75SHPDXGW3"
        gaId="G-75SHPDXGW3"
      />
    </html>
  );
}
