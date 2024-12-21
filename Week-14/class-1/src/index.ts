function greet(firstName: string) {
    console.log(`Hello ${firstName}`)
}

// greet("ishav");

function sum(a: number, b: number): number {
    return a + b;
}

// let ans = sum(1, 2);
// console.log(ans);

function isLegal(age: number): boolean {
    if(age > 18) return true;
    return false;
}

// console.log(isLegal(17));

// Create a function that takes another function as input, and runs it after 1 second.
function delay(fn: (a: string) => void) { // (arguments) => void(returns nothing)
    setTimeout(fn, 1000);
}

// delay(greet)

// Interfaces
interface User {
    firstName: string,
    lastName: string,
    age: number
}

// Types -> Very similar to interfaces, but they let you do a few other things. Unions and Intersection
type UserType = {
    firstName: string,
    lastName: string,
    age: number
}

type StringOrNumber = string | number;

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;
