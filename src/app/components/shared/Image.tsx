import { memo } from "react";
import NextImage from "next/image";

type ImageProps = {
  src?: any;
  /** @default "" */
  alt?: string;
};

function Image({ src, alt = "" }: ImageProps) {
  return (
    <NextImage
      src={src}
      style={{
        display: "block",
        userSelect: "none",
        width: "100%",
        height: "auto",
      }}
      alt={alt}
      loading="eager"
      unoptimized
    />
  );
}

export default memo(Image);
