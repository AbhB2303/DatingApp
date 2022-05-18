export interface User {
//interface in typescript is different than C#
//used to specify something is a type of something
    username: string;
    token: string;

}

// typescript basics:

// define variable: let x = 42
// automatically determines type
// can assign two types:
// let data: number | string = 42;

// could create an interface for an object
// helps to define types for each property
// interface car {
//  color: string
//  mode: string
//  topSpeed?: number
// }

// const multiply = (x, y) => {
//     color: 'red'
//     model: 'Mercedes'
//     topSpeed: 100
// }

// can also define an object directly with properties
// no safety on type of properties
// const car1 = {
//    color: 'blue',
//    model: 'BMW'
// }
//
// an object of type car
// const car2 : car = {
//    color: 'blue',
//    model: 'BMW'
// }
