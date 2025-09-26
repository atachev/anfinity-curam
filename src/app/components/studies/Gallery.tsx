"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { buildImageUrl } from "@/lib/utils";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

type ImageType =
  | "FULL_WIDTH_CARD"
  | "FULL_WIDTH_BEFORE_AFTER"
  | "CARD"
  | "CARD_BEFORE_AFTER";

interface GalleryImage {
  id: number;
  documentId: string;
  type: ImageType;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url?: string;
  beforeImage?: { url: string; alt?: string };
  afterImage?: { url: string; alt?: string };
  alt?: string;
  caption?: string;
}

interface GalleryData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  assets: GalleryImage[];
}

interface GalleryProps {
  gallery: GalleryData;
}

const FullWidthCard = ({ assets }: { assets: any }) => {
  const image = assets?.images[0];
  return (
    <div className="w-full rounded-[35px] md:rounded-[40px] overflow-hidden">
      {image.url && (
        <div
          style={{
            background: "#E51D28",
            backgroundImage: `url(${buildImageUrl(image.url)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={`bg-white overflow-hidden min-h-[672px]`}
        >
          {/* {image.url && (
          <img
            src={buildImageUrl(image.url)}
            alt={image.alt || "Gallery image"}
            className="w-full h-auto object-cover"
          />
        )} */}
        </div>
      )}
    </div>
  );
};

const FullWidthBeforeAfter = ({ assets }: { assets: any }) => {
  const { images } = assets;
  const before =
    images && images.find((image: any) => image.name.includes("before"));
  const after =
    images && images.find((image: any) => image.name.includes("after"));
  const isMobile = useIsMobile();
  return (
    <div className="w-full">
      <ReactCompareSlider
        style={{
          overflow: "visible",
          height: isMobile ? "322px" : "672px",
        }}
        itemOne={
          <ReactCompareSliderImage
            src={buildImageUrl(before.url)}
            alt={before.alternativeText || "Gallery image"}
            style={{
              borderRadius: "40px",
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={buildImageUrl(after.url)}
            alt={after.alternativeText || "Gallery image"}
            style={{
              borderRadius: "40px",
            }}
          />
        }
        handle={
          <>
            <div className="absolute h-full w-[2px] bg-[#0033FF] top-0 left-1/2 -translate-x-1/2" />
            <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2">
              <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#0033FF] rounded-full">
                <svg
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 9.20117L29 9.20117" stroke="white" />
                  <path
                    d="M20.6 17.6008L29 9.20078L20.6 0.800781"
                    stroke="white"
                  />
                  <path
                    d="M9.4 0.801564L1 9.20156L9.4 17.6016"
                    stroke="white"
                  />
                </svg>
              </div>
            </div>
          </>
        }
        className="h-full"
      />
    </div>
  );
};

const Card = ({ assets }: { assets: any }) => {
  const image = assets?.images[0];
  return (
    <div className="w-full rounded-[35px] md:rounded-[40px] overflow-hidden">
      <div className="flex items-center justify-center md:flex-1 md:h-[672px]">
        {image && (
          <img
            src={buildImageUrl(image.url)}
            alt={image.alternativeText || "Gallery image"}
            className="max-w-full h-auto object-contain"
          />
        )}
      </div>
    </div>
  );
};

const CardBeforeAfter = ({ assets }: { assets: any }) => {
  const { images } = assets;
  const before =
    images && images.find((image: any) => image.name.includes("before"));
  const after =
    images && images.find((image: any) => image.name.includes("after"));
  const isMobile = useIsMobile();
  return (
    <div className="w-full rounded-[35px] md:rounded-[40px] overflow-hidden md:h-[672px]">
      <ReactCompareSlider
        style={{
          overflow: "visible",
          height: isMobile ? "322px" : "672px",
        }}
        itemOne={
          <ReactCompareSliderImage
            src={buildImageUrl(before.url)}
            alt={before.alternativeText || "Gallery image"}
            style={{
              borderRadius: "40px",
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={buildImageUrl(after.url)}
            alt={after.alternativeText || "Gallery image"}
            style={{
              borderRadius: "40px",
            }}
          />
        }
        handle={
          <>
            <div className="absolute h-full w-[2px] bg-[#0033FF] top-0 left-1/2 -translate-x-1/2" />
            <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2">
              <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#0033FF] rounded-full">
                <svg
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 9.20117L29 9.20117" stroke="white" />
                  <path
                    d="M20.6 17.6008L29 9.20078L20.6 0.800781"
                    stroke="white"
                  />
                  <path
                    d="M9.4 0.801564L1 9.20156L9.4 17.6016"
                    stroke="white"
                  />
                </svg>
              </div>
            </div>
          </>
        }
        className="h-full"
      />
    </div>
  );
};

const imageTypeComponents: Record<
  ImageType,
  React.ComponentType<{ assets: any }>
> = {
  CARD: Card,
  FULL_WIDTH_CARD: FullWidthCard,
  CARD_BEFORE_AFTER: CardBeforeAfter,
  FULL_WIDTH_BEFORE_AFTER: FullWidthBeforeAfter,
};

const getComponentWidth = (type: ImageType): string => {
  const fullWidthTypes = ["FULL_WIDTH_CARD", "FULL_WIDTH_BEFORE_AFTER"];
  return fullWidthTypes.includes(type)
    ? "w-full"
    : "w-full md:w-[calc(50%-14.5px)]";
};

const Gallery = ({ gallery }: GalleryProps) => {
  if (!gallery?.assets?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-[50px] md:gap-[29px]">
      {gallery.assets.map((asset, index) => {
        const ImageComponent = imageTypeComponents[asset.type];
        if (!ImageComponent) {
          console.warn(`Unknown image type: ${asset.type}`);
          return null;
        }

        return (
          <div
            key={asset.id || index}
            className={`${getComponentWidth(asset.type)} flex-shrink-0`}
          >
            <ImageComponent assets={asset} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
