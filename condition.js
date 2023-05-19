let y = 10;

if (y == 5 || y == 8 || y == 10 || y == 4) console.log("Hey");

if ([5, 8, 10, 4].includes(y)) console.log("Hey Includes");
if ([10, 10, 10].every((val) => val == y)) console.log("Hey Every");

//? In JavaScript, numbers that start with zero followed by other digits are interpreted as octal (base 8) numbers. The octal number 050 is represented in base 10 as 40.
