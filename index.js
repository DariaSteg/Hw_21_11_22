// написати скрипт (можна функцію можна без), який виводить індекс максимального елемента в масиві. Якщо максимальних елементів декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5
const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]
function checkKeysInRow(array) {
  let checkIndex =0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
   checkIndex = array[index];}
  }
  return array.lastIndexOf(checkIndex);
}
console.log(checkKeysInRow(arrNums));


// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

function checkOfMaxRow(array) {
  let checkIndex =0;
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
   checkIndex = array[index];
   count++;
  }
  }
  return count;
}
console.log(checkOfMaxRow(arrNums));