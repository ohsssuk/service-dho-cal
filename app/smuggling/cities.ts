// 도시 데이터 타입 정의
export interface CityImage {
  url: string;
  label: string;
}

export interface CityItem {
  image: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  images: CityImage[];
  item?: CityItem;
  pendingUpdate?: boolean;
}

// 도시 데이터
export const cities: City[] = [
  {
    id: 'hamburg',
    name: '함부르크',
    images: [
      {
        url: '/smuggling/hamburg_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/hamburg_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '/smuggling/hamburg_3.png',
      description: '푸른 낙인의 상자: 범죄자 LV1 이상',
    },
  },
  {
    id: 'amsterdam',
    name: '암스테르담',
    images: [
      {
        url: '/smuggling/amsterdam_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/amsterdam_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '/smuggling/amsterdam_3.png',
      description: '흰 줄의 포대: 척후법 LV20 이상',
    },
  },
  {
    id: 'london',
    name: '런던',
    images: [
      {
        url: '/smuggling/london_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/london_2.png',
        label: '미니맵',
      },
    ],
  },
  {
    id: 'lisbon',
    name: '리스본',
    images: [
      {
        url: '/smuggling/lisbon_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/lisbon_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '/smuggling/lisbon_3.png',
      description: '붉은 줄의 나무 상자: 범죄자 LV1 이상',
    },
  },
  {
    id: 'seville',
    name: '세비야',
    images: [
      {
        url: '/smuggling/seville_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/seville_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '/smuggling/seville_3.png',
      description: '초록 줄의 나무 상자: 범죄자 LV2 이상',
    },
  },
  {
    id: 'naples',
    name: '나폴리',
    images: [
      {
        url: '/smuggling/naples_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/naples_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '',
      description:
        '붉은 낙인의 상자: 범죄자 LV1 이상, 흰 봉인 서류: 범죄자 LV1 이상',
    },
  },
  {
    id: 'istanbul',
    name: '이스탄불',
    images: [
      {
        url: '/smuggling/istanbul_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/istanbul_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '/smuggling/istanbul_3.png',
      description: '붉은 리본의 함: 범죄자 LV2 이상',
    },
  },
  {
    id: 'alexandria',
    name: '알렉산드리아',
    images: [
      {
        url: '/smuggling/alexandria_1.png',
        label: '위치',
      },
      {
        url: '/smuggling/alexandria_2.png',
        label: '미니맵',
      },
    ],
    item: {
      image: '/smuggling/alexandria_3.png',
      description: '초록 보석함: 범죄자 LV1 이상',
    },
  },
  {
    id: 'beijing',
    name: '북경',
    images: [],
    item: {
      image: '',
      description: '죄송합니다. 추후 정보가 업데이트될 예정입니다.',
    },
    pendingUpdate: true,
  },
  {
    id: 'hanyang',
    name: '한양',
    images: [],
    item: {
      image: '',
      description: '추후 정보가 업데이트될 예정입니다.',
    },
    pendingUpdate: true,
  },
  {
    id: 'edo',
    name: '에도',
    images: [],
    item: {
      image: '',
      description: '추후 정보가 업데이트될 예정입니다.',
    },
    pendingUpdate: true,
  },
];
