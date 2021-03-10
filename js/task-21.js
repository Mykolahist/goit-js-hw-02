function findLongestWord(string) {
  // Пиши код ниже этой строки
    const separator = string.split(' ');
    
    let longestWord = separator[0];
  
    console.log(separator);

    for (let i = 0; i < separator.length; i += 1) {
        
        console.log(separator[i]);

        let letter = separator[i].split('');

        console.log(letter);

        if (letter.length > longestWord.length) {
            longestWord = separator[i];
        }

        continue;
    }

    return longestWord;
  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));