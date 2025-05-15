import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import DropNav from "./dropNav";
import Test from "./test";

import { createClient } from "@/utils/supabase/server";

export default async function Withch() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("id,username,full_name,email,avatar_url")
    .eq("id", user?.id)
    .single();

  return (
    <div>
      {!user ? (
        <Button as={Link} color="default" href={"/sign-in"}>
          Sign in
        </Button>
      ) : (
        <div className="flex justify-center items-center gap-4">
          <Test targetUserId={profiles?.id} />
          <DropNav profiles={profiles} />
        </div>
      )}
    </div>
  );
}
