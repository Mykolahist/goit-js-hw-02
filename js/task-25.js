function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  const newArray = [];
  for (const number of array1) {
    if (array2.includes(number)) {
      newArray.push(number)
    }
  }

  return newArray;
  // Пиши код выше этой строки
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));