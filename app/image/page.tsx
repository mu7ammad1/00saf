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
      <section className="max-w-2xl mx-auto flex items-center justify-center gap-4">
        <DropdownComponenet />
      </section>
      <section className="max-w-md mx-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div
          className={
            "flex justify-center *:rounded-md mb-10 *:*:size-40 *:*:max-sm:h-32 *:*:object-cover *:*:border-4 "
          }
        >
          <Image
            isBlurred
            alt={"placeholder"}
            className={"-rotate-12 translate-x-10 z-0"}
            src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F555e96f9-d469-4d8f-b1e3-f62da7fbad45.png"
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"z-10"}
            src={`https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F3980f25a-3224-401b-a297-d3abdbbfefbf.png`}
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"rotate-12 -translate-x-10 z-0"}
            src={`https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F9e3d94e8-932c-4483-9ad2-41531d62163c.png&s=1024`}
          />
        </div>
        <h1 className={title()}>Generate Image</h1>
      </section>
      <section className="mb-24 mt-10 w-full hidden">
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
