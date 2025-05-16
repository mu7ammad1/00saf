import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

import DropdownComponenet from "@/components/Dropdown";
import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";



const Aple = () => {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center mx-auto max-w-6xl gap-4 *:object-cover *:sm:w-1/2 *:md:w-1/3 *:lg:w-1/4 *:xl:w-1/5">
        <Image
          isBlurred
          alt={"placeholder"}
          className="size-52 object-cover"
          src={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
        <Image
          isBlurred
          alt={"placeholder"}
          className="size-52 object-cover"
          src="https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Image
          isBlurred
          alt={"placeholder"}
          className="size-52 object-cover"
          src="https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Image
          isBlurred
          alt={"placeholder"}
          className="size-52 object-cover"
          src="https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
      </div>
      <h1 className="flex max-w-5xl items-center text-lg font-medium w-full py-2 ">
        Prompt.....
      </h1>
    </div>
  );
};

export default function GenerateVideoScreen() {
  return (
    <main className="w-full">
      <section className="max-w-2xl mx-auto hidden items-center justify-center gap-4">
        <DropdownComponenet />
      </section>
      <section className="max-w-96 mx-auto flex flex-col items-center justify-center gap-4 my-8 py-8 bg-default/50 rounded-3xl">
        <div
          className={
            "flex justify-center *:rounded-md mb-10 *:*:size-40 *:*:max-sm:h-32 *:*:object-cover *:*:border-4 "
          }
        >
          <Image
            isBlurred
            alt={"placeholder"}
            className={"-rotate-12 translate-x-10 z-0"}
            src="https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"z-10"}
            src={`https://heroui.com/images/hero-card-complete.jpeg`}
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"rotate-12 -translate-x-10 z-0"}
            src={`https://images.pexels.com/photos/30739081/pexels-photo-30739081/free-photo-of-delicious-strawberry-cake-with-elegant-tulips.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          />
        </div>
        <Gallery />
      </section>
      <h1 className={title()}>Enhance image</h1>
      <section className="mb-24 mt-10 w-full hidden">
        <Aple />
        <Aple />
        <Aple />
        <Aple />
        <Aple />
        <Aple />
      </section>

      <Card className="max-w-2xl w-full mx-auto fixed bottom-3 max-sm:bottom-0 left-0 right-0 z-10" />
    </main>
  );
}
