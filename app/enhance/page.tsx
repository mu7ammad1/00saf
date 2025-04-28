import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

import DropdownComponenet from "@/components/Dropdown";
import { title } from "@/components/primitives";
import { DynamicImage } from "@/components/DynamicImage";

const HeartIcon = ({
  fill = "currentColor",
  filled = false,
  size = 24,
  height = 24,
  width = 24,
  ...props
}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </svg>
  );
};

const Aple = ({ src }: { src: string[] }) => {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center">
      <h1 className="flex max-w-6xl items-center text-lg font-medium w-full py-2 ">
        Prompt.....
      </h1>
      <div className="grid grid-cols-4 items-center justify-center mx-auto max-w-6xl gap-4 *:*:*:object-fill max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4">
        {src?.map((item, index) => <DynamicImage key={index} src={item} />)}
      </div>
    </div>
  );
};

export default function GenerateImageScreen() {
  return (
    <main className="w-full">
      <DropdownComponenet />
      <section className="max-w-md mx-auto hidden flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div
          className={
            "flex justify-center *:rounded-md mb-10 *:*:size-44 *:*:object-cover *:*:border-4 "
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
        <h1 className={title()}>Generate Image</h1>
      </section>
      <section className="mb-24 mt-10 w-full">
        <Aple
          src={[
            "https://heroui.com/images/hero-card-complete.jpeg",
            "https://heroui.com/images/hero-card-complete.jpeg",
          ]}
        />
        <Aple
          src={[
            "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
            "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
            "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
          ]}
        />
      </section>

      <Card className="max-w-2xl w-full mx-auto fixed bottom-3 max-sm:bottom-0 left-0 right-0 z-10">
        <CardBody className="p-0 shadow-none">
          <Textarea
            className="max-w-full"
            endContent={
              <Button
                isIconOnly
                aria-label="Like"
                color="default"
                isLoading={false}
                radius="full"
                size="md"
                variant="flat"
              >
                <HeartIcon />
              </Button>
            }
            placeholder="Generate new image with imagenFly..."
            size="lg"
            variant="bordered"
          />
        </CardBody>
      </Card>
    </main>
  );
}
