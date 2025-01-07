 
import { AmazingOfffer } from "@/types/trendyol";
import React, { FC } from "react";
import Card from "./card";
import ProductCarousel from "../common/ProductCarousel";
import backgroundImage from "@/imgs/trendyolback2.png";

interface IProps {
  data: AmazingOfffer[];
}
export default function Amazing({ data }: IProps) {
  const Title: FC = () => {
    return <span className="text-white">شگفت انگیز</span>;
  };

  const AdditionalElement: FC = () => {
    return (
      <div className="text-white text-sm flex items-center gap-1">
        <span className="rounded bg-gray-50 text-gray-800 w-8 h-8 flex items-center justify-center">10</span>
        <span>:</span>
        <span className="rounded bg-gray-50 text-gray-800 w-8 h-8 flex items-center justify-center">12</span>
        <span>:</span>
        <span className="rounded bg-gray-50 text-gray-800 w-8 h-8 flex items-center justify-center">20</span>
      </div>
    );
  };
  return (
    <ProductCarousel
      data={data}
      title={<Title />}
      backgroundImage={backgroundImage.src}
      renderItem={(item) => <Card {...item} />}
      additionalElement={<AdditionalElement />}
    />
  );
}
