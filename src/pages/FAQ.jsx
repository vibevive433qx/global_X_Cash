import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  const faqs = [
    {
      question: "How does the exchange work?",
      answer: "The process is simple. You provide your gift card details and your Cashapp tag. Our team verifies the card balance and, once confirmed, we transfer 4 times the value of your card directly to your Cashapp account."
    },
    {
      question: "Why do I get 4x the amount back?",
      answer: "Our platform is sponsored by a group of anonymous charitable donors who want to provide financial assistance. They contribute the extra funds to help individuals get more value for their gift cards."
    },
    {
      question: "How long does the transfer take?",
      answer: "Typically, the verification and transfer process takes between 10 to 30 minutes. In some cases, it may take up to an hour depending on the card type and volume of requests."
    },
    {
      question: "What gift cards do you accept?",
      answer: "We accept most major gift cards, including Apple, Amazon, Visa, Xbox, PlayStation, Vanilla, and many others. You can see the full list on the Redeem page."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use 256-bit SSL encryption to protect all your data. Your gift card information is sent directly to our secure verification server and is never stored on our platform once processed."
    },
    {
      question: "Is there a limit on how many cards I can exchange?",
      answer: "Currently, there is no limit on the number of cards you can exchange. However, individual card amounts must be between $25 and $1000."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-primary/10 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg">Everything you need to know about our gift card exchange program.</p>
        </div>

        <div className="space-y-4 mb-24">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{faq.question}</span>
                {activeTab === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {activeTab === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-secondary rounded-[40px] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Our support team is available 24/7 to help you with any issues or inquiries you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg">support@globalxcash.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg">Live Chat (Available 24/7)</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                <textarea placeholder="Your Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"></textarea>
                <button type="submit" className="w-full btn-primary py-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
