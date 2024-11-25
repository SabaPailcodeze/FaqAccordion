import React, { useState } from "react";
import Accordion from "../../atoms/Accordion/Accordion";

interface faqsProps {
  question: string;
  answer: string;
}

const FaqCont = () => {
  const Faqs: faqsProps[] = [
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 10 members",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: "You can reset your password from the account settings page.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "To delete your account, go to settings and click on 'Delete Account'.",
    },
    {
      question: "Do you provide additional support?",
      answer: "Yes we do provide additional support. Email us!",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const AccordionToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log(typeof Faqs[0]);

  return (
    <div className="flex-1 flex flex-col justify-center gap-[45px] FaqCont">
      <div className=" FAQ">
        <h1 className="text-[#1E1F36] font-sans font-bold text-[32px] leading-none ">
          FAQ
        </h1>
      </div>
      <div>
        {Faqs.map((faq, index) => (
          <Accordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => AccordionToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqCont;
