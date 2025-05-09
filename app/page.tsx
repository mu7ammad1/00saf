import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";

import Index from "@/components/c";
import { PinterestLayout } from "@/components/Dynamic";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10 w-full px-5 max-sm:px-2">
      <Index />
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Card className="w-full max-w-full gap-2 grid shadow-none justify-center items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="h-[32px] w-[32px]"
                fill="none"
                height="32"
                viewBox="0 0 22 22"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon / inpaint">
                  <path
                    d="M16.9016 2.304C17.7203 1.87984 18.6886 2.07102 19.3088 2.69117C19.9289 3.31132 20.1201 4.27965 19.696 5.09831C18.9094 6.61643 17.9767 7.94625 16.8543 9.1418C17.9827 10.545 18.8307 11.9986 19.1889 13.3665C19.6064 14.9607 19.3723 16.5679 17.9895 17.6742C16.8788 18.5627 15.6307 18.4428 14.6339 18.0311C13.6637 17.6303 12.8032 16.9135 12.2125 16.343C11.8484 15.9913 11.8383 15.411 12.1901 15.0468C12.5418 14.6827 13.1221 14.6726 13.4862 15.0243C14.0182 15.5382 14.6812 16.067 15.3339 16.3366C15.96 16.5953 16.4343 16.5705 16.8442 16.2426C17.4911 15.725 17.7119 14.9632 17.4154 13.831C17.1542 12.8336 16.5045 11.6572 15.5269 10.4178C14.9946 10.8808 14.4261 11.3236 13.8182 11.7503C13.7912 11.7693 13.7636 11.7866 13.7354 11.8022C13.6786 12.4689 13.4543 13.0393 13.0594 13.494C12.6099 14.0116 12.0172 14.2891 11.4507 14.4435C10.5477 14.6896 9.46679 14.6738 8.67809 14.6623C8.52631 14.6601 8.38535 14.658 8.25856 14.658C7.7523 14.658 7.3419 14.2476 7.3419 13.7414C7.3419 13.6146 7.33984 13.4736 7.33763 13.3219C7.32614 12.5332 7.31038 11.4523 7.55648 10.5493C7.71087 9.98279 7.98833 9.39003 8.50593 8.94051C8.96061 8.54564 9.53108 8.32137 10.1978 8.26454C10.2134 8.23636 10.2307 8.20871 10.2496 8.18174C10.614 7.66263 10.9902 7.17226 11.3805 6.70863C8.73092 5.25436 6.183 5.37327 4.86152 6.69476C3.97441 7.58187 3.62406 8.9823 3.93869 10.6604C4.25235 12.3332 5.21922 14.1824 6.80607 15.7693C7.74293 16.7062 8.75521 17.3604 9.58321 17.7784C9.99675 17.9872 10.3568 18.1332 10.6289 18.2249C10.8326 18.2935 10.9494 18.3188 10.9923 18.3281C11.0149 18.333 11.0169 18.3334 11.0001 18.3334C11.5064 18.3334 11.9168 18.7438 11.9168 19.2501C11.9168 19.7564 11.5064 20.1668 11.0001 20.1667C10.7225 20.1667 10.3651 20.0706 10.0437 19.9623C9.68282 19.8407 9.2424 19.6601 8.75698 19.415C7.78707 18.9254 6.60738 18.1633 5.5097 17.0657C3.69573 15.2517 2.52689 13.0789 2.13676 10.9982C1.74761 8.92277 2.12539 6.83816 3.56516 5.3984C5.8141 3.14945 9.54462 3.47638 12.6627 5.33191C13.9085 4.12599 15.3003 3.13368 16.9016 2.304ZM12.1526 8.68143C12.6353 8.96179 13.0382 9.3646 13.3185 9.84736C15.3939 8.28426 16.9038 6.50219 18.0681 4.2549C18.1043 4.18508 18.0998 4.07495 18.0124 3.98753C17.925 3.90012 17.8149 3.89564 17.745 3.93181C15.4978 5.09617 13.7157 6.60607 12.1526 8.68143ZM9.16788 12.8321C9.8225 12.8355 10.4404 12.8186 10.9686 12.6746C11.3245 12.5776 11.5436 12.4435 11.6752 12.2919C11.7944 12.1546 11.9165 11.9183 11.9165 11.4541C11.9165 10.6971 11.3029 10.0834 10.5459 10.0834C10.0817 10.0834 9.84532 10.2055 9.70806 10.3247C9.55646 10.4564 9.42231 10.6754 9.3253 11.0313C9.18135 11.5596 9.16442 12.1774 9.16788 12.8321Z"
                    fill="currentColor"
                    id="vector"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center gap-0 w-full">
              <h3 className="text-lg font-medium flex w-full justify-start items-baseline text-start">
                Generate image
              </h3>
              <p className="text-xs flex w-full justify-start items-baseline text-start line-clamp-1">
                Create high-quality images from your ideas
              </p>
            </div>
            <Button
              as={Link}
              color="default"
              href="/image"
              radius="full"
              size="sm"
              variant="solid"
            >
              open
            </Button>
          </CardBody>
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center gap-0 w-full">
              <h3 className="text-lg font-medium flex w-full justify-start items-baseline text-start">
                Generate video & Restyle
              </h3>
              <p className="text-xs flex w-full justify-start items-baseline text-start line-clamp-1">
                Generate videos and restyle them with ease
              </p>
            </div>
            <Button
              as={Link}
              color="default"
              href="/video"
              radius="full"
              size="sm"
              variant="solid"
            >
              open
            </Button>
          </CardBody>
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center gap-0 w-full">
              <h3 className="text-lg font-medium flex w-full justify-start items-baseline text-start">
                Generate 3D model
              </h3>
              <p className="text-xs flex w-full justify-start items-baseline text-start">
                Generate 3D models from your ideas
              </p>
            </div>
            <Button
              as={Link}
              color="default"
              href="/stage"
              radius="full"
              size="sm"
              variant="solid"
            >
              open
            </Button>
          </CardBody>
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center gap-0 w-full">
              <h3 className="text-lg font-medium flex w-full justify-start items-baseline text-start">
                Edit image
              </h3>
              <p className="text-xs flex w-full justify-start items-baseline text-start">
                Easily enhance, and transform your images
              </p>
            </div>
            <Button
              as={Link}
              color="default"
              href="/edit"
              radius="full"
              size="sm"
              variant="solid"
            >
              open
            </Button>
          </CardBody>
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10.5v3M19.5 10.5v3M7.5 9v6M16.5 9v6M10.5 4.5h3m-3 0v15m3-15v15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center gap-0 w-full">
              <h3 className="text-lg font-medium flex w-full justify-start items-baseline text-start">
                Traning AI model
              </h3>
              <p className="text-xs flex w-full justify-start items-baseline text-start">
                Train your own AI model with ease.
              </p>
            </div>
            <Button
              as={Link}
              color="default"
              href="/train"
              radius="full"
              size="sm"
              variant="solid"
            >
              open
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h3 className="flex justify-start w-full px-5">Inspiration</h3>
        <Card className="w-full max-w-full gap-0 shadow-none relative">
          <PinterestLayout
            src={[
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt7a7apdeh7tetcq6x8k3qwg%2F1746149891_img_0.webp?st=2025-05-02T06%3A03%3A18Z&se=2025-05-08T07%3A03%3A18Z&sks=b&skt=2025-05-02T06%3A03%3A18Z&ske=2025-05-08T07%3A03%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=SWsb7fgwAOnDd06r48%2FEFt%2F9qItkDKs5nQJsSGs%2FN0w%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt7y2vjffmkbt1qsswv1m55a%2F1746170720_img_1.webp?st=2025-05-02T06%3A57%3A35Z&se=2025-05-08T07%3A57%3A35Z&sks=b&skt=2025-05-02T06%3A57%3A35Z&ske=2025-05-08T07%3A57%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=FBicnWCqghk1%2FcZ%2BM5VetWwu%2BlMbO7ZDcHS%2B99QPcbM%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt754kgef8z93t17prfrmyt3%2F1746144512_img_1.webp?st=2025-05-02T06%3A01%3A47Z&se=2025-05-08T07%3A01%3A47Z&sks=b&skt=2025-05-02T06%3A01%3A47Z&ske=2025-05-08T07%3A01%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=UsOkJY9Ukc91iS%2Fh8gr4xi2pbgCKPrqQqf356wh2nvI%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt4c5cbbfcc8j4pja2mm23wd%2F1746051244_img_0.webp?st=2025-05-02T06%3A45%3A35Z&se=2025-05-08T07%3A45%3A35Z&sks=b&skt=2025-05-02T06%3A45%3A35Z&ske=2025-05-08T07%3A45%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=heDxIK6pipiI6Sg3oKR6hFokEL3YbW7FLR1D%2FYwxYE0%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt7b62hhevdv19ahfakx9j0h%2F1746150883_img_0.webp?st=2025-05-02T06%3A03%3A18Z&se=2025-05-08T07%3A03%3A18Z&sks=b&skt=2025-05-02T06%3A03%3A18Z&ske=2025-05-08T07%3A03%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=o1Ru9O2yUUrxfzW8T%2Bu42eH%2FVvSCrqxp6WeY9btwovk%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt7dzd1kesdts83s0hsax2d4%2F1746153822_img_0.webp?st=2025-05-02T06%3A01%3A12Z&se=2025-05-08T07%3A01%3A12Z&sks=b&skt=2025-05-02T06%3A01%3A12Z&ske=2025-05-08T07%3A01%3A12Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=PtIxnjK9gd2Qn1JHCFCXpHPvvf0%2BA6scPzNc1g317Mg%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jrrgtxrseqmsmwwpbv8v211f%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=VxrBk%2FxVKtGIoa4vni5hjbIXFXDo6Xa%2BMi7CCEvwlJA%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt6gtjhge63vje2eb3pc6nv1%2F1746123213_img_0.webp?st=2025-05-02T06%3A02%3A26Z&se=2025-05-08T07%3A02%3A26Z&sks=b&skt=2025-05-02T06%3A02%3A26Z&ske=2025-05-08T07%3A02%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=gEV8SCDnL%2FKioTqdFm1wJOOGClcXzy7lEUwL5xvtcnI%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt66wmpffcsbf0h5tqf4f5wv%2F1746112825_img_0.webp?st=2025-05-02T06%3A02%3A35Z&se=2025-05-08T07%3A02%3A35Z&sks=b&skt=2025-05-02T06%3A02%3A35Z&ske=2025-05-08T07%3A02%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=G4sWloJB8p0hAJqFR%2FBdyFIuRdPeupoa5KO9ANwp2JE%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jrnmc4c1fx39492tm8jfhd4b%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CAGfLvYoKrauSQELPvHftSsoZuJqNEyDCQi6QUxeNJQ%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jrsm16wrf3fs2aqe7pa8thqg%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=P%2BITNsiZLVcwE8oDxWXB7%2FrTtSnXAL2L5w%2FV4DDU6pI%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jshb2vycehk81n4awzbyez9k%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=8RZDOaSk7e2id3%2FOYBAGnTFpKYaFUlt10i8zHeeb%2F7w%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jqvsshr7em5s4nj2wpt1jrcg%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=h2UaZXs55n5aFdshiCViAU9xVTIZ2D8ZscSB9ge%2BMEo%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jqtbvwqcfdeb8tmc251dbsg7%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=t67twdLkq7lqC5jt6LK9urswqZJOBA5mxJccmYfwZx8%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jrcwh41nfgg8rd7zyb8d151n%2Fimg_0.webp?st=2025-05-02T07%3A51%3A52Z&se=2025-05-08T08%3A51%3A52Z&sks=b&skt=2025-05-02T07%3A51%3A52Z&ske=2025-05-08T08%3A51%3A52Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=l9zxILt6edjs7u%2FhB9qTjVClNVjswuAFAag3OzAeTa0%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01js1gxdyteqj909ane5866e6c%2Fimg_0.webp?st=2025-05-02T07%3A51%3A48Z&se=2025-05-08T08%3A51%3A48Z&sks=b&skt=2025-05-02T07%3A51%3A48Z&ske=2025-05-08T08%3A51%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=WfYPWJVo%2BjzFFaIq47vjiHh1Bgu8BiezzOCvnuF6ncA%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt0k43fxebdv5fjdy11f9gnh%2F1745924297_img_1.webp?st=2025-05-02T07%3A51%3A48Z&se=2025-05-08T08%3A51%3A48Z&sks=b&skt=2025-05-02T07%3A51%3A48Z&ske=2025-05-08T08%3A51%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=9wKE17in%2FHM89%2Bf8qu0g9ARfU9yiWx%2BwDTnk3kLgN%2Fw%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt5vepm7ebjrkwcnpk8xes27%2F1746100830_img_0.webp?st=2025-05-02T06%3A55%3A32Z&se=2025-05-08T07%3A55%3A32Z&sks=b&skt=2025-05-02T06%3A55%3A32Z&ske=2025-05-08T07%3A55%3A32Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=wNcJMX4oB2gd4%2BMLJihC5liFl%2BJ45lajU%2F3q0hvHRZs%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt5twbw2fcjbk3tbkxte9hk5%2F1746100241_img_0.webp?st=2025-05-02T06%3A57%3A26Z&se=2025-05-08T07%3A57%3A26Z&sks=b&skt=2025-05-02T06%3A57%3A26Z&ske=2025-05-08T07%3A57%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6BwtvVXsAA0qJxam9HtUnawF7wdVbmQGzZ3R%2F4B2zeE%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt6f7948e8trdscw6xmdxfpy%2F1746121592_img_0.webp?st=2025-05-02T06%3A55%3A43Z&se=2025-05-08T07%3A55%3A43Z&sks=b&skt=2025-05-02T06%3A55%3A43Z&ske=2025-05-08T07%3A55%3A43Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2FB%2F5hb2k5TaSXymn2NtXUOZq5RCmIkrUD8uU7yq5zFk%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt6mn41kfp890wkm34fyby78%2F1746127268_img_1.webp?st=2025-05-02T06%3A02%3A58Z&se=2025-05-08T07%3A02%3A58Z&sks=b&skt=2025-05-02T06%3A02%3A58Z&ske=2025-05-08T07%3A02%3A58Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=kebQ6xntyXor2Nl4lj28Ot4UbMOpiFgRSsJXkS252ZU%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt6ynrm6e3j9nz7swc0qsv79%2F1746137783_img_0.webp?st=2025-05-02T06%3A02%3A58Z&se=2025-05-08T07%3A02%3A58Z&sks=b&skt=2025-05-02T06%3A02%3A58Z&ske=2025-05-08T07%3A02%3A58Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=wHIx4Wb7wTMyo8KkKBVDPAZDalnjtzTwrTE0c3FMHsc%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt585arkfe1thb4h4b19s6rw%2F1746080617_img_0.webp?st=2025-05-02T07%3A51%3A12Z&se=2025-05-08T08%3A51%3A12Z&sks=b&skt=2025-05-02T07%3A51%3A12Z&ske=2025-05-08T08%3A51%3A12Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=pGTrv1nqYUjv5kp0snfowKpW6LlfU5QrCIIFvYNQSKo%3D&az=oaivgprodscus",
              "https://videos.openai.com/vg-assets/assets%2Ftask_01jt3js8hdenh91zw4q7hva67d%2F1746024655_img_1.webp?st=2025-05-02T07%3A51%3A12Z&se=2025-05-08T08%3A51%3A12Z&sks=b&skt=2025-05-02T07%3A51%3A12Z&ske=2025-05-08T08%3A51%3A12Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=zQAMpT%2BtSppadrZR0SI%2B84kBdwRB95ZNEEtDanspqEw%3D&az=oaivgprodscus",
            ]}
          />
          <div className="w-full absolute bottom-0 z-20 flex flex-col items-center justify-center">
            <h1>Make a Cat a motion smile</h1>
          </div>
          <div className="w-full h-screen bg-gradient-to-t to-white/0 from-white dark:to-black/0 dark:from-black absolute bottom-0 z-10" />
          <div className="w-full h-screen bg-gradient-to-t to-white/0 from-white dark:to-black/0 dark:from-black absolute bottom-0 z-10" />
        </Card>
      </div>
    </section>
  );
}
