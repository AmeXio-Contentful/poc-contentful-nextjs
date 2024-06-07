import { NextPage } from 'next';

import CtfPageGgl from '@src/data/contentful/page/ctf-page-gql';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

export default LangPage;
