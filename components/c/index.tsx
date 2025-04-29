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
  { id: 1, image: "https://heroui.com/images/hero-card-complete.jpeg" },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/30988803/pexels-photo-30988803/free-photo-of-cozy-blue-sweater-with-yellow-tulips-bouquet.jpeg",
  },
];

export default function Index() {
  return <EmblaCarousel options={OPTIONS} slides={SLIDES} />;
}
