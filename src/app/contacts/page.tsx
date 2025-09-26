import type { Metadata } from "next";
import Form from "@/components/contacts/Form";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "Let’s build your product, contact us | anfinity",
  description:
    "Tell us about your project. We’ll align on goals, scope, and timelines, and propose the right product team to deliver.",
  alternates: { canonical: "/contacts" },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/contacts",
    title: "Let’s build your product, contact us | anfinity",
    description:
      "Tell us about your project. We’ll align on goals, scope, and timelines, and propose the right product team to deliver.",
    siteName: "anfinity",
    images: [
      {
        url: "https://anfinity.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact anfinity",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const Contacts = () => {
  return (
    <div
      className="flex flex-col rounded-b-[40px] pt-[100px] md:pt-[118px] pr-[25px] md:pr-[110px] pb-[80px] md:pb-[139px] pl-[25px] md:pl-[109px]"
      style={{
        minHeight: 986,
        margin: "0 auto",
        background: "#000",
        color: "#fff",
        position: "relative",
      }}
    >
      <Form />
    </div>
  );
};

export default Contacts;
