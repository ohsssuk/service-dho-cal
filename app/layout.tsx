import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';

import './globals.css';
import './reset.css';

const SITE_TITLE = '대항오 계산기';
const SITE_DESCRIPTION = '대항오 계산기';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: '대항해시대, 대항해시대 오리진, 게임, 계산기, 편의기능',
  openGraph: {
    type: 'website',
    url: 'http://www.lifebefore.co.kr/dho-cal',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: 'http://www.lifebefore.co.kr/images/thumb.jpg',
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
      <body>{children}</body>
    </html>
  );
}
