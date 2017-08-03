console.log('Starting node.js')
// console.log(module);
var fs = require('fs')

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

  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  console.log('Getting all notes')
}

var getNote = (title) => {
  var notes = fetchNotes()
  var filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0]
}

var logNote = (note) => {
  console.log('---')
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}

var removeNote = (title) => {
  var notes = fetchNotes()
  var filterdNotes = notes.filter((note) => note.title !== title)
  saveNotes(filterdNotes)
  return notes.length !== filterdNotes.length
}

module.exports = { addNote, getAll, getNote, removeNote, logNote }
