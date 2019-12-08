const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');


// Exports.
const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.some(note => note.title.toLowerCase() === title.toLowerCase());

    if (duplicateNotes) {
        return console.log(chalk.red('Error: Note already exist.'));
    };
    if (title.trim() === '') {
        return console.log(chalk.red('Error: Note Title cannot be empty.'));
    };

    notes.push({
        title,
        body
    });
    saveNotes(notes);
    console.log(chalk.green('New note added.'));
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
};