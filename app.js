const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);
console.log(chalk.blue.bold('Success!'));