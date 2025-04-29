import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";

import Index from "@/components/c";
import { PinterestLayout } from "@/components/Dynamic";

const BTNS = () => {
  return (
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
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full px-5">
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
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="size-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
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
                  d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          <CardBody className="flex flex-row items-center justify-between w-full p-2 gap-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10">
              <svg
                className="size-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
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
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h3 className="flex justify-start w-full px-5">Inspiration</h3>
        <Card className="w-full max-w-full gap-2 shadow-none relative">
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
            ]}
          />
          <div className="w-full h-screen bg-gradient-to-t to-white/0 from-white dark:to-black/0 dark:from-black absolute bottom-0 z-10" />
        </Card>
      </div>
    </section>
  );
}
