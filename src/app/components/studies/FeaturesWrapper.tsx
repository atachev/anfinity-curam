"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "../Heading";
import Text from "@/components/Text";
import { buildImageUrl } from "@/lib/utils";

const testimonials = [
  {
    title: "Icons and other cool elements that make you smile",
    description:
      "If you're having a digital product developed for the first time, proof of concept may seem like a redundant step you don't want to invest in. However, the more seasoned you are in product development, the more you understand the value of validating your idea before investing.",
  },
  {
    title: "1 Icons and other cool elements that make you smile",
    description:
      "If you're having a digital product developed for the first time, proof of concept may seem like a redundant step you don't want to invest in. However, the more seasoned you are in product development, the more you understand the value of validating your idea before investing.",
  },
  {
    title: "1 Icons and other cool elements that make you smile",
    description:
      "If you're having a digital product developed for the first time, proof of concept may seem like a redundant step you don't want to invest in. However, the more seasoned you are in product development, the more you understand the value of validating your idea before investing.",
  },
];

const FeaturesWrapper = ({
  features,
  primaryColor,
  secondaryColor,
}: {
  features: any[];
  primaryColor: string;
  secondaryColor: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("reInit", onSelect).on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("reInit", onSelect).on("select", onSelect);
    };
  }, [emblaApi]);

  const handleDotClick = (index: any) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };
  return (
    <div className="mt-[101px] md:mt-[164px]">
      <div className="relative w-full overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-[14px] md:gap-[29px]">
            {features.map((feature, index) => (
              <motion.div key={index} className=" max-w-[100%] md:max-w-[80%]">
                <div className="flex flex-col md:flex-row w-full md:h-[672px]">
                  <div className="rounded-[35px] md:rounded-[40px] w-[330px] md:w-[556px] overflow-hidden">
                    <img
                      src={buildImageUrl(feature?.image?.url)}
                      alt={feature.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between rounded-[40px] bg-[#F8F8F8] pt-[64px] pb-[66px] px-[64px] w-[330px] md:w-[556px]">
                    <Heading
                      style={{
                        color: primaryColor,
                      }}
                      as="h3"
                      className="Gilroy-Bold text-[22px] md:text-[50px] leading-[27px] md:leading-[50px] tracking-[-0.01em] text-[#4747B2]"
                    >
                      {feature.title}
                    </Heading>
                    <Text className="font-poppins font-light text-[#000] text-[16px] leading-[22px]">
                      {feature.description}
                    </Text>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-[65px] md:mt-[60px] flex flex-row justify-center md:justify-between items-center w-[100%] max-w-[933px] mx-auto">
          <div className="flex gap-2 justify-center md:justify-start">
            {features.map((_, i) => (
              <div
                key={i}
                className="cursor-pointer py-[12px] flex items-center"
                onClick={() => handleDotClick(i)}
              >
                <span
                  className={`h-[1px] rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-[60px]" : "w-[33px]"
                  }`}
                  style={{
                    backgroundColor:
                      i === activeIndex ? primaryColor : secondaryColor,
                  }}
                ></span>
              </div>
            ))}
          </div>
          <div className="hidden md:flex gap-[23px]">
            <button
              style={{
                cursor: "pointer",
                padding: "16px 0 ",
              }}
              className="text-xl"
              onClick={onPrevButtonClick}
            >
              <svg
                width="47"
                height="18"
                viewBox="0 0 47 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M47 9L1 9" stroke={primaryColor} />
                <path d="M9 1L1 9L9 17" stroke={primaryColor} />
              </svg>
            </button>
            <button
              style={{
                cursor: "pointer",
                padding: "16px 0",
              }}
              className="text-xl"
              onClick={onNextButtonClick}
            >
              <svg
                width="47"
                height="18"
                viewBox="0 0 47 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 9H46" stroke={primaryColor} />
                <path d="M38 17L46 9L38 1" stroke={primaryColor} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesWrapper;
