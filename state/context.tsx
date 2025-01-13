"use client";
import { Filter } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  showSort: boolean;
  showFilters: boolean;
  filters: Array<Filter> | undefined;
  setFilters: React.Dispatch<React.SetStateAction<Array<Filter> | undefined>>;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSort: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrendyolContext = createContext<ContextType | undefined>(undefined);

export const TrendyolContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filters, setFilters] = useState<Array<Filter> | undefined>();
  return (
    <TrendyolContext.Provider
      value={{
        showSort,
        setShowSort,
        showFilters,
        setShowFilters,
        filters,
        setFilters,
      }}
    >
      {children}
    </TrendyolContext.Provider>
  );
};

export const useTrendyolContext = () => useContext(TrendyolContext)!;
