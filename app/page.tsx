import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Image } from "@heroui/image";

import Index from "@/components/c";
import { PinterestLayout } from "@/components/Dynamic";

const BTNS = () => {
  return (
    <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          alt="Image"
          className="w-10 h-10 object-cover rounded-lg"
          src="https://heroui.com/images/hero-card-complete.jpeg"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-0 w-full">
        <h3 className="text-lg font-medium flex w-full justify-start items-baseline text-start">
          Generate image
        </h3>
        <p className="text-xs flex w-full justify-start items-baseline text-start">
          Generate new image with prompt...
        </p>
      </div>
      <Button
        as={Link}
        color="default"
        href="/#"
        radius="full"
        size="sm"
        variant="solid"
      >
        open
      </Button>
    </CardBody>
  );
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full ">
      <Index />
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <Card className="w-full max-w-full gap-2 grid grid-cols-3 shadow-none justify-center items-center">
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-4 md:py-10 w-full">
        <h3 className="flex justify-start w-full">Inspiration</h3>
        <Card className="w-full max-w-full gap-2 shadow-none">
          <PinterestLayout
            src={[
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://heroui.com/images/hero-card-complete.jpeg",
              "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
            ]}
          />
        </Card>
      </div>
    </section>
  );
}
