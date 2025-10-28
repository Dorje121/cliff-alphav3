"use client";

import React, { createContext, useContext, useState } from 'react';

type NavigationSource = 'link' | 'other';

interface NavigationContextType {
  navigationSource: NavigationSource;
  setNavigationSource: (source: NavigationSource) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [navigationSource, setNavigationSource] = useState<NavigationSource>('other');

  return (
    <NavigationContext.Provider value={{ navigationSource, setNavigationSource }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
