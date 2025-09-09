import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import React from "react";

const WhatWeProvide = () => {
  return (
    <section
      id="services"
      className="w-full px-5 sm:px-10 pb-6 pt-24 sm:pb-8 sm:pt-24 md:pb-12 md:pt-26 lg:pb-16 lg:pt-28 xl:pb-20 xl:pt-38 flex justify-center items-center bg-[url('/assets/svgs/what-we-provide-bg.svg')] bg-cover bg-center"
    >
      <div className="flex flex-col gap-15 max-width-section w-full">
        <div className="flex flex-col items-center gap-2">
          <Typography
            size={"h1"}
            as={"h1"}
            className="text-white font-eurostile leading-none"
          >
            What We Provide
          </Typography>
          <Typography
            size={"lg"}
            as={"p"}
            className="text-gray font-normal leading-[24px]"
          >
            Web Development Services Built For Modern Businesses
          </Typography>
        </div>
        <div className="flex flex-col gap-5 sm:gap-17.5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center items-center justify-center gap-5 sm:gap-7.5">
            <div className="flex flex-col gap-5 sm:gap-7.5">
              <div className="sm:min-h-[254px] bg-black w-full flex flex-col gap-0.5 rounded-[12px] lg:rounded-[28px] border border-orange py-5 px-6 sm:py-6 lg:py-9 lg:px-10">
                <Typography
                  size={"h3"}
                  as={"h3"}
                  className="text-white font-eurostile text-start sm:max-w-[280px]"
                >
                  Custom Web Applications
                </Typography>
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-gray sm:max-w-[325px]"
                >
                  Build powerful applications tailored to your unique business
                  processes. Secure, scalable, and custom-coded to perfection.
                </Typography>
              </div>
              <div className="flex flex-col gap-0.5 rounded-[12px] lg:rounded-[28px] bg-white py-5 px-6 sm:py-6 lg:py-9 lg:px-10">
                <Typography
                  size={"h3"}
                  as={"h3"}
                  className="text-black font-eurostile text-start max-w-[280px]"
                >
                  Responsive Web Development
                </Typography>
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-dark-gray max-w-[325px]"
                >
                  Mobile-first, fast-loading websites that perform flawlessly
                  across all devices.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:gap-7.5">
              <div className="flex flex-col gap-0.5 rounded-[12px] lg:rounded-[28px] bg-white py-5 px-6 sm:py-6 lg:py-9 lg:px-10">
                <Typography
                  size={"h3"}
                  as={"h3"}
                  className="text-black font-eurostile text-start"
                >
                  E-Commerce Solutions
                </Typography>
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-dark-gray sm:max-w-[528px]"
                >
                  Custom online stores designed to convert — with user-friendly
                  checkout, admin dashboards, and seamless inventory control.
                </Typography>
              </div>
              <div className="flex flex-col xl:flex-row gap-5 sm:gap-7.5">
                <div className="flex flex-col gap-0.5 lg:min-h-[290px] rounded-[12px] lg:rounded-[28px] bg-white py-5 px-6 sm:py-6 lg:py-9 lg:px-10">
                  <Typography
                    size={"h3"}
                    as={"h3"}
                    className="text-black font-eurostile text-start"
                  >
                    UI/UX Design
                  </Typography>
                  <Typography
                    size={"lg"}
                    as={"p"}
                    className="text-dark-gray lg:max-w-[184px]"
                  >
                    Interfaces that users love. We craft engaging user
                    experiences that drive results.
                  </Typography>
                </div>
                <div className="flex flex-col gap-0.5 lg:min-h-[290px] rounded-[12px] lg:rounded-[28px] bg-white py-5 px-6 sm:py-6 lg:py-9 lg:px-10">
                  <Typography
                    size={"h3"}
                    as={"h3"}
                    className="text-black font-eurostile text-start"
                  >
                    SaaS Development
                  </Typography>
                  <Typography
                    size={"lg"}
                    as={"p"}
                    className="text-dark-gray lg:max-w-[233px]"
                  >
                    From MVP to full-scale SaaS platforms, we help you build
                    recurring-revenue digital products.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <a
              href="https://calendly.com/syedmustafah/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="!w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                Book An Appointment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
