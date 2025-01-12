import Sidebar from "@/components/sr/sidebar/sidebar";
import { Container } from "@/components/ui/container";
import { CategoriesResponse, TrendyolItemsByParams } from "@/types";
import Content from "@/components/sr/content/content";
import React from "react";

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

  const dataContent = await fetch(contentRoute)
    .then((data) => data.json())
    .then((data) => data as TrendyolItemsByParams);
    
  return (
    <Container className="min-h-screen !px-0 flex">
      <Sidebar route={sidebarRoute}  />
      <Content {...dataContent} title={searchParams?.q!}/>
    </Container>
  );
}
