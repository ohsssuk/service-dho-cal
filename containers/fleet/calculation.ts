import { ShipItemProps } from './item/ShipProps';

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
