function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
    let total;

    message = message.split(' ');
    total = message.length * pricePerWord;
    
    return total;
  // Пиши код выше этой строки
}

console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));