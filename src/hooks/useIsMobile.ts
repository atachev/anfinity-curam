"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 640;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // Check on mount
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Return false during SSR and initial render to prevent hydration mismatch
  return isMobile ?? false;
};
