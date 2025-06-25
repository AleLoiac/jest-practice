export function caesarCypher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let char of string) {
    const isUpper = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);

    if (index === -1) {
      result.push(char);
    } else {
      const shiftedIndex = (alphabet.length + index + shift) % alphabet.length;
      const shiftedChar = alphabet[shiftedIndex];
      result.push(isUpper ? shiftedChar.toUpperCase() : shiftedChar);
    }
  }

  return result.join("");
}
