"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Send } from "lucide-react";
import CTA from './CTA'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    const { name, email, subject, message } = formData;
    const mailtoSubject = encodeURIComponent(
      subject || "Contact from Cliff Eyewear Website"
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:info@cliffeyewear.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Simulate form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold font-ramro mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about our eyewear? Want to learn more about our
            products? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex justify-center flex-col  md:flex-row-reverse  ">
          {/* Contact Form */}
          <div className=" right w-[100%] md:w-[50%] max-w-2xl rounded-2xl p-8 ">
            <h2 className="text-3xl font-bold font-ramro mb-8 text-white">
              Send us a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your needs, questions, or feedback..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-600/50 rounded-lg">
                  <p className="text-green-400 text-center">
                    Thank you! Your default email client should open with your
                    message.
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
                className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-white cursor-pointer py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
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

              <p className="text-sm text-gray-500 text-center">
                * Required fields. Your message will open in your default email
                application.
              </p>
            </form>
          </div>
          <div className="left  h-[100vh] w-[100%] md:w-[40%] pt-20">
            <div className="parnt">
              <div className="para">
                Reach out today to discover how our custom gate designs can transform your property, combining security with style. We&apos;re here to help safeguard your future and create a lasting impression.
              </div>

              <div className="sociallink flex justify-start gap-8 items-center py-10">
                <div className="box w-[40px] h-[40px]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#71717B" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" /></svg>
                </div>
                <div className="box w-[40px] h-[40px]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#71717B" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" /></svg>
                </div>
                <div className="box w-[40px] h-[40px]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" stroke="#71717B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" /><path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573z" /><path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0" /></g></svg>
                </div>
              </div>
              <div className="container  w-[100%] flex flex-col justify-center md:items-start items-center gap-5">

                {/* First Box - Contact Info */}
                <div className="box w-[90%] h-[150px] bg-[#18181B] rounded-lg flex justify-start items-center px-6">
                  <div className="flex justify-between items-center gap-6 text-white w-full">

                    {/* Phone */}
                    <div className="flex flex-col items-center gap-3">
                      <FaPhoneAlt className="text-zinc-500 text-2xl" />
                      <div>

                        <p className="text-[0.9rem] font-medium text-center">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center gap-3">
                      <FaEnvelope className="text-zinc-500 text-2xl" />
                      <div>

                        <p className="text-[0.9rem] font-medium break-words break-all text-center">contact@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Box - Address or Message Prompt */}
                <div className="box w-[90%] h-[150px] bg-[#18181B] rounded-lg flex justify-start items-center px-6">
                  <div className="flex justify-between items-center gap-6 text-white w-full">

                    {/* Address */}
                    <div className="flex flex-col items-center gap-3">
                      <FaMapMarkerAlt className="text-zinc-500 text-2xl" />
                      <div>

                        <p className="text-[0.9rem] font-medium text-center">123 Main Street, City, ZIP</p>
                      </div>
                    </div>

                    {/* Optional: Quick Message Prompt (if needed) */}
                    {/* You can replace this with another info block or social media icons */}
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-gray-400">We&apos;re here to help</p>
                      <p className="text-[0.9rem] font-medium">Feel free to reach out anytime.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


        <CTA />
      </div>
    </div>
  );
};

export default Contact;
