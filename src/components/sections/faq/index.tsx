"use client";
import { Typography } from "@/components/shared/typography";
import Accordion from "@/components/ui/accordian";
import { content } from "@/data";
import React from "react";

const Faq = () => {
  const faqData = content?.faqData;

  return (
    <section className="bg-black flex justify-center items-center py-8 px-4 sm:py-12 sm:px-6 lg:px-10 lg:py-16 bg-[url('/assets/svgs/faq-bg-sm.svg')] sm:bg-[url('/assets/svgs/faq-bg.svg')] bg-cover bg-center min-h-[500px] sm:min-h-[600px]">
      <div className="bg-faq-gradient w-full max-w-[1600px] rounded-xl sm:rounded-2xl shadow-2xl py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 xl:px-22">
        <div className="max-width-section flex flex-col justify-center gap-8 sm:gap-10 lg:gap-12 lg:flex-row lg:justify-between lg:items-start">
          {/* Title Section */}
          <div className="space-y-2 lg:flex-shrink-0 lg:max-w-sm">
            <Typography
              size={"lg"}
              as={"p"}
              className="text-blue font-eurostile leading-4 w-fit text-sm sm:text-base relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-transparent after:mt-0"
            >
              FAQs
            </Typography>

            <Typography
              size={"h1"}
              as={"h1"}
              className="text-white font-eurostile leading-tight"
            >
              Frequently
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Asked
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Questions
            </Typography>
          </div>

          {/* Accordion Section */}
          <div className="flex-1 lg:max-w-[700px]">
            <Accordion
              items={faqData}
              defaultOpenIndex={0}
              allowMultiple={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
