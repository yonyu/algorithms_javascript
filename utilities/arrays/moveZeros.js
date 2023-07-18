/* https://leetcode.com/problems/move-zeroes/
 * 283. Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 **/

// move every non-zero element to the left, and count the number of non-zero element
// Complexity: O(n)
export const moveZeros = function (nums) {
  let start = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] != 0) {
      let temp = nums[start];
      nums[start] = nums[index];
      nums[index] = temp;
      start++;
    }
  }

  for (let index = start; index < nums.length; index++) {
    nums[start] = 0;
    start++;
  }
};
