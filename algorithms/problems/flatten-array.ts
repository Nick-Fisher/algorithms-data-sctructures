/**
 * Input: nestedList = [[1,1],2,[1,1]]
 * Output: [1,1,2,1,1]
 * 
 */


let nestedList = [[1,1],2,[1,[2, 1]]];

// const flatten = (arr) => {
//     let flattenArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]) {
//             flattenArray = [...flattenArray, ...flatten(arr[i])];
//         } else {
//             flattenArray.push(arr[i]);
//         }
//     }
//     return flattenArray;
// }

export const flatten = (arr: Array<any>): Array<any> => {
    let flattenArray = [];
    while (arr.length) {
        const arrayElement = arr.shift();
        if (Array.isArray(arrayElement)) {
            arr.unshift(...arrayElement)
            continue;
        }

        flattenArray.push(arrayElement)
    }
    console.log('flatten array', flattenArray)
    return flattenArray;
}

flatten(nestedList);