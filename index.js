const arrNums = [1,9,5,6,7,9,9,4,6]
function checkKeysInRow(array) {
 
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= array[index + 1]) {
    const checkIndex = array[index];
      return array.lastIndexOf(checkIndex);
    }
  }
  return 'ups';
}
console.log(checkKeysInRow(arrNums));