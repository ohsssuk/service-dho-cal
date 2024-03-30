import { ShipItemProps, StatRowProps } from './item/ShipProps';
import { partsSum } from './type';

export function createShipItem(props: Partial<ShipItemProps>): ShipItemProps {
  return {
    name: props.name ?? '',
    kind: props.kind ?? 'ship',
    crew: props.crew ?? null,
    minCrew: props.minCrew ?? null,
    durability: props.durability ?? null,
    loadedQuantity: props.loadedQuantity ?? null,
    swe: props.swe ?? null,
    dol: props.dol ?? null,
    rowing: props.rowing ?? null,
    nae: props.nae ?? null,
    verticalSail: props.verticalSail ?? null,
    horizontalSail: props.horizontalSail ?? null,
    stat1: props.stat1 ?? null,
    stat2: props.stat2 ?? null,
    stat3: props.stat3 ?? null,
    isUse: props.isUse ?? true,
  };
}

export function createPartsSumDefault(): partsSum {
  return {
    nae: 0,
    dol: 0,
    swe: 0,
    loadedQuantity: 0,
  };
}

export function getSortOptionFromStatRow(statRow: StatRowProps[]) {
  const newData = statRow.map((stat: StatRowProps) => ({
    content: stat.kor,
    value: stat.val,
  }));

  return [
    {
      content: '높은순 정렬',
      value: '',
    },
    {
      content: '이름',
      value: 'name',
    },
    ...newData,
  ];
}

const MAX_MOUNT_COUNT = 7;

// 소모성 값
export function checkItem(useItem: ShipItemProps[]) {
  let count = 0;

  const minNae = getLastHighestStat(useItem, 'nae');
  const minDol = getLastHighestStat(useItem, 'dol');
  const minSwe = getLastHighestStat(useItem, 'swe');

  useItem.forEach((item, index) => {
    item.isMount = false;

    item.isNaeMin = false;
    item.isDolMin = false;
    item.isSweMin = false;

    if (item.kind !== 'ship') {
      if (item.isUse) {
        count++;
        if (count <= MAX_MOUNT_COUNT) {
          item.isMount = true;
        }
      }

      if (item.nae && item.nae >= minNae && item.nae > 0) {
        item.isNaeMin = true;
      }
      if (item.dol && item.dol >= minDol && item.dol > 0) {
        item.isDolMin = true;
      }
      if (item.swe && item.swe >= minSwe && item.swe > 0) {
        item.isSweMin = true;
      }
    }

    if (item.kind === 'ship') {
      item.id = index + 1;
    }
  });
}

function getLastHighestStat(useItem: ShipItemProps[], stat: string): number {
  const sortedParts = useItem
    .filter((part) => typeof part[stat] === 'number')
    .sort((a, b) => ((b[stat] as number) || 0) - ((a[stat] as number) || 0));

  let result = 0;

  if (sortedParts.length >= MAX_MOUNT_COUNT) {
    result = Number(sortedParts[MAX_MOUNT_COUNT - 1][stat]);
  } else if (sortedParts.length > 0) {
    result = Number(sortedParts[sortedParts.length - 1][stat]);
  }

  return result;
}

export function removeShipItemListNullValues(shipItemData: ShipItemProps[]) {
  return shipItemData.map((item) => {
    const cleanedItem: Partial<ShipItemProps> = {};
    for (const key in item) {
      if (item[key] !== null) {
        cleanedItem[key] = item[key];
      }
    }
    return cleanedItem as ShipItemProps;
  });
}

export function moveColumnsToFront(
  array: any[],
  columnsToMoveToFront: string[],
) {
  const frontColumns = columnsToMoveToFront
    .map((column) => array.find((item) => item.val === column))
    .filter(Boolean);
  const restColumns = array.filter((item) => !frontColumns.includes(item));
  return [...frontColumns, ...restColumns];
}
