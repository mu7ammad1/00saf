import { CableCarIcon } from "lucide-react";

import gradient from "@/assets/Free 04 Dark _ Light Color Gradients - Asylab.jpg";
export default function GenerateImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-20 p-8 w-full h-full">
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

      <div className="inline-block w-full text-center justify-center mb-10">
        {children}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 pb-5 w-full bg-white rounded-3xl">
        <div className="text-2xl flex items-center gap-2 text-black w-full mb-5">
          <CableCarIcon />
          <span>Inspirations</span>
        </div>
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
    </section>
  );
}
