export type ShipItemProps = {
  [key: string]: string | number | boolean | null;
  name: string;
  crew: number | null;
  minCrew: number | null;
  durability: number | null;
  loadedQuantity: number | null;
  swe: number | null;
  dol: number | null;
  rowing: number | null;
  nae: number | null;
  verticalSail: number | null;
  horizontalSail: number | null;
  stat1: number | null;
  stat2: number | null;
  stat3: number | null;
  kind: 'ship' | 'armor' | 'anchor' | 'ram';
  isUse: boolean;
};

export type StatRowProps = {
  kor: string;
  val: string;
  placeholder: string | null;
};
