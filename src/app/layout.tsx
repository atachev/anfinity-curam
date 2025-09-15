import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Oz-kXBld2L4U1JKVC8bt67WYsb_otBLG0-r0bv-q3ro"
        />
      </head>
      <Analytics />
      <SpeedInsights />
      <GoogleTagManager gtmId="GTM-TZSQQH3T" />
      <GoogleAnalytics gaId="G-PM2J7J77WY" />
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
