"use client";

import { Typography } from "@/components/shared/typography";
import React from "react";
import CountUp from "react-countup";

const OurUsers = () => {
  return (
    <section className="bg-white w-full max-width-container flex justify-center items-center px-5 sm:px-20 xl:px-32">
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-width-section text-black">
        {/* Success Stories */}
        <div className="flex flex-col items-center text-center">
          <Typography
            size="h2"
            as="h2"
            className="font-eurostile leading-normal"
          >
            <CountUp end={10} duration={3} />
            k+
          </Typography>
          <Typography size="md" as="p">
            Success Stories
          </Typography>
        </div>

        {/* Professional Team */}
        <div className="flex flex-col items-center text-center">
          <Typography
            size="h2"
            as="h2"
            className="font-eurostile leading-normal"
          >
            <CountUp end={50} duration={3} />+
          </Typography>
          <Typography size="md" as="p">
            Professional Team
          </Typography>
        </div>

        {/* Worldwide Clients */}
        <div className="flex flex-col items-center text-center">
          <Typography
            size="h2"
            as="h2"
            className="font-eurostile leading-normal"
          >
            <CountUp end={30} duration={3} />+
          </Typography>
          <Typography size="md" as="p">
            Worldwide Clients
          </Typography>
        </div>

        {/* Projects Delivered Globally */}
        <div className="flex flex-col items-center text-center">
          <Typography
            size="h2"
            as="h2"
            className="font-eurostile leading-normal"
          >
            <CountUp end={100} duration={3} />+
          </Typography>
          <Typography size="md" as="p">
            Projects Delivered Globally
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default OurUsers;
