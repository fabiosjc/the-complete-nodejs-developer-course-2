const notes = require('./notes.js')
const _ = require('lodash')
const yargs = require('yargs')

const argv = yargs.argv
var command = argv._[0]

console.log('Command: ', command)
console.log('Yargs: ', argv)

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note){
    console.log("Nota adicionada com sucesso");
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Nota já existe e não foi adicionada");
  } 

} else if( command === 'list') {
  notes.getAll() 
} else if( command === 'read') {
  notes.readNote(argv.title) 
} else if( command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title) 
  var message = noteRemoved ? 'Nota foi removida' : 'Nota não foi encontrada'
  console.log(message)
} else {
  console.log('Command not recognized');
}

