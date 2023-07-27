const longestPalindrome = require("./5.longest palindromic substring");

describe("longestPalindrome", () => {
   test("should return the correct longest palindrome", () => {
      expect(longestPalindrome("ceewe").toEqual("ewe"));
      expect(longestPalindrome("babad").toEqual("babad"));
      expect(longestPalindrome("cbbd").toEqual("cbbd"));
      expect(
         longestPalindrome(
            "uihanbjkrtbeiu5389herhuidtbejkrbteknrkldfjgoijwwerweroiuiou"
         ).toEqual("oiuio")
      );
   });

   test('should return "this is not a palindrome" when longestPalindrome.length == 1', () => {
      expect(longestPalindrome("ceewe").toEqual("this is not a palindrome"));
      expect(longestPalindrome("babad").toEqual("babad"));
      expect(longestPalindrome("cbbd").toEqual("cbbd"));
      expect(
         longestPalindrome(
            "uihanbjkrtbeiu5389herhuidtbejkrbteknrkldfjgoijwwerweroiuiou"
         ).toEqual("oiuio")
      );
   });
});
