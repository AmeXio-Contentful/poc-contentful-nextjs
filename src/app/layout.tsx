import type { Metadata } from 'next/types';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'AmeXio',
  description: 'Your Partner in Digital Transformation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <SpeedInsights />
    </html>
  );
}
