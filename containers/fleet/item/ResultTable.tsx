'use client';

import CommonSection from '@/components/CommonSection';
import { Fragment, useEffect, useState } from 'react';
import styles from '../fleet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { fleetData, resultTableData } from '../type';
import { statRow } from '../data';
import { moveColumnsToFront } from '../main';
import LabelSticker from '@/components/LabelSticker';

export default function ResultTable({
  resultTableData,
  inputData,
}: {
  resultTableData: resultTableData[];
  inputData: fleetData;
}) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openIndex, setOpenIndex] = useState<number>(0);

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

  const sortedData = [...resultTableData].sort((a, b) => {
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
              {sortedData.map((data: resultTableData, rowIndex) => (
                <Fragment key={rowIndex}>
                  <tr onClick={() => setOpenIndex(rowIndex)}>
                    <td>{rowIndex + 1}</td>
                    <td>
                      {data.ids.map((id: number) => (
                        <LabelSticker key={id} backgroundColor="var(--gray700)">
                          {id}
                        </LabelSticker>
                      ))}
                    </td>
                    {reorderedShipRow.map((row, colIndex) => (
                      <td key={colIndex} align="center">
                        {data[row.val]}
                      </td>
                    ))}
                  </tr>

                  {rowIndex === openIndex && (
                    <>
                      {data.ids.map((id: number) => {
                        const foundShip = inputData.useShips.find(
                          (ship) => ship.id === id,
                        );

                        console.log(foundShip);
                        if (foundShip) {
                          return (
                            <tr key={id} className={styles.result_table_detail}>
                              <td></td>
                              <td className="flex items-center">
                                <LabelSticker backgroundColor="var(--gray700)">
                                  {id}
                                </LabelSticker>
                                <div className="ml-1">{foundShip.name}</div>
                              </td>
                              <td align="center">{foundShip.nae}</td>
                              <td align="center">{foundShip.dol}</td>
                              <td align="center">{foundShip.swe}</td>
                              <td align="center">{foundShip.crew}</td>
                              <td align="center">{foundShip.minCrew}</td>
                              <td align="center">{foundShip.durability}</td>
                              <td align="center">{foundShip.loadedQuantity}</td>
                              <td align="center">{foundShip.rowing}</td>
                              <td align="center">{foundShip.verticalSail}</td>
                              <td align="center">{foundShip.horizontalSail}</td>
                              <td align="center">{foundShip.stat1}</td>
                              <td align="center">{foundShip.stat2}</td>
                              <td align="center">{foundShip.stat3}</td>
                            </tr>
                          );
                        }
                      })}
                    </>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </CommonSection>
  );
}
