'use client';

import { useEffect, useState } from 'react';

import FleetInput from './FleetInput';
import FleetOutput from './FleetOutput';
import { fleetData } from './type';
import AdSense from '@/components/AdSense';

export default function Fleet() {
  const [inputData, setInputData] = useState<fleetData | null>(null);

  const handlePostFleet = (fleetData: fleetData) => {
    setInputData(fleetData);
  };

  return (
    <>
      <AdSense />
      {inputData !== null && <FleetOutput inputData={inputData} />}
      <FleetInput postFleetData={handlePostFleet} />
    </>
  );
}
