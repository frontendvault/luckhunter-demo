import React, { useState } from "react";

const FAQ = () => {
  // FAQs data
  const faqs = [
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
    { question: "What Is Luck Hunter?", answer: "You stroll through lavish rooms, engage with players from the globe, and play games that feel as tangible as the cards in your hand." },
   ];

  const [visibleCount, setVisibleCount] = useState(4); // Tracks the number of visible FAQs
  const [openIndex, setOpenIndex] = useState(null); // Tracks the currently open accordion

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMore = () => {
    setVisibleCount(visibleCount + 4); // Show 4 more FAQs when "Show More" is clicked
  };

  return (
    <div className="faq-bg text-white">
    <div className=" md:w-[1320px] text-center mx-auto px-4 py-8  ">
      <h2 className="font-bold  mb-8 -mt-24">Frequently Asked Questions</h2>
      <p>Nulla lacinia, mauris et condimentum dapibus, nisl mi commodo velit,</p>

      <div className="mt-6">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div key={index} className="overflow-hidden hover:bg-gradient-to-b from-sky-500/20 to-sky-900/20 p-4 border-b border-gray-600 ">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-2xl  "
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              <div className="px-4 py-3 text-lg text-left ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {visibleCount < faqs.length && (
        <div className="text-center mt-6">
          <button
            onClick={showMore}
            className="px-10 py-3 text-white common-btn-md lg:h-[150px] md:w-[350px]"
          >
            View More
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default FAQ;
