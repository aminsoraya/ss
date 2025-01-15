import { TrendyolProductDetail } from "@/types/trendyol";
import React from "react";
import ImageGallery from "./imageGallery";
import BreadcrumbPaths from "./breadCumbs";
import Specification from "./specification";

interface IProps {
  data: TrendyolProductDetail;
}
export default function ProductDetail({ data }: IProps) {
  return (
    <div>
      <BreadcrumbPaths breadCrumbPaths={data.breadCrumbPaths} />
      <div className="relative grid grid-cols-3 py-5">
        <ImageGallery images={data.images} />
        <Specification {...data} />
      </div>
    </div>
  );
}
