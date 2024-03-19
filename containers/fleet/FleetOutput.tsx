'use client';

import CommonSection from '@/components/CommonSection';
import ResultTable from './item/ResultTable';
import { useEffect, useState } from 'react';
import styles from './fleet.module.css';

export default function FleetOutput({ outputData }: { outputData: any }) {
  return (
    <CommonSection>
      <ResultTable fleetListData={outputData.fleetListData} />
    </CommonSection>
  );
}
