"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./EmblaCarousel";
import "./base.css";
import "./embla.css";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  duration: 50,
};
const SLIDES = [
  {
    id: 1,
    image:
      "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F555e96f9-d469-4d8f-b1e3-f62da7fbad45.png",
    title: "Generate Image ",
    description: "Create high-quality images from your ideas.",
    buttonText: "Try now",
    buttonLink: "/image",
    comingSoon: false,
  },
  {
    id: 2,
    image:
      "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2Fe984ee40-a0c1-4d68-9ace-4cafc162b105.png&s=1024",
    title: "Generate video & Restyle",
    description: "Generate videos and restyle them with ease",
    buttonText: "Try now",
    buttonLink: "/video",
    comingSoon: false,
  },
  {
    id: 3,
    image:
      "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F9e3d94e8-932c-4483-9ad2-41531d62163c.png&s=1024",
    title: "Generate 3D model",
    description: "Generate 3D models from your ideas",
    buttonText: "Try now",
    buttonLink: "/stage",
    comingSoon: false,
  },
  {
    id: 4,
    image:
      "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F2acfbf7e-fa03-47c8-bae0-8e4f0dadfe13.png&s=1024",
    title: "Edit image",
    description: "Easily enhance, and transform your images.",
    buttonText: "Try now",
    buttonLink: "/edit",
    comingSoon: false,
  },
  {
    id: 5,
    image:
      "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F3980f25a-3224-401b-a297-d3abdbbfefbf.png",
    title: "Traning AI model",
    description: "Train your own AI model with ease.",
    buttonText: "Try now",
    buttonLink: "/train",
    comingSoon: true,
  },
];

export default function Index() {
  return <EmblaCarousel options={OPTIONS} slides={SLIDES} />;
}
