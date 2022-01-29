const { quickSort } = require("../quick-sort");

it('quickSort empty collection', () => {
  expect(quickSort([])).toEqual([]);
});

it('quickSort not change original array', () => {
  const items = [1, 2, 3, 4, 5];
  const result = quickSort(items);
  expect(result).not.toBe(items);
});
