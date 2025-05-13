"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Avatar } from "@heroui/react";

import { signOutAction } from "@/app/actions";

export default function DropNav({ profiles }: { profiles: any }) {
  if (!profiles) {
    return null; // or a loading state
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          alt="Avatar"
          className="avatar image"
          color="default"
          src={profiles?.avatar_url}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{profiles?.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={signOutAction}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
