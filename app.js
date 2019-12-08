const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize version.
yargs.version('1.1.0');

// Add command.
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    handler: () => {
        console.log(chalk.green.bold('Adding a new note.'));
    }
});

// Remove command.
yargs.command({
    command: 'remove',
    describe: 'Removes a new note',
    handler: () => {
        console.log(chalk.red.bold('Removing a new note.'));
    }
});

// List command.
yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler: () => {
        console.log(chalk.blue.bold('Listing out all the notes.'));
    }
});

// Read command.
yargs.command({
    command: 'read',
    describe: 'Reads the selected note',
    handler: () => {
        console.log(chalk.blue.bold('Reading the selected note.'));
    }
});

console.log(yargs.argv);