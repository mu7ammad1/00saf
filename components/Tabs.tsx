"use client";
import { Tabs, Tab } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function TabsComponenets() {
  const pathname = usePathname();

  // تحديد الـ selectedKey بناءً على pathname
  let selectedKey = "";

  if (pathname === "/") {
    selectedKey = ""; // لو كانت الصفحة الرئيسية هي المفعلة، اختار tab "image"
  } else if (pathname === "/image") {
    selectedKey = "image";
  } else if (pathname === "/video") {
    selectedKey = "video";
  } else if (pathname === "/edit") {
    selectedKey = "edit";
  } else if (pathname === "/enhance") {
    selectedKey = "enhance";
  } else if (pathname === "/stage") {
    selectedKey = "stage";
  }

  return (
    <Tabs aria-label="Options" selectedKey={selectedKey}>
      <Tab key="image" href="/image" title="image" />
      <Tab key="video" href="/video" title="video" />
      <Tab key="edit" href="/edit" title="edit" />
      <Tab key="enhance" href="/enhance" title="enhance" />
      <Tab key="stage" href="/stage" title="3D Stage" />
    </Tabs>
  );
}
