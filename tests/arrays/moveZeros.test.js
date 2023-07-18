const { moveZeros } = require("../../utilities/arrays/moveZeros");

describe("test moveZeros", () => {
  test("regular", () => {
    let nums = [1, 2, 3, 0, 4, 5, 0, 9];
    let expected = [1, 2, 3, 4, 5, 9, 0, 0];

    moveZeros(nums);
    expect(nums).toEqual(expected);
  });
});
