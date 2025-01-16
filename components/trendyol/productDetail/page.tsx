import { TrendyolProductDetail } from "@/types/trendyol";
import React from "react";
import ImageGallery from "./imageGallery";
import BreadcrumbPaths from "./breadCumbs";
import Specification from "./specification";
import SideBasket from "./sideBasket";

interface IProps {
  data: TrendyolProductDetail;
}
export default function ProductDetail({ data }: IProps) {
  return (
    <div>
      <BreadcrumbPaths breadCrumbPaths={data.breadCrumbPaths} />
      <div className="relative grid grid-cols-5 py-5">
        <ImageGallery images={data.images} />
        <Specification {...data} />
        <SideBasket
          finalPrice={data.finalPrice}
          originalPrice={data.originalPrice}
          remainCount={data.remainCount}
        />
      </div>
    </div>
  );
}
