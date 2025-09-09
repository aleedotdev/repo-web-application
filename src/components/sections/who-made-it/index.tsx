import React from "react";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";

const WhoMadeItHappen = () => {
  return (
    <section
      id="about"
      className="w-full pb-6 pt-24 sm:pb-8 sm:pt-24 md:pb-12 md:pt-26 lg:pb-16 lg:pt-28 xl:pb-20 xl:pt-38 px-5 sm:pl-20 xl:pl-32 flex justify-center items-center bg-[url('/assets/svgs/who-made-it-bg.svg')] bg-cover bg-center"
    >
      <div className="max-width-section w-full flex flex-col lg:flex-row justify-between gap-10 items-center">
        {/* Left Side - Content */}
        <div className="flex justify-center lg:justify-start items-center">
          <div>
            <Typography
              as="h1"
              size="h1"
              className="leading-tight font-eurostile whitespace-pre-wrap text-white mb-2"
            >
              We are Professionals
            </Typography>
            <Typography
              as="h1"
              size="h1"
              className="leading-tight text-light-orange font-eurostile mb-2"
            >
              Who Made It Happen.
            </Typography>

            <Typography
              size="lg"
              as={"p"}
              className="text-gray max-w-md leading-relaxed"
            >
              At Code Encoders, we're more than developers — we're your digital
              partners. Our team blends innovation, agility, and technical depth
              to craft business-ready software. We've earned trust by delivering
              custom solutions that are scalable, secure, and aligned with
              business goals.
            </Typography>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full flex items-center justify-center lg:justify-end">
          {/* <div className="relative w-full"> */}
          <Image
            src="/assets/images/we-are-professsional.webp"
            alt="Professional Development Illustration"
            width={718}
            height={541}
            className=""
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhoMadeItHappen;
