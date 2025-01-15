import Sidebar from "@/components/sr/sidebar/sidebar";
import { Container } from "@/components/ui/container";
import { TrendyolItemsByParams, TrendyolMeta } from "@/types";
import Content from "@/components/sr/content/content";
import React from "react";
import Layout from "@/components/layout/trendyol";

interface IPageProps {
  searchParams: {
    q: string;
    qt: string;
    st: string;
    os: number;
    sk: number;
    wb: number;
  };
}

export default async function Page(props: Promise<Partial<IPageProps>>) {
  const searchParams = (await props).searchParams;

  const contentRoute = process.env.NEXT_PUBLIC_TRENDYOL_ITEMS_BY_PARAMS!;
  const sidebarRoute = process.env.NEXT_PUBLIC_TRENDYOL_CATEGORIES_BY_PARAMS!;

  const trendyolMetaData = await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_META?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json());
  const dataContent = await fetch(contentRoute)
    .then((data) => data.json())
    .then((data) => data as TrendyolItemsByParams);

  return (
    <Layout trendoyl={trendyolMetaData! as TrendyolMeta}>
      <Container className="min-h-screen !px-0 flex">
        <div className=" hidden lg:flex">
          <Sidebar route={sidebarRoute} />
        </div>
        <Content
          {...dataContent}
          title={searchParams?.q!}
          categoriesRoute={sidebarRoute}
        />
      </Container>
    </Layout>
  );
}
