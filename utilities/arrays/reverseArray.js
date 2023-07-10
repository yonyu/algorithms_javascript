// 978-1-59327-950-9
export const reverseArray = (arr) => {
  if (!arr) {
    throw new Error("arr is undefined!");
  }

  const length = arr.length;
  let reverse = [];
  for (let i = length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

// In-place is faster, as it loops over half of the array length
export const reverseArrayInPlace = (arr) => {
  if (!arr) {
    throw new Error("arr is undefined!");
  }

  const length = arr.length;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};
