const twoSum = require("./1.two sum");

describe("check two sun", () => {
   test("should return the correct indices that sum up to the target", () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
   });

   test('should return "not have any result" if no result found', () => {
      expect(twoSum([2, 7, 11, 15], 30)).toEqual("not have any result");
      expect(twoSum([], 10)).toEqual("not have any result");
      expect(twoSum([1], 1)).toEqual("not have any result");
   });
});
