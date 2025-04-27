import { createClient } from "@/utils/supabase/server";

export default async function AvatarBar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? <div>asf</div> : <div>asf000</div>;
}
