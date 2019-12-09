const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');


// Exports.
const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    if (title.trim() === '') {
        return console.log(chalk.red('Error: Note Title cannot be empty.'));
    };

    const notes = loadNotes();
    const duplicateNotes = notes.some(note => note.title.toLowerCase() === title.toLowerCase());

    if (duplicateNotes) {
        return console.log(chalk.red('Error: Note already exist.'));
    };

    notes.push({
        title,
        body
    });
    saveNotes(notes);
    console.log(chalk.green('New note added.'));
};

const removeNote = (title) => {
    if (title.trim() === '') {
        return console.log(chalk.red('Error: Note Title cannot be empty.'));
    };

    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title.toLowerCase() === title.toLowerCase());

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        saveNotes(notes);
        console.log(chalk.green(`Note '${title}' deleted.`));
    } else {
        console.log(chalk.red(`Note '${title}' not found.`));
    };
};


// Private methods.
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


module.exports = {
    getNotes,
    addNote,
    removeNote,
};