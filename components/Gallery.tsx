/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { HeartFilledIcon } from "./icons";

export default function Gallery() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex px-10 justify-center items-center flex-col gap-4">
      <Button
        color="primary"
        size="lg"
        startContent={<HeartFilledIcon />}
        type="button"
        variant="flat"
        onPress={onOpen}
      >
        Upload
      </Button>

      <Modal
        isOpen={isOpen}
        placement={"auto"}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="max-w-3xl max-h-96 h-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Gallery</ModalHeader>
              <ModalBody>
                <p>Images not uploaded yet</p>
              </ModalBody>
              <ModalFooter>
                <Button size="lg">Upload</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
