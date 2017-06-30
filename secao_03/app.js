console.log('Starting app')
const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')

var user = os.userInfo()
var res = notes.addNote()
console.log(res);
var res = notes.add(9, 7)
console.log(res);

console.log(_.uniq([1,3,4,1,4,3]))

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//     console.log('Unable write to file')
//   }
// })
// fs.appendFileSync('greetings.txt', 'Hello world!')

