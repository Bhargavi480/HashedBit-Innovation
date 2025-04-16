// 1. Scope of var, let, and const
function variableScope() {
    var a = "I am var";     
    let b = "I am let";     
    const c = "I am const"; 
    if (true) {
        var d = "Var inside block";
        let e = "Let inside block";
        const f = "Const inside block";
    }
    console.log(a, b, c, d); 
}
variableScope();

// 2. Get second fruit
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const getSecondFruit = arr => arr[1];
console.log(getSecondFruit(fruits)); 

// 3. Modify array using push() and pop()
const modifyArray = arr => { arr.push("New Element"); arr.pop(); return arr; };
console.log(modifyArray([1, 2, 3, 4])); 
// 4. Square numbers using map()
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = arr => arr.map(num => num * num);
console.log(squareNumbers(numbers)); 

// 5. Filter odd numbers using filter()
const filterOddNumbers = arr => arr.filter(num => num % 2 !== 0);
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); 

// 6. Object greeting
const person = { name: "Bhargavi", age: 20, occupation: "Intern at Hashedbit Innovations " };
const greetPerson = obj => console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old, and I work as a ${obj.occupation}.`);
greetPerson(person);

// 7. Calculate area of rectangle
const calculateArea = rect => rect.width * rect.height;
console.log(calculateArea({ width: 5, height: 10 })); // Output: 50

// 8. Get object keys
const sampleObject = { a: 1, b: 2, c: 3 };
const getObjectKeys = obj => Object.keys(obj);
console.log(getObjectKeys(sampleObject)); // Output: ["a", "b", "c"]

// 9. Merge objects using Object.assign()
const mergeObjects = (obj1, obj2) => Object.assign({}, obj1, obj2);
console.log(mergeObjects({ name: "Alice", age: 25 }, { occupation: "Engineer", country: "India" }));

// 10. Sum numbers using reduce()
const sumNumbers = arr => arr.reduce((acc, num) => acc + num, 0);
console.log(sumNumbers([1, 2, 3, 4, 5])); 