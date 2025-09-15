import { useState, useEffect, useRef } from "react";
import Heading from "../Heading";
import Text from "../Text";

const CARD_WIDTH = 281;
const CARD_GAP = 50;
const SIDE_PADDING_SMALL = 110;
const SIDE_PADDING_LARGE = 250;
const BREAKPOINT = 1920;

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const DesktopSlider = ({
  steps,
  primaryColor,
  secondaryColor,
}: {
  steps: ProcessStep[];
  primaryColor: string;
  secondaryColor: string;
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const [sidePadding, setSidePadding] = useState(
    window?.innerWidth >= BREAKPOINT ? SIDE_PADDING_LARGE : SIDE_PADDING_SMALL
  );

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const totalCardWidth = CARD_WIDTH + CARD_GAP;
        const count = Math.max(1, Math.floor(width / totalCardWidth));
        setVisibleCards(count);
        setSidePadding(
          window.innerWidth >= BREAKPOINT
            ? SIDE_PADDING_LARGE
            : SIDE_PADDING_SMALL
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalWidth = CARD_WIDTH + CARD_GAP;
    const activeCardPosition = activeStep * totalWidth;
    const visibleWidth = visibleCards * totalWidth - CARD_GAP;
    const maxOffset = -(steps?.length * totalWidth - visibleWidth);

    // Calculate the ideal offset to center the active card
    let newOffset = -(activeCardPosition - (visibleWidth - totalWidth) / 2);

    // Ensure we don't show empty space at the start or end
    newOffset = Math.min(0, Math.max(maxOffset, newOffset));

    setOffset(newOffset);
  }, [visibleCards, activeStep, steps.length]);

  return (
    <div ref={containerRef}>
      <div className="flex gap-4 px-6 md:pl-[87px] md:pr-[110px] justify-end 4xl:max-w-[1340px] mx-auto 4xl:px-[0]">
        <button
          style={{
            cursor: "pointer",
            padding: "16px 0 ",
          }}
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          className="text-red-500 text-xl"
          disabled={activeStep === 0}
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
          onClick={() =>
            setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
          }
          className="text-red-500 text-xl"
          disabled={activeStep === steps.length - 1}
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
      <div className="w-fit">
        <div className="relative mb-[50px] mt-[28px] relative">
          <div
            className="w-full transition-transform duration-500 absolute top-[50%] left-0 h-[1px]"
            style={{
              background: primaryColor,
              marginLeft: `${sidePadding + CARD_WIDTH / 2}px`,
              maxWidth: `${(steps.length - 1) * (CARD_WIDTH + CARD_GAP)}px`,
              transform: `translateX(${offset}px)`,
            }}
          />
          <div
            className="w-full flex gap-[50px] transition-transform duration-500"
            style={{
              transform: `translateX(${offset}px)`,
              paddingLeft: `${sidePadding}px`,
            }}
          >
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center w-[281px] relative z-10"
                  aria-selected={index === activeStep}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    style={{ background: primaryColor }}
                    className={`w-[12px] h-[12px] rounded-full cursor-pointer transition-all duration-300`}
                  />
                  {index === activeStep && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full border border-dashed border-[#fff] bg-[#fff]/10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex w-fit gap-[50px] transition-transform duration-500"
            style={{
              transform: `translateX(${offset}px)`,
              paddingLeft: `${sidePadding}px`,
            }}
          >
            {steps.map((step, index) => (
              <div
                className="flex flex-col items-center"
                key={step.id}
                onClick={() => setActiveStep(index)}
              >
                <div
                  key={step.id}
                  className={`flex-shrink-0 w-[281px] pt-[25px] pr-[40px] pb-[32px] pl-[28px] rounded-[30px] ${
                    index === activeStep
                      ? "bg-[#fff] border border-dashed border-[#fff] min-h-[203px]"
                      : "border border-dashed border-[#333333] h-[203px]"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <span
                      style={{
                        color: primaryColor,
                      }}
                      className={`Gilroy-Regular text-[50px] font-[400] leading-[50px] tracking-[-0.01em]`}
                    >
                      0{index + 1}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSlider;
