 
import { MostSellingProduct } from "@/types/trendyol";
import Card from "./card";
import ProductCarousel from "../common/ProductCarousel";
import backgroundImage from "@/imgs/trendyolback1.png";
import { FC } from "react";
import { Button } from "../ui/button";

interface IProps {
  data: MostSellingProduct[];
}

export default function MostSellingProductComponent({ data }: IProps) {
  const AllProductsButton: FC = () => {
    return <Button className="bg-transparent text-gray-800 hover:bg-gray-300 rounded-2xl" >مشاهده همه محصولات</Button>;
  };
  return (
    <ProductCarousel
      data={data}
      title="پرفروش ترین محصولات"
      backgroundImage={backgroundImage.src}
      renderItem={(item) => <Card {...item} />}
      additionalElement={<AllProductsButton />}
    />
  );
}
