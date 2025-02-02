const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

let wordsWithN = [], wordsWithoutN = [];

words.forEach(word => (word.includes('n') ? wordsWithN : wordsWithoutN).push(word));

wordsWithN.sort().reverse();
wordsWithoutN.sort().reverse();

console.log(wordsWithN, "'n harfi ishtirok etgan so'zlar'");
console.log(wordsWithoutN, "'n harfi ishtirok etmagan so'zlar'");
