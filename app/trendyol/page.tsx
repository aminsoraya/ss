import Amazing from "@/components/trendyol/amazing";
import BatchLinks from "@/components/trendyol/batchLinks";
import Brands from "@/components/trendyol/brands";
import Categories from "@/components/trendyol/categories";
import FavouriteProducts from "@/components/trendyol/favouriteProducts";
import MostSellingProduct from "@/components/trendyol/mostSellingProduct";
import PopularCategory from "@/components/trendyol/popularCategory";
import Layout from "@/components/layout/trendyol";
import UsefulProductComponent from "@/components/trendyol/usefulProduct";
import { Container } from "@/components/ui/container";
import { TrendyolMain, TrendyolMeta } from "@/types";
import React from "react";

export default async function TrendyolComponent() {
  const trendyolMetaData = await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_META?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json());

  const fetchedData = (await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_MAIN?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json())) as TrendyolMain;

  return (
    <Layout trendoyl={trendyolMetaData! as TrendyolMeta}>
      <div className="w-full overflow-hidden">
        <Container className="p-0 md:p-6">
          {fetchedData.categories && (
            <Categories data={fetchedData.categories} />
          )}
          {fetchedData.mostPopular && (
            <FavouriteProducts data={fetchedData.mostPopular} />
          )}
          {fetchedData.brandsLink && (
            <Brands brandsLink={fetchedData.brandsLink} />
          )}
          {fetchedData.amazingOffer && (
            <Amazing data={fetchedData.amazingOffer} />
          )}
          {fetchedData.popularCategories && (
            <PopularCategory data={fetchedData.popularCategories} />
          )}
          {fetchedData.mostSellingProducts && (
            <MostSellingProduct data={fetchedData.mostSellingProducts} />
          )}
          {fetchedData.usefulProducts && (
            <UsefulProductComponent data={fetchedData.usefulProducts} />
          )}
          {fetchedData.batchLinks && (
            <BatchLinks data={fetchedData.batchLinks} />
          )}
        </Container>{" "}
      </div>
    </Layout>
  );
}
