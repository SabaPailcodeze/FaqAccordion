import { AccordionProps } from "./AccordionProps";
import arrowDown from "./../../assets/arrowDown.svg";

const Accordion = ({ question, answer, isOpen, onToggle }: AccordionProps) => {
  return (
    <div className="Accordion">
      <div className="py-5 border-b cursor-pointer w-[80%]" onClick={onToggle}>
        <div
          className={`flex items-center justify-between  hover:text-[#F47B56]  ${
            isOpen && "font-bold"
          }`}
        >
          <span className="text-[#4B4C5F] text-[14px] hover:text-[#F47B56]">
            {question}
          </span>
          <img
            src={arrowDown}
            alt="arrow"
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
        <div
          className={`${
            isOpen && "mt-3"
          } transition-all duration-300 ease-in-out `}
        >
          {isOpen && (
            <p className="text-[#787887] text-[12px] leading-[18px] max-w-[270px]">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
