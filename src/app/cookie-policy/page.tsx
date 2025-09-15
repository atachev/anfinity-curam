import type { Metadata } from "next";
import ListingPageHero from "@/components/heros/ListingPageHero";
import Section from "@/components/privacy-policy/Section";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "Cookie Policy | anfinity",
  description:
    "Learn how Anfinity uses cookies and analytics to improve user experience and website performance. Manage your preferences anytime.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/cookie-policy",
    title: "Cookie Policy | anfinity",
    description:
      "Learn how Anfinity uses cookies and analytics to improve user experience and website performance. Manage your preferences anytime.",
    siteName: "anfinity",
    images: [
      {
        url: "https://anfinity.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cookie Policy - anfinity",
      },
    ],
  },
  robots: { index: true, follow: true },
};
const CookiePolicy = () => {
  return (
    <div>
      <ListingPageHero
        title="Cookie policy"
        description="This Cookie Policy explains how Anfinity uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them."
        textColor="#E51D28"
      />
      <Section
        title="What are cookies?"
        content="Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, Anfinity) are called 'first party cookies'. Cookies set by parties other than the website owner are called 'third party cookies'. Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites."
      />
      <Section
        title="Why do we use cookies?"
        content="We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes. This is described in more detail below."
      />
      <Section
        title="How can I control cookies?"
        content="You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services. You can also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information."
      />
      <Section
        title="Essential cookies"
        content="These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, refusing them will have impact how our site functions. You always can block or delete cookies by changing your browser settings and force blocking all cookies on this website. But this will always prompt you to accept/refuse cookies when revisiting our site."
      />
      <Section
        title="Performance and Analytics cookies"
        content="These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable. We use Google Analytics to collect information about how visitors use our website. We use this information to compile reports and to help us improve the website. The cookies collect information in an anonymous form, including the number of visitors to the website, where visitors have come to the website from and the pages they visited."
      />
      <Section
        title="Updates to this Cookie Policy"
        content="We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated."
      />
    </div>
  );
};

export default CookiePolicy;
