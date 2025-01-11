import { UsefulProduct } from "@/types/trendyol";
import Card from "../common/card";
import ProductCarousel from "../common/ProductCarousel";
import backgroundImage from "@/imgs/trendyolback1.png";
import { FC } from "react";
import { Button } from "../ui/button";

interface IProps {
  data: UsefulProduct[];
}

export default function UsefulProductComponent({ data }: IProps) {
  const AllProductsButton: FC = () => {
    return (
      <Button className="bg-transparent text-gray-800 hover:bg-gray-300 rounded-2xl">
        مشاهده همه محصولات
      </Button>
    );
  };
  return (
    <ProductCarousel
      data={data}
      title="محصولات سودمند"
      backgroundImage={backgroundImage.src}
      renderItem={(item) => <Card {...item} />}
      additionalElement={<AllProductsButton />}
    />
  );
}
