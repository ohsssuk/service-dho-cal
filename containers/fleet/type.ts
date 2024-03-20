import { ShipItemProps } from './item/ShipProps';

export type fleetData = {
  useShips: ShipItemProps[];
  useArmors: ShipItemProps[];
  useRams: ShipItemProps[];
  useAnchor: ShipItemProps[];
  useSpecial: ShipItemProps[];
};

export type fleetListData = {
  [key: string]: number[] | number;
  fleetIndex: number[];
  nae: number;
  dol: number;
  swe: number;
};
