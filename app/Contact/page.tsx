"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Send } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

const Contact = () => {
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
      // Enhanced hero animation
      gsap.from(heroRef.current?.children || [], {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      });

      // Enhanced form animation
      gsap.from(formRef.current?.children || [], {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.15,
        delay: 0.5,
        ease: "power2.out",
      });

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
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
      `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\n\nMessage:\n${message}`
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
    <div className="min-h-screen bg-black text-[#FFD700] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl floating-element" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl floating-element" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* Enhanced Hero Section */}
          <div ref={heroRef} className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden h-[600px]">
              {/* Main Image */}
              <Image
                src={"/contact/shake-hand.jpeg"}
                alt="Cliff Eyewear Partnership"
                fill
                className="object-cover"
                priority
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col justify-end h-full p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {/* Decorative Element */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700]/20 to-amber-500/10 rounded-2xl flex items-center justify-center border border-[#FFD700]/30">
                      <Icon
                        icon="mdi:handshake"
                        width={24}
                        height={24}
                        className="text-[#FFD700]"
                      />
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] to-transparent rounded-full" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-medium montserrat text-white leading-tight">
                    Partner{" "}
                    <span className="bg-gradient-to-r from-[#FFD700] via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                      With Us
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-[#FFD700]/90 leading-relaxed max-w-2xl">
                    Ready to transform vision experiences together? Let&apos;s
                    discuss how Cliff Eyewear can elevate your optical solutions
                    with cutting-edge technology and premium craftsmanship.
                  </p>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 gap-4 pt-6">
                    {[
                      { icon: "mdi:email", text: "info@cliffeyewear.com" },
                      { icon: "mdi:phone", text: "+1 (555) 123-4567" },
                      {
                        icon: "mdi:map-marker",
                        text: "123 Vision Street, Optical City",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon
                          icon={item.icon}
                          className="text-[#FFD700]"
                          width={20}
                          height={20}
                        />
                        <span className="text-[#FFD700]/80">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get In <span className="text-[#FFD700]">Touch</span>
                </h3>
                <p className="text-[#FFD700]/80 text-lg">
                  Have questions about our eyewear? We&apos;d love to hear from
                  you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" ref={formRef}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["firstname", "lastname"].map((field) => (
                    <div key={field} className="group">
                      <label
                        htmlFor={field}
                        className="text-sm uppercase tracking-widest text-[#FFD700] mb-3 block"
                      >
                        {field === "firstname" ? "First Name" : "Last Name"}{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id={field}
                          name={field}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-black/50 backdrop-blur-sm border-2 border-[#FFD700]/30 rounded-2xl px-6 py-4 text-[#FFD700] placeholder-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300 group-hover:border-[#FFD700]/50"
                          placeholder={`Enter your ${
                            field === "firstname" ? "first" : "last"
                          } name`}
                        />
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FFD700]/20 transition-all duration-300 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="text-sm uppercase tracking-widest text-[#FFD700] mb-3 block"
                  >
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 backdrop-blur-sm border-2 border-[#FFD700]/30 rounded-2xl px-6 py-4 text-[#FFD700] placeholder-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300 group-hover:border-[#FFD700]/50"
                      placeholder="your.email@example.com"
                    />
                    <Icon
                      icon="mdi:email"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FFD700]/50 group-hover:text-[#FFD700] transition-colors duration-300"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="text-sm uppercase tracking-widest text-[#FFD700] mb-3 block"
                  >
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 backdrop-blur-sm border-2 border-[#FFD700]/30 rounded-2xl px-6 py-4 text-[#FFD700] placeholder-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300 group-hover:border-[#FFD700]/50"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="text-sm uppercase tracking-widest text-[#FFD700] mb-3 block"
                  >
                    Message <span className="text-[#FFD700]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 backdrop-blur-sm border-2 border-[#FFD700]/30 rounded-2xl px-6 py-4 text-[#FFD700] placeholder-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none resize-none transition-all duration-300 group-hover:border-[#FFD700]/50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-400/10 border border-green-400/30 rounded-2xl p-4 text-green-400 text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Icon icon="mdi:check-circle" width={20} height={20} />
                      Thank you! We&apos;ll get back to you soon.
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-400/10 border border-red-400/30 rounded-2xl p-4 text-red-400 text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Icon icon="mdi:alert-circle" width={20} height={20} />
                      Something went wrong. Please try again.
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group/btn relative px-8 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 rounded-full text-black font-bold hover:from-yellow-300 hover:to-amber-300 transition-all duration-300 transform hover:shadow-2xl hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon
                          icon="mdi:send"
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          width={20}
                          height={20}
                        />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
