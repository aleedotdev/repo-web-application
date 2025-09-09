import { Metadata } from "next";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { eurostileBold, eurostileSemiBold } from "@/lib/fonts";
import ReactQueryProvider from "@/api/provider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Code Encoders - Web Applications`,
  // description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${inter.className} ${eurostileBold.variable} ${eurostileSemiBold.variable}`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <ToastContainer position="top-right" closeButton />
      </body>
    </html>
  );
}
