let averageGrade = (Math.random()*100).toFixed(1);
//averageGrade  = 70.5;
//averageGrade  = 100;

switch (true) {
    case (averageGrade < 60) : 
        console.log ("Незадовільно")
        break
    case ((60 <= averageGrade) && (averageGrade <= 70)) :
        console.log ("Задовільно")
        break
    case ((70 < averageGrade) && (averageGrade <= 80)) :
        console.log ("Добре")
        break
    case ((80 < averageGrade) && (averageGrade <= 90)) :
        console.log ("Дуже добре")
        break
    case ((90 < averageGrade) && (averageGrade <= 100)) :
        console.log ("Відмінно")
        break
    default :
        console.log ('Invalid data')
}

console.log('---------\n Avarage is ' + averageGrade)


