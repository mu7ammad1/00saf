import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design",
  description: "Design system for the app",
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full bg-violet-500 p-0 m-0 fixed top-0 left-0 right-0 bottom-0 z-50 overscroll-none overflow-hidden">
      {children}
    </main>
  );
}
