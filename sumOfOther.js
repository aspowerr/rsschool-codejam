module.exports = function sumOfOther(array) {
  const newArray = [];
  let sum = 0; 
  for (let i = 0; i < array.length; i++) {
    if (!(array) || +array[i] !== array[i] || array[i] < 0 || array[i] > 9) {
      return [];
    }
  }
  for (let j = 0; j < array.length; j++) {
    sum += array[j];
  }
  for(let i = 0; i < array.length; i++) {
    newArray[i] = sum - array[i];
  }
  return newArray;
};