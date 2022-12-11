// 1 Two Sum
function twoSum(nums: number[], target: number): number[] | undefined {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === target) {
      return [i - 1, i];
    } else {
      sum = nums[i];
    }
  }
  return;
}
