'use client';

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryConfig } from '@/lib/gql-client';

const queryClient = new QueryClient(queryConfig);

export default function QueryClientContextProvider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}