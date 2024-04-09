import { QueryCache } from '@tanstack/query-core';
import Router from 'next/navigation';

export const queryConfig = {
    queryCache: new QueryCache({
        onError: () => {
            Router.redirect( '/404' );
        },
    }),
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnMount: false,
            refetchIntervalInBackground: false,
            refetchOnWindowFocus: false,
        },
    },
};