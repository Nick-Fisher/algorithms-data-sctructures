export const quickSort = (arr: Array<number>): Array<number> => {
    /** Base case, arr already sorted */
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[Math.trunc(arr.length / 2)];

    const less = arr.filter(item => item < pivot);
    const greater = arr.filter(item => item > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];
}


console.log('quickSort', quickSort([2, 4, 3, 7, 1]));