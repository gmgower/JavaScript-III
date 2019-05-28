/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding  
       
      When declaring a function and console.log this would display the window/global object 

* 2. Implicit Binding

      When invoking a function look to the left of the . and this would be what it is referencing to.

* 3. New binding

      When creating a pascal notation constructor function with any argument and then create this.arugment in the code block to reference an object. Then create new keyword property with constructor function name which  will create an empty object and this from the constructor function reference to the empty object. 

* 4. Explicit binding

      Whnen using the .call, .apply or bind. method this is direclty defined

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function name(params) {
  console.log(this)
}
name()

// Principle 2

// code example for Implicit Binding
const myObj = {
  name: 'John Doe',
  sayName: function () {
    console.log(`${this.name}`)
  }
}

myObj.sayName()
// Principle 3
// code example for New Binding
function Name(attributes) {
  this.firstName = attributes.first;
  this.lastName = attributes.last;
}

const john = new Name({
  first: 'John',
  last: 'Doe'
})

console.log(john)

// Principle 4
// code example for Explicit Binding
function university(name, population, location) {
  return `${this.name} ${this.population} ${this.location}`;
}

const uniOne = {
  name: 'University Of Texas',
  population: '30000',
  location: 'Austin, Texas'
}

const rate = {
  rank: '1',
  rank: '2'
}

console.log(university.call(uniOne))
console.log(university.apply(uniOne))
// console.log(university())
