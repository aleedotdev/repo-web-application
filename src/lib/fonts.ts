// src/lib/fonts.ts
import localFont from "next/font/local";

export const eurostileBold = localFont({
  src: "../../public/assets/fonts/eurostile/EurostileNextLTPro-BoldExt.ttf",
  variable: "--font-eurostileBold",
  display: "swap",
});

export const eurostileSemiBold = localFont({
  src: "../../public/assets/fonts/eurostile/EurostileNextLTPro-SmBdExt.ttf",
  variable: "--font-eurostileSemiBold",
  display: "swap",
});
