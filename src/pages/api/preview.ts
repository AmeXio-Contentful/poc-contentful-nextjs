import { useRouter } from 'next/navigation'

import { getPreviewBySlug } from '@src/pages/api/utils';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { ContentfulLivePreview } from '@contentful/live-preview';

export default async function preview( req: NextApiRequest,
                                       res: NextApiResponse) {

  const { secret, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const data = await getPreviewBySlug(slug as string);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!data) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({}); // more info on this here -> https://nextjs.org/docs/advanced-features/preview-mode
  res.redirect(`/${slug}?preview=true`)
}
