function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    const bigNumber = [];
    
    for (let i = 0; i < numbers.length; i += 1){

        console.log(numbers[i]);

        if (numbers[i] > value) {
            bigNumber.push(numbers[i]);
        }
    }

    return bigNumber;
  // Пиши код выше этой строки
}

console.log(filterArray([12, 24, 8, 41, 76], 20));