import Link from "next/link";
import Card from "../../services/Card";

const WhatWeDoDesktop = ({ services }: { services: any }) => {
  if (!services) return null;
  return (
    <>
      {services?.map((service: any, index: number) => (
        <Link key={index} href={`/services/${service.slug}`}>
          <Card
            key={index}
            title={service.name}
            description={service.cardDescription}
            dotPosition={service.dotPosition}
            mobileDotPosition={service.mobileDotPosition}
            icon={service.icon}
          />
        </Link>
      ))}
    </>
  );
};

export default WhatWeDoDesktop;
