import React from "react";
import Layout from "@/components/layout/trendyol";
import { TrendyolMeta,TrendyolItemsByParams } from "@/types";
import { TrendyolProductDetail } from "@/types/trendyol";

interface IProps {
  params: {
    params: string[];
  };
}
export default async function ProductDetail(props: Promise<Partial<IProps>>) {
  const trendyolMetaData = await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_META?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json());

  const parameters = (await props).params;
  const [brand, product] = parameters?.params!;


  //Should send both brand and product to fetch product detail data
  const productData = await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_PRODUCT_DETAIL?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json()).then (data=> data as Array<TrendyolProductDetail> );

console.log({productData})
  return (
    <Layout trendoyl={trendyolMetaData! as TrendyolMeta}>
      <div className="flex flex-col">
        <span>{brand}</span>
        <span>{product}</span>
      </div>
    </Layout>
  );
}
