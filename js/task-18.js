function calculateTotal(number) {
  // Пиши код ниже этой строки
    let total = 0;
    
    for (let i = 0; i <= number; i += 1){
                
      console.log(i);

      total += i;
        
    }
    
    return total;
  // Пиши код выше этой строки
}

console.log(calculateTotal(5));