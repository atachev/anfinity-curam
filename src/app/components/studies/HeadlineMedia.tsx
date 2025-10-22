"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/utils";

// Helper function to check if a file is a video based on its extension
const isVideoFile = (url: string): boolean => {
  const videoExtensions = [
    ".mp4",
    ".webm",
    ".ogg",
    ".avi",
    ".mov",
    ".wmv",
    ".flv",
    ".mkv",
  ];
  const urlLower = url.toLowerCase();
  return videoExtensions.some((ext) => urlLower.includes(ext));
};

// Custom hook for video intersection observer
const useVideoIntersection = () => {
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const setVideoRef = useCallback(
    (index: number, element: HTMLVideoElement | null) => {
      if (element) {
        videoRefs.current.set(index, element);
      } else {
        videoRefs.current.delete(index);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Video starts playing when 50% visible
      }
    );

    // Observe all video elements
    videoRefs.current.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { setVideoRef };
};

interface HeadlineMediaProps {
  headlineImages: any[];
  primaryColor?: string;
}

export default function HeadlineMedia({
  headlineImages,
  primaryColor,
}: HeadlineMediaProps) {
  const { setVideoRef } = useVideoIntersection();

  return (
    <div
      className="mt-[125px] w-full rounded-[35px] md:rounded-[40px] overflow-hidden"
      style={{
        backgroundColor:
          headlineImages?.length > 1 ? primaryColor : "transparent",
      }}
    >
      {headlineImages?.length > 1 ? (
        <div
          className={`grid grid-cols-3 gap-[83px] max-w-[1140px] mx-auto justify-items-center`}
        >
          {headlineImages &&
            headlineImages.map((media: any, index: number) => (
              <div
                key={index}
                className={`col-span-${headlineImages.length} md:col-span-1`}
              >
                {isVideoFile(media.url) ? (
                  <video
                    ref={(el) => setVideoRef(index, el)}
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-[20px] md:rounded-[25px]"
                    style={{
                      maxWidth: "400px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  >
                    <source src={buildImageUrl(media.url)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    quality={100}
                    unoptimized={true}
                    src={buildImageUrl(media.url)}
                    alt={media.alternativeText || "Case study image"}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-[20px] md:rounded-[25px]"
                    style={{
                      maxWidth: "400px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            ))}
        </div>
      ) : (
        <div className="flex gap-[83px] w-full">
          {headlineImages &&
            headlineImages.map((media: any, index: number) => (
              <div
                className="flex flex-1 justify-center items-center rounded-[35px] md:rounded-[40px]"
                key={index}
              >
                {isVideoFile(media.url) ? (
                  <video
                    ref={(el) => setVideoRef(index, el)}
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-[35px] md:rounded-[40px]"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src={buildImageUrl(media.url)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    quality={100}
                    unoptimized={true}
                    style={{
                      width: "100%",
                    }}
                    src={buildImageUrl(media.url)}
                    alt={media?.alternativeText || "Case study image"}
                    width={1360}
                    height={842}
                    className="rounded-[35px] md:rounded-[40px]"
                  />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

