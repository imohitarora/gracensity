import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gracensity | Rapid, Customizable Software Solutions",
  description: "Gracensity empowers businesses of all sizes with ready-to-deploy, highly customizable software solutions. From startups to enterprises, accelerate your growth with our innovative platforms.",
  keywords: "software solutions, rapid deployment, customizable software, business growth, startup solutions, enterprise software",
  openGraph: {
    title: "Gracensity - Accelerate Your Business Growth",
    description: "Launch enterprise-grade software in days, not months. Explore our customizable, scalable solutions for businesses of all sizes.",
    images: [{ url: "/gracensity.svg" }], // Make sure to create and add this image to your public folder
  },
  twitter: {
    card: "summary_large_image",
    title: "Gracensity | Rapid, Customizable Software Solutions",
    description: "Empower your business with Gracensity's ready-to-deploy, highly customizable software solutions. Accelerate growth from startup to enterprise.",
    images: ["/gracensity.svg"], // Make sure to create and add this image to your public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/gracensity.svg" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
      dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#111827_1px)]
      [background-size:16px_16px]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
