let y = 10;

if (y == 5 || y == 8 || y == 10 || y == 4) console.log("Hey");

if ([5, 8, 10, 4].includes(y)) console.log("Hey Includes");
if ([10, 10, 10].every((val) => val == y)) console.log("Hey Every");
