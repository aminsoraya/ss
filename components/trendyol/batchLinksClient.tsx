"use client";
import { BatchLink } from "@/types/trendyol";
import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import { useInView } from "react-intersection-observer";
import BatchLinksDetail from "./batchLinksDetail";

 

export default function BatchLinksClient( ) {
  const { ref: inViewRef, inView } = useInView();
  const [page, setPage] = useState(0);
 
 const data:any[]=[]

  return (
    <>
      {/* <BatchLinksDetail list={data} /> */}
      <div className="w-full flex justify-center h-12 my-3" ref={inViewRef}>
        <Loading />
      </div>
    </>
  );
}
