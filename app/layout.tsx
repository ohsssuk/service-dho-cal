import type { Metadata } from 'next';

import './globals.css';
import './reset.css';
import Navigation from '../components/Navigation/Navigation';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// FontAwesome의 자동 CSS 삽입을 비활성화
config.autoAddCss = false;

const SITE_TITLE = '대항오 나침반';
const SITE_DESCRIPTION = '대항오 나침반';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: '대항해시대, 대항해시대 오리진, 게임, 계산기, 편의기능',
  openGraph: {
    type: 'website',
    url: 'https://dho-compass.lifebefore.co.kr/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: 'https://static.pcs.line.games/ogImg/gamesite/202111/gamesite_1637203269004.jpg',
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
      <body>
        <Navigation />
        <div style={{ paddingTop: '60px' }}>{children}</div>
      </body>
    </html>
  );
}
