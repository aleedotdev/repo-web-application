"use client";

import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { scrollToSection } from "@/utils/scrollToSection";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShow(false);
      } else {
        // scrolling up → show
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="flex justify-center">
        <div
          className={`max-width-container fixed top-0 w-full transition-transform duration-500 z-50 ${
            show ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full mt-5 flex justify-center items-center">
            <div className="w-[95%] bg-shade-black/90 py-2 pr-2 pl-7.5 rounded-[14px] flex justify-between items-center">
              <a
                className="flex-shrink-0"
                href="https://codeencoders.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/svgs/logo.svg"
                  width={160}
                  height={26}
                  alt="logo"
                />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex w-full justify-center gap-12.5 items-center">
                <button
                  className="cursor-pointer"
                  onClick={() => scrollToSection("services")}
                >
                  <Typography
                    size="lg"
                    as="p"
                    className="text-white font-normal hover:text-light-orange transition-colors duration-300"
                  >
                    Services
                  </Typography>
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  <Typography
                    size="lg"
                    as="p"
                    className="text-white font-normal hover:text-light-orange transition-colors duration-300"
                  >
                    About
                  </Typography>
                </button>
                <a
                  href="https://codeencoders.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Typography
                    size="lg"
                    as="p"
                    className="text-white font-normal hover:text-light-orange transition-colors duration-300"
                  >
                    Portfolio
                  </Typography>
                </a>
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block">
                <Button
                  onClick={() => scrollToSection("contactUs")}
                  className="w-fit"
                >
                  Contact Us
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                <Icon
                  icon={isSidebarOpen ? "mdi:close" : "mdi:menu"}
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isSidebarOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
