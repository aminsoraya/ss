import { BatchLink } from "@/types/trendyol";
import React from "react";
import BatchLinksDetail from "./batchLinksDetail";
import BatchLinksClient from "./batchLinksClient";

interface IProps {
  data: BatchLink;
}

export default function BatchLinks({ data }: IProps) {
  const { currentPage, totalCount, ...remain } = data;

  return (
    <>
      <BatchLinksDetail list={remain} />
      <BatchLinksClient />
    </>
  );
}
