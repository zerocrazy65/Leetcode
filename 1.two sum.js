function twoSum(nums, target) {
   let numArr = new Map();
   for (var i = 0; i < nums.length; i++) {
      const result = target - nums[i];
      if (numArr.has(result)) {
         return [numArr.get(result), i];
      }
      numArr.set(nums[i], i);
   }
   return "not have any result";
}

console.log(twoSum([2, 7, 11, 15], 9));
