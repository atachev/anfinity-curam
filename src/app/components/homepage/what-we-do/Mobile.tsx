import Card from "../../services/Card";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "@/components/embla-carousel/Indicator";
import Link from "next/link";

const WhatWeDoMobile = ({ services }: { services: any }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-[14px]">
            {services.map((service: any, index: number) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <Card
                  className="embla__slide"
                  key={index}
                  title={service.name}
                  description={service.cardDescription}
                  dotPosition={service.dotPosition}
                  mobileDotPosition={service.mobileDotPosition}
                  icon={service.icon}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__controls mt-[25px] md:mt-[0]">
        <div className="embla__dots flex justify-center gap-[13px]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot" 
                ${
                  index === selectedIndex
                    ? " bg-red-500 w-[60px]"
                    : "bg-gray-400 w-[33px]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDoMobile;
