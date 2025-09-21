import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '밀수단 정보 | 대항해시대 오리진 나침반',
  description:
    '대항해시대 오리진(대항오) 도시별 밀수단 위치와 밀수품 정보를 제공합니다. 함부르크, 암스테르담, 리스본 등 각 도시의 밀수단 위치와 밀수품 상세 정보를 확인하세요.',
  keywords: [
    '대항해시대 오리진',
    '대항오',
    '밀수단',
    '밀수품',
    '밀수',
    '함부르크',
    '암스테르담',
    '리스본',
    '세비야',
    '나폴리',
    '이스탄불',
    '알렉산드리아',
  ],
  openGraph: {
    title: '대항해시대 오리진 밀수단 정보',
    description: '도시별 밀수단 위치와 밀수품 정보를 쉽게 찾아보세요',
    url: 'https://dho-compass.lifebefore.co.kr/smuggling',
    siteName: '대항오 나침반',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function SmugglingSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
