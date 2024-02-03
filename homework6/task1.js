const num = parseInt(Math.random()*10);
const handleEven = () => console.log(' number is even ');
const handleOdd = () => console.log (' number is odd ');

function handleNum (num, evenNum, oddNum) {
   if (num % 2 == 0) 
    return oddNum()
   else 
    return evenNum()
}

handleNum (num, handleEven, handleOdd);
console.log (' num is ', num)
