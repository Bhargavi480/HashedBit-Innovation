function repeatedDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}


console.log(repeatedDigitSum(456)); 
console.log(repeatedDigitSum(9875)); 
console.log(repeatedDigitSum(1234));