"use client";
import { BatchLink } from "@/types/trendyol";
import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import { useInView } from "react-intersection-observer";
import BatchLinksDetail from "./batchLinksDetail";

interface IProps {
  data: BatchLink;
}

export default function BatchLinks({ data }: IProps) {
  const { ref: inViewRef, inView } = useInView();
  const [page, setPage] = useState(0);
  const { currentPage, totalCount, ...remain } = data;

  useEffect(() => {
    setPage((state) => state + 1);
  }, [inView]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <>
      <BatchLinksDetail list={remain} />
      <div className="w-full flex justify-center h-12 my-3" ref={inViewRef}>
        <Loading />
      </div>
    </>
  );
}
