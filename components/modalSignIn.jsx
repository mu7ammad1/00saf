/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect, React } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@heroui/react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

import { login, signup } from "./actions";

import { createClient } from "@/utils/supabase/client";
import AccountForm from "@/app/account/account-form";

// MailIcon and LockIcon remain unchanged
export const MailIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LockIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
        fill="currentColor"
      />
      <path
        d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function ModalSignIn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [user, setUser] = useState(null);
  const [selected, setSelected] = useState("login");

  // Fetch user data on the client side
  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    fetchUser();
  }, []);

  // Handle form submission and reload on success
  const handleFormAction = async (action, formData) => {
    const result = await action(formData);

    if (result?.success) {
      window.location.reload(); // Reload the page on success
    }

    return result; // Return result for further handling if needed
  };

  return (
    <>
      <Button color="default" variant="ghost" onPress={onOpen}>
        {user ? "account" : "Get Started"}
      </Button>
      <Modal
        hideCloseButton
        backdrop="blur"
        isOpen={isOpen}
        placement="bottom-center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {user ? (
                <AccountForm user={user} />
              ) : (
                <form>
                  <ModalBody className="p-0">
                    <div className="flex flex-col w-full p-0">
                      <Card className="max-w-full w-full h-full">
                        <CardBody className="overflow-hidden flex justify-center items-center gap-2 w-full">
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
                          <p className="font-semibold text-xl text-inherit">
                            Imagenfly
                          </p>
                        </CardBody>
                        <CardBody className="overflow-hidden">
                          <Tabs
                            fullWidth
                            aria-label="Tabs form"
                            className="wfull h-full"
                            defaultSelectedKey="login"
                            selectedKey={selected}
                            size="md"
                            onSelectionChange={setSelected}
                          >
                            <Tab key="login" title="Login">
                              <div className="flex flex-col gap-4 w-full">
                                <Input
                                  // isRequired
                                  endContent={
                                    <MailIcon className="text-2xl text-default-400 pointer-events-none" />
                                  }
                                  id="email"
                                  label="Email"
                                  name="email"
                                  placeholder="Enter your email"
                                  type="email"
                                />
                                <Input
                                  // isRequired
                                  endContent={
                                    <LockIcon className="text-2xl text-default-400 pointer-events-none" />
                                  }
                                  id="password"
                                  label="Password"
                                  name="password"
                                  placeholder="Enter your password"
                                  type="password"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                  <Link color="primary" href="#" size="md">
                                    Forgot password?
                                  </Link>
                                </div>

                                <p className="text-center text-small">
                                  Need to create an account?{" "}
                                  <Link
                                    size="sm"
                                    onPress={() => setSelected("sign-up")}
                                  >
                                    Sign up
                                  </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                  <Button
                                    fullWidth
                                    color="primary"
                                    formAction={(formData) =>
                                      handleFormAction(login, formData)
                                    }
                                    type="submit"
                                  >
                                    Login in
                                  </Button>
                                </div>
                              </div>
                            </Tab>
                            <Tab key="sign-up" title="Sign up">
                              <div className="flex flex-col gap-4 w-full">
                                <Input
                                  isRequired
                                  label="Name"
                                  placeholder="Enter your name"
                                  type="password"
                                />
                                <Input
                                  isRequired
                                  label="Email"
                                  placeholder="Enter your email"
                                  type="email"
                                />
                                <Input
                                  isRequired
                                  label="Password"
                                  placeholder="Enter your password"
                                  type="password"
                                />
                                <p className="text-center text-small">
                                  Already have an account?{" "}
                                  <Link
                                    size="sm"
                                    onPress={() => setSelected("login")}
                                  >
                                    Login
                                  </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                  <Button
                                    fullWidth
                                    color="primary"
                                    formAction={(formData) =>
                                      handleFormAction(signup, formData)
                                    }
                                    type="submit"
                                  >
                                    Sign in
                                  </Button>
                                </div>
                              </div>
                            </Tab>
                          </Tabs>
                        </CardBody>
                      </Card>
                    </div>
                  </ModalBody>
                </form>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
