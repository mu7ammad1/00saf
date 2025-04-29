"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  Link,
  Tooltip,
  Avatar,
  AvatarGroup,
} from "@heroui/react";

export default function DrawerComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        color="default"
        endContent={
          <svg
            fill="none"
            height="19"
            viewBox="0 0 22 19"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4C1 2.34315 2.34232 1 3.99918 1C8.10592 1 12.7803 1 17.9995 1C19.6564 1 21 2.34315 21 4V15C21 16.6569 19.6569 18 18 18H4C2.34315 18 1 16.6569 1 15V4Z"
              fill="#F4F4F500"
            />
            <path
              d="M6.5 1V18M4 18H18C19.6569 18 21 16.6569 21 15V4C21 2.34315 19.6564 1 17.9995 1C12.7803 1 8.10592 1 3.99918 1C2.34232 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z"
              stroke="currentColor"
              opacity={0.9}
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </svg>
        }
        variant="light"
        onPress={onOpen}
      />
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
        }}
        isOpen={isOpen}
        placement="left"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row-reverse gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="text-default-400 rotate-180"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                    </svg>
                  </Button>
                </Tooltip>
                <Tooltip content="imagenfly">
                  <Button
                    className="text-default-foreground font-medium text-lg"
                    size="md"
                    variant="light"
                    onPress={onClose}
                  >
                    imagenfly
                  </Button>
                </Tooltip>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <div className="flex w-full justify-center items-center pt-4">
                  <Image
                    isBlurred
                    isZoomed
                    alt="Event image"
                    className="aspect-square w-full hover:scale-110"
                    height={300}
                    src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/san-francisco.png"
                  />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <h1 className="text-2xl font-bold leading-7">
                    SF Bay Area Meetup in November
                  </h1>
                  <p className="text-sm text-default-500">
                    555 California St, San Francisco, CA 94103
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                        <div className="text-tiny bg-default-100 py-0.5 text-default-500">
                          Nov
                        </div>
                        <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                          19
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-medium text-foreground font-medium">
                          Tuesday, November 19
                        </p>
                        <p className="text-small text-default-500">
                          5:00 PM - 9:00 PM PST
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                        <svg
                          className="text-default-500"
                          height="20"
                          viewBox="0 0 16 16"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={
                            <svg
                              className="group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                          }
                          className="group gap-x-0.5 text-medium text-foreground font-medium"
                          href="https://www.google.com/maps/place/555+California+St,+San+Francisco,+CA+94103"
                          rel="noreferrer noopener"
                        >
                          555 California St suite 500
                        </Link>
                        <p className="text-small text-default-500">
                          San Francisco, California
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-medium font-medium">
                        About the event
                      </span>
                      <div className="text-medium text-default-500 flex flex-col gap-2">
                        <p>
                          Hey Bay Area! We are excited to announce our next
                          meetup on Tuesday, November 19th.
                        </p>
                        <p>
                          Join us for an evening of insightful discussions and
                          hands-on workshops focused on the latest developments
                          in web development and design. Our featured speakers
                          will share their experiences with modern frontend
                          frameworks, responsive design patterns, and emerging
                          web technologies. You&apos;ll have the opportunity to
                          network with fellow developers and designers while
                          enjoying refreshments and snacks.
                        </p>
                        <p>
                          During the main session, we&apos;ll dive deep into
                          practical examples of building scalable applications,
                          exploring best practices for component architecture,
                          and understanding advanced state management
                          techniques. Our interactive workshop portion will let
                          you apply these concepts directly, with experienced
                          mentors available to provide guidance and answer your
                          questions. Whether you&apos;re a seasoned developer or
                          just starting your journey, you&apos;ll find valuable
                          takeaways from this session.
                        </p>

                        <p className="mt-4">
                          Brought to you by the{" "}
                          <Link
                            className="text-default-700"
                            href="https://heroui.com"
                          >
                            HeroUI team
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-small text-default-500">
                        Hosted By
                      </span>
                      <div className="flex gap-2 items-center">
                        <Avatar
                          name="HeroUI"
                          size="sm"
                          src="https://heroui.com/android-chrome-192x192.png"
                        />
                        <span className="text-small text-default-500">
                          HeroUI Team
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-small text-default-500">
                        105 Going
                      </span>
                      <div className="flex gap-2 items-center">
                        <AvatarGroup
                          isBordered
                          classNames={{
                            base: "pl-2",
                            count: "text-default-500 text-tiny bg-default-100",
                          }}
                          size="sm"
                          total={101}
                        >
                          <Tooltip content="Alex">
                            <Avatar
                              className="data-[hover=true]:!translate-x-0"
                              name="Alex"
                              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                            />
                          </Tooltip>
                          <Tooltip content="Joe">
                            <Avatar
                              className="data-[hover=true]:!translate-x-0"
                              name="Joe"
                              src="https://i.pravatar.cc/150?u=a04258114e290267084"
                            />
                          </Tooltip>
                          <Tooltip content="John">
                            <Avatar
                              className="data-[hover=true]:!translate-x-0"
                              name="John"
                              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            />
                          </Tooltip>
                          <Tooltip content="Jane">
                            <Avatar
                              className="data-[hover=true]:!translate-x-0"
                              name="Jane"
                              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                            />
                          </Tooltip>
                        </AvatarGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-col gap-1">
                <Link
                  className="text-default-400"
                  href="mailto:hello@heroui.com"
                  size="sm"
                >
                  Contact the host
                </Link>
                <Link
                  className="text-default-400"
                  href="mailto:hello@heroui.com"
                  size="sm"
                >
                  Report event
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
