import { Brand } from "../../../types/brands";

import BulbuildLogo from "@/components/icons/clients/Bulbuild";
import BCNLLogo from "@/components/icons/clients/BCNL";
import NovaMemorialLogo from "@/components/icons/clients/NovaMemorial";
import BugcoffeeLogo from "@/components/icons/clients/Bugcoffee";
import NewLevelTrainingLogo from "@/components/icons/clients/NLT";
import NodicaStudioLogo from "@/components/icons/clients/NodicaStudio";
import P2PCommunicationsLogo from "@/components/icons/clients/P2P";
import YourDeliveryLogo from "@/components/icons/clients/YourDelivery";
import Link from "next/link";

const brands: Brand[] = [
  {
    image: <BCNLLogo />,
    link: "https://bcnl.org",
    alt: "Български център за нестопанско право",
  },
  {
    image: <NovaMemorialLogo />,
    link: "https://novamemorial.com",
    alt: "Digital memorial book",
  },
  {
    image: <BugcoffeeLogo />,
    link: "https://bugcoffee.com",
    alt: "Bugcoffee Roasters",
  },
  {
    image: <BulbuildLogo />,
    link: "https://bulbuild.bg",
    alt: "Bulbuild group",
  },
  {
    image: <NewLevelTrainingLogo />,
    link: "https://newleveltraining.bg",
    alt: "NLT personal trainers",
  },
  {
    image: <P2PCommunicationsLogo />,
    link: "https://p2pcommunications.bg",
    alt: "PR & Marketing agency",
  },
  {
    image: <NodicaStudioLogo />,
    link: "https://nodicastudio.bg",
    alt: "Architecture & design",
  },
  // {
  //   image: <YourDeliveryLogo />,
  //   link: "https://yourdelivery.ie",
  //   alt: "Your Delivery",
  // },
];

const InfiniteLogoSlider = () => {
  const mobileRow1 = brands.filter((_, i) => i % 2 === 0);
  const mobileRow2 = brands.filter((_, i) => i % 2 !== 0);
  return (
    <div className="relative overflow-hidden w-full mt-[57px] md:mt-[50px]">
      {/* Blur for left and right (desktop only) */}
      <div className="block absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
      <div className="block absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

      {/* Desktop: horizontal scroll */}
      <div className="hidden md:flex w-max fit-content">
        <div className="ticker-track flex flex-row items-center justify-start min-w-[100%]">
          {brands.map((brand, i) => (
            <Link
              key={`desk-a-${i}`}
              href={brand.link}
              rel="noopener noreferrer external"
              target="_blank"
              className="group"
            >
              <div className="h-[67px] flex items-center opacity-[0.3] group-hover:opacity-100 transition-opacity duration-300">
                {brand.image}
              </div>
            </Link>
          ))}
        </div>
        <div className="ticker-track flex flex-row items-center justify-start min-w-[100%]">
          {brands.map((brand, i) => (
            <Link
              key={`desk-a-${i}`}
              href={brand.link}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <div className="h-[67px] flex items-center opacity-[0.3] group-hover:opacity-100 transition-opacity duration-300">
                {brand.image}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile: vertical 2-row grid scroll */}
      <div className="flex md:hidden w-max fit-content">
        <div className="ticker-track flex flex-row items-center justify-start min-w-[80%]">
          {mobileRow1.map((brand, i) => (
            <Link
              key={`desk-a-${i}`}
              href={brand.link}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <div className="h-[67px] flex items-center opacity-[0.3]">
                {brand.image}
              </div>
            </Link>
          ))}
        </div>
        <div className="ticker-track flex flex-row items-center justify-start min-w-[80%]">
          {mobileRow1.map((brand, i) => (
            <Link
              key={`desk-a-${i}`}
              href={brand.link}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <div className="h-[67px] flex items-center opacity-[0.3]">
                {brand.image}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex md:hidden w-max fit-content mt-[38px]">
        <div className="ticker-track-reverse flex flex-row items-center justify-start min-w-[80%]">
          {mobileRow2.map((brand, i) => (
            <Link
              key={`desk-a-${i}`}
              href={brand.link}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <div className="h-[67px] flex items-center opacity-[0.3]">
                {brand.image}
              </div>
            </Link>
          ))}
        </div>
        <div className="ticker-track-reverse flex flex-row items-center justify-start min-w-[80%]">
          {mobileRow2.map((brand, i) => (
            <Link
              key={`desk-a-${i}`}
              href={brand.link}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <div className="h-[67px] flex items-center opacity-[0.3]">
                {brand.image}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
