"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TimeLoading from "@/components/PreLoader/TimeLoading";
import { getRouteLoadingTime } from "@/components/PreLoader/usePageTransition";

interface PageTransitionContextType {
  isLoading: boolean;
  startTransition: () => void;
  completeTransition: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isLoading: false,
  startTransition: () => {},
  completeTransition: () => {},
});

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within a PageTransitionProvider"
    );
  }
  return context;
};

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Remove automatic route change detection - only manual triggers now

  const startTransition = () => {
    setIsLoading(true);
  };

  const completeTransition = () => {
    setIsLoading(false);
  };

  // Automatically complete transition after a delay (only when manually triggered)
  useEffect(() => {
    if (isLoading) {
      const loadingTime = getRouteLoadingTime(pathname);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, loadingTime);

      return () => clearTimeout(timer);
    }
  }, [isLoading, pathname]);

  const contextValue: PageTransitionContextType = {
    isLoading,
    startTransition,
    completeTransition,
  };

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <TimeLoading isVisible={isLoading} onComplete={completeTransition} />
      {children}
    </PageTransitionContext.Provider>
  );
};

export default PageTransitionProvider;
