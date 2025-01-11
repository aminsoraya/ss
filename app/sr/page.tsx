import Content from "@/components/sr/content";
import Sidebar from "@/components/sr/sidebar/sidebar";
import { Container } from "@/components/ui/container";
import { CategoriesResponse } from "@/types";
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

  const fetchedCategoriesData = (await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_CATEGORIES_BY_PARAMS!
    // { body: JSON.stringify(searchParams) }
  ).then((data) => data.json())) as CategoriesResponse[];

  return (
    <Container className="min-h-screen">
      <Sidebar data={fetchedCategoriesData} />
      
    </Container>
  );
}
