function maxArea(height) {
   let left = 0;
   let right = height.length - 1;
   let maxAreaValue = 0;

   while (left < right) {
      const width = right - left;
      const minHeight = Math.min(height[left], height[right]);
      const areaValue = width * minHeight;
      width;
      minHeight;
      areaValue;
      maxAreaValue = Math.max(maxAreaValue, areaValue);

      if (height[left] < height[right]) {
         left++;
      } else {
         right--;
      }
   }

   return maxAreaValue;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
