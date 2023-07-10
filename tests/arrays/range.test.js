import { range } from "../../utilities/arrays/range.js";

describe("test the range() function", () => {
  test("ascending order", () => {
    let expected = [1, 2, 3];
    let calculated = range(1, 3);
    expect(calculated).toEqual(expected);
  });
  test("descending order", () => {
    let expected = [3, 2, 1];
    let calculated = range(3, 1, -1);
    expect(calculated).toEqual(expected);
  });
  test("throw an exception", () => {
    expect(() => {
      range(3, 1);
    }).toThrow();
  });
});
