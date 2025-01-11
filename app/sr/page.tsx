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

  const route = process.env.NEXT_PUBLIC_TRENDYOL_CATEGORIES_BY_PARAMS!;

  return (
    <Container className="min-h-screen">
      <Sidebar route={route} />
    </Container>
  );
}
