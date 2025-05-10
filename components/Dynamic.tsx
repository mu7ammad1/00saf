import React from "react";
import { Image } from "@heroui/image";

type ImageProps = {
  src: string;
  alt?: string;
};
const Dynamic: React.FC<ImageProps> = ({ src, alt = "" }) => (
  <div className="break-inside-avoid mb-3 rounded-xl overflow-hidden ">
    <Image
      isBlurred
      alt={alt}
      className="w-full h-auto object-cover"
      src={src}
    />
  </div>
);

export const PinterestLayout: React.FC<{ src: string[] }> = ({ src }) => (
  <div
    className="mx-auto w-full max-w-[1400px] px-4"
    style={{ columnGap: "0rem" }}
  >
    <div className="columns-2 lg:columns-3 xl:columns-4 2xl:columns-6 gap-3 mx-auto">
      {src.map((item, index) => (
        <Dynamic key={index} alt={`Image ${index + 1}`} src={item} />
      ))}
    </div>
  </div>
);
