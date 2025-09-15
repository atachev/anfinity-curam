"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import WhatWeDoMobile from "./what-we-do/Mobile";
import WhatWeDoDesktop from "./what-we-do/Desktop";

interface WhatWeDoClientProps {
  services: any[];
}

const WhatWeDoClient = ({ services }: WhatWeDoClientProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <WhatWeDoMobile services={services} />
      ) : (
        <WhatWeDoDesktop services={services} />
      )}
    </>
  );
};

export default WhatWeDoClient;
