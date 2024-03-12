import { ShipItemProps, StatRowProps } from './item/ShipProps';

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
      content: '이름순',
      value: 'name',
    },
    ...newData,
  ];
}

export function checkItemMount(useItem: ShipItemProps[]) {
  const MAX_MOUNT_COUNT = 7;
  let count = 0;

  useItem.forEach((item) => {
    item.isMount = false;

    if (item.isUse && item.kind !== 'ship') {
      count++;
      if (count <= MAX_MOUNT_COUNT) {
        item.isMount = true;
      }
    }
  });
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
