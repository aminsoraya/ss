import { TrendyolProductDetail } from "@/types/trendyol";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbPaths({
  breadCrumbPaths,
}: Pick<TrendyolProductDetail, "breadCrumbPaths">) {
  return (
    <div className="  h-12 flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {breadCrumbPaths.map((item, index) => {
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-gray-800 text-xs" href={item.link}>{item.text}</BreadcrumbLink>
                </BreadcrumbItem>
                {index<breadCrumbPaths.length-1&&<BreadcrumbSeparator className="rotate-180 text-orange-500" />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
