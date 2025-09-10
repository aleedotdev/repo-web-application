"use client";
import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";

const LetsStarted = () => {
  return (
    <section className="bg-white flex items-center justify-center py-12 sm:py-15 p-4 sm:p-6 px-5 sm:px-20 xl:px-36">
      <div className="max-width-section w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 items-center justify-between">
        {/* Left Side - Logo/Image */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <Image
              src="/assets/images/get-started.webp"
              alt="Code Encoders Logo"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center lg:justify-start">
          <div>
            <div className="flex flex-col gap-2">
            <Typography
              size="h5"
              as={"h5"}
              className="text-orange font-eurostile-semibold tracking-wider uppercase mb-1"
            >
              GET STARTED
            </Typography>

            <Typography
              as="h1"
              size="h1"
              className="leading-none font-eurostile mb-0"
            >
              Get Started With
            </Typography>
            </div>

            <Typography
              as="h1"
              size="h1"
              className="leading-none text-orange font-eurostile mb-3"
            >
              Code Encoders
            </Typography>

            <Typography
              size="lg"
              className="text-dark-gray max-w-md leading-relaxed pb-6"
            >
              From discovery to deployment, and from development to deployment
              we're with you at every step. Let's turn your idea into a powerful
              digital product that works seamlessly and scales effortlessly.
            </Typography>

            <Button
              onClick={() => scrollToSection("contactUs")}
              className="px-8 py-4 w-full sm:w-fit text-lg font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsStarted;
