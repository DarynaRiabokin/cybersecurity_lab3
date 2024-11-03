export function getDecrypted(text, substitutionTable) {
  const segments = text.split(" ");
  return segments
    .map((segment) => {
      return segment
        .match(/.{1,2}/g)
        .map((symbol) => {
          for (let letter in substitutionTable) {
            if (substitutionTable[letter].includes(symbol)) {
              return letter;
            }
          }
          return ""; // повертаємо пустий рядок, якщо символ не знайдено
        })
        .join("");
    })
    .join(" ");
}
