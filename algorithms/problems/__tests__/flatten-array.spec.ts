import { flatten } from "../flatten-array"

describe('Test cases flatten', () => {
    it('Tripple depth', () => {
        expect(flatten([[1,1],2,[1,[1]]])).toEqual([1,1,2,1,1]);
    })
})