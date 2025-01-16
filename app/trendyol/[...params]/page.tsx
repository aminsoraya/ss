import React from "react";
import Layout from "@/components/layout/trendyol";
import { TrendyolMeta } from "@/types";
import { TrendyolProductDetail } from "@/types/trendyol";
import { Container } from "@/components/ui/container";
import ProductDetail from "@/components/trendyol/productDetail/page";

interface IProps {
  params: {
    params: string[];
  };
}
export default async function Page(props: Promise<Partial<IProps>>) {
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
  const productDetail = await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_PRODUCT_DETAIL?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json()).then (data=> data as  TrendyolProductDetail );

   return (
    <Layout trendoyl={trendyolMetaData! as TrendyolMeta}>
      <Container>
            <ProductDetail data={productDetail}/>
      </Container>
    </Layout>
  );
}
