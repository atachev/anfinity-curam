import { getClients } from "@/lib/fetchers/getClients";
import ContactFormSection from "./ContactFormSection";
import Testimonials from "./Testimonials";

const Sticky = async () => {
  const clients: any[] = await getClients();
  return (
    <div className="max-w-[1440px] 2xl:max-w-full mx-auto m-h-[730px]">
      <div
        className="bg-[#F8F8F8] rounded-[35px] md:rounded-[40px]"
        style={{
          position: "sticky",
          top: "40px",
          overflow: "hidden",
        }}
      >
        <Testimonials clients={clients} />
      </div>
      <div
        className="bg-[#000] rounded-[35px] md:rounded-[40px]"
        style={{
          position: "sticky",
          top: "40px",
          marginTop: "-110px",
          overflow: "hidden",
          zIndex: 101,
        }}
      >
        <ContactFormSection />
      </div>
    </div>
  );
};

export default Sticky;
