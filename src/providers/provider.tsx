"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export function Provider({ children }: { children: React.ReactNode }){
    return(
        <SessionProvider>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </NextUIProvider>
        </SessionProvider>
    )
}