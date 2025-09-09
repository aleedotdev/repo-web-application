"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Typography } from "@/components/shared/typography";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  duration?: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  duration = 300,
}) => {
  return (
    <div
      className={`w-full border-t border-b ${
        isOpen
          ? "border-orange shadow-[0_0_12px_rgba(255,165,0,0.35)]"
          : "border-lighter-gray"
      } rounded-xl sm:rounded-2xl overflow-hidden bg-black backdrop-blur-sm transition-all`}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-4 text-left flex justify-between items-start cursor-pointer transition-colors duration-300 group"
      >
        <Typography
          size="lg"
          as="p"
          className="text-white font-medium pr-2 sm:pr-4 leading-relaxed flex-1"
        >
          {question}
        </Typography>
        <div
          className={`flex-shrink-0 transition-transform duration-300 ml-2 self-start mt-1 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Icon
            icon={isOpen ? "mdi:minus" : "mdi:plus"}
            className="text-white transition-colors cursor-pointer"
            width="16"
            height="16"
          />
        </div>
      </button>

      {/* Content using grid trick */}
      <div
        className="grid transition-all ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transitionDuration: `${duration}ms`,
        }}
      >
        <div className="overflow-hidden">
          <div className="px-3 pb-3 pt-0 sm:px-4 sm:pb-4 lg:px-6 lg:pb-5 opacity-100 transition-opacity duration-300">
            <Typography
              size="md"
              as="p"
              className="text-gray leading-relaxed font-medium text-sm sm:text-base"
            >
              {answer}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
  className?: string;
  transitionDuration?: number;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = "",
  transitionDuration = 300,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== -1 ? [defaultOpenIndex] : []
  );

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      allowMultiple
        ? prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
        : prev.includes(index)
          ? []
          : [index]
    );
  };

  return (
    <div className={`space-y-3 sm:space-y-4 w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleAccordion(index)}
          duration={transitionDuration}
        />
      ))}
    </div>
  );
};

export default Accordion;
