import React, { createContext, ReactElement, ReactNode, useMemo } from 'react';
import { createFliptSDK, FlipSDKInstance } from '@betrybe/flipt-sdk';

export type FliptContextValue = {
  flipt: FlipSDKInstance;
  uri: string;
};

export type FliptProviderProps = {
  children: ReactNode;
  uri: string;
};

export const FliptContext = createContext<FliptContextValue | null>(null);

function FliptProvider({ children, uri }: FliptProviderProps): ReactElement {
  const flipt = useMemo(() => createFliptSDK({ uri }), [uri]);

  const value = useMemo(
    () => ({
      flipt,
      uri,
    }),
    [flipt, uri],
  );

  return (
    <FliptContext.Provider value={value}>{children}</FliptContext.Provider>
  );
}

export default FliptProvider;
