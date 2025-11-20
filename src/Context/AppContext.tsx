/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from 'react';
import { useUtils } from './useUtils';
import useBusinessLogic from './useBusinessLogic';

type AppContextValue = {
  utils: ReturnType<typeof useUtils>;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const utils = useUtils()
  const { products, categories, setProducts, setCategories } = useBusinessLogic();
  console.log(products)
  const value = useMemo(
    () => ({ 
      utils,
      products,
      categories,
      setProducts,
      setCategories,
    }),
    [
      utils,
      products,
      categories,
      setProducts,
      setCategories,
    ]
  );

  return <AppContext.Provider value={value}>{
    children
  }</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContextProvider');
  return ctx;
}

export { AppContext };