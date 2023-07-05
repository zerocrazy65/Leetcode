var findMedianSortedArrays = function (nums1, nums2) {
  const combineNums = nums1.concat(nums2)
  const sortNums = combineNums.sort((a, b) => a - b)
  const midNums = Math.floor(sortNums.length / 2)
  if (sortNums.length % 2 == 0) {
    const data = sortNums[midNums]
    const data2 = sortNums[midNums - 1]
    const result = (data2 + data) / 2
    return result
  }
  return combineNums[midNums]
}

console.log(findMedianSortedArrays([3], [-2, -1]))
