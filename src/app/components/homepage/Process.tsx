"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ProcessIcon from "../icons/ProcessIcon";
import process from "@/assets/process.svg";
import SectionHeader from "./SectionHeader";
import Text from "@/components/Text";

const slides = [0, 1, 2];

const Process = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleDotClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };
  return (
    <div className="mx-auto max-w-[1440px] xl:max-w-full min-h-[730px] bg-black text-white md:pl-[110px] pt-[65px] md:pt-[118px] pb-[78px] md:pb-[158px] md:pr-[133px] rounded-[35px] md:rounded-[40px]">
      <div className="pl-[25px] md:pl-[0] pr-[25px] md:pr-[0] max-w-[1140px] 4xl:max-w-[1340px] mx-auto">
        <SectionHeader title="End-to-end delivery" titleColor="#E51D28" />
      </div>
      <div className="mt-6 max-w-[1140px] 4xl:max-w-[1340px] mx-auto flex justify-end">
        <div className="pl-[25px] md:pl-[0] pr-[25px] md:pr-[0]">
          <Text className=" max-w-[695px] font-light text-[22px] leading-[30px]">
            We deliver comprehensive IT solutions encompassing the entire
            software development lifecycle, from business analysis to technical
            support and maintenance.
          </Text>
        </div>
      </div>
      <div className="mt-[101px] flex justify-center">
        {isMobile ? (
          <div className="w-full overflow-hidden">
            <div
              ref={emblaRef}
              className="md:hidden overflow-hidden hide-scrollbar"
            >
              <div className="flex">
                {slides.map((index) => (
                  <div
                    key={index}
                    className={`${
                      index === 2
                        ? "flex-[0_0_72.5vw]"
                        : index === 1
                        ? "flex-[0_0_80vw]"
                        : "flex-[0_0_80vw]"
                    } overflow-hidden snap-start relative mr-[-1px]`}
                    style={{
                      marginLeft: index === 0 ? "4px" : undefined,
                      // marginRight: index === 2 ? "-25px" : undefined,
                    }}
                  >
                    <div className="w-[231vw] backface-hidden transform-style-preserve">
                      <Image
                        priority={true}
                        src={process}
                        alt={`Process part ${index + 1}`}
                        className="w-full h-auto pointer-events-none select-none"
                        style={{
                          transform: `translate3d(-${index * 80}vw, 0, 0)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mt-[25px] md:mt-[0]">
              <div className="flex justify-center gap-[13px]">
                {slides.map((_, i) => (
                  <DotButton
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`embla__dot" 
                ${
                  i === activeIndex
                    ? " bg-red-500 w-[60px]"
                    : "bg-gray-400 w-[33px]"
                }
              `}
                  />
                ))}
              </div>
            </div> */}
            <div className="mt-[76px] md:mt-6 flex gap-2 justify-center md:justify-start">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className="cursor-pointer py-[12px] flex items-center"
                  onClick={() => handleDotClick(i)}
                >
                  <span
                    className={`h-[1px] rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-red-500 w-[60px]"
                        : "bg-gray-400 w-[33px]"
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ProcessIcon />
        )}
      </div>
    </div>
  );
};

export default Process;
