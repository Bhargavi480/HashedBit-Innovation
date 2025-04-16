function calculator(a,b,operator)
{
    switch(operator){
        case '+': 
        return a+b;
        break;

        case '-': 
        return a-b;
        break;

        case '*': 
        return a*b;
        break;

        case '/': 
        return a/b;
        break;

        default:
            return 'Invalid Operator';
    }
}
console.log(calculator(15,5, '+'));
console.log(calculator(15,5, '-'));
console.log(calculator(15,5, '*'));
console.log(calculator(15,5, '/'));


