'use client';

import { useEffect, useState } from 'react';

import FleetInput from './FleetInput';
import FleetOutput from './FleetOutput';
import { fleetData } from './type';

export default function Fleet() {
  const handleCalculateFleet = (fleetData: fleetData) => {
    console.log(fleetData);
  };

  const testData = {
    fleetListData: [
      { fleetIndex: [1, 5, 4], nae: 25, swe: 32, dol: 25 },
      { fleetIndex: [1, 5, 7], nae: 35, swe: 12, dol: 15 },
    ],
  };

  return (
    <>
      <FleetOutput outputData={testData} />
      <FleetInput calculateFleet={handleCalculateFleet} />
    </>
  );
}
