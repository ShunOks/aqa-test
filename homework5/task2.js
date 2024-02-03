function getIsAdult (age) {
  return (age >= 18) ?  true :  false 
}

function getIsAdult2 (age) {
    if (age >= 18) 
        return true
    else
        return false 
}

function getIsAdult3 (age) {
    return !!(age >= 18) 
}


function getIsAdult4 (age) {
    return Boolean(age >= 18) 
}

console. log('Result: ', getIsAdult3(15));
console. log('Result: ', getIsAdult3(25));
console. log('Result: ', getIsAdult4(15));
console. log('Result: ', getIsAdult4(25));