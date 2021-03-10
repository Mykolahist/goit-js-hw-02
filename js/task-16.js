function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
    let allArray = firstArray.concat(secondArray);

    console.log(allArray);

    if (allArray.length > maxLength) {
        let newArray = allArray.slice(0, maxLength);

        return newArray;
    }
    
    return allArray;
    // Пиши код выше этой строки
}
console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 8));