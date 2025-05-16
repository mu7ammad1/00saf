"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Link,
} from "@heroui/react";

import { HeartFilledIcon } from "./icons";

import { createClient } from "@/utils/supabase/client";
import { Loader2Icon } from "lucide-react";

const targetUserId = "fa1f2343-b3bc-435a-9afe-d9cda2532ccd";

export default function Gallery() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const supabase = createClient();
  const [credit, setCredit] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // تحميل بيانات المستخدم المحدد
  useEffect(() => {
    // if (!targetUserId) return;

    const fetchPhotos = async () => {
      setLoading(true); // بدء التحميل

      let { data: photos, error } = await supabase
        .from("photos")
        .select("*")
        .eq("id_user", targetUserId);

      if (error) {
        console.error("Fetch error:", error);
      }

      setCredit(photos);
      setLoading(false); // انتهاء التحميل
    };

    fetchPhotos();
  }, []);

  // الاشتراك في تحديثات المستخدم
  useEffect(() => {
    if (!targetUserId) return;

    const channel = supabase
      .channel("realtime-credits")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "photos",
          filter: `id_user=eq.${targetUserId}`,
        },
        (payload) => {
          if (
            payload.eventType === "UPDATE" ||
            payload.eventType === "INSERT"
          ) {
            setCredit(payload.new);
          } else if (payload.eventType === "DELETE") {
            setCredit(null);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [targetUserId]);

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
        <ModalContent className="max-w-5xl max-h-[90vh] h-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Gallery</ModalHeader>
              <ModalBody className="flex flex-col gap-4 overflow-auto">
                {loading ? (
                  <Loader2Icon className="h-5 w-5 animate-spin text-gray-500" />
                ) : credit && credit.length > 0 ? (
                  <div className="grid grid-cols-4 h-44 w-full gap-2">
                    {credit.map((item: any) => (
                      <Image
                        key={item.id}
                        alt={item.prompt}
                        className="w-52 object-cover gap-0 rounded-lg"
                        src={`https://tjdtfpzcspfqgtoqpckp.supabase.co/storage/v1/object/public/imagenfly//${item.url}`}
                      />
                    ))}
                  </div>
                ) : null}

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
