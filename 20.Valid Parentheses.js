var isValid = function (s) {
   const arr = [];
   const brackets = {
      "(": ")",
      "{": "}",
      "[": "]",
   };

   for (let i of s) {
      if (brackets[i]) arr.push(i);
      else {
         const last = arr.pop();
         if (brackets[last] !== i) {
            return false;
         }
      }
   }

   return arr.length === 0;
};

console.log(isValid("{[("));
