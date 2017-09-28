const notes = require('./notes.js')
const yargs = require('yargs')

const argv = yargs.argv
var command = argv._[0]

var note = null
if (command === 'add') {
  note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note added successfully')
    notes.logNote(note)
  } else {
    console.log('Note already exists')
  }
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => { notes.logNote(note) })
} else if (command === 'read') {
  note = notes.getNote(argv.title)
  if (note) {
    console.log('Note found')
    notes.logNote(note)
  } else {
    console.log('Note not found')
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Nota foi removida' : 'Nota não foi encontrada'
  console.log(message)
} else {
  console.log('Command not recognized')
}
