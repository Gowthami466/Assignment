// Number type
function numbertype (num){
    let result
    if (num == 0){
        result = 'Netural';
    }else if (num < 0){
        result = 'Negative'
    }else {
      result = 'positive'; 
    }
    return result;
}


console.log(numbertype(2))
console.log(numbertype(-5))
console.log(numbertype(0))