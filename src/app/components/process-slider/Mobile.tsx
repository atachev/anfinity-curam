"use client";

import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "../Heading";
import Text from "../Text";
import { motion } from "motion/react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const CARD_WIDTH = 281;
const CARD_GAP = 20; // match the gap in .flex
const MobileSlider = ({ steps, primaryColor, secondaryColor }: { steps: ProcessStep[], primaryColor: string, secondaryColor: string }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const handleDotClick = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveStep(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const trackOffset =
    window.innerWidth / 2 -
    CARD_WIDTH / 2 -
    activeStep * (CARD_WIDTH + CARD_GAP);

  return (
    <div className="overflow-hidden">
      {/* Top dot line */}
      <div className="relative mt-8 mb-[60px] h-[40px]">
        {/* Line behind the dots */}
        <div
          className="absolute top-[6px] h-[1px] bg-[#FF7F11] transition-transform duration-500"
          style={{
            width: (steps.length - 1) * (CARD_WIDTH + CARD_GAP),
            transform: `translateX(${
              activeStep === 0
                ? 24 + CARD_WIDTH / 2
                : activeStep === steps.length - 1
                ? trackOffset + 31 + CARD_WIDTH / 2
                : trackOffset + CARD_WIDTH / 2
            }px)`,
          }}
        />
        {/* Dots row */}
        <div
          className="flex gap-[20px] transition-transform duration-500 relative z-10"
          style={{
            transform: `translateX(${
              activeStep === 0
                ? 24
                : activeStep === steps.length - 1
                ? trackOffset + 31
                : trackOffset
            }px)`,
          }}
        >
          {steps.map((_, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center max-w-[281px] w-[281px]"
              style={{ flex: "0 0 80%" }}
              onClick={() => handleDotClick(index)}
            >
              <div
                className={`w-[12px] h-[12px] rounded-full bg-[#FF7F11] z-10`}
              />
              {index === activeStep && (
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full border border-dashed border-white bg-white/10 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-[20px] mx-[24px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_80%] max-w-[281px]"
              onClick={() => handleDotClick(index)}
            >
              <div
                className={`w-[281px] pt-[25px] pr-[40px] pb-[32px] pl-[28px] rounded-[30px] transition-all ${
                  index === activeStep
                    ? "bg-[#fff] border border-dashed border-[#fff]"
                    : "border border-dashed border-[#333333]"
                }`}
              >
                <div className="flex flex-col h-full">
                  <span
                    className={`Gilroy-Regular text-[50px] font-[400] leading-[50px] tracking-[-0.01em] text-[#FF7F11]`}
                  >
                    {step.id}
                  </span>
                  <Heading
                    as="h3"
                    className={`Gilroy-Bold font-[700] text-[25px] leading-[28px] tracking-[-0.01em] mt-[40px] ${
                      index === activeStep ? "text-[#000]" : "text-white"
                    }`}
                  >
                    {step.title}
                  </Heading>
                  {index === activeStep && step.description && (
                    <Text
                      className={`text-[16px] leading-[22px] font-light mt-[18px] ${
                        index === activeStep ? "text-[#000]" : "text-white"
                      }`}
                    >
                      {step.description}
                    </Text>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-[65px] md:mt-[60px] flex flex-row justify-center md:justify-between items-center w-[100%] max-w-[1140px] mx-auto">
        <div className="flex gap-2 justify-center md:justify-start">
          {steps.map((_, i) => (
            <div
              key={i}
              className="cursor-pointer py-[12px] flex items-center"
              onClick={() => handleDotClick(i)}
            >
              <span
                className={`h-[1px] rounded-full transition-all duration-300 ${
                  i === activeStep
                    ? "bg-[#FF7F11] w-[60px]"
                    : "bg-gray-400 w-[33px]"
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSlider;
