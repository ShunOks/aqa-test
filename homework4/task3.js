import chalk from 'chalk';

// via for
const number = parseInt(Math.random() * 10);

console.log(chalk.red('\n' + `таблиця множення на ${number}\n`));

for (let i = 1; i <= 10; i++) {
  console.log(chalk.green(`${number} x ${i} = ${number * i}`));
}

// via while
const number1 = parseInt(Math.random() * 10);
let j = 1;

console.log(chalk.blue('\n' + `таблиця множення на ${number1}\n`));

while (j <= 10) {
  console.log(chalk.yellow(`${number1} x ${j} = ${number1 * j}`));
  j++;
}
