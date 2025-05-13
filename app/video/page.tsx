import GenerateVideoUx from "./ux";

import { createClient } from "@/utils/supabase/server";

export default async function GenerateImageScreen() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className={`w-full h-full`}>
      <GenerateVideoUx user={user} />
    </main>
  );
}
