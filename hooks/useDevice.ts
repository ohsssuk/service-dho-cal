import { useState, useEffect } from 'react';

export type DeviceType = 'pc' | 'mobile';

const MOBILE_BREAKPOINT = 768;

export const useDevice = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('pc');
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    // 초기 디바이스 타입 설정
    const handleResize = () => {
      const width = window.innerWidth;
      setDeviceType(width > MOBILE_BREAKPOINT ? 'pc' : 'mobile');
      setIsLoading(false); // 초기 설정 후 로딩 상태 해제
    };

    // 컴포넌트 마운트 시 초기 설정
    handleResize();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { deviceType, isLoading };
};
