var longestPalindrome = function (s) {
   if (s.length === 0) return "";

   let longestPalindrome = "";

   for (let i = 0; i < s.length; i++) {
      let oddPalindrome = expandCenter(s, i, i);
      let evenPalindrome = expandCenter(s, i, i + 1);

      if (oddPalindrome.length > longestPalindrome.length) {
         longestPalindrome = oddPalindrome;
      }

      if (evenPalindrome.length > longestPalindrome.length) {
         longestPalindrome = evenPalindrome;
      }
   }

   if (longestPalindrome.length == 1) {
      return "this is not a palindrome";
   }
   return longestPalindrome;
};

const expandCenter = (s, left, right) => {
   while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
   }
   return s.slice(left + 1, right);
};

console.log(longestPalindrome("ceewe"));
