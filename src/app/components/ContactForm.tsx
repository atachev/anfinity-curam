"use client";
import { useEffect, useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Button from "./Button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { sendGAEvent } from "@next/third-parties/google";
import WebDevelopmentSmall from "./icons/services/WebDevelopmentSmall";
import StartupSmall from "./icons/services/StartupSmall";
import MobileDevelopmentSmall from "./icons/services/MobileDevelopmentSmall";
import LandingPagesSmall from "./icons/services/LandingPagesSmall";
import PoCMVPSmall from "./icons/services/PoCMVPSmall";
import WebsiteDevelopmentSmall from "./icons/services/WebsiteDevelopmentSmall";

const budgetOptions = [
  { id: "2k-5k", label: "2k - 5k" },
  { id: "5k-10k", label: "5k - 10k" },
  { id: "10k-20k", label: "10k - 20k" },
  { id: "30k-40k", label: "30k - 40k" },
  { id: "50k+", label: "50k +" },
];

const services = [
  {
    id: "consultation-call",
    name: "Free consultation call",
    icon: <StartupSmall />,
  },
  { id: "web-app", name: "Web application", icon: <WebDevelopmentSmall /> },
  {
    id: "mobile-app",
    name: "Mobile application",
    icon: <MobileDevelopmentSmall />,
  },
  { id: "landing-page", name: "Landing page", icon: <LandingPagesSmall /> },
  { id: "poc-mvp", name: "Product PoC & MVP", icon: <PoCMVPSmall /> },
  { id: "website", name: "Website", icon: <WebsiteDevelopmentSmall /> },
];

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    website: "",
  });
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear any previous error messages when user starts typing
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSelect = (item: any) => {
    setSelectedService(item);
    setIsOpen(false);
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");
    if (!formData.company.trim()) errors.push("Company name is required");
    if (!formData.message.trim()) errors.push("Message is required");
    if (!selectedService) errors.push("Please select a service");
    if (!selectedBudget) errors.push("Please select a budget range");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    return errors;
  };

  const handleSubmit = async () => {
    sendGAEvent("event", "request_a_quote_click");

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Validate form
      const validationErrors = validateForm();
      if (validationErrors.length > 0) {
        setSubmitStatus({
          type: "error",
          message: validationErrors.join(", "),
        });
        setIsSubmitting(false);
        return;
      }

      // Generate reCAPTCHA token if available and in production
      let recaptchaToken = null;
      const isProduction = process.env.NODE_ENV === "production";

      if (isProduction && executeRecaptcha) {
        try {
          // console.log("🛡️ Generating reCAPTCHA token for production...");
          recaptchaToken = await executeRecaptcha("contact_form_submit");
        } catch (error) {
          console.warn("reCAPTCHA execution failed:", error);
        }
      } else if (!isProduction) {
        console.log("🔧 Development mode: Skipping reCAPTCHA verification");
      }

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website,
          service: selectedService?.name || "",
          budget: selectedBudget,
          message: formData.message,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });

        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "",
          website: "",
        });
        setSelectedService(null);
        setSelectedBudget("");
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col relative">
      {submitStatus.type && (
        <div className="bg-black/50 z-[9999] absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <div
            className={`text-white pt-[52px] pb-[44px] pl-[58px] pr-[58px] z-[9999] rounded-[30px] w-[400px] ${
              submitStatus.type === "success" ? "bg-[#138E00]" : "bg-[#E51D28]"
            }`}
          >
            <h2 className="text-[50px] leading-[50px] font-gilroy font-[700]">
              {submitStatus.type === "success" ? "Thank you!" : "Ooops!"}
            </h2>
            <p className="text-[16px] leading-[22px] font-poppins font-[300]">
              {submitStatus.message}
            </p>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div className="w-full">
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name *"
          required
          className="border-0 border-b-[1px] border-[#333333] focus:border-primary focus:ring-0 rounded-none"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="mt-[32px] flex-1">
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="border-0 border-b-[1px] border-[#333333] focus:border-primary focus:ring-0 rounded-none"
            disabled={isSubmitting}
          />
        </div>
        <div className="mt-[32px] flex-1">
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone *"
            required
            className="border-0 border-b-[1px] border-[#333333] focus:border-primary focus:ring-0 rounded-none"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="mt-[32px] flex-1">
          <Input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name *"
            required
            className="border-0 border-b-[1px] border-[#333333] focus:border-primary focus:ring-0 rounded-none"
            disabled={isSubmitting}
          />
        </div>
        <div className="mt-[32px] flex-1">
          <Input
            id="website"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Company website (optional)"
            className="border-0 border-b-[1px] border-[#333333] focus:border-primary focus:ring-0 rounded-none"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="mt-[34px] relative">
        <div className="relative inline-block text-left w-full">
          <button
            ref={triggerRef}
            onClick={() => !isSubmitting && setIsOpen(!isOpen)}
            disabled={isSubmitting}
            className="inline-flex align-center justify-between w-full bg-black text-white pt-[10px] pb-[10px] text-left border-0 border-b-[1px] border-[#333333] focus:border-primary focus:ring-0 rounded-none disabled:opacity-50"
          >
            <span
              className={`${
                selectedService ? "text-white" : "text-[#8F8F8F]"
              } font-light font-poppins text-[14px] leading-[22px]`}
            >
              {selectedService?.name || "Select a service *"}
            </span>
            <span className="flex items-center justify-center">
              {isOpen ? (
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 7L7 0.999999L1 7" stroke="#E51D28" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L7 7L13 1" stroke="#E51D28" />
                </svg>
              )}
            </span>
          </button>
          {isOpen && !isSubmitting && (
            <div
              className="w-[100%] absolute z-20 bg-[#333] p-4 rounded-br-[20px] rounded-bl-[20px]"
              ref={dropdownRef}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[19px]">
                {services.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item)}
                    className={`${
                      selectedService?.id === item.id
                        ? "bg-[#E51D28] hover:bg-[#E51D28]"
                        : "bg-[#000]"
                    } flex flex-col justify-between items-start md:min-h-[122px] font-poppins font-[400] text-white text-[16px] leading-[22px] pt-[11px] md:pt-[8px] pb-[14px] md:pb-[19px] pl-[16px] md:pl-[21px] pr-[15px] rounded-[10px] hover:bg-[#1B1B1B] transition-colors cursor-pointer`}
                  >
                    <div className="hidden md:flex justify-end w-full">
                      {item.icon}
                    </div>
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-white mt-[32px]">
        {/* Label */}
        <p className="text-gray-400 text-sm mb-3">
          Preferred budget in <span className="font-bold">EUR *</span>
        </p>

        <RadioGroup
          value={selectedBudget}
          onValueChange={setSelectedBudget}
          className="flex gap-3"
          disabled={isSubmitting}
        >
          <div className="flex flex-row gap-[18px] flex-wrap">
            {budgetOptions.map((option) => (
              <Label
                key={option.id}
                htmlFor={option.id}
                style={{
                  padding: "12px 0 14px 0",
                }}
                className={`
                  hover:bg-[#1B1B1B] border-[1px] border-[#333333] hover:border-[#1B1B1B] w-[fit-content] min-w-[129px] font-poppins text-[16px] leading-[22px] font-[400] text-white transition-all cursor-pointer rounded-[200px] flex-wrap text-center
                  ${
                    selectedBudget === option.id &&
                    "bg-[#E51D28] text-black border-[#E51D28] hover:bg-[#E51D28] hover:border-[#E51D28]"
                  }
                  ${isSubmitting && "opacity-50 cursor-not-allowed"}
                `}
              >
                <RadioGroupItem
                  id={option.id}
                  value={option.id}
                  className="hidden"
                  disabled={isSubmitting}
                />
                {option.label}
              </Label>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="mt-[39px] md:mt-[32px]">
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here *"
          required
          className="border-[#575757] resize-none h-[106px] rounded-[20px]"
          disabled={isSubmitting}
        />
      </div>

      <div className="mt-[53px] md:mt-[44px]">
        <div className={isSubmitting ? "opacity-50 pointer-events-none" : ""}>
          <Button
            text={isSubmitting ? "Sending..." : "Request a quote"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
