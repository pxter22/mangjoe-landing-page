"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks, contactInfo } from "@/lib/constants";

type Category = "general" | "food-truck" | "food-court";

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "Are you still operating the food trucks?",
    answer:
      "Yes! We still operate our food trucks at different events, such as The Great Big BBQ Festival, Philippine International Day, and the Asian Food Festival.",
    category: "food-truck",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    question: "Are there any allergens in your food?",
    answer:
      "Yes. Food prepared at Mang Joe's contains sesame, fish, mollusc, and peanuts. Please avoid consuming our food if you are allergic to any of these ingredients. Additionally, please note that our food is not halal.",
    category: "general",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    question: "Where can I find your food trucks?",
    answer:
      "Follow us on Facebook to get the newest updates on locations and events we'll be attending.",
    category: "food-truck",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    question: "Do I need to book a table?",
    answer:
      "No, you don't need to since we operate in a food court.",
    category: "food-court",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    question: "Can I pre-order?",
    answer:
      "Due to food court rules, we're unable to accept pre-orders.",
    category: "food-court",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    question: "Do you accept card payments?",
    answer:
      "Yes, we accept most major credit and debit cards.",
    category: "general",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Our specials sometimes include Chop Suey, a delicious stir-fried vegetable dish. Availability varies depending on the day.",
    category: "general",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    question: "Do you offer catering services?",
    answer:
      "Currently, we do not offer catering services.",
    category: "food-court",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    question: "Are your food trucks kid-friendly?",
    answer:
      "Definitely! We have meals that kids enjoy, and our trucks are welcoming for families.",
    category: "food-truck",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    question: "Do you have gluten-free options?",
    answer:
      "No, sorry we do not have gluten-free options.",
    category: "general",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "general", label: "General" },
  { key: "food-truck", label: "Food Truck" },
  { key: "food-court", label: "Food Court" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("general");

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter((faq) => faq.category === activeCategory);

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-bbq-charcoal-dark mb-4 sm:mb-5">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-bbq-charcoal-medium px-4 max-w-2xl mx-auto">
            These are the most commonly asked questions about Mang Joe&apos;s. Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-bbq-charcoal-dark underline hover:text-bbq-orange-rich transition-colors"
            >
              Contact our friendly team!
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setOpenIndex(null);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-bbq-charcoal-dark text-white shadow-md"
                    : "bg-white text-bbq-charcoal-dark border-2 border-bbq-charcoal-dark/20 hover:border-bbq-charcoal-dark/40"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-2 sm:space-y-3">
            <AnimatePresence mode="wait">
              {filteredFAQs.map((faq, index) => {
                const globalIndex = faqData.findIndex((item) => item === faq);
                const isOpen = openIndex === globalIndex;
                
                return (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`bg-white rounded-lg border transition-all duration-300 overflow-hidden ${
                      isOpen ? "border-gray-200" : "border-gray-200 hover:border-bbq-orange-rich"
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(globalIndex)}
                      className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-left flex items-center gap-4 focus:outline-none rounded-lg"
                      aria-expanded={isOpen}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center text-bbq-charcoal-medium">
                        {faq.icon}
                      </div>
                      
                      {/* Question */}
                      <span className="flex-1 font-semibold text-sm sm:text-base md:text-lg text-bbq-charcoal-dark text-left">
                        {faq.question}
                      </span>
                      
                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-bbq-charcoal-dark"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-0 pl-14 sm:pl-16">
                            <p className="text-sm sm:text-base text-bbq-charcoal-medium leading-relaxed">
                              {faq.answer}
                              {globalIndex === 2 && (
                                <span>
                                  {" "}
                                  <a
                                    href={socialLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-bbq-orange-rich hover:text-bbq-orange-fire underline font-semibold transition-colors"
                                  >
                                    Facebook
                                  </a>
                                </span>
                              )}
                              {globalIndex === 4 && (
                                <span>
                                  {" "}
                                  <a
                                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                                    className="text-bbq-orange-rich hover:text-bbq-orange-fire underline font-semibold transition-colors"
                                  >
                                    {contactInfo.phone}
                                  </a>
                                </span>
                              )}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

