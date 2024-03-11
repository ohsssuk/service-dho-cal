const statRowNae = {
  kor: '내파',
  val: 'nae',
  placeholder: null,
};
const statRowSwe = {
  kor: '쇄빙',
  val: 'swe',
  placeholder: null,
};
const statRowDol = {
  kor: '돌파',
  val: 'dol',
  placeholder: null,
};

const shipStatRow = [
  {
    kor: '선원 수',
    val: 'crew',
    placeholder: null,
  },
  {
    kor: '최소 선원 수',
    val: 'minCrew',
    placeholder: null,
  },
  {
    kor: '내구도',
    val: 'durability',
    placeholder: null,
  },
  {
    kor: '적재량',
    val: 'loadedQuantity',
    placeholder: null,
  },
  statRowSwe,
  statRowDol,
  {
    kor: '조력',
    val: 'rowing',
    placeholder: null,
  },
  statRowNae,
  {
    kor: '세로돛',
    val: 'verticalSail',
    placeholder: null,
  },
  {
    kor: '가로돛',
    val: 'horizontalSail',
    placeholder: null,
  },
  {
    kor: '능력치 1',
    val: 'stat1',
    placeholder: '포격, 백병 위력 등',
  },
  {
    kor: '능력치 2',
    val: 'stat2',
    placeholder: '포격, 백병 위력 등',
  },
  {
    kor: '능력치 3',
    val: 'stat3',
    placeholder: '포격, 백병 위력 등',
  },
];
const armorStatRow = [statRowNae];
const ramStatRow = [statRowSwe, statRowDol];
const anchorStatRow = [statRowNae, statRowSwe, statRowDol];

export const statRow = {
  ship: shipStatRow,
  armor: armorStatRow,
  ram: ramStatRow,
  anchor: anchorStatRow,
};
