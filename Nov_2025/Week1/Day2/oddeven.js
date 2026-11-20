//OddOrEven

function isOddOrEven(num){
    let result
    if (num % 2 == 0){
        result = 'Even';
    }else{
      result = 'Odd'; 
    }
    return result;
}


console.log(isOddOrEven(2))
console.log(isOddOrEven(5))