import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

import DropdownComponenet from "@/components/Dropdown";
import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";

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

export default function GenerateEditScreen() {
  return (
    <main className="w-full">
      <section className="max-w-2xl mx-auto hidden items-center justify-center gap-4">
        <DropdownComponenet />
      </section>
      <section className="max-w-96 mx-auto hidden flex-col items-center justify-center gap-4 my-8 py-8 bg-default/50 rounded-3xl">
        <div
          className={
            "flex justify-center *:rounded-md mb-10 *:*:size-40 *:*:max-sm:h-32 *:*:object-cover *:*:border-4 "
          }
        >
          <Image
            isBlurred
            alt={"placeholder"}
            className={"-rotate-12 translate-x-10 z-0"}
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jrcwh41nfgg8rd7zyb8d151n%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=l9zxILt6edjs7u%2FhB9qTjVClNVjswuAFAag3OzAeTa0%3D&az=oaivgprodscus"
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"z-10"}
            src={`https://videos.openai.com/vg-assets/assets%2Ftask_01jt6gtjhge63vje2eb3pc6nv1%2F1746123213_img_0.webp?st=2025-05-02T06%3A02%3A26Z&se=2025-05-08T07%3A02%3A26Z&sks=b&skt=2025-05-02T06%3A02%3A26Z&ske=2025-05-08T07%3A02%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=gEV8SCDnL%2FKioTqdFm1wJOOGClcXzy7lEUwL5xvtcnI%3D&az=oaivgprodscus`}
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"rotate-12 -translate-x-10 z-0"}
            src={`https://videos.openai.com/vg-assets/assets%2Ftask_01jt7b62hhevdv19ahfakx9j0h%2F1746150883_img_0.webp?st=2025-05-02T06%3A03%3A18Z&se=2025-05-08T07%3A03%3A18Z&sks=b&skt=2025-05-02T06%3A03%3A18Z&ske=2025-05-08T07%3A03%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=o1Ru9O2yUUrxfzW8T%2Bu42eH%2FVvSCrqxp6WeY9btwovk%3D&az=oaivgprodscus`}
          />
        </div>
        <Button
          color="primary"
          size="lg"
          startContent={<HeartIcon />}
          type="button"
          variant="flat"
        >
          Upload
        </Button>
      </section>
      <section className="max-w-full h-96 mx-auto flex flex-col items-center justify-center gap-4 my-8 py-8 bg-default/50 rounded-3xl">
        <div
          className={
            "flex justify-center *:rounded-md mb-10 *:*:size-40 *:*:max-sm:h-32 *:*:object-cover *:*:border-4 "
          }
        >
          <Image
            isBlurred
            alt={"placeholder"}
            className={"-rotate-12 translate-x-10 z-0"}
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jrcwh41nfgg8rd7zyb8d151n%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=l9zxILt6edjs7u%2FhB9qTjVClNVjswuAFAag3OzAeTa0%3D&az=oaivgprodscus"
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"z-10"}
            src={`https://videos.openai.com/vg-assets/assets%2Ftask_01jt6gtjhge63vje2eb3pc6nv1%2F1746123213_img_0.webp?st=2025-05-02T06%3A02%3A26Z&se=2025-05-08T07%3A02%3A26Z&sks=b&skt=2025-05-02T06%3A02%3A26Z&ske=2025-05-08T07%3A02%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=gEV8SCDnL%2FKioTqdFm1wJOOGClcXzy7lEUwL5xvtcnI%3D&az=oaivgprodscus`}
          />
          <Image
            isBlurred
            alt={"placeholder"}
            className={"rotate-12 -translate-x-10 z-0"}
            src={`https://videos.openai.com/vg-assets/assets%2Ftask_01jt7b62hhevdv19ahfakx9j0h%2F1746150883_img_0.webp?st=2025-05-02T06%3A03%3A18Z&se=2025-05-08T07%3A03%3A18Z&sks=b&skt=2025-05-02T06%3A03%3A18Z&ske=2025-05-08T07%3A03%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=o1Ru9O2yUUrxfzW8T%2Bu42eH%2FVvSCrqxp6WeY9btwovk%3D&az=oaivgprodscus`}
          />
        </div>
        <Button
          aria-description="Removes unwanted objects, such as blemishes on portraits or items on desks"
          color="primary"
          size="lg"
          type="button"
          variant="flat"
        >
          Erase Object
        </Button>
        <Button
          aria-description="Use a mask (or alpha channel) to replace anything in an image"
          color="primary"
          size="lg"
          type="button"
          variant="flat"
        >
          Inpaint
        </Button>
        <Button
          aria-description="Inserts additional content in an image to fill in the space in any direction"
          color="primary"
          size="lg"
          type="button"
          variant="flat"
        >
          Outpaint
        </Button>
        <Gallery />
      </section>
      <h1 className={title()}>Edit image</h1>
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
