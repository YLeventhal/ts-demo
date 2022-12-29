//>>> static typing example

// const message = "hello world!";
// message();

//>>> Ts by default does not change Js runtime behaviour example

// const message = "hello world!";
// message();
//tsc --noEmitOnError demo2.ts

//>>> behaviour for object property access
// const similarwebber = {
//     name: "Daniel",
//     age: 35, // just a guess :)
// };
// similarwebber.favoriteFood; // returns undefined

// >>> structural typing example
// interface Point {
//     x: number;
//     y: number;
// }

// function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }

// // logs "12, 26"
// const point1 = { x: 12, y: 26, hello: "there" };
// logPoint(point1);

//>>> implicit types vs explicit (type annotations)

// const str = "string";

// const a = (): string => "hello";
// const b = a();

// // need for explicit:
// // type someType = { foo: string; bar: number };

// let aSomeTypeVariable = { foo: "ok", bar: 4 };

// const c = (sT) => sT.bing.toLowerCase();
// //or
// const d = (sT) => sT.bar.toLowerCase();

// >>> default downleveling -- ES3

// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
//tsc --target es2015

// Some types

// >>> any
// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking even if it is implicit,
// //  and it is assumed you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;

// >>> postfix operator -- the actual value will not be of type null/undefined -- it is a sort of type assertion
// function doSomething(x: string | null) {
//     console.log("Hello, " + x!.toUpperCase());
// }

// >>> UNIONS
// only allowed actions that exist in the intersection of all the typesj
// type A = string | number | boolean[];

// type B = A | boolean;

// interface C {
//     id: string;
// }

// interface D extends C {
//     name: string;
// }

// interface E {
//     list: string[];
//     list2: number[];
// }

// const someFunc = (a: B | E | D) => {
//     a.map();
// };

// >>> type vs enum vs interface
// type SomeOddNumbersNumeric = 1 | 3 | 5;
// type SomeOddNumbersString = "one" | "three" | "five";

// enum ESomeOddNumbersNumeric {
//     1,
//     3,
//     5,
// }

// enum ESomeOddNumbersString {
//     "one",
//     "three",
//     "five",
// }
// interface ISomeOddNumbersNumeric {
//     1: number;
//     3: number;
//     5: number;
// }

// interface ISomeOddNumbersString {
//     one: string;
//     three: string;
//     five: string;
// }

// let someOddNumberType: SomeOddNumbersNumeric;
// let someOddNumberEnum: ESomeOddNumbersNumeric;

// >>> computed enum member values

// enum EComputedVals {
//     first = [1, 2, 3].length,
//     second = Math.random(),
// }

// console.log(EComputedVals.first);
// console.log(EComputedVals.second);
// console.log(EComputedVals["second"]);

// >>> type never

// const n: never = 3;
// const nt: number = n;

// const loop = () => {
//     throw new Error("what an error");
// };

// type Exhaust = "not this" | "or this";

// const exhausted = (thing: Exhaust) => {
//     switch (thing) {
//         case "not this":
//             return "nope";
//         case "or this":
//             return "still nope";
//         default:
//             const neverType = thing;
//             return neverType;
//     }
// };

// >>> type unknown vs any

// const unkownTypeVariable: unknown = [];

// unkownTypeVariable.length;

// const anyTypeVariable: any = [];

// anyTypeVariable();

// if (Array.isArray(unkownTypeVariable)) unkownTypeVariable.length;
