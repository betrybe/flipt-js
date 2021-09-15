import React, { useMemo } from 'react';
import { createFliptSDK, FlipSDKInstance } from "@trybe/flipt-sdk";
import { createContext, ReactNode } from "react";

type FliptProviderProps = {
    flipt: FlipSDKInstance;
    uri: string;
    children: ReactNode;
}

export const FliptContext = createContext<Omit<FliptProviderProps, 'children'> | null>(null);

function FliptProvider({ children, uri }: Omit<FliptProviderProps, 'flipt'>) {
    const flipt = useMemo(() => createFliptSDK({ uri }), [uri]);

    return <FliptContext.Provider value={{ flipt, uri }}>{children}</FliptContext.Provider>
}

export default FliptProvider;
