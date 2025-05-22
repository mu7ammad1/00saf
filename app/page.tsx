import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";
import gradient from "@/assets/Free 04 Dark _ Light Color Gradients - Asylab.jpg";

import Index from "@/components/c";
import { PinterestLayout } from "@/components/Dynamic";
import Test from "@/components/test";
import GenerateImageScreen from "./image/page";
import GenerateImageUx from "./image/ux";
import { createClient } from "@/utils/supabase/server";
import { CableCarIcon } from "lucide-react";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10 w-full px-5 max-sm:px-2">
      <GenerateImageScreen />
    </section>
  );
}
