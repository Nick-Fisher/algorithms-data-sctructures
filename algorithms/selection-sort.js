const findMinIndex = (arr) => {
  let minIndex = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    const minElement = arr[minIndex];
    if (element < minElement) {
      minIndex = i;
    }
  }
  return minIndex;
};

export const selectionSort = (arr) => {
  const result = [];
  while (arr.length !== 0) {
    const minIndex = findMinIndex(arr);
    result.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return result;
};

console.log(selectionSort([4, 5, 0, 1])); // [0, 1, 4, 5]
