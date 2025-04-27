import { Inter, MonteCarlo } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  preload: true, // Add this
});

export const fontMono = MonteCarlo({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
