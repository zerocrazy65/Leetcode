function convert(s, numRows) {
   if (numRows === 1 || s.length <= numRows) {
      return s;
   }
   const rows = new Array(numRows).fill("");
   let currentRow = 0;
   let direction = 1;
   for (let i = 0; i < s.length; i++) {
      rows[currentRow] += s[i];
      if (currentRow === 0) {
         direction = 1;
      } else if (currentRow === numRows - 1) {
         direction = -1;
      }
      currentRow += direction;
   }
   rows;
   return rows.join("");
}

const example1Input = "PAYPALISHIRING";
const example1NumRows = 3;
const example1Output = convert(example1Input, example1NumRows);
console.log(example1Output);
