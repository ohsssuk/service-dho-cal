import { ShipItemProps } from './item/ShipProps';

export type fleetData = {
  [key: string]: ShipItemProps[];
};

export type resultTableData = {
  [key: string]: number[] | number;
  ids: number[];
};

export type partsSum = {
  [key: string]: number;
};

export type partsSumForShip = {
  [key: string]: number[];
};
