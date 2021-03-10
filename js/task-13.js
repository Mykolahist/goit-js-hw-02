function slugify(title) {
  // Пиши код ниже этой строки
    let string;
    let lower

    title = title.toLowerCase();

    lower = title.split(' ');

    string = lower.join('-');

    return string;
  // Пиши код выше этой строки
}

console.log(slugify('Массивы для новичков'));