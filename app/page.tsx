import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";

import Index from "@/components/c";
import { PinterestLayout } from "@/components/Dynamic";

const BTNS = () => {
  return (
    <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
      <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-[#F5F5F5]">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 22 19"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4C1 2.34315 2.34232 1 3.99918 1C8.10592 1 12.7803 1 17.9995 1C19.6564 1 21 2.34315 21 4V15C21 16.6569 19.6569 18 18 18H4C2.34315 18 1 16.6569 1 15V4Z"
            fill="white"
          />
          <path
            d="M6.5 1V18M4 18H18C19.6569 18 21 16.6569 21 15V4C21 2.34315 19.6564 1 17.9995 1C12.7803 1 8.10592 1 3.99918 1C2.34232 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z"
            stroke="#202020"
            strokeWidth="1.5"
          />
        </svg>
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
        <Card className="w-full max-w-full gap-2 grid shadow-none justify-center items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <BTNS />
          <BTNS />
          <BTNS />
          <BTNS />
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h3 className="flex justify-start w-full">Inspiration</h3>
        <Card className="w-full max-w-full gap-2 shadow-none ">
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
