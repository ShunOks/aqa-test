import chalk from 'chalk';
/* old commonJS

const {myAge, myName} = require("./file1");
console.log("My Age", myAge);
console.log("My Name", myName);
*/

import { age } from './file1.js';

console.log('My Age', chalk.red(age));
