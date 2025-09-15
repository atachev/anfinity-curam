import SectionHeader from "./SectionHeader";
import WhatWeDoClient from "./WhatWeDoClient";
import { getServices } from "@/lib/fetchers/getServices";

const WhatWeDo = async () => {
  const services: any[] = await getServices();

  return (
    <div className="max-w-[1140px] bg-white mt-[97px] md:mt-[159px] mb-[127px] md:mb-[152px] mx-auto">
      <div className="ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <SectionHeader
          title="What we do"
          subtitle="We excel in mobile, web, and cloud platform design and development, and we can guide you through the whole product life cycle - through discovery, research, design, development and launch."
        />
      </div>
      <div className="mr-[-5px] md:mr-auto md:px-0 flex gap-[28px] flex-wrap max-w-[1140px] mx-auto align-center justify-center mt-[81px] md:mt-[109px]">
        {services?.length && <WhatWeDoClient services={services} />}
      </div>
    </div>
  );
};

export default WhatWeDo;
