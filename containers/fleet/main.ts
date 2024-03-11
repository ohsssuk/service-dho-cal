import { ShipItemProps } from './item/ShipProps';

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
