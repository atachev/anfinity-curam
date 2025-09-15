import ContactForm from "../ContactForm";
import SectionHeader from "./SectionHeader";
import ReCaptchaProvider from "../ReCaptchaProvider";

const ContactFormSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between max-w-[1140px] 4xl:max-w-[1340px] pt-[65px] md:pt-[118px] pr-[25px] md:pr-[127px] pb-[80px] md:pb-[160px] pl-[25px] md:pl-[109px] md:gap-[98px] xl:pl-[0] xl:pr-[0]"
      style={{
        minHeight: 986,
        margin: "0 auto",
        color: "#fff",
      }}
    >
      <div>
        <SectionHeader
          title="Let's build something awesome together."
          subtitle="Fill out the form and get a quote."
          titleColor="#E51D28"
          subtitleColor="#fff"
        />
      </div>
      <div className="w-full mt-[80px] md:mt-[126px] max-w-[718px]">
        <ReCaptchaProvider>
          <ContactForm />
        </ReCaptchaProvider>
      </div>
    </div>
  );
};

export default ContactFormSection;
