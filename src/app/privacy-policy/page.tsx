import type { Metadata } from "next";
import ListingPageHero from "@/components/heros/ListingPageHero";
import Section from "@/components/privacy-policy/Section";
import Text from "@/components/Text";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "Privacy Policy | anfinity",
  description:
    "Learn how Anfinity collects, stores, and protects your data. We value your privacy and comply with GDPR and EU regulations.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/privacy-policy",
    title: "Privacy Policy | anfinity",
    description:
      "Anfinity’s privacy policy explains how we collect, process, and protect user data in compliance with GDPR and EU regulations.",
    siteName: "anfinity",
    images: [
      {
        url: "https://anfinity.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - anfinity",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <ListingPageHero
        title="Privacy policy"
        description="Anfinity Ltd. ('we', 'our', 'us') respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website anfinity.bg."
        textColor="#E51D28"
      />
      <div className="max-w-[1140px] 4xl:max-w-[1440px] mx-auto">
        <div className="w-full flex mt-[37px] md:mt-[72px] max-w-[100%] gap-[25px] md:gap-[85px]">
          <div className="flex-shrink-0 w-[0] md:w-[340px]"></div>
          <Text className="text-[22px] leading-[30px] tracking-[0] font-light font-[600]">
            Effective date: 15 September 2025
          </Text>
        </div>
      </div>
      <Section
        title="Data We Collect"
        content="When you interact with our website through the contact form, we collect the following information: your name, email address, phone number, company name and website. This information is submitted through our form and processed via our servers (hosted on Vercel and our Strapi API). Additionally, basic technical data such as your IP address, browser type, and device information may be logged automatically for security and analytics purposes."
      />
      <Section
        title="Why We Collect Your Data?"
        content="We collect this information solely for responding to inquiries and requests you send us, communicating about potential projects or services you are interested in, ensuring our systems operate securely and reliably. We do not use your data for unsolicited marketing, nor do we sell or share it with third parties."
      />
      <Section
        title="How do we protect your information?"
        content="We use industry-standard practices to ensure that your personal data is kept safe, including encrypted transmission (HTTPS/SSL) of all data submitted via forms, secure data storage on trusted infrastructure providers (Vercel and Strapi) with servers located in the EU and access restrictions ensuring that only authorized team members can view your data. We continuous monitoring and timely updates to keep our software and servers secure."
      />
      <Section
        title="Data Security"
        content="Your privacy and data security are fundamental to us. We combine technical measures (firewalls, secure servers, encryption, access logging) and organizational measures (internal policies, staff training, and limited access rights) to protect your data against loss, unauthorized access, alteration, or misuse. Although no system can guarantee absolute protection, we are committed to maintaining the highest level of security to safeguard your information."
      />
    </div>
  );
};

export default PrivacyPolicy;
