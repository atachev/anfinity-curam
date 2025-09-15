"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionHeader from "../homepage/SectionHeader";
import Heading from "../Heading";
import Text from "@/components/Text";

const Benefits = ({ benefits }: { benefits: any[] }) => {
  const benefitsRef = useRef(null);
  const isInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  return (
    <div className="max-w-[1140px] bg-[#fff] mt-[113px] md:mt-[130px] mr-[25px] md:mr-[auto] mb-[60px] md:mb-[152px] ml-[25px] md:ml-[auto]">
      <SectionHeader
        title="Key Advantages"
        subtitle="We focus on clean code, seamless functionality, and modern design to deliver web applications that are fast, reliable, and easy to manage. See how our expertise can add value to your project."
      />
      <div
        ref={benefitsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-[67px] mt-[82px]"
      >
        {benefits?.map((benefit: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col gap-[13px] md:gap-[30px]"
          >
            <Heading
              as="h3"
              className="font-[700] text-[30px] leading-[30px] tracking-[-0.01em] min-h-[60px]"
            >
              {benefit.name}
            </Heading>
            <Text className="text-[16px] leading-[22px] font-light tracking-normal">
              {benefit.description}
            </Text>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
