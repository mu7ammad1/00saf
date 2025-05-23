import { Link } from "@heroui/link";
import { AxeIcon, BlendIcon, ChartNoAxesColumnDecreasingIcon, CompassIcon, Flower, Rotate3DIcon } from "lucide-react";

export default function TabsComponenets() {
  return (
    <div className="w-full gap-3 flex items-center justify-center mt-20">
      <div className="flex items-center justify-center w-full flex-wrap gap-5 *:rounded-3xl *:h-auto *:max-md:bg-black *:w-1/5 *:max-md:w-1/3 *:max-lg:w-1/4 *:pb-5 *:p-3 *:text-left">
        <Link className="bg-default-100 flex flex-col justify-start items-start" href="/design">
          <Flower className="mb-2 text-sky-500 p-1 rounded-xl" size={32} />
          <p className="text-black">Design</p>
        </Link>
        <Link className="bg-default-100 flex flex-col justify-start items-start" href="/design">
          <Rotate3DIcon className="mb-2 text-yellow-500 p-1 rounded-xl" size={32} />
          <span className="text-black">3D Generating</span>
        </Link>
        <div className="bg-default-100">
          <CompassIcon className="mb-2 text-pink-500 p-1 rounded-xl" size={32} />
          <span>Remove Background</span>
        </div>
        <div className="bg-default-100">
          <BlendIcon className="mb-2 text-pink-500 p-1 rounded-xl" size={32} />
          <span>Recolor image</span>
        </div>
        <div className="bg-default-100">
          <CompassIcon className="mb-2 text-pink-500 p-1 rounded-xl" size={32} />
          <span>Enhance image</span>
        </div>
        <div className="bg-default-100">
          <CompassIcon className="mb-2 text-pink-500 p-1 rounded-xl" size={32} />
          <span>Remove Background</span>
        </div>
        <div className="bg-default-100">
          <CompassIcon className="mb-2 text-pink-500 p-1 rounded-xl" size={32} />
          <span>Remove Background</span>
        </div>
      </div>
    </div>
  );
}
