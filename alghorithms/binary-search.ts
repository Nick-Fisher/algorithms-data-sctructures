export const binarySearch = (arr: Array<number>, searchElement: number) => {
    let start = 0,
        end = arr.length - 1;
        
        
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === searchElement) {
            return mid;
        } else if (arr[mid] < searchElement) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};