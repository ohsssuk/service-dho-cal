import ContentHeader from '@/components/ContentHeader';
import TopButton from '@/components/TopButton';
import Fleet from '@/containers/fleet/Fleet';

export default function Home() {
  return (
    <>
      <main>
        <ContentHeader title="함대 관리">
          <p>내파, 돌파, 쇄빙 등의 능력치를 계산하여 함대 구성을 추천합니다.</p>
        </ContentHeader>
        <Fleet />
      </main>
      <TopButton />
    </>
  );
}
