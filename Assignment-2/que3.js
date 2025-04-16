function findTax(salary)
{
    let taxRate;
    switch(true){
        case  salary > 1500000:
            taxRate = 0.30;
            break;
        case salary > 1000000:
            taxRate = 0.20;
            break;
        case salary > 500000:
            taxRate = 0.10;
            break;
        default:
            taxRate=0;
    }
    return salary*taxRate;
}
console.log(findTax(500000)); 
console.log(findTax(750000)); 
console.log(findTax(1250000)); 
console.log(findTax(2000000)); 