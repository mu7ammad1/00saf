import React from "react";
import { Image } from "@heroui/image";

type ImageProps = {
  src: string;
  alt?: string;
};
const Dynamic: React.FC<ImageProps> = ({ src, alt = "" }) => (
  <div className="break-inside-avoid mb-4 rounded-2xl overflow-hidden bg-gray-100 shadow-md transition-transform duration-300 hover:scale-105">
    <Image
      isBlurred
      itemScope
      isZoomed
      alt={alt}
      loading="lazy"
      className="w-full h-auto object-cover"
      src={src}
    />
  </div>
);

export const PinterestLayout: React.FC<{ src: string[] }> = ({ src }) => (
  <div
    className="mx-auto w-full max-w-[1400px] px-4"
    style={{ columnGap: "1rem" }}
  >
    <div className="columns-5 max-sm:columns-2 max-md:columns-3 max-lg:columns-4 max-xl:columns-5">
      {src.map((item, index) => (
        <Dynamic key={index} alt={`Image ${index + 1}`} src={item} />
      ))}
    </div>
  </div>
);
