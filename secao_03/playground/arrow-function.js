var square = (x) => x * x
console.log(square(9))

var user = {
  name: 'Fábio',
  sayHi: () => {
    // console.log(arguments)
    console.log(`Hi ${this.name}`)
    console.log(`Hi ${user.name}`)
  },
  sayHiAlternative () { // solução alternativa p/ poder usar 'this'
    console.log(arguments)
    console.log(`Hi ${this.name}`)
    console.log(`Hi ${user.name}`)
  }
}

user.sayHi()
user.sayHiAlternative(1, 2, 3)
