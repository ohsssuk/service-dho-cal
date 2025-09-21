'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function AdSense() {
  return (
    <div style={{ margin: 'auto', maxWidth: '1200px', padding: '0 24px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4126261814359480"
        data-ad-slot="5536762597"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script strategy="afterInteractive">{`
        (adsbygoogle = window.adsbygoogle || []).push({});
      `}</Script>
    </div>
  );
}
