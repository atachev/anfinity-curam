import Hero from "@/components/homepage/Hero";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import Process from "@/components/homepage/Process";
import CaseStudies from "@/components/homepage/CaseStudies";
import Sticky from "@/components/homepage/Sticky";
import InfiniteLogos from "@/components/homepage/InfiniteLogos";

export default function HomePage() {
  console.log("it works!");
  return (
    <main>
      <Hero />
      <InfiniteLogos />
      <WhatWeDo />
      <Process />
      <CaseStudies />
      <Sticky />
    </main>
  );
}
