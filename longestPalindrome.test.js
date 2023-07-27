const longestPalindrome = require("./5.longest palindromic substring");

describe("longestPalindrome", () => {
   test("should return the longest palindrome in the given string", () => {
      expect(longestPalindrome("babad")).toBe("bab");
      expect(longestPalindrome("cbbd")).toBe("bb");
      expect(longestPalindrome("a")).toBe("a");
      expect(longestPalindrome("racecar")).toBe("racecar");
      expect(longestPalindrome("abcde")).toBe("a");
   });

   test("should handle an empty string", () => {
      expect(longestPalindrome("")).toBe("");
   });
});
