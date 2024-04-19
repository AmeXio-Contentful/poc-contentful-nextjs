import { QueryCache } from '@tanstack/query-core';

export const queryConfig = {
  queryCache: new QueryCache({
    onError: () => {
      // Router.redirect( '/404' );
    },
    onSuccess: () => {
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
