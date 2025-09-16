import { useCallback, useEffect, useState } from "react";

export const useWindow = () => {
  if (typeof window !== "undefined") return window;
  return null;
};

export const useMediaQuery = () => {
  const window = useWindow();

  const [mobileOnly, setMobileOnly] = useState<boolean | null>(null);
  const [aboveMobile, setAboveMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mobileOnlyMedia = window?.matchMedia(
      "screen and (min-width: 0px) and (max-width: 600px)"
    );
    const aboveMobileMedia = window?.matchMedia(
      "screen and (min-width: 601px)"
    );

    const onResize = () => {
      setMobileOnly(mobileOnlyMedia?.matches ?? false);
      setAboveMobile(aboveMobileMedia?.matches ?? false);
    };

    window?.addEventListener("resize", onResize);
    onResize();

    return () => {
      window?.removeEventListener("resize", onResize);
    };
  }, [window]);

  return {
    /** 0px to 600px */
    mobileOnly: mobileOnly ?? false,
    /** above 601px */
    aboveMobile: aboveMobile ?? false,
  };
};
