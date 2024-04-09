import CtfPage from '@/components/ctf-components/ctf-page/ctf-page';

export default async function Home() {
  {/* @ts-expect-error Server Component */}
  return <CtfPage />;
}
