"use client";

import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/shared/button";
import { SidebarProps } from "@/types";
import { scrollToSection } from "@/utils/scrollToSection";
import useClickOutside from "@/hooks/useOutsideClick";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Use custom hook
  useClickOutside(sidebarRef, onClose, isOpen);

  useLockBodyScroll(isOpen);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300" />
      )}

      <div
        ref={sidebarRef}
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-80 bg-shade-black z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6">
            <Image
              src={"/assets/svgs/logo.svg"}
              width={150}
              height={30}
              alt="logo"
            />
            <button
              className="p-2 text-white hover:text-gray-300 transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>
          <hr className="w-full border-t border-white/10 mb-7" />

          {/* Sidebar Navigation */}
          <nav className="flex flex-col gap-8">
            <div className="flex flex-col justify-center items-center gap-8 px-6 py-4">
              {["services", "about", "portfolio"].map((section) => (
                section === "portfolio" ? (
                  <Link
                    key={section}
                    href="https://www.codeencoders.com/portfolio"
                    target="_blank"
                    className="cursor-pointer"
                    onClick={onClose}
                  >
                    <Typography
                      size="xl"
                      as="p"
                      className="text-white font-normal hover:text-light-orange transition-colors duration-300"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Typography>
                  </Link>
                ) : (
                  <button
                    key={section}
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection(section);
                      onClose();
                    }}
                  >
                    <Typography
                      size="xl"
                      as="p"
                      className="text-white font-normal hover:text-light-orange transition-colors duration-300"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Typography>
                  </button>
                )
              ))}
            </div>
            <hr className="w-full border-t border-white/10" />
            {/* Sidebar CTA Button */}
            <div className="px-6 py-6">
              <Button
                className="w-full"
                onClick={() => {
                  scrollToSection("contactUs");
                  onClose();
                }}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
