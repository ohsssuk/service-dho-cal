'use client';

import CommonSection from '@/components/CommonSection';
import ResultTable from './item/ResultTable';
import { useEffect, useState } from 'react';
import styles from './fleet.module.css';
import { fleetData, resultTableData } from './type';

export default function FleetOutput({
  resultTableData,
  inputData,
}: {
  resultTableData: resultTableData[] | null;
  inputData: fleetData | null;
}) {
  return (
    <CommonSection>
      {resultTableData && inputData && (
        <ResultTable inputData={inputData} resultTableData={resultTableData} />
      )}
    </CommonSection>
  );
}
