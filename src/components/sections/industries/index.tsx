import { Typography } from "@/components/shared/typography";
import { content } from "@/data";
import Image from "next/image";
import React from "react";

const IndustriesSection = () => {
  return (
    <section
      id="contactUs"
      className="bg-white flex items-center justify-center py-12 sm:py-15 px-5 sm:px-20 xl:px-32"
    >
      <div className="w-full flex flex-col justify-center items-center lg:gap-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Typography
            size={"h1"}
            as={"h1"}
            className="text-black font-eurostile text-start sm:text-center"
          >
            Industries <span className="text-orange">We Empower</span>
          </Typography>
          <Typography className="text-dark-gray text-start sm:text-center w-full max-w-[900px]">
            We serve diverse industries by blending technology with strategy.
            Whether in health tech, logistics, or blockchain, our solutions are
            designed to help businesses innovate and scale.
          </Typography>
        </div>
        <div className="grid  lg:grid-cols-3 grid-row-3 justify-center items-center w-full max-w-[1100px] gap-6">
          {content.Industries.slice(0, 3).map((item, key) => {
            return (
              <div className="flex justify-around w-full" key={key}>
                <div className="flex flex-col gap-2 p-4 items-center justify-center  rounded-lg w-full lg:max-w-[320px]">
                  <Image
                    src={item.icon}
                    alt="blockchain"
                    width={100}
                    height={100}
                    className="rounded-full p-2 object-cover"
                  />
                  <Typography size={"h4"} as={"h4"} className="text-black">
                    {item.title}
                  </Typography>
                  <Typography
                    size={"lg"}
                    as={"p"}
                    className="text-dark-gray text-center"
                  >
                    {item.description}
                  </Typography>
                </div>
                <div className="w-[2px] h-[255px] lg:block hidden  bg-gradient-to-b from-transparent via-orange to-transparent" />
              </div>
            )
          })}
        </div>
        <div className="flex justify-center items-center w-full gap-6 lg:flex hidden">
          <div className="w-full max-w-[350px] h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent" />
          <div className="w-full max-w-[350px] h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent" />
          <div className="w-full  max-w-[350px] h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent" />
        </div>
        <div className="grid  lg:grid-cols-3 grid-row-3 justify-center items-center w-full max-w-[1100px] gap-6">
          {content.Industries.slice(3, 6).map((item, key) => {
            return (
              <div className="flex justify-around w-full" key={key}>
                <div className="flex flex-col gap-2 p-4 items-center justify-center  rounded-lg w-full lg:max-w-[320px]">
                  <Image
                    src={item.icon}
                    alt="blockchain"
                    width={100}
                    height={100}
                    className="rounded-full p-2 object-cover"
                  />
                  <Typography size={"h4"} as={"h4"} className="text-black">
                    {item.title}
                  </Typography>
                  <Typography
                    size={"lg"}
                    as={"p"}
                    className="text-dark-gray text-center"
                  >
                    {item.description}
                  </Typography>
                </div>
                <div className="w-[2px] h-[255px] lg:block hidden  bg-gradient-to-b from-transparent via-orange to-transparent" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
