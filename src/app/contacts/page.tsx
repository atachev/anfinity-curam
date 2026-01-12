import type { Metadata } from "next";
import Form from "@/components/contacts/Form";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "Let's build your product, contact us | anfinity",
  description:
    "Tell us about your project. We'll align on goals, scope, and timelines, and propose the right product team to deliver.",
  alternates: { canonical: "/contacts" },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/contacts",
    title: "Let's build your product, contact us | anfinity",
    description:
      "Tell us about your project. We'll align on goals, scope, and timelines, and propose the right product team to deliver.",
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

function JsonLd() {
  const base = "https://anfinity.bg";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | anfinity",
    url: `${base}/contacts`,
    description:
      "Tell us about your project. We'll align on goals, scope, and timelines, and propose the right product team to deliver.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: `${base}/contacts`,
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "anfinity",
      url: base,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        url: `${base}/contacts`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const Contacts = () => {
  return (
    <div>
      <JsonLd />
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
    </div>
  );
};

export default Contacts;
