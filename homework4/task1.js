let averageGrade = (Math.random()*100).toFixed(1);
//averageGrade  = 70.5;
//averageGrade  = 100;

if (averageGrade < 60) 
    console.log ("Незадовільно")
else if ((60 <= averageGrade) && (averageGrade <= 70))
    console.log ("Задовільно")
else if ((70 < averageGrade) && (averageGrade <= 80))
    console.log ("Добре")
else if ((80 < averageGrade) && (averageGrade <= 90))
    console.log ("Дуже добре")
else if ((90 < averageGrade) && (averageGrade <= 100))
    console.log ("Відмінно")
else
    console.log ('Invalid data')

console.log('---------\n Avarage is ' + averageGrade)


