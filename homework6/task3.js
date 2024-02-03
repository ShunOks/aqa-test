
const num1 = 80;
const num2 = 8;


try {
    console.log (divide(num1, num2)); 
} 
catch (error) {
    console.log ('Catch error')    
}
finally {
    console.log ( 'Робота завершена ')
}


function divide (numerator, denominator) {
if (denominator === 0)
    return 'No possibility to divide to 0'
else if (!Number.isInteger(numerator) || !Number.isInteger(denominator))
    return 'Argument isn\'t number' 
else
    return 'The result is ' + numerator / denominator
}