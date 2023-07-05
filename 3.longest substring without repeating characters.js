var lengthOfLongestSubstring = function (s) {
    let firstCount = []
    let storeCount = []
    for (var i = 0; i < s.length; i++) {
      if (firstCount.find((data) => data == s[i])) {
        const foundIndex = firstCount.findIndex((data) => data == s[i])
        if (storeCount) {
          if (storeCount.length < firstCount.length) {
            storeCount = firstCount
          }
          firstCount = firstCount.slice(foundIndex + 1)
        }
      }
      firstCount.push(s[i])
    }
    if (storeCount.length < firstCount.length) {
      return firstCount.join('').length
    } else {
      return storeCount.join('').length
    }
  }

  console.log(lengthOfLongestSubstring('abcabcbb'))