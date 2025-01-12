"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  showSort: boolean;
  setShowSort: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrendyolContext = createContext<ContextType | undefined>(undefined);

export const TrendyolContextProvider = ({ children }: { children: ReactNode }) => {
  const [showSort, setShowSort] = useState<boolean>(false);
  return (
    <TrendyolContext.Provider value={{ showSort: showSort, setShowSort }}>
      {children}
    </TrendyolContext.Provider>
  );
};

export const useTrendyolContext=()=>useContext(TrendyolContext)!
