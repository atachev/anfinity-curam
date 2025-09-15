import ContactForm from "../ContactForm";
import SectionHeader from "./SectionHeader";

const ContactFormSection = () => {
  return (
    <div
      className="flex flex-row"
      style={{
        maxWidth: 1440,
        minHeight: 986,
        margin: "0 auto",
        background: "#000",
        padding: "118px 127px 160px 110px",
        borderRadius: "40px",
        color: "#fff",
        gap: "98px",
      }}
    >
      <div>
        <SectionHeader
          title="Let’s build something awesome together."
          subtitle="Fill out the form and get a quote."
          titleColor="#E51D28"
        />
      </div>
      <div className="w-full mt-[126px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
