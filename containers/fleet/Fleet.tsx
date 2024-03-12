'use client';

import { useEffect, useState } from 'react';

import { ShipItemProps, StatRowProps } from './item/ShipProps';

import {
  createShipItem,
  getSortOptionFromStatRow,
  removeShipItemListNullValues,
} from './main';

import styles from './fleet.module.css';
import CommonSection from '@/components/CommonSection';
import ShipItemList from './ShipItemList';
import Select from '@/components/Select';
import { statRow } from './data';
import { saveUseData, getLastSavedData } from './indexedDB';

export default function Fleet() {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [lastIndex, setLastIndex] = useState<{
    ship: number;
    armor: number;
    anchor: number;
    ram: number;
  }>({
    ship: 0,
    armor: 0,
    anchor: 0,
    ram: 0,
  });

  const [useShips, setUseShips] = useState<ShipItemProps[]>([]);
  const [useArmors, setUseArmors] = useState<ShipItemProps[]>([]);
  const [useRams, setUseRams] = useState<ShipItemProps[]>([]);
  const [useAnchor, setUseAnchor] = useState<ShipItemProps[]>([]);

  useEffect(() => {
    getLastSavedData()
      .then((savedData) => {
        setUseShips(savedData.useShips || []);
        setUseArmors(savedData.useArmors || []);
        setUseRams(savedData.useRams || []);
        setUseAnchor(savedData.useAnchor || []);
        setLastIndex({
          ship: savedData.useShips.length,
          armor: savedData.useArmors.length,
          ram: savedData.useRams.length,
          anchor: savedData.useAnchor.length,
        });
        setIsInit(true);
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
        setIsInit(true);
      });
  }, []);

  useEffect(() => {
    if (isInit) {
      saveUseData({
        useShips: useShips,
        useArmors: useArmors,
        useRams: useRams,
        useAnchor: useAnchor,
      });
    }
  }, [useShips, useArmors, useRams, useAnchor]);

  const getUseItem = (kind: ShipItemProps['kind']) => {
    let newUseItem: ShipItemProps[];
    let setUseItem: (newValue: ShipItemProps[]) => void;
    let korLang: string = '';

    switch (kind) {
      case 'armor':
        newUseItem = [...useArmors];
        setUseItem = setUseArmors;
        korLang = '장갑';
        break;
      case 'ram':
        newUseItem = [...useRams];
        setUseItem = setUseRams;
        korLang = '충각';
        break;
      case 'anchor':
        newUseItem = [...useAnchor];
        setUseItem = setUseAnchor;
        korLang = '닻';
        break;
      default:
        newUseItem = [...useShips];
        setUseItem = setUseShips;
        korLang = '선박';
        break;
    }

    return { newUseItem, setUseItem, korLang };
  };

  const addUseItem = (kind: ShipItemProps['kind']) => {
    const { newUseItem, setUseItem, korLang } = getUseItem(kind);

    const createItem = createShipItem({
      name: `${lastIndex[kind] + 1}번 ${korLang}`,
      kind,
    });

    setLastIndex((prev) => ({
      ...prev,
      [kind]: (prev[kind] || 0) + 1,
    }));

    newUseItem.push(createItem);

    setUseItem(newUseItem);
  };

  const changeUseItem = (shipItem: ShipItemProps, index: number) => {
    const { newUseItem, setUseItem } = getUseItem(shipItem.kind);

    if (shipItem.isDelete) {
      newUseItem.splice(index, 1);
    } else {
      newUseItem[index] = shipItem;
    }

    setUseItem(newUseItem);
  };

  const sortUseItem = (value: string | number, kind: ShipItemProps['kind']) => {
    if (value === '') return;

    const { newUseItem, setUseItem } = getUseItem(kind);

    let sortedItems;

    if (value === 'name') {
      sortedItems = newUseItem.sort((a, b) =>
        (a[value] as string).localeCompare(b[value] as string),
      );
    } else {
      sortedItems = newUseItem.sort(
        (a, b) => ((b[value] as number) || 0) - ((a[value] as number) || 0),
      );
    }

    setUseItem(sortedItems);
  };

  if (!isInit) {
    return null;
  }

  return (
    <>
      <CommonSection title="선박 입력">
        <ShipItemList
          useItem={useShips}
          addUseItem={addUseItem}
          changeUseItem={changeUseItem}
          kind="ship"
        />
      </CommonSection>

      <CommonSection title="장갑 입력">
        <div className="flex justify-end py-1 px-2">
          <div className="w-40">
            <Select
              options={getSortOptionFromStatRow(statRow.armor)}
              selectedValue={''}
              onSelect={(value) => sortUseItem(value, 'armor')}
            />
          </div>
        </div>
        <ShipItemList
          useItem={useArmors}
          addUseItem={addUseItem}
          changeUseItem={changeUseItem}
          kind="armor"
        />
      </CommonSection>

      <CommonSection title="충각 입력">
        <div className="flex justify-end py-1 px-2">
          <div className="w-40">
            <Select
              options={getSortOptionFromStatRow(statRow.ram)}
              selectedValue={''}
              onSelect={(value) => sortUseItem(value, 'ram')}
            />
          </div>
        </div>
        <ShipItemList
          useItem={useRams}
          addUseItem={addUseItem}
          changeUseItem={changeUseItem}
          kind="ram"
        />
      </CommonSection>

      <CommonSection title="닻 입력">
        <div className="flex justify-end py-1 px-2">
          <div className="w-40">
            <Select
              options={getSortOptionFromStatRow(statRow.anchor)}
              selectedValue={''}
              onSelect={(value) => sortUseItem(value, 'anchor')}
            />
          </div>
        </div>
        <ShipItemList
          useItem={useAnchor}
          addUseItem={addUseItem}
          changeUseItem={changeUseItem}
          kind="anchor"
        />
      </CommonSection>
    </>
  );
}
