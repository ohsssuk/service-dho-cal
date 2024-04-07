'use client';

import { useEffect, useState } from 'react';

import FleetInput from './FleetInput';
import FleetOutput from './FleetOutput';
import { fleetData } from './type';

export default function Fleet() {
  const [inputData, setInputData] = useState<fleetData>({
    useShips: [],
    useArmors: [],
    useRams: [],
    useAnchor: [],
    useSpecial: [],
    useFigurehead: [],
  });

  const handlePostFleet = (fleetData: fleetData) => {
    setInputData(fleetData);
  };

  return (
    <>
      <FleetOutput inputData={inputData} />
      <FleetInput postFleetData={handlePostFleet} />
    </>
  );
}
