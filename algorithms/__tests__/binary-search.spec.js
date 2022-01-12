const { binarySearch } = require("../binary-search");

describe('binary search test cases', () => {
    it('search element in array', () => {
        expect(binarySearch([1, 4, 6, 13, 16, 21, 29, 55, 70], 4)).toEqual(1);
    });
    
    it('search element in array 2', () => {
        expect(binarySearch([1, 4, 6, 13, 16, 21, 29, 55, 70], 70)).toEqual(8);
    });
    
    it('search element in array 3', () => {
        expect(binarySearch([1, 4, 6, 13, 16, 21, 29, 55, 70], 56)).toEqual(undefined);
    });
});

