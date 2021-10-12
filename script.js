// const myArr = [3, 5, 2, 2, 1];
// myArr[0]
// myArr[myArr.length - 1];
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index]; // a element of an array
//     console.log(element);
// }

// function sayHi() {
//     console.log("hi");
// }

// setTimeout(sayHi, 1000);

// nameOfArray.forEach(callback) // array prototype method

// const arr = ['m1', 'm2', 'm3', 'm4']


// // arr.forEach(function cb(element, index) {
// //     console.log(element, index);
// // });

// const prison = [];

// arr.forEach((element) => {
//     console.log("element is ", element);
//     // option1
//     // prison.push(monster[index])
//     // option2
//     prison.push(element);
//     console.log(prison)
// });

// ["Mango", "Banana", "Orange"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
// });

// const findCondition = (element) => {
//     let condition = element === "m4";
//     console.log(condition);
//     return condition
// }

// let result = arr.find(findCondition);
// //1 find condition
// console.log(result)

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" },
// ];

// let { name } = users.find((item) => item.id == 1);

// console.log(name); // John

// let result = arr.filter(el => {
//     return el === "m4";
// });
// console.log(result);
// console.log(arr);

// let users = [
//     { id: 1, name: "John", score: 5 },
//     { id: 2, name: "Pete", score: 10 },
//     { id: 3, name: "Mary", score: 8 },
// ];

// let result = users.filter((el) => {
//     if (el.score < 8) {
//         el.score = 9;
//     }
//     return el.score >= 8
// });
// console.log(result);
// console.log(users)

// // for each to add to array
// let reult = [];
// user.forEach((el) => {
//     result.push(el)
// });
// // using map to make a new array
// let result = users.map((el) => {
//     const newRecord = {...el, score: 10 }
//     return newRecord;
// });
// console.log(result);
// console.log(users);

// let arr = [1, 2, 15, 3];
// ascending
// const compare = (current, previous) => {
//     console.log('current number is', current);
//     console.log('previous number is', previous);
//     console.log('compare logic current - previous', current - previous);
//     return current - previous;
// };
// let result = arr.sort(compare);

// decending
// const compare = (current, previous) => {
//     console.log('current number is', current);
//     console.log('previous number is', previous);
//     console.log('compare logic previous  - current', previous - current);
//     return previous - current;
// };
// let result = arr.sort(compare);

// console.log(result);
// console.log(arr);

// ascending sort
// const ascCompare = (current, previous) => {
//     return current - previous;
// };
// // decending
// const dscCompare = (current, previous) => {
//     return previous - current;
// };

// let result = arr.sort(ascCompare);
// console.log(arr);
// let result = arr.sort(dscCompare);
// console.log(arr);

// let example = arr.sort((a, b) => a - b);
// let example = arr.sort((a, b) => b - a);

// let users = [
//     { id: 1, name: "John", age: 32 },
//     { id: 2, name: "Pete", age: 14 },
//     { id: 3, name: "Mary", age: 60 },
// ];

// users.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(users)

// users.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(users)

// let cart = [
//     { id: 1, name: "Banana", price: 0.5, quantity: 5 },
//     { id: 2, name: "Mango", price: 1.5, quantity: 3 },
//     { id: 3, name: "Orange", price: 0.9, quantity: 7 },
// ];
// let result = cart.reduce(
//     (accumulator, currentElement) =>
//     accumulator + currentElement.quantity * currentElement.price, 0
// );
// console.log(result);
// console.log(cart);

// let x;
// if (Array.isArray(x)) {
//     x.map((e) => {});
// } else {
//     console.log("ERROR", "not array")
// }