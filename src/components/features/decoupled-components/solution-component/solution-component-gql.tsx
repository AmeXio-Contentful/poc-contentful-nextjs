import React from 'react';

import {
  DefaultQueryParameters
} from '@src/components/features/ctf-components/ctf-teaser/ctf-teaser-gql';
import {
  useSolutionSectionComponentQuery
} from '@src/components/features/decoupled-components/solution-component/__generated/solution-component.generated';
import { UniversalLayer } from '@src/components/shared/universal-layer';


export function SolutionComponentGql({
  id,
  locale,
  preview,
}: DefaultQueryParameters) {
  const data = ( useSolutionSectionComponentQuery({
    id: id,
    locale: locale,
    preview: preview,
  })) as any;

  return <UniversalLayer data={...data.data?.solutionSection} component="SolutionSection"/>
}
