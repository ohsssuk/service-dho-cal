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
import { fleetData, partsSumForShip, resultTableData } from '../type';
import { statRow } from '../data';
import { moveColumnsToFront } from '../main';
import LabelSticker from '@/components/LabelSticker';
import Select from '@/components/Select';

const DEFAULT_LIST_LIMIT = 10;

export default function ResultTable({
  resultTableData,
  resultShipsParts,
  fleetData,
}: {
  resultTableData: resultTableData[];
  resultShipsParts: partsSumForShip;
  fleetData: fleetData;
}) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [listLimit, setListLimit] = useState<number>(DEFAULT_LIST_LIMIT);

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
    'loadedQuantity',
  ]);

  function StatSortingColumn({
    columnName,
    columnNameKor,
  }: {
    columnName: string;
    columnNameKor: string;
  }) {
    const averageColumn = [
      'nae',
      'swe',
      'dol',
      'durability',
      'verticalSail',
      'horizontalSail',
      'stat1',
      'stat2',
      'stat3',
    ];
    return (
      <th
        className={sortColumn === columnName ? styles.sorting : ''}
        onClick={() => handleSort(columnName)}
      >
        {columnNameKor} {averageColumn.includes(columnName) ? '(a)' : ''}
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

  function BonusStat({ value }: { value: number }) {
    if (value > 0) {
      return (
        <span
          style={{
            color: 'var(--green500)',
          }}
        >
          +{value}
        </span>
      );
    } else {
      return null;
    }
  }

  return (
    <CommonSection id="result_table" title="함대 구성">
      <div className="flex justify-end py-1 px-2">
        <div className="w-40">
          <Select
            options={[
              { value: '', content: '표시 개수' },
              { value: 5, content: 5 },
              { value: 10, content: 10 },
              { value: 20, content: 20 },
              { value: 50, content: 50 },
              { value: 100, content: 100 },
            ]}
            selectedValue={''}
            onSelect={(value) => setListLimit(Number(value))}
          />
        </div>
      </div>
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
              {sortedData.length > 1 ? (
                sortedData
                  .slice(0, listLimit)
                  .map((data: resultTableData, rowIndex) => (
                    <Fragment key={rowIndex}>
                      <tr onClick={() => setOpenIndex(rowIndex)}>
                        <td>{rowIndex + 1}</td>
                        <td>
                          {data.ids.map((id: number) => (
                            <LabelSticker key={id}>{id}</LabelSticker>
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
                          {data.ids.map((id: number, foundShipIdx: number) => {
                            const foundShip = fleetData.useShips.find(
                              (ship) => ship.id === id,
                            );

                            if (foundShip) {
                              return (
                                <tr
                                  key={id}
                                  className={styles.result_table_detail}
                                >
                                  <td></td>
                                  <td className="flex items-center">
                                    <LabelSticker>{id}</LabelSticker>
                                    <div className="ml-1">{foundShip.name}</div>
                                  </td>
                                  <td align="center">
                                    {foundShip.nae}{' '}
                                    <BonusStat
                                      value={
                                        resultShipsParts.nae[foundShipIdx] ?? 0
                                      }
                                    />
                                  </td>
                                  <td align="center">
                                    {foundShip.dol}{' '}
                                    <BonusStat
                                      value={
                                        resultShipsParts.dol[foundShipIdx] ?? 0
                                      }
                                    />
                                  </td>
                                  <td align="center">
                                    {foundShip.swe}{' '}
                                    <BonusStat
                                      value={
                                        resultShipsParts.swe[foundShipIdx] ?? 0
                                      }
                                    />
                                  </td>
                                  <td align="center">
                                    {foundShip.loadedQuantity}
                                  </td>
                                  <td align="center">{foundShip.crew}</td>
                                  <td align="center">{foundShip.minCrew}</td>
                                  <td align="center">{foundShip.durability}</td>
                                  <td align="center">{foundShip.rowing}</td>
                                  <td align="center">
                                    {foundShip.verticalSail}
                                  </td>
                                  <td align="center">
                                    {foundShip.horizontalSail}
                                  </td>
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
                  ))
              ) : (
                <tr>
                  <td align="left" colSpan={15}>
                    <span style={{ color: 'var(--gray600)' }}>
                      데이터가 없습니다.
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </section>
    </CommonSection>
  );
}
