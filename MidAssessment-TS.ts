// 1.	Create a function to return the square of value based on arrow function then use it to find the square of 5 values then print them.
//***** Confession: had to search for the arrow function syntax at the beginning of declaration ( forgot the correct 'let sqr = ' syntax part)
let sqr = (num: number) => {
  return Math.pow(num, 2);
};
for (let i = 1; i < 5; i++) {
  console.log(sqr(i));
}

// 2.	Create a function to return the name (first, mid and last) of candidate from object or array then use and print the name.
type Name = { first: string; mid: string; last: string }[];
function printName(input: Name) {
  console.log(input);
  input.forEach((val) => {
    console.log(`${val.first} ${val.mid} ${val.last}`);
  });
}
var s = printName([
  { first: '1', mid: '1', last: '1' },
  { first: '2', mid: '2', last: '2' },
]);
/*
type Name = { first: string; mid: string; last: string }; // | string[];
// type Name = string[];
function printName(input: Name): string {
  var { first = '', mid = '', last = '' } = input;
  //   var [first, mid, last] = input;
  console.log(input);
  if (typeof input === 'object') {
    console.log(typeof input);
    return `${first} ${mid} ${last}`;
  } else {
    return `${input[first]} ${input[mid]} ${input[last]}`;
  }
}
var s = printName({ first: 'string', mid: 'string', last: 'string' });
// var s = printName(['1', '2', '3']);
 */

// 3.	Create a function to return all values of object and store them into array then use it and print the array
// //////////////////////////////////////////////////////////////////////////// not done
function returnObjAsArr(obj: object) {
  var newArr = [];
  for (let o in obj) {
    newArr.push(o); //returns the key
  }
  return newArr;
}
var bj = { one: 1, two: '2' };

// 4.	Create a closure function that receive parameter for message then return another function to print the message with user name which passed as parameter for it. => message, []
//***** Confession: had to search for the syntax (i forgot that the parent function returns the inner function + i fogot the syntax of the function variable)
function closure(message: string) {
  return function (username: string) {
    return `Message for ${username}: ${message}`;
  };
}
var funcVar = closure('your order has been sent');
console.log(funcVar('adam'));

// 5. Create a function that receive an array of number then return only the positive numbers the use it and print the result.
function getPositive(nums: number[]): number[] {
  var newNums: number[] = [];
  nums.forEach((num) => {
    if (num % 2 == 0) {
      newNums.push(num);
    }
  });
  return newNums;
}
console.log(getPositive([1, 2, 3]));

// 6.	Create a function that receive an object contains country and city as string then return the name of city or country name if the city is null.
type LocationNames = {
  country: string;
  city?: string;
};
function ifLocationIsNull(obj: LocationNames): string {
  return obj.city
    ? ` I live in ${obj.city} - ${obj.country}`
    : ` I live in ${obj.country}`;
}
var myCity1: LocationNames = { country: 'Jordan', city: 'Amman' };
var myCity2: LocationNames = { country: 'Jordan', city: 'Amman' };
console.log(ifLocationIsNull(myCity1));
console.log(ifLocationIsNull(myCity2));

// 7. Create a class Person that receive name, age as parameter then create a method called describeMe and return “Hello I’m [name], I am [age] years old!” then create instance then use it.
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  describeMe(): string {
    return `Hello, I am ${this.name}, and I'm ${this.age} years old!`;
  }
}
var person1 = new Person('sam', 22);
console.log(person1.describeMe());

// 8.	Create an abstract class Student that receive an array of marks as number and name and have an abstract method called isPassed which return boolean
abstract class Student {
  marks: number[];
  name: string;
  constructor(marks: number[], name: string) {
    this.marks = marks;
    this.name = name;
  }
  abstract isPassed(): boolean;
}
