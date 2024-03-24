'use client';

import { useEffect, useState } from 'react';

import FleetInput from './FleetInput';
import FleetOutput from './FleetOutput';
import { fleetData, resultTableData } from './type';
import { generateCombinations } from './calculation';
import { ShipItemProps } from './item/ShipProps';

export default function Fleet() {
  const [resultTableData, setResultTableData] = useState<
    resultTableData[] | null
  >(null);
  const [inputData, setInputData] = useState<fleetData | null>(null);

  const handleCalculateFleet = (inputData: fleetData) => {
    setInputData(inputData);

    const { useShips } = inputData;

    const allCombinations: ShipItemProps[][] = generateCombinations(
      useShips,
      7,
    );

    const newResultTableData: resultTableData[] = [];
    allCombinations.forEach((combination, index) => {
      const { naeSum, sweSum, dolSum, crewSum } = combination.reduce(
        (acc, current) => ({
          naeSum: acc.naeSum + (current.nae ?? 0),
          sweSum: acc.sweSum + (current.swe ?? 0),
          dolSum: acc.dolSum + (current.dol ?? 0),
          crewSum: acc.crewSum + (current.crew ?? 0),
        }),
        { naeSum: 0, sweSum: 0, dolSum: 0, crewSum: 0 },
      );

      newResultTableData.push({
        ids: combination.map((item) => Number(item.id)),
        nae: naeSum,
        swe: sweSum,
        dol: dolSum,
        crew: crewSum,
      });
    });

    setResultTableData(newResultTableData);
  };

  return (
    <>
      <FleetOutput inputData={inputData} resultTableData={resultTableData} />
      <FleetInput calculateFleet={handleCalculateFleet} />
    </>
  );
}
