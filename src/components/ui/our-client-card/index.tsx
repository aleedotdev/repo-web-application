import { Typography } from "@/components/shared/typography";
import { TestimonialCardProps } from "@/types";
import { Icon } from "@iconify/react";
import Image from "next/image";

const OurClientsCard = ({ testimonial }: TestimonialCardProps) => {
  const data = testimonial;

  return (
    <div className="relative w-full h-full flex-shrink-0 min-h-[200px] md:min-h-[480px]">
      {/* Fake Border Layer */}
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)",
          backgroundColor: "#e5e7eb",
          borderRadius: "16px",
        }}
      ></div>

      <div
        className="absolute inset-[1px]"
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)",
          backgroundColor: "white",
          borderRadius: "14px",
        }}
      ></div>

      {/* Actual Content */}
      <div
        className="relative px-5 py-4 sm:px-7.5 sm:py-6.5 h-full flex flex-col justify-between"
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)",
          borderRadius: "16px",
        }}
      >
        {/* Top Section - Rating and Text */}
        <div className="flex flex-col gap-5">
          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <Typography
              size="h4"
              as="h4"
              className="font-eurostile pt-0.5 text-dark-black flex items-center"
            >
              {data.rating}
            </Typography>

            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  icon="material-symbols:star"
                  width="22"
                  height="22"
                  className="text-yellow"
                />
              ))}
            </div>
          </div>

          <hr className="w-full text-gray" />

          {/* Testimonial Text */}
          <div className="flex-1 min-h-[230px] md:min-h-[286px] flex items-start">
            <Typography
              size="lg"
              as="p"
              className="text-dark-gray leading-relaxed font-normal"
            >
              {data.text}
            </Typography>
          </div>
        </div>

        {/* Bottom Section - User Info (Always at bottom) */}
        <div className="flex items-center gap-3 mt-6">
          <Image
            src={data.avatar}
            alt={data.name}
            height={52}
            width={52}
            className="w-10 h-10 sm:w-13 sm:h-13 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h4 className="text-sm sm:text-base font-semibold text-black truncate">
              {data.name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {data.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientsCard;
