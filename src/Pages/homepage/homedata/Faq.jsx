import React, { useState } from "react";
import { HMSFAQ } from "../../../utils/Constants/hmsFAQ/Faq";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-[80%] mx-auto my-10">
      <h2 className="text-3xl font-bold mb-5 text-center">OUR FAQ</h2>
      <p className="text-center">
        {" "}
        Some questions about Tribe Business are asked frequently. We've answered
        the most of those{" "}
      </p>
      <p className="text-center mb-5">frequent questions below</p>

      <div className="flex flex-col gap-4">
        {HMSFAQ.map((faq) => (
          <div key={faq.id} className="shadow-sm  overflow-hidden">
            {/* Question */}
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between items-center p-4 bg-[#eaf4fc]  hover:bg-gray-200 font-medium text-left"
            >
              {faq.question}
              <span>
                {openId === faq.id ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </span>
            </button>

            {/* Answer */}
            {openId === faq.id && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
