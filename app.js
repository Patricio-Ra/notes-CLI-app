const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize version.
yargs.version('1.1.0');

// Add command.
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Title of the note to be add.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note to be add.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Remove command.
yargs.command({
    command: 'remove',
    describe: 'Removes a new note',
    builder: {
        title: {
            describe: 'Title of the note to be remove.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// List command.
yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler() {
        notes.listNotes();
    }
});

// Read command.
yargs.command({
    command: 'read',
    describe: 'Reads the selected note',
    builder: {
        title: {
            describe: 'Note title to read.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();