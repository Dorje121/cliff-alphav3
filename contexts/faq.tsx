"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {

  const faqs: FAQItem[] = [
    {
      question: "Where are your glasses made?",
      answer: "All our glasses are meticulously handcrafted by skilled artisans, ensuring each pair meets our high standards."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support via email at info@cliffeyewear.com"
    },
    {
      question: "What makes Cliff Eyewear unique?",
      answer: "Cliff Eyewear stands out due to its combination of traditional craftsmanship and modern design."
    },
    {
      question: "Do you offer customization options?",
      answer: "Yes, we offer customization options for our eyewear. You can choose from a variety of frame styles, colors, and lens options to create your perfect pair."
    }
  ];


  return (
    <div className="w-full py-16 mb-28">
      <div className="w-full mb-12 pl-8">
        <h2 className="text-4xl md:text-8xl montserrat text-[#FFD700]">Frequently Asked Questions</h2>
      </div>
      
      <div className="max-w-[92rem] w-full mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-full px-6 py-5 flex-1 flex flex-col">
              <div className="flex items-start space-x-4">
                <Icon 
                  icon="mdi:help-circle" 
                  className="w-8 h-8 text-2xl text-amber-400 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-amber-300/90 text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      
      
    </div>
  );
};

export default FAQ;