import AdSense from '@/components/AdSense';
import ContentHeader from '@/components/ContentHeader';
import TopButton from '@/components/TopButton';
import Fleet from '@/containers/fleet/Fleet';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4126261814359480"
        crossOrigin="anonymous"
      ></script>
      <GoogleAnalytics gaId="G-101Y9LS1P7" />
      <main>
        <ContentHeader title="함대 관리">
          <p>내파, 돌파, 쇄빙 등의 능력치를 계산하여 함대 구성을 추천합니다.</p>
        </ContentHeader>
        <AdSense />
        <Fleet />
      </main>
      <TopButton />
    </>
  );
}
