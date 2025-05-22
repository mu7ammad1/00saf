import GenerateImageUx from "./ux";
import gradient from "@/assets/Free 04 Dark _ Light Color Gradients - Asylab.jpg";

import { createClient } from "@/utils/supabase/server";
import { CableCarIcon } from "lucide-react";

export default async function GenerateImageScreen() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className={`w-full h-full`}>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 -z-10"
        style={{
          backgroundImage: `url('${gradient.src}')`,
          backgroundSize: `cover`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      <GenerateImageUx user={user} />
      <div className="bg-white rounded-3xl p-5 pb-10 flex flex-col items-center justify-center w-full mt-52">
        <div className="text-2xl flex items-center gap-2 text-black w-full mb-5">
          <CableCarIcon />
          <span>Inspirations</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 w-full *:max-lg:w-1/4 *:max-md:w-1/3 *:max-sm:w-full">
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-blue-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-blue-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-blue-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
          <div className="w-[23%] h-40 bg-teal-200 rounded-3xl" />
        </div>
      </div>

    </main>
  );
}
