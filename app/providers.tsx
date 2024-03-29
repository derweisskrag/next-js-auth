"use client";

// import the NextUIProvider
import {NextUIProvider} from "@nextui-org/system";

export function Providers({ children } : {children: React.ReactNode}){
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}