import CommonSection from '@/components/CommonSection';
import ContentHeader from '@/components/ContentHeader';
import Fleet from '@/containers/fleet/Fleet';

export default function Home() {
  return (
    <main>
      <ContentHeader title="함대 계산기">
        <p>내파, 돌파, 쇄빙 등의 능력치를 계산하여 함대 구성을 추천합니다.</p>
      </ContentHeader>
      <Fleet />
    </main>
  );
}
