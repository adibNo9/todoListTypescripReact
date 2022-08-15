// Primitives: number, string, boolean (undefined, null, sympols (ignore that))
// More complex types: arrays, objects
// Function types, parameters

//Primitives 

let age: number;

age= 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['sports', 'cooking'];

type Person = {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: 'Max',
  age: 32
}

let employee: {
  isEmployee: boolean;
}

employee = {
  isEmployee: true
};

let people: Person[];

people = [{
  name: 'Max',
  age: 32
}]


// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12343; 

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value); 
}

// Generic

function insertAtBeginning<T>(arrays: T[], value: T) {
  const newArray = [value, ...arrays];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

stringArray[0].split('');