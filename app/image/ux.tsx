"use client";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { type User } from "@supabase/supabase-js";
import { Textarea, Card, CardBody, Image } from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Settings2Icon } from "lucide-react";

import { title } from "@/components/primitives";
import { DynamicImage } from "@/components/DynamicImage";

const HeartIcon = ({
  fill = "currentColor",
  filled = false,
  size = 24,
  ...props
}) => (
  <svg
    fill={filled ? fill : "none"}
    height={size}
    viewBox="0 0 24 24"
    width={size}
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

const Aple = ({ src }: { src: string[] }) => (
  <div className="w-auto h-auto flex flex-col items-center justify-center">
    <div className="grid grid-cols-4 items-center justify-center mx-auto max-w-6xl gap-4 *:*:*:object-fill max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4">
      {src?.map((item, index) => <DynamicImage key={index} src={item} />)}
    </div>
  </div>
);

export default function GenerateImageUx({ user }: { user: User | null }) {
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");

  const Value_stye: Record<
    | "realistic"
    | "anime"
    | "flux-schnell"
    | "flux-dev"
    | "flux-dev-fast"
    | "sdxl-1.0",
    number
  > = {
    realistic: 5,
    anime: 5,
    "flux-schnell": 5,
    "flux-dev": 10,
    "flux-dev-fast": 5,
    "sdxl-1.0": 1,
  };
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set(["realistic"]),
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  const seeds = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 10000000000).toString(),
  );
  const styleKey = selectedValue.toLowerCase() as keyof typeof Value_stye; // حوّل القيمة للكيس الصحيح
  const deductionPerImage = Value_stye[styleKey] ?? 5; // لو مش موجود نحط 5 افتراضياً
  const totalDeduction = deductionPerImage * seeds.length;
  const PostGeneration = useCallback(async () => {
    try {
      setLoading(true);

      const requests = seeds.map((seed) =>
        axios.post(
          "https://tjdtfpzcspfqgtoqpckp.supabase.co/functions/v1/generate-image",
          {
            user_id: user?.id,
            prompt,
            style: selectedValue,
            aspect_ratio: "9:16",
            seed,
            amount: totalDeduction / deductionPerImage,
            deduction_amount: totalDeduction,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZHRmcHpjc3BmcWd0b3FwY2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0Njk5MzgsImV4cCI6MjA1NjA0NTkzOH0.H_Juj-_ZzN9wioDypNYj4-kvEXJhFP7zvz_6f2yjS0I",
              "Content-Type": "application/json",
            },
          },
        ),
      );

      const responses = await Promise.all(requests);

      const newImages = responses
        .map((res) => res.data?.publicUrl)
        .filter(Boolean);

      if (newImages.length > 0) {
        setGeneratedImages((prev) => [...prev, ...newImages]);
      }
    } catch (error: any) {
      console.error(
        "Error generating image:",
        error.response?.data || error.message,
      );
      alert("Error generating image!");
    } finally {
      setLoading(false);
    }
  }, [prompt, user, selectedKeys]);

  return (
    <main className="w-full">
      {/* {totalDeduction} */}

      <Dropdown>
        <DropdownTrigger>
          <Button
            isIconOnly
            className="capitalize"
            isDisabled={loading}
            variant="flat"
          >
            <Settings2Icon size={16} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Single selection example"
          className="w-auto"
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="flat"
          onSelectionChange={(keys) =>
            setSelectedKeys(new Set(Array.from(keys).map(String)))
          }
        >
          <DropdownItem
            key="Imagenfly"
            description="Generate images full of life"
            isReadOnly={loading}
          >
            imagenFly
          </DropdownItem>
          <DropdownItem
            key="realistic"
            description="Create a new file"
            isReadOnly={loading}
          >
            Realistic
          </DropdownItem>
          <DropdownItem
            key="anime"
            description="Create a new file"
            isReadOnly={loading}
          >
            Anime
          </DropdownItem>

          <DropdownItem
            key="flux-schnell"
            description="Create a new file"
            isReadOnly={loading}
          >
            Flux schnell
          </DropdownItem>
          <DropdownItem
            key="flux-dev"
            description="Create a new file"
            isReadOnly={loading}
          >
            Flux dev
          </DropdownItem>
          <DropdownItem
            key="flux-dev-fast"
            description="Create a new file"
            isReadOnly={loading}
          >
            Flux Dev Fast
          </DropdownItem>
          <DropdownItem
            key="sdxl-1.0"
            description="Create a new file"
            isReadOnly={loading}
          >
            SDXL
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button className="capitalize" isDisabled={loading} variant="flat">
            selectedKeys
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Single selection example"
          className="w-auto"
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="flat"
          onSelectionChange={(keys) =>
            setSelectedKeys(new Set(Array.from(keys).map(String)))
          }
        >
          <DropdownItem
            key="Imagenfly"
            description="Generate images full of life"
            isReadOnly={loading}
          >
            imagenFly
          </DropdownItem>
          <DropdownItem
            key="realistic"
            description="Create a new file"
            isReadOnly={loading}
          >
            Realistic
          </DropdownItem>
          <DropdownItem
            key="anime"
            description="Create a new file"
            isReadOnly={loading}
          >
            Anime
          </DropdownItem>

          <DropdownItem
            key="flux-schnell"
            description="Create a new file"
            isReadOnly={loading}
          >
            Flux schnell
          </DropdownItem>
          <DropdownItem
            key="flux-dev"
            description="Create a new file"
            isReadOnly={loading}
          >
            Flux dev
          </DropdownItem>
          <DropdownItem
            key="flux-dev-fast"
            description="Create a new file"
            isReadOnly={loading}
          >
            Flux Dev Fast
          </DropdownItem>
          <DropdownItem
            key="sdxl-1.0"
            description="Create a new file"
            isReadOnly={loading}
          >
            SDXL
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {generatedImages.length == 0 && (
        <section className="max-w-md mx-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="flex justify-center *:rounded-md mb-10 *:*:size-40 *:*:max-sm:h-32 *:*:object-cover *:*:border-4">
            {[
              "-rotate-12 translate-x-10 z-0",
              "z-10",
              "rotate-12 -translate-x-10 z-0",
            ].map((cls, idx) => (
              <Image
                key={idx}
                isBlurred
                alt={"placeholder"}
                className={cls}
                src={`https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F${["555e96f9-d469-4d8f-b1e3-f62da7fbad45", "3980f25a-3224-401b-a297-d3abdbbfefbf", "9e3d94e8-932c-4483-9ad2-41531d62163c"][idx]}.png`}
              />
            ))}
          </div>
          <h1 className={title()}>Generate Image</h1>
        </section>
      )}
      {generatedImages.length > 0 && (
        <section className="mb-32 mt-10 w-full">
          <Aple src={generatedImages} />
        </section>
      )}

      <Card className="max-w-2xl w-full mx-auto fixed bottom-3 max-sm:bottom-0 left-0 right-0 z-10">
        <CardBody className="p-0 shadow-none">
          <Textarea
            className="max-w-full *:border-none *:outline-none *:ring-0 *:shadow-none"
            endContent={
              <Button
                isIconOnly
                aria-label="Like"
                color="default"
                isLoading={loading}
                radius="full"
                size="md"
                variant="flat"
                onClick={PostGeneration}
              >
                <HeartIcon />
              </Button>
            }
            isDisabled={loading}
            placeholder="Generate new image with imagenFly..."
            size="lg"
            value={prompt}
            variant="bordered"
            onChange={(e) => setPrompt(e.target.value)}
          />
        </CardBody>
      </Card>
    </main>
  );
}
