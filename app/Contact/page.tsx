"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Send } from "lucide-react";
import TextWithTexture from "@/components/textwithgoldentexture";
import Image from "next/image";

const Contact = () => {
  const bg = "/texture/texture.png";
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current?.children || [], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Create mailto link
    const { firstname, lastname, email, subject, message } = formData;
    const mailtoSubject = encodeURIComponent(
      subject || "Contact from Cliff Eyewear Website"
    );
    const mailtoBody = encodeURIComponent(
      `Firstname: ${firstname}\nlastname:${lastname}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:info@cliffeyewear.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Simulate form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-[#FFD700]">
      <div className="mx-auto px-4 py-16">
        <div className="flex  flex-col justify-center items-center ">
          <div ref={heroRef} className="text-start mb-16 w-1/2 relative">
            {/* Text Content */}
            <div className="relative z-20 flex flex-col justify-center h-full">
              <h2 className="text-4xl md:text-6xl capitalize pb-6 pt-44 font-medium montserrat text-[#FFD700]">
                Partner with us
              </h2>

              <p className="text-sm md:text-lg poppins leading-relaxed">
                Have questions about our eyewear? Want to learn more about our
                products? We&apos;d love to hear from you.
              </p>
            </div>
            {/* Image with gradient overlay */}
            <div className="absolute right-0 bottom-0 w-full h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                <Image
                  src={"/contact/shake-hand.jpeg"}
                  alt="Cliff lens"
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/90 via- to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via- to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="space-y-8" ref={formRef}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["firstname", "lastname"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="text-sm uppercase tracking-widest text-[#FFD700]"
                    >
                      {field === "firstname" ? "First Name" : "Last Name"}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-[#FFD700]/70 focus:border-[#FFD700] focus:outline-none text-[#FFD700] py-2 text-sm tracking-wider transition-all"
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm uppercase tracking-widest text-[#FFD700]"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#FFD700]/70 focus:border-[#FFD700] focus:outline-none text-[#FFD700] py-2 text-sm tracking-wider transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-sm uppercase tracking-widest text-[#FFD700]"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-[#FFD700]/70 focus:border-[#FFD700] focus:outline-none text-[#FFD700] py-2 text-sm tracking-wider transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm uppercase tracking-widest text-[#FFD700]"
                >
                  Message <span className="text-yellow-400">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-[#FFD700]/70 focus:border-[#FFD700] focus:outline-none text-[#FFD700] py-2 text-sm tracking-wider resize-none transition-all"
                  placeholder="Write your message..."
                />
              </div>

              {/* Status */}
              {submitStatus === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Thank you! We’ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="uppercase tracking-widest text-[#FFD700] hover:text-[#FFD700] cursor-pointer transition-all border border-[#FFD700] px-8 py-3 rounded-none"
              >
                [ {isSubmitting ? "Sending..." : "Send Message"} ]
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
