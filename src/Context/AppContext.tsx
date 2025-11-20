/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from 'react';
import { useUtils } from './useUtils';
import useBusinessLogic from './useBusinessLogic';
import type { Product } from './types/Products';
import type { Category } from './types/Category';

type AppContextValue = {
  utils: ReturnType<typeof useUtils>;
  products: Product[];
  categories: Category[];
  setProducts: (products: Product[]) => void;
  setCategories: (categories: Category[]) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const utils = useUtils()
  const { products, categories, setProducts, setCategories } = useBusinessLogic();
  
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