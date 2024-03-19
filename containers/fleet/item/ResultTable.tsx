'use client';

import CommonSection from '@/components/CommonSection';
import { ReactNode, useEffect, useState } from 'react';
import styles from '../fleet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { fleetListData } from '../type';
import { statRow } from '../data';
import { moveColumnsToFront } from '../main';

export default function ResultTable({
  fleetListData,
}: {
  fleetListData: fleetListData[];
}) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('desc');
    }
  };

  const sortedData = [...fleetListData].sort((a, b) => {
    if (sortColumn) {
      const aValue = parseFloat(String(a[sortColumn]));
      const bValue = parseFloat(String(b[sortColumn]));
      if (!isNaN(aValue) && !isNaN(bValue)) {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return sortOrder === 'asc'
        ? String(a[sortColumn]).localeCompare(String(b[sortColumn]))
        : String(b[sortColumn]).localeCompare(String(a[sortColumn]));
    }
    return 0;
  });

  const reorderedShipRow = moveColumnsToFront(statRow.ship, [
    'nae',
    'dol',
    'swe',
  ]);

  function StatSortingColumn({
    columnName,
    columnNameKor,
  }: {
    columnName: string;
    columnNameKor: string;
  }) {
    return (
      <th
        className={sortColumn === columnName ? styles.sorting : ''}
        onClick={() => handleSort(columnName)}
      >
        {columnNameKor}
        {sortColumn === columnName ? (
          <FontAwesomeIcon
            icon={sortOrder === 'asc' ? faSortUp : faSortDown}
            className="ml-1"
          />
        ) : (
          <FontAwesomeIcon icon={faSort} className="ml-1" />
        )}
      </th>
    );
  }

  return (
    <CommonSection>
      <section className={styles.result_table_wrap}>
        {!isLoading && (
          <table className={styles.result_table}>
            <colgroup>
              <col width={50} />
              <col width={'auto'} />
              {reorderedShipRow.map((row, index) => (
                <col key={index} width={row.val === 'minCrew' ? 90 : 70} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th align="left">순위</th>
                <th align="left">구성</th>
                {reorderedShipRow.map((row, index) => (
                  <StatSortingColumn
                    key={index}
                    columnName={row.val}
                    columnNameKor={row.kor}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((data: fleetListData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.fleetIndex}</td>
                  {reorderedShipRow.map((row, index) => (
                    <td key={index} align="center">
                      {data[row.val]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </CommonSection>
  );
}
