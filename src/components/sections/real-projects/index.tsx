import { Typography } from "@/components/shared/typography";
import ProjectCarousel from "@/components/ui/crousal";
import { content } from "@/data";
import React from "react";

const RealProjects = () => {
  // Carousel images data
  const carouselImages = content?.carouselImages;

  return (
    <section
      id="portfolio"
      className="w-full bg-[url('/assets/svgs/real-projects-bg.svg')] bg-cover bg-center pt-24 pb-18.5"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3.5 mb-16">
          <div className="flex flex-col items-center">
            <Typography
              size={"h1"}
              as={"h1"}
              className="text-white font-eurostile text-center"
            >
              Real Projects. Real Results
            </Typography>
            <Typography
              size={"lg"}
              as={"p"}
              className="text-gray font-normal text-center mt-2 px-2 sm:px-0"
            >
              From MVPs for startups to scalable SaaS platforms for enterprises
            </Typography>
          </div>
          <hr className="w-3/4 max-w-[480px] border-b border-2 border-orange rounded-2xl" />
        </div>
      </div>

      {/* Carousel Full Width */}
      <div className="w-full">
        <ProjectCarousel images={carouselImages} />
      </div>
    </section>
  );
};

export default RealProjects;
