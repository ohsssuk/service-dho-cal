import { ShipItemProps } from './item/ShipProps';

export type fleetData = {
  useShips: ShipItemProps[];
  useArmors: ShipItemProps[];
  useRams: ShipItemProps[];
  useAnchor: ShipItemProps[];
  useSpecial: ShipItemProps[];
};

export type resultTableData = {
  [key: string]: number[] | number;
  ids: number[];
};
