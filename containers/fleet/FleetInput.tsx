'use client';

import { useEffect, useState } from 'react';

import { ShipItemProps } from './item/ShipProps';

import {
  createShipItem,
  getSortOptionFromStatRow,
  removeShipItemListNullValues,
} from './main';

import styles from './fleet.module.css';
import CommonSection from '@/components/CommonSection';
import ShipItemList from './item/ShipItemList';
import Select from '@/components/Select';
import { statRow } from './data';
import { saveUseData, getLastSavedData } from './indexedDB';
import BottomMenuBar from './BottomMenuBar';
import CodePopup from './CodePopup';
import { fleetData } from './type';

export default function FleetInput({
  postFleetData,
}: {
  postFleetData: (fleetData: fleetData) => void;
}) {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [lastIndex, setLastIndex] = useState<{
    ship: number;
    armor: number;
    anchor: number;
    ram: number;
    special: number;
    figurehead: number;
  }>({
    ship: 0,
    armor: 0,
    anchor: 0,
    ram: 0,
    special: 0,
    figurehead: 0,
  });

  const [useShips, setUseShips] = useState<ShipItemProps[]>([]);
  const [useArmors, setUseArmors] = useState<ShipItemProps[]>([]);
  const [useRams, setUseRams] = useState<ShipItemProps[]>([]);
  const [useAnchor, setUseAnchor] = useState<ShipItemProps[]>([]);
  const [useSpecial, setUseSpecial] = useState<ShipItemProps[]>([]);
  const [useFigurehead, setUseFigurehead] = useState<ShipItemProps[]>([]);

  const [isCodePopupOpen, setIsCodePopupOpen] = useState<boolean>(false);
  const [codePopupData, setCodePopupData] = useState<string>('');

  useEffect(() => {
    getLastSavedData()
      .then((savedData) => {
        setFleetFromSaveData(savedData);
        setIsInit(true);
      })
      .catch((error) => {
        setIsInit(true);
      });
  }, []);

  useEffect(() => {
    postFleet();
  }, [isInit]);

  const setFleetFromSaveData = (savedData: fleetData) => {
    setUseShips(savedData.useShips || []);
    setUseArmors(savedData.useArmors || []);
    setUseRams(savedData.useRams || []);
    setUseAnchor(savedData.useAnchor || []);
    setUseSpecial(savedData.useSpecial || []);
    setUseFigurehead(savedData.useFigurehead || []);
    setLastIndex({
      ship: savedData.useShips ? savedData.useShips.length : 0,
      armor: savedData.useArmors ? savedData.useArmors.length : 0,
      ram: savedData.useRams ? savedData.useRams.length : 0,
      anchor: savedData.useAnchor ? savedData.useAnchor.length : 0,
      special: savedData.useSpecial ? savedData.useSpecial.length : 0,
      figurehead: savedData.useFigurehead ? savedData.useFigurehead.length : 0,
    });
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
      case 'figurehead':
        newUseItem = [...useFigurehead];
        setUseItem = setUseFigurehead;
        korLang = '선수상';
        break;
      case 'special':
        newUseItem = [...useSpecial];
        setUseItem = setUseSpecial;
        korLang = '특수';
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

  const postFleet = () => {
    postFleetData({
      useShips,
      useArmors,
      useRams,
      useAnchor,
      useSpecial,
      useFigurehead,
    });
  };

  const saveFleet = () => {
    saveUseData({
      useShips: removeShipItemListNullValues(useShips),
      useArmors: removeShipItemListNullValues(useArmors),
      useRams: removeShipItemListNullValues(useRams),
      useAnchor: removeShipItemListNullValues(useAnchor),
      useSpecial: removeShipItemListNullValues(useSpecial),
      useFigurehead: removeShipItemListNullValues(useFigurehead),
    });

    alert('웹 브라우저에 저장되었습니다.');
  };

  const useCodeFleet = () => {
    setCodePopupData(
      JSON.stringify({
        useShips: removeShipItemListNullValues(useShips),
        useArmors: removeShipItemListNullValues(useArmors),
        useRams: removeShipItemListNullValues(useRams),
        useAnchor: removeShipItemListNullValues(useAnchor),
        useSpecial: removeShipItemListNullValues(useSpecial),
        useFigurehead: removeShipItemListNullValues(useFigurehead),
      }),
    );
    setIsCodePopupOpen(true);
  };

  const handleApplyCode = (fleetCode: string) => {
    if (fleetCode.trim() === '') {
      fleetCode = '{}';
    }

    setFleetFromSaveData(JSON.parse(fleetCode));
    setIsCodePopupOpen(false);
    alert('적용 되었습니다.');
  };

  const deleteAllFleet = () => {
    if (confirm('전체 초기화 하시겠습니까?')) {
      setUseShips([]);
      setUseArmors([]);
      setUseRams([]);
      setUseAnchor([]);
      setUseSpecial([]);
      setUseFigurehead([]);
    }
  };

  if (!isInit) {
    return null;
  }

  return (
    <>
      <BottomMenuBar
        calculate={postFleet}
        save={saveFleet}
        useCode={useCodeFleet}
        deleteAll={deleteAllFleet}
      />

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

      <CommonSection title="선수상 입력">
        <div className="flex justify-end py-1 px-2">
          <div className="w-40">
            <Select
              options={getSortOptionFromStatRow(statRow.figurehead)}
              selectedValue={''}
              onSelect={(value) => sortUseItem(value, 'figurehead')}
            />
          </div>
        </div>
        <ShipItemList
          useItem={useFigurehead}
          addUseItem={addUseItem}
          changeUseItem={changeUseItem}
          kind="figurehead"
        />
      </CommonSection>

      <CommonSection title="특수 입력">
        <div className="flex justify-end py-1 px-2">
          <div className="w-40">
            <Select
              options={getSortOptionFromStatRow(statRow.special)}
              selectedValue={''}
              onSelect={(value) => sortUseItem(value, 'special')}
            />
          </div>
        </div>
        <ShipItemList
          useItem={useSpecial}
          addUseItem={addUseItem}
          changeUseItem={changeUseItem}
          kind="special"
        />
      </CommonSection>

      {isCodePopupOpen && (
        <CodePopup
          initText={codePopupData}
          onApply={handleApplyCode}
          onClose={() => setIsCodePopupOpen(false)}
        />
      )}
    </>
  );
}
