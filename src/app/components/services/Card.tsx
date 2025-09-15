"use client";

import { useState } from "react";
import Image from "next/image";
import Arrow from "@/components/icons/Arrow";
import { useIsMobile } from "@/hooks/useIsMobile";
import { buildImageUrl } from "@/lib/utils";

interface DotPosition {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

interface CardProps {
  className?: string;
  title: string;
  description: string;
  dotPosition: DotPosition;
  mobileDotPosition: DotPosition;
  icon: any;
}

const Card = ({
  className,
  title,
  description,
  dotPosition,
  mobileDotPosition,
  icon,
}: CardProps) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        transition: isHovered
          ? "background 0.5s ease-in-out"
          : "background 0.3s ease-out",
      }}
      className={`${className ? className : ""} relative h-auto md:h-[600px] max-w-[556px] cursor-pointer overflow-hidden rounded-[40px] bg-[#F5F5F5] group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding Dot */}
      <div
        className="absolute h-[269px] w-[268px] rounded-full bg-[#E51D28]"
        style={{
          filter: isHovered ? "blur(0px)" : "blur(75px)", // Reduce blur smoothly
          transformOrigin: "center",
          transform: isHovered ? "scale(10)" : "scale(1)", // Expands to full size
          transition: isHovered
            ? "transform 0.5s ease-in-out, filter 5s ease-in-out" // Smooth entry
            : "transform 0.3s ease-out, filter 0.5s ease-out", // Fast exit
          ...(isMobile ? mobileDotPosition : dotPosition),
        }}
      />

      {/* Full Red Background Overlay */}
      <div
        className="absolute inset-0 bg-[#E51D28]"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: isHovered
            ? "opacity 0.5s ease-in-out"
            : "opacity 0.3s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-[27px_30px_42px_32px] md:p-[50px_72px_66px_66px]">
        <div className="h-[233px] w-[233px]">
          {icon && (
            <Image
              src={buildImageUrl(icon?.url)}
              alt={title}
              width={233}
              height={233}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          )}
        </div>

        <h2
          className="mt-[22px] max-w-[340px] min-h-[86px] font-[700] text-[30px]/[35px] tracking-[-1px] transition-colors duration-500 ease-in-out"
          style={{ color: isHovered ? "#FFF" : "#000" }}
        >
          {title}
        </h2>

        <p
          className="mt-[10px] text-[16px] transition-colors duration-500 ease-in-out"
          style={{ color: isHovered ? "#FFF" : "#000" }}
        >
          {description}
        </p>

        <div className="mt-[48px]">
          <Arrow color={isHovered ? "#fff" : "#E51D28"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
