//? Tagged template literals are simply the ability to run a function on the content of a template literal.

function custom(strings, ...values) {
  return values.reduce((finalString, value, index) => {
    return `${finalString}${value}${strings[index + 1]}`;
  }, strings[0]);
}

const name = "Samsul";
const hobby = "travelling";
console.log(custom`My name is ${name} and I love ${hobby}`);

function queryAll(strings, ...values) {
  const string = values.reduce((finalString, value, index) => {
    return `${finalString}${value}${strings[index + 1]}`;
  }, strings[0]);

  return document.querySelectorAll(string);
}

queryAll`div`;
