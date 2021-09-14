import React from 'react';
import { FlipSDKInstance } from "@betrybe/flipt-sdk";
import { ReactNode } from "react";
declare type FliptProviderProps = {
    flipt: FlipSDKInstance;
    uri: string;
    children: ReactNode;
};
export declare const FliptContext: React.Context<Omit<FliptProviderProps, "children"> | null>;
declare function FliptProvider({ children, uri }: FliptProviderProps): JSX.Element;
export default FliptProvider;
//# sourceMappingURL=FliptProvider.d.ts.map