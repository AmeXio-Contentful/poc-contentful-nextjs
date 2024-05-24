import { useHeaderByIdQuery } from '@src/data/sanity/navigation/__generated/navigation.generated';
import { NavigationSanity } from '@src/mapping/sanity/navigation';

export const SanityNavigationGql = () => {
  const sanityId = 'a2ddc724-29ca-4c61-b881-6167e6fd1b33';
  const { isLoading, data } = useHeaderByIdQuery({ id: sanityId });

  if (isLoading) return <></>

  return <NavigationSanity {...data as any} />;
};
