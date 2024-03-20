import type { Metadata } from 'next';

import './globals.css';
import './reset.css';
import ConfigProvider from '@/context/commonContext';
import Head from 'next/head';

const SITE_TITLE = '대항오 계산기';
const SITE_DESCRIPTION = '대항오 계산기';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: '대항해시대, 대항해시대 오리진, 게임, 계산기, 편의기능',
  openGraph: {
    type: 'website',
    url: 'https://ohsssuk.github.io/dho-cal/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    icons: './favicon.ico',
    images: [
      {
        url: 'https://ohsssuk.github.io/dho-cal/public/og_image.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="app">
      <ConfigProvider>
        <body>{children}</body>
      </ConfigProvider>
    </html>
  );
}
