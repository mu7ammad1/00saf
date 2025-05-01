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
        className="w-72"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) =>
          setSelectedKeys(new Set(Array.from(keys).map(String)))
        }
      >
        <DropdownItem
          key="Imagenfly"
          description="Generate images full of life"
        >
          imagenFly
        </DropdownItem>
        <DropdownItem key="realistic" description="Create a new file">
          Realistic
        </DropdownItem>
        <DropdownItem key="anime" description="Create a new file">
          anime
        </DropdownItem>
        <DropdownItem key="flux-schnell" description="Create a new file">
          Flux schnell
        </DropdownItem>
        <DropdownItem key="flux-div" description="Create a new file">
          Flux div
        </DropdownItem>
        <DropdownItem key="kling-1.0-standard" description="Create a new file">
          Kling Standard
        </DropdownItem>
        <DropdownItem key="kling-1.0-pro" description="Create a new file">
          Kling Pro
        </DropdownItem>
        <DropdownItem key="kling-1.5" description="Create a new file">
          kling 1.5
        </DropdownItem>
        <DropdownItem key="hailuo-ai" description="Create a new file">
          hailuo ai
        </DropdownItem>
        <DropdownItem key="hailuo-live-ai" description="Create a new file">
          hailuo live
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
