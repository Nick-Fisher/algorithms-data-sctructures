import { polishNotation } from "../polish-notation"

describe('polish notation tests', () => {
    it('* + 2 2 3', () => {
        expect(polishNotation('* + 2 2 3')).toEqual(12);
    })
})