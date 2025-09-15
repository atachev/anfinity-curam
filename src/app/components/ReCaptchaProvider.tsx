"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ReCaptchaProviderProps {
  children: React.ReactNode;
}

const ReCaptchaProvider = ({ children }: ReCaptchaProviderProps) => {
  const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!reCaptchaSiteKey) {
    // If no reCAPTCHA key is provided, just render children without reCAPTCHA
    console.warn(
      "NEXT_PUBLIC_RECAPTCHA_SITE_KEY not found. reCAPTCHA is disabled."
    );
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={reCaptchaSiteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;
