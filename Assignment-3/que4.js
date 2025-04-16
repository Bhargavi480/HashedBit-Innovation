let str1 = 'I am in 3rd year of engineering';
let vowels = 0;
let consonants = 0;
let strArr = str1.split('');

strArr.forEach(char => {
    let lowerChar = char.toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(lowerChar)) {
        vowels++;
    } else if (lowerChar >= 'a' && lowerChar <= 'z') {
        consonants++;
    }
});

console.log('Vowels:', vowels);
console.log('Consonants:', consonants);
