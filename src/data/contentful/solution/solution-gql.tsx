import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useSolutionSectionComponentQuery
} from '@src/data/contentful/solution/__generated/solution.generated';
import { Solution } from '@src/components/features/decoupled-components/solution/solution';


export function SolutionGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useSolutionSectionComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <Solution {...data.data?.solutionSection} />;
}
