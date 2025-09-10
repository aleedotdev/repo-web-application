import React from "react";
import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";

const TrustPriority = () => {
  return (
    <section className="bg-white flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6">
      <div className="w-full max-width-section grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1 pl-0 lg:pl-20 ">
          <div className="w-full max-w-lg lg:max-w-none text-center lg:text-left">
            <Typography
              as="h2"
              size="h1"
              className="leading-none font-eurostile text-black pb-3"
            >
              Your Trust is Our Priority
            </Typography>

            <Typography
              size="lg"
              as="p"
              className="text-dark-gray leading-relaxed pb-6"
            >
              We believe in building software and relationships that last. From
              idea to implementation, transparency and trust guide every step.
            </Typography>
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

        {/* Right Side - Image */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="flex justify-center relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            <Image
              src="/assets/images/hand-shake.webp"
              alt="Business handshake representing trust and partnership"
              width={680}
              height={520}
              className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[680px] rounded-xl sm:rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPriority;
