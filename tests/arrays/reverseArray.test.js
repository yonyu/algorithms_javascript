import {
  reverseArrayInPlace,
  reverseArray,
} from "../../utilities/arrays/reverseArray.js";

describe("Test the reverseArrayInPlace() function", () => {
  test("Undefined array", () => {
    expect(() => {
      let arr;
      reverseArrayInPlace(arr);
    }).toThrow();
  });
  test("Empty array", () => {
    let arr = [];
    let calculated = reverseArrayInPlace(arr);
    let expected = [];
    expect(calculated).toEqual(expected);
  });
  test("Single elememt", () => {
    let arr = [1];
    let calculated = reverseArrayInPlace(arr);
    let expected = [1];
    expect(calculated).toEqual(expected);
  });
  test("Two elememts", () => {
    let arr = [1, 2];
    let calculated = reverseArrayInPlace(arr);
    let expected = [2, 1];
    expect(calculated).toEqual(expected);
  });
  test("Three elememts", () => {
    let arr = [1, 2, 3];
    let calculated = reverseArrayInPlace(arr);
    let expected = [3, 2, 1];
    expect(calculated).toEqual(expected);
  });
});

describe("Test the reverseArray() function", () => {
  test("Undefined array", () => {
    expect(() => {
      let arr;
      reverseArray(arr);
    }).toThrow();
  });
  test("Empty array", () => {
    let arr = [];
    let calculated = reverseArray(arr);
    let expected = [];
    expect(calculated).toEqual(expected);
  });
  test("Single elememt", () => {
    let arr = [1];
    let calculated = reverseArray(arr);
    let expected = [1];
    expect(calculated).toEqual(expected);
  });
  test("Two elememts", () => {
    let arr = [1, 2];
    let calculated = reverseArray(arr);
    let expected = [2, 1];
    expect(calculated).toEqual(expected);
  });
  test("Three elememts", () => {
    let arr = [1, 2, 3];
    let calculated = reverseArray(arr);
    let expected = [3, 2, 1];
    expect(calculated).toEqual(expected);
  });
});
