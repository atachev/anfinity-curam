"use client";

import Button from "../Button";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="hero-bg-red mx-auto rounded-b-[35px] md:rounded-b-[40px]">
      <div className="max-w-[1207px] 4xl:max-w-[1356px] mx-auto pt-[70px] md:pt-[91px] pb-[85px] md:pb-[48px] md:pl-[109px] 2xl:pl-[0] md:pr-[44px] 2xl:pr-[0]">
        <div className="grid grid-cols-12 md:gap-[28px]">
          <div className="col-span-12 md:hidden overflow-hidden h-[483px] relative">
            {/* left-1/2 -translate-x-1/2 */}
            <div className="w-[550px] absolute top-0 left-[-128px]">
              <HeroAnimation />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 pl-[25px] md:pl-[0] pr-[25px] md:pr-[0] mt-[74px] md:mt-[0]">
            <div className="max-w-[480px]">
              <h1 className="text-white text-[40px] md:text-[50px] leading-[40px] md:leading-[50px] font-bold tracking-[-0.01em] mb-6 max-w-[480px]">
                We build user-centric solutions that prioritize the human
                experience.
              </h1>
              <p className="text-white text-[16px] leading-[22px] font-light tracking-normal font-poppins mb-[59px] md:mb-[39px] max-w-[446px]">
                With dedication and love for our craft, we transform ideas into
                seamless, engaging, and impactful digital products tailor-made
                for your business.
              </p>
              <div className="flex justify-start relative z-10 mt-[30px] md:mt-[0]">
                <Button
                  text="Case studies"
                  variant="black"
                  mode="link"
                  href="/case-studies"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 mt-[18px] hidden md:block pl-[25px] md:pl-[0] pr-[25px] md:pr-[0]">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
