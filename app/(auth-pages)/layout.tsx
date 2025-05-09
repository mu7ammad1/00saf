import { createClient } from "@/utils/supabase/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="max-w-6xl m-auto flex flex-col justify-center gap-12 my-5">
      {!user && children}
      {user && <p className="text-center w-full">YOU AUTHENTICATE</p>}
    </div>
  );
}
