import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full pb-6 pt-24 sm:pb-8 sm:pt-24 md:pb-12 md:pt-26 lg:pb-16 lg:pt-28 xl:pb-20 xl:pt-38 px-5 sm:px-20 xl:pl-32 flex justify-center items-center bg-[url('/assets/svgs/hero-bg.svg')] bg-cover bg-center">
      <div className="w-full max-width-section">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* left side - with more padding */}
          <div className="w-full flex flex-col text-center lg:text-left">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <Typography
                    size={"lg"}
                    as={"p"}
                    className="text-blue font-eurostile-semibold text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Let's Build
                  </Typography>
                  <Typography
                    size={"h1"}
                    as={"h1"}
                    className="font-eurostile text-white leading-tight"
                  >
                    Custom Web Applications That Drive Business Growth
                  </Typography>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6">
                  <Typography
                    size={"xl"}
                    as={"p"}
                    className="text-gray font-normal"
                  >
                    Scalable. Secure. Tailored for You.
                  </Typography>
                  <Typography
                    size={"xl"}
                    as={"p"}
                    className="text-gray font-normal leading-relaxed"
                  >
                    We build robust web applications for startups and businesses
                    ready to scale — engineered for performance, user
                    experience, and market success.
                  </Typography>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start items-center">
                <a
                  href="https://calendly.com/syedmustafah/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                    Book An Appointment
                  </Button>
                </a>
              </div>
            </div>
          </div>
          {/* right side - closer to edge, no right padding */}
          <div className="w-full flex justify-center lg:justify-end px-4 sm:px-6 md:px-8 lg:px-0">
            <Image
              src={"/assets/images/hero-img.webp"}
              width={590}
              height={602}
              alt="hero-image"
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
