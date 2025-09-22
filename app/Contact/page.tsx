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
    <div className="min-h-screen bg-black text-white h-[600px]">
      <div className="mx-auto px-4 py-16">
        <div className="flex justify-center items-center ">
          <div ref={heroRef} className="text-start mb-16 w-1/2 relative">
            {/* Text Content */}
            <div className="relative z-20 flex flex-col justify-center p-6 h-full">
              <h2>
                <TextWithTexture
                  text="Get in Touch"
                  className="text-5xl md:text-7xl font-bold mb-6"
                />
              </h2>
              <p className="text-xl md:text-2xl text-zinc-300 w-2/3 leading-relaxed">
                Have questions about our eyewear? Want to learn more about our
                products? We&apos;d love to hear from you.
              </p>
            </div>
            {/* Image with gradient overlay */}
            <div className="absolute right-0 bottom-0 w-full h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/053/736/050/small_2x/two-hands-shaking-over-a-networked-background-photo.jpeg"
                  alt="Cliff lens"
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via- to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" w-1/2 rounded-2xl sm:p-8 ">
            <h2 className="text-3xl font-bold font-ramro mb-8 text-white">
              Have any quires?
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-300"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border-none border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border-none border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-800 border-none border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="example@email.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-zinc-300"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-zinc-800 border-none border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-300"
                >
                  Message <span className="text-yellow-300">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-800 border-none border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-yellow-500  focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your needs, questions, or feedback..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-600/50 rounded-lg">
                  <p className="text-green-400 text-center">
                    Thank you! We will get back to you as soon as possible.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-600/50 rounded-lg">
                  <p className="text-red-400 text-center">
                    There was an error. Please try again or email us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="    w-fit text-black cursor-pointer py-4 px-6 rounded-lg font-semibold text-lg
    flex items-center justify-center space-x-2
    bg-gradient-to-r from-yellow-200 to-yellow-600
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-l hover:text-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Opening Email Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* <p className="text-sm text-zinc-500 text-center">
                * Required fields. Your message will open in your default email
                application.
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
