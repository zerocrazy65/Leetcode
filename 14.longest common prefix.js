var longestCommonPrefix = function (strs) {
   let i = 0;
   while (true && i < strs[0].length) {
      if (strs.some((x) => x[i] !== strs[0][i])) {
         return strs[0].slice(0, i);
      } else {
         i++;
      }
   }
   return strs[0] ? strs[0] : "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
