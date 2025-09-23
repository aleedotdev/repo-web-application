import { Metadata } from "next";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { eurostileBold, eurostileSemiBold } from "@/lib/fonts";
import ReactQueryProvider from "@/api/provider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Code Encoders",
    template: "%s - Code Encoders"
  },
  description: "Smart contract audits, token development, and blockchain integrations from Acme Labs.",
  openGraph: {
    title: "Blockchain Development Services — Acme Labs",
    description: "Smart contract audits, token development, and blockchain integrations.",
    url: "https://yourdomain.com/blockchain",
    siteName: "code encoders",
    images: [{ url: "https://yourdomain.com/og/blockchain.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Blockchain Development Services — Acme Labs" }
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
