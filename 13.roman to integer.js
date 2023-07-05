var romanToInt = function (s) {
   const romanNum = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };
   const toUpper = s.toUpperCase();
   let sum = 0;
   for (var i = 0; i < toUpper.length; i++) {
      if (romanNum[toUpper[i]] < romanNum[toUpper[i + 1]]) {
         sum -= romanNum[toUpper[i]];
      } else {
         sum += romanNum[toUpper[i]];
      }
   }
   return sum;
};

console.log(romanToInt("viii"));
