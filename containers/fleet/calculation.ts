import { ShipItemProps } from './item/ShipProps';
import { createPartsSumDefault } from './main';
import { fleetData, partsSum, partsSumForShip } from './type';

export function generateCombinations(
  useShips: ShipItemProps[],
  combinationLength: number,
): ShipItemProps[][] {
  const filteredShips: ShipItemProps[] = useShips.filter(
    (useShips) => useShips.isUse,
  );

  function backtrack(startIndex: number, combination: ShipItemProps[]): void {
    if (combination.length === combinationLength) {
      combinations.push([...combination]);
      return;
    }
    for (let i = startIndex; i < filteredShips.length; i++) {
      combination.push(filteredShips[i]);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  const combinations: ShipItemProps[][] = [];
  backtrack(0, []);
  return combinations;
}

export function calculatePartsSum(fleetData: fleetData) {
  const result = createPartsSumDefault();

  for (const fleetKey in fleetData) {
    if (fleetKey === 'useShips') {
      continue; // 선박 제외
    }

    if (fleetData.hasOwnProperty(fleetKey)) {
      const parts = fleetData[fleetKey];

      // 각 부품의 "isMount"가 true인 경우에 합산
      parts.forEach((part) => {
        if (part.isMount) {
          for (const partKey in part) {
            if (result.hasOwnProperty(partKey)) {
              const partKeyValue = part[partKey];

              if (typeof partKeyValue === 'number') {
                result[partKey] = (result[partKey] ?? 0) + partKeyValue;
              }
            }
          }
        }
      });
    }
  }

  return result;
}

export function calculatePartsSumForShip(
  fleetData: fleetData,
): partsSumForShip {
  const result: partsSumForShip = {
    nae: [],
    dol: [],
    swe: [],
    loadedQuantity: [],
  };

  for (const fleetKey in fleetData) {
    if (fleetKey === 'useShips') {
      continue; // 선박 제외
    }

    if (fleetData.hasOwnProperty(fleetKey)) {
      const parts = fleetData[fleetKey];

      let idx = 0;
      parts.forEach((part) => {
        if (part.isMount) {
          for (const partKey in part) {
            if (result.hasOwnProperty(partKey)) {
              const partKeyValue = part[partKey];

              if (typeof partKeyValue === 'number') {
                result[partKey][idx] =
                  (result[partKey][idx] ?? 0) + partKeyValue;
              }
            }
          }
        }
        idx++;
      });
    }
  }

  return result;
}
