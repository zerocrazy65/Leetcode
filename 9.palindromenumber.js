var isPalindrome = function (x) {
    const toString = x.toString()
    for (let i = 0; i < toString.length / 2; i++) {
      if (toString[i] !== toString[toString.length - 1 - i]) {
        return false
      }
    }
    return true
  }

  console.log(isPalindrome(121))