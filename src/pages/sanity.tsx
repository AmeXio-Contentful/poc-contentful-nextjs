import { NextPage } from 'next';

import SanityPageGql from '@src/data/sanity/page/page-gql';

const SanityPage: NextPage = () => {
  return <SanityPageGql slug="/" />;
};

export default SanityPage;
