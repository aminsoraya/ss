"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  showSort: boolean;
  showFilters: boolean;
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
  return (
    <TrendyolContext.Provider
      value={{ showSort, setShowSort, showFilters, setShowFilters }}
    >
      {children}
    </TrendyolContext.Provider>
  );
};

export const useTrendyolContext = () => useContext(TrendyolContext)!;
