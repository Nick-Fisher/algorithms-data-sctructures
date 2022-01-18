import { selectionSort } from "../selection-sort";

describe("selection sort tests", () => {
  it("sort [4, 5, 0, 1]", () => {
    expect(selectionSort([4, 5, 0, 1])).toEqual(
      expect.arrayContainingExactly([0, 1, 4, 5])
    );
  });
});
