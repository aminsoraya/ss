import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { Service } from "@/types/header";

const iranSans = localFont({
  src: "./fonts/IRANSansWeb_Medium.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services: Service[] = [
    { link: "/a", text: "خدمات ارزی بی مرز" },
    { link: "/paypal", text: "Paypal داری، کلیک کن !" },
  ];
  return (
    <html lang="en">
      <body className={`  ${iranSans.variable}   `}>
        <Layout services={services}>{children}</Layout>
      </body>
    </html>
  );
}
