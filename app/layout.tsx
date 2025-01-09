import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { Meta, TrendyolMeta } from "@/types";
import { headers } from "next/headers";
import { Routes } from "@/types/header";

const iranSans = localFont({
  src: "./fonts/IRANSansWeb_Medium.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const currentRoute = headersList.get("x-route") || "/";

  const isTrendyolRoute = currentRoute.includes(Routes.Trendyol)||currentRoute.includes(Routes.Sr);

  const initialData = await fetch(
    process.env.NEXT_PUBLIC_META_URL?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json());

  let parseMetaData: Meta | undefined = undefined;

  if (initialData) {
    const { headers, subHeaders, footers } = initialData as Meta;
    parseMetaData = {
      headers,
      subHeaders,
      footers,
    };
  }

  let parseTrendyolData: TrendyolMeta | undefined = undefined;

  if (isTrendyolRoute) {
    await fetch(process.env.NEXT_PUBLIC_TRENDYOL_META?.toString()!, {
      next: {
        revalidate: 0,
      },
    })
      .then((res) => res.json())
      .then((item: TrendyolMeta) => {
        parseTrendyolData = item;
      });
  }

 
  return (
    <html lang="en">
      <body className={`${iranSans.variable}`}>
        {parseMetaData && (
          <Layout
            {...parseMetaData}
            trendoyl={parseTrendyolData!}
            pathName={currentRoute}
          >
            {children}
          </Layout>
        )}
      </body>
    </html>
  );
}
