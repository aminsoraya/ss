import { useEffect, useState } from "react";

export const useSearch = <T>(keyword: string): T | undefined => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_TRENDYOL_SEARCH!;
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData as T);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };

    if (keyword) {
      fetchData();
    }
  }, [keyword]);

  return data;
};
