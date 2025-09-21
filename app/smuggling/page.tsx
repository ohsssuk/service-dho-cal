'use client';

import styles from './page.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../fontawesome';
import { cities, type City } from './cities';
import ContentHeader from '@/components/ContentHeader';
import AdSense from '@/components/AdSense';
import TopButton from '@/components/TopButton';

// 설정 상수
const CONFIG = {
  DEFAULT_EXPANDED: false, // 기본 접힘 상태 (false: 접힘, true: 펼침)
};

const SmugglingSite = ({ city }: { city: City }) => {
  const [isExpanded, setIsExpanded] = useState(CONFIG.DEFAULT_EXPANDED);

  return (
    <div className={styles.cityCard}>
      <button
        className={styles.cityHeader}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className={styles.cityName}>{city.name}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.chevron} ${isExpanded ? styles.expanded : ''}`}
          width={16}
          height={16}
          style={{ width: '16px', height: '16px' }}
        />
      </button>
      <div className={styles.divider}></div>

      {isExpanded && (
        <>
          {/* 정보 업데이트 예정 메시지 (북경, 한양, 에도 등) */}
          {'pendingUpdate' in city && city.pendingUpdate ? (
            <div className={styles.pendingUpdateContainer}>
              <p className={styles.pendingUpdateMessage}>
                추후 정보가 업데이트될 예정입니다.
              </p>
            </div>
          ) : (
            <>
              {/* 이미지 컨테이너 */}
              <div className={styles.imagesGrid}>
                {city.images.map((img, index) => (
                  <div key={index} className={styles.imageWrapper}>
                    <Image
                      src={img.url}
                      alt={`${city.name} ${img.label}`}
                      width={500}
                      height={300}
                      className={styles.locationImage}
                      style={{ maxWidth: '600px', height: 'auto' }}
                      unoptimized
                    />
                    <span className={styles.imageLabel}>{img.label}</span>
                  </div>
                ))}
              </div>

              {/* 밀수품 정보 */}
              {city.item && (
                <div className={styles.itemContainer}>
                  <h3 className={styles.itemTitle}>밀수품 정보</h3>
                  <table className={styles.itemTable}>
                    <tbody>
                      {city.item.image && city.item.image.endsWith('.png') && (
                        <tr>
                          <td className={styles.itemImageCell}>
                            <Image
                              src={city.item.image}
                              alt="밀수품"
                              width={100}
                              height={100}
                              className={styles.itemImage}
                              style={{ maxWidth: '600px', height: 'auto' }}
                              unoptimized
                            />
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td className={styles.itemDescriptionCell}>
                          {city.item.description.includes(',') ? (
                            // 쉼표가 있는 경우 여러 아이템을 분리하여 처리
                            <>
                              {city.item.description
                                .split(', ')
                                .map((item, idx) => (
                                  <div key={idx}>
                                    {item.includes(':') ? (
                                      <>
                                        <strong>{item.split(':')[0]}</strong>
                                        {':' + item.split(':')[1]}
                                      </>
                                    ) : (
                                      item
                                    )}
                                    {city.item &&
                                      idx <
                                        city.item.description.split(', ')
                                          .length -
                                          1 && <br />}
                                  </div>
                                ))}
                            </>
                          ) : city.item.description.includes(':') ? (
                            // 쉼표 없이 콜론만 있는 경우
                            <>
                              <strong>
                                {city.item.description.split(':')[0]}
                              </strong>
                              {':' + city.item.description.split(':')[1]}
                            </>
                          ) : (
                            // 콜론이 없는 경우
                            city.item.description
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default function SmugglingSites() {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4126261814359480"
        crossOrigin="anonymous"
      ></script>
      <main>
        <ContentHeader title="밀수단 정보">
          <p>도시별 밀수단 위치와 밀수품 정보</p>
        </ContentHeader>
        <AdSense />
        <div className={styles.container}>
          <div className={styles.citiesContainer}>
            {cities.map((city) => (
              <SmugglingSite key={city.id} city={city} />
            ))}
          </div>
        </div>
      </main>
      <TopButton />
    </>
  );
}
