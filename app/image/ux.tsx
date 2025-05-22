"use client";

import React, { useCallback, useState } from "react";
import axios from "axios";
import { type User } from "@supabase/supabase-js";
import { Textarea, Card, CardBody } from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { SendHorizontalIcon, Settings2Icon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

import { title } from "@/components/primitives";
import { DynamicImage } from "@/components/DynamicImage";

const Aple = ({ src }: { src: string[] }) => (
  <div className="w-auto h-auto flex flex-col items-center justify-center">
    <div className="grid grid-cols-4 items-center justify-center mx-auto max-w-6xl gap-4 *:*:*:object-fill max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4">
      {src?.map((item, index) => <DynamicImage key={index} src={item} />)}
    </div>
  </div>
);

const aspectRatios = [
  "16:9",
  "1:1",
  "21:9",
  "2:3",
  "3:2",
  "4:5",
  "5:4",
  "9:16",
  "9:21",
];

export default function GenerateImageUx({ user }: { user: User | null }) {
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [mediaType, setMediaType] = useState<
    "image" | "video" | "3d" | "upscale"
  >("image");
  const [aspectRatio, setAspectRatio] = useState("1:1");

  const ValueModel: Record<
    | "realistic"
    | "anime"
    | "flux-schnell"
    | "flux-dev"
    | "flux-dev-fast"
    | "sdxl-1.0"
    | "stable-diffusion-3.5-ultra"
    | "stable-diffusion-3.5-medium",
    number
  > = {
    realistic: 5,
    anime: 5,
    "flux-schnell": 5,
    "flux-dev": 10,
    "flux-dev-fast": 5,
    "sdxl-1.0": 1,
    "stable-diffusion-3.5-ultra": 8,
    "stable-diffusion-3.5-medium": 5,
  };

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set(["flux-dev"]),
  );

  const [imageCount, setImageCount] = useState(1);

  const selectedModel = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  const styleKey = selectedModel
    .toLowerCase()
    .replace(/\s/g, "") as keyof typeof ValueModel;

  const PostGeneration = useCallback(async () => {
    try {
      setLoading(true);

      const numImages = imageCount;
      const seeds = Array.from({ length: numImages }, () =>
        Math.floor(Math.random() * 10_000).toString(),
      );

      const deductionPerImage = ValueModel[styleKey] ?? 5;
      const modelMap: Record<string, string> = {
        "stable-diffusion 3.5 ultra": "ultra",
        "stable-diffusion 3.5 medium": "medium",
      };

      const generate = modelMap[selectedModel] || "generate-image";

      const totalDeduction = deductionPerImage * seeds.length;

      const request_image = seeds.map((seed) =>
        axios.post(
          `https://tjdtfpzcspfqgtoqpckp.supabase.co/functions/v1/${generate}`,
          {
            user_id: user?.id,
            prompt,
            style: selectedModel,
            aspect_ratio: aspectRatio,
            seed,
            amount: numImages,
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

      const responses = await Promise.all(request_image);

      const newImages = responses
        .map((res) => res.data?.publicUrl)
        .filter(Boolean);

      if (newImages.length > 0) {
        setGeneratedImages((prev) => [...newImages, ...prev]);
      }
    } catch (error: any) {
      alert("Error generating image!");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  }, [prompt, user, selectedKeys, imageCount, aspectRatio]);

  return (
    <main className="w-full">
      {/* {mediaType == "3d" ? "111111" : "0000"} */}
      {generatedImages.length == 0 && (
        <section className="max-w-md mx-auto flex items-center justify-center gap-4 py-8 md:py-10">
          <div className="w-16 h-16 bg-teal-500/80 rounded-xl text-white flex justify-center items-center">
            <svg
              className="size-11"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h1 className={title()}>Generate</h1>
        </section>
      )}
      {generatedImages.length > 0 && (
        <section className="mb-32 mt-10 w-full flex-row-reverse">
          <Aple src={generatedImages} />
        </section>
      )}
      <Card
        isBlurred
        className={`max-w-3xl w-full mx-auto ${generatedImages.length > 0 ? "fixed bottom-2 max-sm:bottom-0 left-0 right-0" : "my-14"} z-10 sha dow-none`}
      >
        <CardBody className="p-0 shadow-none backdrop-blur-lg bg-white/30">
          <Textarea
            className="max-w-full *:border-none *:outline-none *:ring-0 *:shadow-none *:overflow-hidden"
            isDisabled={loading}
            maxRows={6}
            minRows={2}
            placeholder={`${user !== null ? `Generate new image with imagenFly...` : "Login to generate image with imagenFly..."}`}
            size="lg"
            value={prompt}
            variant="bordered"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                PostGeneration();
              }
            }}
          />
          <div className="flex flex-row-reverse items-center justify-between max-w-full w-full mx-auto gap-3 p-2">
            <Button
              isIconOnly
              aria-label="Like"
              className="bg-black/80 text-white hover:bg-black/90 active:bg-black/90"
              color="default"
              isDisabled={user == null || prompt.length < 5}
              isLoading={loading}
              radius="full"
              size="md"
              variant="flat"
              onPress={PostGeneration}
            >
              <SendHorizontalIcon size={22} />
            </Button>
            <div className="flex flex-row-reverse items-center justify-between gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="capitalize"
                    isDisabled={loading}
                    variant="light"
                  >
                    {mediaType}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Single selection example"
                  className="w-72"
                  selectedKeys={mediaType}
                  selectionMode="single"
                  variant="flat"
                  onSelectionChange={(keys) =>
                    setMediaType(
                      keys as unknown as "image" | "video" | "3d" | "upscale",
                    )
                  }
                >
                  <DropdownItem
                    key="image"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Image
                  </DropdownItem>
                  <DropdownItem
                    key="video"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Video
                  </DropdownItem>
                  <DropdownItem
                    key="3d"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    3D
                  </DropdownItem>
                  <DropdownItem
                    key="upscale"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Upscale
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="capitalize"
                    isDisabled={loading}
                    variant="light"
                  >
                    {selectedModel.replace(/-/g, " ")}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Single selection example"
                  className="w-72"
                  selectedKeys={selectedKeys}
                  selectionMode="single"
                  variant="flat"
                  onSelectionChange={(keys) =>
                    setSelectedKeys(new Set(Array.from(keys).map(String)))
                  }
                >
                  <DropdownItem
                    key="flux-dev"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Flux dev
                  </DropdownItem>
                  <DropdownItem
                    key="stable-diffusion 3.5 ultra"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Stable Diffusion 3.5 Ultra
                  </DropdownItem>
                  <DropdownItem
                    key="stable-diffusion 3.5 medium"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Stable Diffusion 3.5 Medium
                  </DropdownItem>
                  <DropdownItem
                    key="realistic"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Realistic
                  </DropdownItem>
                  <DropdownItem
                    key="anime"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Anime
                  </DropdownItem>
                  <DropdownItem
                    key="flux-schnell"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    Flux schnell
                  </DropdownItem>
                  <DropdownItem
                    key="sdxl-1.0"
                    description={"sdgas"}
                    isReadOnly={loading}
                  >
                    SDXL
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Popover offset={10} placement="top">
                <PopoverTrigger>
                  <Button isDisabled={loading} variant="light">
                    <Settings2Icon
                      absoluteStrokeWidth
                      className="stroke-[2px]"
                      size={18}
                    />
                    Tools
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2 w-72">
                    <div className="text-small font-bold">
                      <div className="flex flex-wrap gap-2 items-center">
                        {aspectRatios.map((ratio) => (
                          <Button
                            key={ratio}
                            isDisabled={loading}
                            variant={aspectRatio === ratio ? "flat" : "light"}
                            onClick={() => setAspectRatio(ratio)}
                          >
                            {ratio}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border rounded-full px-2 py-1 bg-white shadow-sm">
                      <Button
                        isIconOnly
                        className="text-red-500 hover:text-red-600 text-xl px-2"
                        disabled={loading || imageCount <= 1}
                        onClick={() =>
                          setImageCount((prev) => Math.max(1, prev - 1))
                        }
                      >
                        -
                      </Button>
                      <span className="font-semibold min-w-[20px] text-center">
                        {imageCount}
                      </span>
                      <Button
                        isIconOnly
                        className="text-green-500 hover:text-green-600 text-xl px-2"
                        disabled={loading}
                        onClick={() => setImageCount((prev) => prev + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
