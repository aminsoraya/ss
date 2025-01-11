"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchParamsState, setSearchParamsState] = useState(searchParams);

  const updateUrl = (key: string, value: string, op: "add" | "rmv") => {
    const params = new URLSearchParams(searchParamsState.toString());

    if (value && op == "add") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(`?${params.toString()}`);
  };

  return { updateUrl };
};
export default useNavigation;
