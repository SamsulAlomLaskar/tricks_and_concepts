//? Given a string, reverse each word in the sentence
//* For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

const string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
const reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
const reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

// console.log(reverseBySeparator(string, ""));
console.log(reverseEntireSentence);
console.log(reverseEachWord);
