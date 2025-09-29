"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/homepage/SectionHeader";
import ReCaptchaProvider from "@/components/ReCaptchaProvider";

const Form = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={headerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[1140px] 4xl:max-w-[1340px] mx-auto"
    >
      <SectionHeader
        component="h1"
        title="Let's build something awesome together."
        subtitle="If you'd like to get in touch with us you can email us at <a class='email-link' href='mailto:office@anfinity.bg' target='_blank'>office@anfinity.bg</a> call us on <a class='phone-link' href='tel:+359897879980' target='_blank'>+359 897 879 980</a> or request a quote via our online form."
        titleColor="#E51D28"
        subtitleColor="#fff"
      />
      <div className="flex justify-end mt-[105px]">
        <div className="w-full max-w-[718px]">
          <ReCaptchaProvider>
            <ContactForm />
          </ReCaptchaProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;
