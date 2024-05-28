import { NextPage } from 'next';
import { useRouter } from 'next/router';

import CtfPageGgl from '@src/data/contentful/page/ctf-page-gql';

const SlugPage: NextPage = () => {
  const router = useRouter();
  let slug = (router?.query.slug) || '';

  console.log(`slug: ${slug[0]}`);
  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  return <CtfPageGgl slug={slug} />;
};

export default SlugPage;
