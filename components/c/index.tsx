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
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Index() {
  return <EmblaCarousel options={OPTIONS} slides={SLIDES} />;
}
