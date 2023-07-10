/**
 * Generates an array with values from start to finish, inclusively
 * @param {*} start
 * @param {*} end
 * @param {*} step, optional, can't be zero
 * @returns
 */
export function range(start, end, step = start > end ? -1 : 1) {
  //step = step || 1;

  let result = [];
  if (step === 0) {
    throw new Error("step can't be zero!");
  } else if (step > 0) {
    if (end < start) {
      throw new Error(
        `end is less than start while step (${step}) is positive`
      );
    }

    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    if (end > start) {
      throw new Error(
        `end is greater than start while step (${step}) is negative`
      );
    }
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}
