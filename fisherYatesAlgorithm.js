//! Random Swapping an array using Fisher-Yates Algorithm

//? Using for loop

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];

    // Swap array

    array[i] = array[j];
    array[j] = temp;
  }
  //   return array.filter((val) => val !== undefined);
  return array;
};

const shuffleES6 = (array) => {
  //   array.reverse().forEach((item, index) => {
  array.forEach((item, index) => {
    const j = Math.floor(Math.random() * (index + 1));
    console.log(j, index, [array[index], array[j]]);
    [array[index], array[j]] = [array[j], array[index]];
  });
  return array;
};

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(values, "Normal");
// console.log(values.reverse(), "REverse");
// console.log(values, "Normal after reverse");

const shuffleES62 = (array) => {
  return array
    .map((item) => ({
      sorting: Math.random() * 1,
      value: item,
    }))
    .sort((a, b) => a.sorting - b.sorting)
    .map((item) => item.value);
};

// console.log(shuffle(values));
// console.log(shuffleES6(values));
console.log(shuffleES62(values));
