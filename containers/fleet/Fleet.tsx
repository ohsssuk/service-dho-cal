'use client';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { ShipItemProps, StatRowProps } from './item/ShipProps';

import { createShipItem } from './main';

import styles from './fleet.module.css';
import CommonSection from '@/components/CommonSection';
import ShipItemList from './ShipItemList';
import Select from '@/components/Select';
import { statRow } from './data';

export default function Fleet() {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [cookies, setCookie] = useCookies(['useData']);

  const [useShips, setUseShips] = useState<ShipItemProps[]>(
    cookies.useData?.useShips || [],
  );
  const [useArmors, setUseArmors] = useState<ShipItemProps[]>(
    cookies.useData?.useArmors || [],
  );
  const [useRams, setUseRams] = useState<ShipItemProps[]>(
    cookies.useData?.useRams || [],
  );
  const [useAnchor, setUseAnchor] = useState<ShipItemProps[]>(
    cookies.useData?.useAnchor || [],
  );

  useEffect(() => {
    setIsInit(true);
  }, []);

  useEffect(() => {
    saveUseData();
  }, [useShips, useArmors, useRams, useAnchor]);

  const saveUseData = () => {
    setCookie(
      'useData',
      {
        useShips: useShips,
        useArmors: useArmors,
        useRams: useRams,
        useAnchor: useAnchor,
      },
      { expires: new Date(Date.now() + 365 * 5 * 24 * 60 * 60 * 1000) },
    );
  };

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
        break;
    }

    return { newUseItem, setUseItem, korLang };
  };

  const addUseItem = (kind: ShipItemProps['kind']) => {
    const { newUseItem, setUseItem, korLang } = getUseItem(kind);

    let createItem;
    if (kind === 'ship') {
      createItem = createShipItem({
        name: `${lastIndex + 1}번 선박`,
        kind,
      });
      setLastIndex((prev) => prev + 1);
    } else {
      createItem = createShipItem({
        name: korLang,
        kind,
      });
    }

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

  const getSortOptionFromStatRow = (statRow: StatRowProps[]) => {
    const newData = statRow.map((stat: StatRowProps) => ({
      content: stat.kor,
      value: stat.val,
    }));

    return [
      {
        content: '높은순 정렬',
        value: '',
      },
      {
        content: '이름순',
        value: 'name',
      },
      ...newData,
    ];
  };

  const changeSort = (value: string | number, kind: ShipItemProps['kind']) => {
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
              onSelect={(value) => changeSort(value, 'armor')}
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
              onSelect={(value) => changeSort(value, 'ram')}
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
              onSelect={(value) => changeSort(value, 'anchor')}
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
