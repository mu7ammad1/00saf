"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function DropdownComponenet() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Imagenfly"]),
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize" variant="bordered">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) =>
          setSelectedKeys(new Set(Array.from(keys).map(String)))
        }
      >
        <DropdownItem key="Imagenfly">imagenFly</DropdownItem>
        <DropdownItem key="realistic">Realistic</DropdownItem>
        <DropdownItem key="anime">anime</DropdownItem>
        <DropdownItem key="flux-schnell">Flux schnell</DropdownItem>
        <DropdownItem key="flux-div">Flux div</DropdownItem>
        <DropdownItem key="kling-1.0-standard">Kling Standard</DropdownItem>
        <DropdownItem key="kling-1.0-pro">Kling Pro</DropdownItem>
        <DropdownItem key="kling-1.5">kling 1.5</DropdownItem>
        <DropdownItem key="hailuo-ai">hailuo ai</DropdownItem>
        <DropdownItem key="hailuo-live-ai">hailuo live</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
