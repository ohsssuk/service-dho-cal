'use client';

import { createContext, useContext } from 'react';
import { prefix } from '@/config/config';

export const ConfigContext = createContext({});

export const useConfig = () => useContext(ConfigContext);

export default function ConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigContext.Provider value={prefix}>{children}</ConfigContext.Provider>
  );
}
