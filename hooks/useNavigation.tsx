"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateUrl = (key: string, value: string, op: "add" | "rmv") => {
    const params = new URLSearchParams(searchParams.toString());

    //get value by key
    const previous = params.get(key);

    if (value && op == "add") {
      //once set
      if (previous == null) params.set(key, value);
      else {
        const splittedPrevious = previous.split(",");

        const newValues = [...splittedPrevious, value];
        params.set(key, newValues.join(","));
      }
    } else {
      const splittedPrevious = previous!.split(",");

      if (splittedPrevious.length == 1) {
        params.delete(key);
      } else {
        const newValues = splittedPrevious.filter((s) => s != value);
        params.set(key, newValues.join(","));
      }
    }

    router.replace(`?${params.toString()}`);
  };

  return { updateUrl };
};
export default useNavigation;
