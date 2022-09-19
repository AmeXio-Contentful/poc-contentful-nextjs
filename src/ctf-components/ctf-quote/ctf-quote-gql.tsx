import { Personalize } from '@ninetailed/experience.js-next';
import React from 'react';
import { useQuery } from 'react-apollo';

import { unwrapVariants } from '../ctf-helpers';
import {
  CtfQuoteQuery,
  CtfQuoteQuery_componentQuote,
} from './__generated__/CtfQuoteQuery';
import CtfQuote, { CtfQuotePropsInterface } from './ctf-quote';
import { query } from './ctf-quote-query';

import { useDataForPreview } from '@src/lib/apollo-hooks';

interface CtfQuoteGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfQuoteGql = (props: CtfQuoteGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const queryResult = useQuery<CtfQuoteQuery>(query, {
    variables: {
      id,
      locale,
      preview,
    },
  });

  useDataForPreview(queryResult);

  if (
    queryResult.data === undefined ||
    queryResult.loading === true ||
    queryResult.data.componentQuote === null
  ) {
    return null;
  }

  return (
    <Personalize<CtfQuotePropsInterface>
      component={CtfQuote}
      {...unwrapVariants<CtfQuoteQuery_componentQuote>(
        queryResult.data.componentQuote,
      )}
    />
  );
};

export default CtfQuoteGql;
