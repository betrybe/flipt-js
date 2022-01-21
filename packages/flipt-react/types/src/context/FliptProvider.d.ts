import React, { ReactElement, ReactNode } from 'react';
import { FlipSDKInstance } from '@betrybe/flipt-sdk';
export declare type FliptContextValue = {
    flipt: FlipSDKInstance;
    uri: string;
};
export declare type FliptProviderProps = {
    children: ReactNode;
    uri: string;
};
export declare const FliptContext: React.Context<FliptContextValue | null>;
declare function FliptProvider({ children, uri }: FliptProviderProps): ReactElement;
export default FliptProvider;
//# sourceMappingURL=FliptProvider.d.ts.map