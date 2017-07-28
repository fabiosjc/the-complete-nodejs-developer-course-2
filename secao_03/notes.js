console.log('Starting node.js')
// console.log(module);
var fs = require('fs');

var addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  }

  try {
    var noteStr = fs.readFileSync('notes.json')
    notes = JSON.parse(noteStr)    
  } catch (e) {
    console.warn('Error on read notes file', e);
  }
  
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0){
    notes.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(notes))
  }
  
}

var getAll = () => {
  console.log('Getting all notes')
}

var readNote = (title) => {
  console.log('Reading note', title)
}

var removeNote = (title) => {
  console.log('Removing note', title)
}

module.exports = { addNote , getAll, readNote, removeNote }