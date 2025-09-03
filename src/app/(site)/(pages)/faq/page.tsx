"use client";

import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "What services does your company provide ?",
        answer:
            "We specialize in digital transformation, website development, and consulting services to help businesses grow online.",
    },
    {
        question: "How long does it take to build a website ?",
        answer:
            "The timeline depends on the project complexity, but typically ranges from 2 to 8 weeks for most websites.",
    },
    {
        question: "Do you offer post-launch support ?",
        answer:
            "Yes, we provide ongoing maintenance and support packages to ensure your website or application runs smoothly.",
    },
    {
        question: "Can you customize solutions for my business ?",
        answer:
            "Absolutely! We tailor our solutions to meet the unique requirements of your business and industry.",
    },
    {
        question: "What services does your company provide ?",
        answer:
            "We specialize in digital transformation, website development, and consulting services to help businesses grow online.",
    },
    {
        question: "How long does it take to build a website ?",
        answer:
            "The timeline depends on the project complexity, but typically ranges from 2 to 8 weeks for most websites.",
    },
    {
        question: "Do you offer post-launch support ?",
        answer:
            "Yes, we provide ongoing maintenance and support packages to ensure your website or application runs smoothly.",
    },
    {
        question: "Can you customize solutions for my business ?",
        answer:
            "Absolutely! We tailor our solutions to meet the unique requirements of your business and industry.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index  ? null : index);
    };

    return (
        <section className="pt-60 pb-20 bg-gray-50 flex items-center justify-center bg-[#f3f4f62e]">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 px-6 py-12 ">
                <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2 mb-10 text-center">
                    Frequently Asked Questions
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#ccc] rounded-md bg-white transition-all"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-dark hover:bg-gray-50"
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${openIndex === index  ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
