function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    const evenNumber = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumber.push(i);
        }
    }
    return evenNumber;
    // Пиши код выше этой строки
}
  
console.log(getEvenNumbers(6, 12));