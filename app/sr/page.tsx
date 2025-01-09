import { getCategoriesByParams } from "@/service/getCategoriesByParams";
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

  const fetchedData = await  getCategoriesByParams(searchParams);
  return <div className="min-h-screen">{JSON.stringify(fetchedData)}</div>;
}
