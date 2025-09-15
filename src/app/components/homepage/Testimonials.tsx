"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import SectionHeader from "./SectionHeader";
import Text from "../Text";
import { buildImageUrl } from "@/lib/utils";

const Testimonials = ({ clients }: { clients: any }) => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  useEffect(() => {
    if (clients?.length > 0) {
      const allTestimonials = clients?.flatMap((client: any) =>
        (client?.testimonials || []).map((testimonial: any) => ({
          ...testimonial,
          clientIcon: client?.icon,
        }))
      );
      setTestimonials(allTestimonials);
    } else {
      setTestimonials(clients?.testimonials);
    }
  }, [clients]);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isCaseStudyPage = pathname.includes("/case-studies/");
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  return (
    <div
      className="max-w-[1140px] 4xl:max-w-[1340px] pt-[62px] md:pt-[118px] pr-[25px] md:pr-[127px] pb-[62px] md:pb-[160px] pl-[25px] md:pl-[110px] xl:pl-[0] xl:pr-[0]"
      style={{
        height:
          isMobile && isCaseStudyPage ? "auto" : isCaseStudyPage ? 707 : 934,
        margin: "0 auto",
      }}
    >
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <SectionHeader title="What our clients say" titleColor="#000" />
        </div>
        {testimonials && testimonials?.length > 1 && (
          <div className="flex flex-row gap-5 hidden md:flex">
            <button
              style={{
                cursor: "pointer",
                padding: "16px 0 ",
              }}
              onClick={prevTestimonial}
              className="text-red-500 text-xl"
            >
              <svg
                width="47"
                height="18"
                viewBox="0 0 47 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M47 9L1 9" stroke="#E51D28" />
                <path d="M9 1L1 9L9 17" stroke="#E51D28" />
              </svg>
            </button>
            <button
              style={{
                cursor: "pointer",
                padding: "16px 0",
              }}
              onClick={nextTestimonial}
              className="text-red-500 text-xl"
            >
              <svg
                width="47"
                height="18"
                viewBox="0 0 47 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 9H46" stroke="#E51D28" />
                <path d="M38 17L46 9L38 1" stroke="#E51D28" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-12 gap-3 mt-[37px]">
        <div className="col-span-12 col-start-1 md:col-start-5 md:col-end-[none] max-w-[718px]">
          <AnimatePresence mode="wait">
            <motion.div
              ref={ref}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={index}
              initial={{ opacity: 0, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full xl:max-w-[818px]"
            >
              {/* md:h-[150px] */}
              <Text className="text-lg text-gray-700">
                {testimonials && testimonials[index]?.text}
              </Text>
              <div className="flex items-center mt-[23px] h-[57px]">
                {testimonials && testimonials.length > 0 && (
                  <Image
                    src={`${buildImageUrl(
                      clients?.length > 0
                        ? testimonials[index]?.clientIcon?.url
                        : clients?.icon?.url
                    )}`}
                    alt={testimonials && testimonials[index]?.name}
                    width={57}
                    height={57}
                  />
                )}
                <div className="ml-3 text-left">
                  <p className="mt-0 mb-0 font-[600] text-[18px]/[30px] text-black">
                    {testimonials && testimonials[index]?.name}
                  </p>
                  <p className="mt-0 mb-0 font-[300] text-[16px]/[22px] text-[#8F8F8F]">
                    {testimonials && testimonials[index]?.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-row gap-5 flex md:hidden mt-[72px] justify-center">
            <button
              style={{
                cursor: "pointer",
                padding: "16px 0 ",
              }}
              onClick={prevTestimonial}
              className="text-red-500 text-xl"
            >
              <svg
                width="47"
                height="18"
                viewBox="0 0 47 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M47 9L1 9" stroke="#E51D28" />
                <path d="M9 1L1 9L9 17" stroke="#E51D28" />
              </svg>
            </button>
            <button
              style={{
                cursor: "pointer",
                padding: "16px 0",
              }}
              onClick={nextTestimonial}
              className="text-red-500 text-xl"
            >
              <svg
                width="47"
                height="18"
                viewBox="0 0 47 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 9H46" stroke="#E51D28" />
                <path d="M38 17L46 9L38 1" stroke="#E51D28" />
              </svg>
            </button>
          </div>
          {testimonials && testimonials?.length > 1 && (
            <div className="mt-[76px] md:mt-6 flex gap-2 justify-center md:justify-start">
              {testimonials?.map((_, i) => (
                <div
                  key={i}
                  className="cursor-pointer py-[12px] flex items-center"
                  onClick={() => setIndex(i)}
                >
                  <span
                    className={`h-[1px] rounded-full transition-all duration-300 ${
                      i === index
                        ? "bg-red-500 w-[60px]"
                        : "bg-gray-400 w-[33px]"
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
