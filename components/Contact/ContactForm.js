"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import InputField from "../../UI/InputField";
import { validateField as validate } from "../../lib/validations";

export default function ContactForm() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: { message: "", invalid: true },
    email: { message: "", invalid: true },
    message: { message: "", invalid: true },
  });

  const [dirtyFields, setDirtyFields] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const [isSending, setIsSending] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const isFormValid = Object.values(errors).every((e) => !e.invalid);

  // Validation hooks
  useEffect(() => {
    if (!isClearing) runValidation("fullName", formData.fullName);
  }, [formData.fullName, isClearing]);

  useEffect(() => {
    if (!isClearing) runValidation("email", formData.email);
  }, [formData.email, isClearing]);

  useEffect(() => {
    if (!isClearing) runValidation("message", formData.message);
  }, [formData.message, isClearing]);

  const runValidation = (field, value) => {
    const result = validate(field, value);
    setErrors((prev) => ({ ...prev, [field]: result }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!dirtyFields[name]) {
      setDirtyFields((prev) => ({ ...prev, [name]: true }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    runValidation(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      scrollToFirstError();
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatusMessage(
          "Thanks for reaching out! Your message was sent successfully. 📩"
        );
        setFormData({ fullName: "", email: "", message: "" });
        setDirtyFields({ fullName: false, email: false, message: false });
        resetErrors();
        setIsClearing(true);
        setTimeout(() => setIsClearing(false), 0);
      } else {
        throw new Error(result.error || "Failed to send");
      }
    } catch (err) {
      setStatusMessage("Something went wrong. Please try again.");
      console.error("Form Error:", err);
    } finally {
      setIsSending(false);
    }
  };

  const resetErrors = () => {
    setErrors({
      fullName: { message: "", invalid: true },
      email: { message: "", invalid: true },
      message: { message: "", invalid: true },
    });
  };

  const scrollToFirstError = () => {
    const firstInvalidField = Object.entries(errors).find(
      ([, value]) => value.invalid
    );
    if (firstInvalidField) {
      const fieldId = firstInvalidField[0];
      const el = formRef.current?.querySelector(`#${fieldId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div id="contact" ref={formRef}>
      <div className="title">
        <p>LET&apos;S WORK</p>
        <p>TOGETHER</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col my-[10px] md:my-[50px]"
      >
        <div className="flex-col md:flex md:gap-3">
          <div className="flex flex-col gap-[20px] ">
            <InputField
              id="fullName"
              name="Full Name"
              value={formData.fullName}
              error={errors.fullName}
              dirty={dirtyFields.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
            />

            <InputField
              id="email"
              name="Email"
              type="email"
              value={formData.email}
              error={errors.email}
              dirty={dirtyFields.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>

          <InputField
            id="message"
            name="Message"
            fieldtype="textarea"
            value={formData.message}
            error={errors.message}
            dirty={dirtyFields.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSending}
          className="flex items-center justify-center mt-[20px] gap-2 w-full px-4 py-2 bg-[#f46c38] text-white text-[18px] rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-default"
        >
          <span>Send</span>
          <Image
            src={
              isSending
                ? "https://res.cloudinary.com/djivuystd/image/upload/v1752949589/loading-indicator_ajiddh.svg"
                : "https://res.cloudinary.com/djivuystd/image/upload/v1752949589/send-icon_bptzkr.svg"
            }
            alt="send icon"
            width={24}
            height={24}
            className={
              isSending
                ? "animate-spin"
                : "transition-transform group-hover:translate-x-[5px]"
            }
          />
        </button>

        <p className="mt-2 text-orange-500">{statusMessage}</p>
      </form>
    </div>
  );
}
