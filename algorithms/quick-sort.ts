export const quickSort = (arr: Array<number>): Array<number> => {
    /** Base case, arr already sorted */
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];

    const less = arr.slice(1).filter(item => item <= pivot);
    const greater = arr.slice(1).filter(item => item > pivot);

    return quickSort(less).concat([pivot], quickSort(greater));
}


console.log('quickSort', quickSort([2, 4, 3, 7, 1]));