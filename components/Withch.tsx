import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Avatar } from "@heroui/avatar";

import { createClient } from "@/utils/supabase/server";

export default async function Withch() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("id,username,full_name,avatar_url")
    .eq("id", user?.id)
    .single();

  return (
    <div>
      {!user ? (
        <Button as={Link} color="default" href={"/sign-in"}>
          Sign in
        </Button>
      ) : (
        <Avatar
          isBordered
          alt="Avatar"
          className="avatar image"
          color="default"
          src={profiles?.avatar_url}
          style={{ height: 32, width: 32 }}
        />
      )}
    </div>
  );
}
