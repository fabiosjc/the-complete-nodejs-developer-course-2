console.log('Starting node.js')
// console.log(module);
var fs = require('fs');

var fetchNotes = () => {
  try {
    var noteStr = fs.readFileSync('notes.json')
    return JSON.parse(noteStr)    
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }
  
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }  
}

var getAll = () => {
  console.log('Getting all notes')
}

var readNote = (title) => {
  console.log('Reading note', title)
}

var removeNote = (title) => {
  var notes = fetchNotes()  
  var filterdNotes = notes.filter((note) => note.title !== title)
  saveNotes(filterdNotes)
  return notes.length !== filterdNotes.length
}

module.exports = { addNote , getAll, readNote, removeNote }