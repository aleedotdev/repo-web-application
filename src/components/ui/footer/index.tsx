import { Typography } from "@/components/shared/typography";
import { Icon } from "@iconify/react";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black max-width-container px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main Title */}
      <div className="py-10 sm:py-14 md:py-16">
        <Typography
          size={"h1"}
          as={"h1"}
          className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-eurostile"
        >
          Stay Connected
        </Typography>
      </div>
      {/* Divider Line */}
      <div className="w-full max-width-section h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-6xl py-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8 text-left">
          {/* Contact */}
          <div className="flex items-start gap-4">
            <Icon icon="mage:phone-call-fill" width={42} height={42} className="text-white" />
            <div className="flex flex-col gap-2">
              <Typography
                size={"h3"}
                as={"h3"}
                className="font-eurostile text-white text-xl sm:text-2xl"
              >
                Contact
              </Typography>
              <Typography
                size={"xl"}
                as={"p"}
                className="text-gray text-base sm:text-lg hover:text-orange"
              >
                <a
                  href="tel:+92 306 9470169"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  +92 306 9470169
                </a>
              </Typography>
              <Typography
                size={"xl"}
                as={"p"}
                  className="text-gray text-base sm:text-lg hover:text-orange"
              >
                  <a
                  href="tel:+92 321 0000572"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                +92 321 0000572
                </a>
              </Typography>
            </div>
          </div>
          {/* Email Address */}
          <div className="flex items-start gap-4">
            <Icon icon="clarity:envelope-solid" width={41} height={41} className="text-white" />

            <div className="flex flex-col gap-2">
              <Typography
                size={"h3"}
                as={"h3"}
                className="font-eurostile text-white text-xl sm:text-2xl"
              >
                Email Address
              </Typography>
              <Typography
                size={"xl"}
                as={"p"}
                className="text-gray text-base sm:text-lg break-words"
              >
                <a
                  href="mailto:info@codeencoders.com"
                  className="hover:text-orange"
                >
                  info@codeencoders.com
                </a>
              </Typography>
            </div>
          </div>
        </div>
        {/* Right Column - Location */}
        <div className="flex items-start gap-4">
          <div>
            <Icon
              icon="gis:location-poi"
              width={42} height={42} className="text-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              size={"h3"}
              as={"h3"}
              className="font-eurostile text-white"
            >
              Location
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 items-start justify-start">
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-white font-eurostile-semibold leading-relaxed text-nowrap"
                >
                  USA HQ:
                </Typography>
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-gray font-normal font- leading-relaxed"
                >
                  30 N Gould St Ste R Sheridan, WY 82801, USA
                </Typography>
              </div>
              <hr className="text-gray" />
              <div className="flex flex-col sm:flex-row gap-3 items-start justify-start">
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-white font-eurostile-semibold leading-relaxed text-nowrap"
                >
                  UAE HQ:
                </Typography>
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-gray font-normal leading-relaxed"
                >
                  Sharjah Research & Technology Innovation Park Zone (SRTI)
                  Sharjah, United Arab Emirates
                </Typography>
              </div>
              <hr className="text-gray" />
              <div className="flex flex-col sm:flex-row gap-3 items-start justify-start ">
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-white font-eurostile-semibold leading-relaxed text-nowrap"
                >
                  PAK HQ:
                </Typography>
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-gray font-normal leading-relaxed"
                >
                  102-Y Block, DHA Phase 3, Lahore Pakistan
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <div className="w-full max-width-section h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-2 pt-6 pb-8">
        {/* Copyright */}
        <Typography size={"sm"} as={"p"} className="text-gray">
          © 2025 CodeEncoders. All rights reserved.
        </Typography>
        {/* Social Media Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/codeencoders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center"
          >
            <Icon
              icon="ic:baseline-facebook"
              className="text-2xl text-white"
            />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/90845054/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center"
          >
            <Icon icon="mdi:linkedin" className="text-2xl text-white" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/codeencoders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center"
          >
            <Icon icon="mdi:instagram" className="text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
};
export default Footer;