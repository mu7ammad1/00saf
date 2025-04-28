"use client";
import { Image } from "@heroui/react";
import React, { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

export const DynamicImage: React.FC<ImageProps> = ({ src, alt = "" }) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;

    setDimensions({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px", // حد أقصى للعرض
        height: "auto",
        maxHeight: "400px", // حد أقصى للارتفاع
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.75rem",
        backgroundColor: "#6666ff",
      }}
    >
      <Image
        isBlurred
        alt={alt}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // أو "cover" حسب ذوقك
          backgroundColor: "#f0f0f0",
        }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};
