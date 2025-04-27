"use client";
import { Tabs, Tab } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function TabsComponenets() {
  const pathname = usePathname();

  return (
    <Tabs aria-label="Options" selectedKey={pathname}>
      <Tab key="image" href="/image" title="image" />
      <Tab key="video" href="/video" title="video" />
      <Tab key="edit" href="/edit" title="edit" />
    </Tabs>
  );
}
